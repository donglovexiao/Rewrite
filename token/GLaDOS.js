/*

⚠️【免责声明】
------------------------------------------
1、此脚本仅用于学习研究，不保证其合法性、准确性、有效性，请根据情况自行判断，本人对此不承担任何保证责任。
2、由于此脚本仅用于学习研究，您必须在下载后 24 小时内将所有内容从您的计算机或手机或任何存储设备中完全删除，若违反规定引起任何事件本人对此均不负责。
3、请勿将此脚本用于任何商业或非法目的，若违反规定请自行对此负责。
4、此脚本涉及应用与本人无关，本人对因此引起的任何隐私泄漏或其他后果不承担任何责任。
5、本人对任何脚本引发的问题概不负责，包括但不限于由脚本错误引起的任何损失和损害。
6、如果任何单位或个人认为此脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明，所有权证明，我们将在收到认证文件确认后删除此脚本。
7、所有直接或间接使用、查看此脚本的人均应该仔细阅读此声明。本人保留随时更改或补充此声明的权利。一旦您使用或复制了此脚本，即视为您已接受此免责声明。

登陆链接：https://glados.cloud/，登陆并打开账号信息页面后自动抓取Cookie

优惠码：PORTALGUN （满100减30），建议仅购买一个月，利用脚本签到持续白嫖

/****************************** 
脚本功能：GLaDOS / Railgun 自动签到 + 积分兑换（2026-10 修复版）
Version  : v1.4.0 (Loon/Surge/QX 兼容)
更新时间：2026-10-02
修复内容：
1. 支持 glados.cloud + 新版 gld:sess Cookie
2. 设备平台自适应（code 4 device-mismatch 自动切换 UA 重试）
3. 更准确的重复签到/成功判断
4. 优先 iOS UA（适合 Loon）

使用说明：
1. 开启 MitM 并信任证书
2. 访问 https://glados.cloud/console/account （或 railgun.info）抓包保存 Cookie
3. 定时任务自动签到

[Script]
http-request ^https:\/\/(?:glados\.(?:cloud|network|rocks|one|space|vip)|railgun\.info|glados-facility\.com)\/console\/account$ script-path=你的脚本地址, requires-body=false, timeout=30, tag=GLaDOS获取Cookie
cron "10 7 * * *" script-path=你的脚本地址, timeout=60, tag=GLaDOS签到, enable=true

[MITM]
hostname = glados.cloud, railgun.info, glados.network, glados.rocks, glados.one, glados.space, glados.vip, glados-facility.com
*******************************/

// ========== 三端适配层 ==========
var isQX = typeof $task !== "undefined";
var isLoon = typeof $loon !== "undefined";
var isSurge = typeof $httpClient !== "undefined" && !isLoon;

var $http = {
  fetch: function (opts) {
    if (isQX) return $task.fetch(opts);
    return new Promise(function (resolve, reject) {
      var method = (opts.method || "GET").toUpperCase();
      var handler = function (err, resp, data) {
        if (err) reject(err);
        else resolve({ statusCode: resp.statusCode || resp.status, headers: resp.headers, body: data });
      };
      if (method === "POST") $httpClient.post(opts, handler);
      else $httpClient.get(opts, handler);
    });
  }
};

var $store = {
  read: function (key) { return isQX ? $prefs.valueForKey(key) : $persistentStore.read(key); },
  write: function (val, key) { return isQX ? $prefs.setValueForKey(val, key) : $persistentStore.write(val, key); }
};

var notifyFn = isQX
  ? function (t, s, b) { $notify(t, s, b); }
  : function (t, s, b) { $notification.post(t, s, b); };

// ========== 配置 ==========
var SCRIPT_NAME = "GLaDOS";
var SCRIPT_VERSION = "v1.4.0";
var COOKIES_KEY_PREFIX = "GLaDOS_Cookies";
var DOMAINS_LIST_KEY = "GLaDOS_Domains";
var EXCHANGE_PLAN = "plan500";          // 积分≥500自动兑换，可改 plan100 / plan200 / 空字符串关闭
var isGetHeader = typeof $request !== "undefined";

// 平台 UA 库（用于设备自适应）
var PLATFORM_UA = {
  "iPhone": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
  "macOS": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  "Windows": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  "Android": "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36",
  "Linux": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
};

// 默认优先 iOS（Loon 用户）
var DEFAULT_UA = PLATFORM_UA["iPhone"];

// ========== 工具 ==========
function safeJsonParse(str) {
  try { return JSON.parse(str); } catch (_) { return null; }
}

function getPlatform() {
  if (isQX) return "Quantumult X";
  if (isLoon) return "Loon";
  if (isSurge) return "Surge";
  return "Unknown";
}

function cookiesKeyFor(domain) {
  return COOKIES_KEY_PREFIX + ":" + domain;
}

function getSavedDomains() {
  try {
    var raw = $store.read(DOMAINS_LIST_KEY);
    if (!raw) return [];
    var list = safeJsonParse(raw) || [];
    return Array.isArray(list) ? list.filter(Boolean) : [];
  } catch (e) { return []; }
}

function addDomain(domain) {
  try {
    var list = getSavedDomains();
    if (list.indexOf(domain) === -1) {
      list.push(domain);
      $store.write(JSON.stringify(list), DOMAINS_LIST_KEY);
    }
  } catch (e) {}
}

function getCookiesForDomain(domain) {
  try {
    var raw = $store.read(cookiesKeyFor(domain));
    if (!raw) return [];
    var list = safeJsonParse(raw);
    return Array.isArray(list) ? list.filter(Boolean) : [];
  } catch (e) { return []; }
}

function saveCookie(domain, cookie) {
  try {
    if (!cookie) return { isNew: false, index: -1 };
    var cookies = getCookiesForDomain(domain);
    var existingIdx = cookies.indexOf(cookie);
    if (existingIdx !== -1) return { isNew: false, index: existingIdx };
    cookies.push(cookie);
    $store.write(JSON.stringify(cookies), cookiesKeyFor(domain));
    addDomain(domain);
    return { isNew: true, index: cookies.length - 1 };
  } catch (e) { return { isNew: false, index: -1 }; }
}

function getHostFromRequest() {
  var h = ($request && $request.headers) || {};
  if (h.Host || h.host) return (h.Host || h.host).toLowerCase();
  var url = ($request && $request.url) || "";
  var m = url.match(/^https?:\/\/([^/]+)/i);
  return m ? m[1].toLowerCase() : "";
}

// ========== 网络请求（支持自定义 UA） ==========
function request(url, method, cookie, domain, body, customUA) {
  var headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Accept": "application/json, text/plain, */*",
    "Origin": "https://" + domain,
    "Referer": "https://" + domain + "/console/checkin",
    "User-Agent": customUA || DEFAULT_UA,
    "Cookie": cookie
  };
  var opts = { url: url, method: method, headers: headers };
  if (body !== undefined) opts.body = typeof body === "string" ? body : JSON.stringify(body);

  return $http.fetch(opts).then(
    function (resp) {
      return { statusCode: resp.statusCode, data: safeJsonParse(resp.body || ""), raw: resp.body || "" };
    },
    function (reason) {
      return { statusCode: 0, data: null, raw: "", error: reason ? String(reason) : "Network error" };
    }
  );
}

// ========== API ==========
function doCheckin(cookie, domain, ua) {
  return request("https://" + domain + "/api/user/checkin", "POST", cookie, domain, { token: domain }, ua).then(function (resp) {
    if (resp.error) return { status: "签到失败", code: -2, message: resp.error, points: "0", raw: null };
    if (!resp.data) return { status: "签到失败", code: -2, message: resp.raw, points: "0", raw: null };
    var data = resp.data;
    var code = data.code !== undefined ? data.code : -2;
    var message = data.message || "";
    var points = String(data.points !== undefined ? data.points : 0);
    var reason = data.reason || "";

    // 设备不匹配
    if (code === 4 || reason === "device-mismatch" || /Automated check-in detected/i.test(message)) {
      return { status: "设备不匹配", code: 4, message: message, points: "0", raw: data, loginDevice: data.loginDevice };
    }
    if (code === 0) return { status: "签到成功", code: 0, message: message, points: points, raw: data };
    // 重复签到兼容多种文案
    if (code === 1 || /repeat|already|observation logged|try tomorrow|今日已签|已经签到|明天再试/i.test(message)) {
      return { status: "重复签到", code: 1, message: message, points: "0", raw: data };
    }
    return { status: "签到失败", code: code, message: message, points: "0", raw: data };
  });
}

function checkin(cookie, domain) {
  // 先用默认 UA 试一次
  return doCheckin(cookie, domain, DEFAULT_UA).then(function (res) {
    if (res.code !== 4) return res;

    // 设备不匹配 → 根据返回的 loginDevice 切换 UA 重试
    var device = res.loginDevice || "";
    var recoverUA = PLATFORM_UA[device] || PLATFORM_UA["Windows"] || DEFAULT_UA;
    console.log("设备不匹配 (loginDevice=" + device + ")，切换 UA 重试");
    return doCheckin(cookie, domain, recoverUA);
  });
}

function getStatus(cookie, domain) {
  return request("https://" + domain + "/api/user/status", "GET", cookie, domain).then(function (resp) {
    if (resp.error || !resp.data) return { leftDays: "N/A", email: "unknown" };
    var data = (resp.data.data) || {};
    var leftDays = data.leftDays;
    var email = data.email || "unknown";
    var days = (leftDays !== undefined && leftDays !== null) ? parseInt(parseFloat(leftDays), 10) + " 天" : "N/A";
    return { leftDays: days, email: email };
  });
}

function getPoints(cookie, domain) {
  return request("https://" + domain + "/api/user/points", "GET", cookie, domain).then(function (resp) {
    if (resp.error || !resp.data) return { points: "N/A", pointsNum: 0 };
    var points = resp.data.points;
    if (points !== undefined && points !== null) {
      var pointsInt = parseInt(parseFloat(points), 10);
      return { points: "" + pointsInt, pointsNum: pointsInt };
    }
    return { points: "N/A", pointsNum: 0 };
  });
}

function exchange(cookie, domain, plan) {
  if (!plan) return Promise.resolve("跳过");
  return request("https://" + domain + "/api/user/exchange", "POST", cookie, domain, { planType: plan }).then(function (resp) {
    if (resp.error || !resp.data) return "兑换失败";
    var code = resp.data.code !== undefined ? resp.data.code : -2;
    var message = resp.data.message || "";
    if (code === 0) return "兑换成功(" + plan + ")";
    return "兑换失败: " + message;
  });
}

function checkinForAccount(cookie, domain, accountIndex) {
  var statusBefore, checkinResult, pointsResult, exchangeResult, statusAfter, accountEmail;

  return getStatus(cookie, domain).then(function (sb) {
    statusBefore = sb;
    accountEmail = sb.email;
    console.log("👤 Account #" + accountIndex + " | " + domain + " | " + accountEmail);
    return checkin(cookie, domain);
  }).then(function (cr) {
    checkinResult = cr;
    return getPoints(cookie, domain);
  }).then(function (pr) {
    pointsResult = pr;
    exchangeResult = "跳过";
    if (EXCHANGE_PLAN && pointsResult.pointsNum >= 500) {
      return exchange(cookie, domain, EXCHANGE_PLAN);
    }
    return "跳过(积分不足)";
  }).then(function (er) {
    if (er) exchangeResult = er;
    return getStatus(cookie, domain);
  }).then(function (sa) {
    statusAfter = sa;

    var icon = checkinResult.code === 0 ? "✅" : checkinResult.code === 1 ? "🔁" : "❌";
    console.log(icon + " " + checkinResult.status + " | 积分:" + pointsResult.points + " | 剩余:" + statusAfter.leftDays);

    return {
      accountIndex: accountIndex,
      domain: domain,
      email: accountEmail !== "unknown" ? accountEmail : "Account #" + accountIndex,
      status: checkinResult.status,
      code: checkinResult.code,
      message: checkinResult.message,
      earnedPoints: checkinResult.points,
      totalPoints: pointsResult.points,
      daysBefore: statusBefore.leftDays,
      daysAfter: statusAfter.leftDays,
      exchange: exchangeResult
    };
  });
}

// ========== 主流程 ==========
if (isGetHeader) {
  console.log("🚀 GLaDOS 抓包 | " + SCRIPT_VERSION + " | " + getPlatform());

  var allHeaders = $request.headers || {};
  var cookie = allHeaders.Cookie || allHeaders.cookie || "";
  var host = getHostFromRequest();

  if (!cookie || !host) {
    notifyFn("GLaDOS 抓包失败", "", "未获取到 Cookie 或 Host");
    $done({});
  } else {
    var result = saveCookie(host, cookie);
    var label = "账号 #" + (result.index + 1);
    notifyFn("GLaDOS 抓包成功", result.isNew ? "新账号已保存" : "已存在", label + " | " + host);
    console.log("✅ " + (result.isNew ? "新账号" : "已存在") + " | " + host);
    $done({});
  }
} else {
  var delay = Math.floor(Math.random() * 8);

  setTimeout(function () {
    console.log("🚀 GLaDOS 签到 | " + SCRIPT_VERSION + " | " + getPlatform());

    var savedDomains = getSavedDomains();
    var allCookies = [];
    for (var d = 0; d < savedDomains.length; d++) {
      var cookies = getCookiesForDomain(savedDomains[d]);
      for (var c = 0; c < cookies.length; c++) {
        allCookies.push({ domain: savedDomains[d], cookie: cookies[c] });
      }
    }

    var totalAccounts = allCookies.length;
    if (totalAccounts === 0) {
      notifyFn("GLaDOS 签到", "无 Cookie", "请先访问 glados.cloud/console/account 抓包");
      $done();
      return;
    }

    console.log("共 " + totalAccounts + " 个账号");

    var allResults = [];
    var idx = 0;

    function next() {
      if (idx >= allCookies.length) {
        var ok = allResults.filter(function (r) { return r.code === 0; }).length;
        var dup = allResults.filter(function (r) { return r.code === 1; }).length;
        var fail = allResults.filter(function (r) { return r.code !== 0 && r.code !== 1; }).length;

        notifyFn("GLaDOS", "签到完成", "账号 " + totalAccounts + " | ✅" + ok + " 🔁" + dup + " ❌" + fail);

        for (var r = 0; r < allResults.length; r++) {
          var res = allResults[r];
          var icon = res.code === 0 ? "✅" : res.code === 1 ? "🔁" : "❌";
          var pts = res.earnedPoints !== "0" ? " | +" + res.earnedPoints + "积分" : "";
          notifyFn(icon + " " + res.email, res.status + pts, "剩余 " + res.daysAfter + " | 积分 " + res.totalPoints + " | " + res.exchange);
        }
        $done();
        return;
      }

      var item = allCookies[idx];
      idx++;
      checkinForAccount(item.cookie, item.domain, idx).then(function (result) {
        allResults.push(result);
        next();
      }).catch(function (e) {
        console.log("账号异常: " + e);
        next();
      });
    }

    next();
  }, delay * 1000);
  }/****************************** 
脚本功能：GLaDOS / Railgun 自动签到 + 积分兑换（2026-10 修复版）
Version  : v1.4.0 (Loon/Surge/QX 兼容)
更新时间：2026-10-02
修复内容：
1. 支持 glados.cloud + 新版 gld:sess Cookie
2. 设备平台自适应（code 4 device-mismatch 自动切换 UA 重试）
3. 更准确的重复签到/成功判断
4. 优先 iOS UA（适合 Loon）

使用说明：
1. 开启 MitM 并信任证书
2. 访问 https://glados.cloud/console/account （或 railgun.info）抓包保存 Cookie
3. 定时任务自动签到

[rewrite_local]
http-request ^https:\/\/(?:glados\.(?:cloud|network|rocks|one|space|vip)|railgun\.info|glados-facility\.com)\/console\/account$ script-path=https://raw.githubusercontent.com/donglovexiao/Rewrite/refs/heads/main/token/GLaDOS.js, requires-body=false, timeout=30, tag=GLaDOS获取Cookie
cron "10 7 * * *" script-path=https://raw.githubusercontent.com/donglovexiao/Rewrite/refs/heads/main/token/GLaDOS.js, timeout=60, tag=GLaDOS签到, enable=true

[MITM]
hostname = glados.cloud, railgun.info, glados.network, glados.rocks, glados.one, glados.space, glados.vip, glados-facility.com
*******************************/

// ========== 三端适配层 ==========
var isQX = typeof $task !== "undefined";
var isLoon = typeof $loon !== "undefined";
var isSurge = typeof $httpClient !== "undefined" && !isLoon;

var $http = {
  fetch: function (opts) {
    if (isQX) return $task.fetch(opts);
    return new Promise(function (resolve, reject) {
      var method = (opts.method || "GET").toUpperCase();
      var handler = function (err, resp, data) {
        if (err) reject(err);
        else resolve({ statusCode: resp.statusCode || resp.status, headers: resp.headers, body: data });
      };
      if (method === "POST") $httpClient.post(opts, handler);
      else $httpClient.get(opts, handler);
    });
  }
};

var $store = {
  read: function (key) { return isQX ? $prefs.valueForKey(key) : $persistentStore.read(key); },
  write: function (val, key) { return isQX ? $prefs.setValueForKey(val, key) : $persistentStore.write(val, key); }
};

var notifyFn = isQX
  ? function (t, s, b) { $notify(t, s, b); }
  : function (t, s, b) { $notification.post(t, s, b); };

// ========== 配置 ==========
var SCRIPT_NAME = "GLaDOS";
var SCRIPT_VERSION = "v1.4.0";
var COOKIES_KEY_PREFIX = "GLaDOS_Cookies";
var DOMAINS_LIST_KEY = "GLaDOS_Domains";
var EXCHANGE_PLAN = "plan500";          // 积分≥500自动兑换，可改 plan100 / plan200 / 空字符串关闭
var isGetHeader = typeof $request !== "undefined";

// 平台 UA 库（用于设备自适应）
var PLATFORM_UA = {
  "iPhone": "Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1",
  "macOS": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  "Windows": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
  "Android": "Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Mobile Safari/537.36",
  "Linux": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36"
};

// 默认优先 iOS（Loon 用户）
var DEFAULT_UA = PLATFORM_UA["iPhone"];

// ========== 工具 ==========
function safeJsonParse(str) {
  try { return JSON.parse(str); } catch (_) { return null; }
}

function getPlatform() {
  if (isQX) return "Quantumult X";
  if (isLoon) return "Loon";
  if (isSurge) return "Surge";
  return "Unknown";
}

function cookiesKeyFor(domain) {
  return COOKIES_KEY_PREFIX + ":" + domain;
}

function getSavedDomains() {
  try {
    var raw = $store.read(DOMAINS_LIST_KEY);
    if (!raw) return [];
    var list = safeJsonParse(raw) || [];
    return Array.isArray(list) ? list.filter(Boolean) : [];
  } catch (e) { return []; }
}

function addDomain(domain) {
  try {
    var list = getSavedDomains();
    if (list.indexOf(domain) === -1) {
      list.push(domain);
      $store.write(JSON.stringify(list), DOMAINS_LIST_KEY);
    }
  } catch (e) {}
}

function getCookiesForDomain(domain) {
  try {
    var raw = $store.read(cookiesKeyFor(domain));
    if (!raw) return [];
    var list = safeJsonParse(raw);
    return Array.isArray(list) ? list.filter(Boolean) : [];
  } catch (e) { return []; }
}

function saveCookie(domain, cookie) {
  try {
    if (!cookie) return { isNew: false, index: -1 };
    var cookies = getCookiesForDomain(domain);
    var existingIdx = cookies.indexOf(cookie);
    if (existingIdx !== -1) return { isNew: false, index: existingIdx };
    cookies.push(cookie);
    $store.write(JSON.stringify(cookies), cookiesKeyFor(domain));
    addDomain(domain);
    return { isNew: true, index: cookies.length - 1 };
  } catch (e) { return { isNew: false, index: -1 }; }
}

function getHostFromRequest() {
  var h = ($request && $request.headers) || {};
  if (h.Host || h.host) return (h.Host || h.host).toLowerCase();
  var url = ($request && $request.url) || "";
  var m = url.match(/^https?:\/\/([^/]+)/i);
  return m ? m[1].toLowerCase() : "";
}

// ========== 网络请求（支持自定义 UA） ==========
function request(url, method, cookie, domain, body, customUA) {
  var headers = {
    "Content-Type": "application/json;charset=UTF-8",
    "Accept": "application/json, text/plain, */*",
    "Origin": "https://" + domain,
    "Referer": "https://" + domain + "/console/checkin",
    "User-Agent": customUA || DEFAULT_UA,
    "Cookie": cookie
  };
  var opts = { url: url, method: method, headers: headers };
  if (body !== undefined) opts.body = typeof body === "string" ? body : JSON.stringify(body);

  return $http.fetch(opts).then(
    function (resp) {
      return { statusCode: resp.statusCode, data: safeJsonParse(resp.body || ""), raw: resp.body || "" };
    },
    function (reason) {
      return { statusCode: 0, data: null, raw: "", error: reason ? String(reason) : "Network error" };
    }
  );
}

// ========== API ==========
function doCheckin(cookie, domain, ua) {
  return request("https://" + domain + "/api/user/checkin", "POST", cookie, domain, { token: domain }, ua).then(function (resp) {
    if (resp.error) return { status: "签到失败", code: -2, message: resp.error, points: "0", raw: null };
    if (!resp.data) return { status: "签到失败", code: -2, message: resp.raw, points: "0", raw: null };
    var data = resp.data;
    var code = data.code !== undefined ? data.code : -2;
    var message = data.message || "";
    var points = String(data.points !== undefined ? data.points : 0);
    var reason = data.reason || "";

    // 设备不匹配
    if (code === 4 || reason === "device-mismatch" || /Automated check-in detected/i.test(message)) {
      return { status: "设备不匹配", code: 4, message: message, points: "0", raw: data, loginDevice: data.loginDevice };
    }
    if (code === 0) return { status: "签到成功", code: 0, message: message, points: points, raw: data };
    // 重复签到兼容多种文案
    if (code === 1 || /repeat|already|observation logged|try tomorrow|今日已签|已经签到|明天再试/i.test(message)) {
      return { status: "重复签到", code: 1, message: message, points: "0", raw: data };
    }
    return { status: "签到失败", code: code, message: message, points: "0", raw: data };
  });
}

function checkin(cookie, domain) {
  // 先用默认 UA 试一次
  return doCheckin(cookie, domain, DEFAULT_UA).then(function (res) {
    if (res.code !== 4) return res;

    // 设备不匹配 → 根据返回的 loginDevice 切换 UA 重试
    var device = res.loginDevice || "";
    var recoverUA = PLATFORM_UA[device] || PLATFORM_UA["Windows"] || DEFAULT_UA;
    console.log("设备不匹配 (loginDevice=" + device + ")，切换 UA 重试");
    return doCheckin(cookie, domain, recoverUA);
  });
}

function getStatus(cookie, domain) {
  return request("https://" + domain + "/api/user/status", "GET", cookie, domain).then(function (resp) {
    if (resp.error || !resp.data) return { leftDays: "N/A", email: "unknown" };
    var data = (resp.data.data) || {};
    var leftDays = data.leftDays;
    var email = data.email || "unknown";
    var days = (leftDays !== undefined && leftDays !== null) ? parseInt(parseFloat(leftDays), 10) + " 天" : "N/A";
    return { leftDays: days, email: email };
  });
}

function getPoints(cookie, domain) {
  return request("https://" + domain + "/api/user/points", "GET", cookie, domain).then(function (resp) {
    if (resp.error || !resp.data) return { points: "N/A", pointsNum: 0 };
    var points = resp.data.points;
    if (points !== undefined && points !== null) {
      var pointsInt = parseInt(parseFloat(points), 10);
      return { points: "" + pointsInt, pointsNum: pointsInt };
    }
    return { points: "N/A", pointsNum: 0 };
  });
}

function exchange(cookie, domain, plan) {
  if (!plan) return Promise.resolve("跳过");
  return request("https://" + domain + "/api/user/exchange", "POST", cookie, domain, { planType: plan }).then(function (resp) {
    if (resp.error || !resp.data) return "兑换失败";
    var code = resp.data.code !== undefined ? resp.data.code : -2;
    var message = resp.data.message || "";
    if (code === 0) return "兑换成功(" + plan + ")";
    return "兑换失败: " + message;
  });
}

function checkinForAccount(cookie, domain, accountIndex) {
  var statusBefore, checkinResult, pointsResult, exchangeResult, statusAfter, accountEmail;

  return getStatus(cookie, domain).then(function (sb) {
    statusBefore = sb;
    accountEmail = sb.email;
    console.log("👤 Account #" + accountIndex + " | " + domain + " | " + accountEmail);
    return checkin(cookie, domain);
  }).then(function (cr) {
    checkinResult = cr;
    return getPoints(cookie, domain);
  }).then(function (pr) {
    pointsResult = pr;
    exchangeResult = "跳过";
    if (EXCHANGE_PLAN && pointsResult.pointsNum >= 500) {
      return exchange(cookie, domain, EXCHANGE_PLAN);
    }
    return "跳过(积分不足)";
  }).then(function (er) {
    if (er) exchangeResult = er;
    return getStatus(cookie, domain);
  }).then(function (sa) {
    statusAfter = sa;

    var icon = checkinResult.code === 0 ? "✅" : checkinResult.code === 1 ? "🔁" : "❌";
    console.log(icon + " " + checkinResult.status + " | 积分:" + pointsResult.points + " | 剩余:" + statusAfter.leftDays);

    return {
      accountIndex: accountIndex,
      domain: domain,
      email: accountEmail !== "unknown" ? accountEmail : "Account #" + accountIndex,
      status: checkinResult.status,
      code: checkinResult.code,
      message: checkinResult.message,
      earnedPoints: checkinResult.points,
      totalPoints: pointsResult.points,
      daysBefore: statusBefore.leftDays,
      daysAfter: statusAfter.leftDays,
      exchange: exchangeResult
    };
  });
}

// ========== 主流程 ==========
if (isGetHeader) {
  console.log("🚀 GLaDOS 抓包 | " + SCRIPT_VERSION + " | " + getPlatform());

  var allHeaders = $request.headers || {};
  var cookie = allHeaders.Cookie || allHeaders.cookie || "";
  var host = getHostFromRequest();

  if (!cookie || !host) {
    notifyFn("GLaDOS 抓包失败", "", "未获取到 Cookie 或 Host");
    $done({});
  } else {
    var result = saveCookie(host, cookie);
    var label = "账号 #" + (result.index + 1);
    notifyFn("GLaDOS 抓包成功", result.isNew ? "新账号已保存" : "已存在", label + " | " + host);
    console.log("✅ " + (result.isNew ? "新账号" : "已存在") + " | " + host);
    $done({});
  }
} else {
  var delay = Math.floor(Math.random() * 8);

  setTimeout(function () {
    console.log("🚀 GLaDOS 签到 | " + SCRIPT_VERSION + " | " + getPlatform());

    var savedDomains = getSavedDomains();
    var allCookies = [];
    for (var d = 0; d < savedDomains.length; d++) {
      var cookies = getCookiesForDomain(savedDomains[d]);
      for (var c = 0; c < cookies.length; c++) {
        allCookies.push({ domain: savedDomains[d], cookie: cookies[c] });
      }
    }

    var totalAccounts = allCookies.length;
    if (totalAccounts === 0) {
      notifyFn("GLaDOS 签到", "无 Cookie", "请先访问 glados.cloud/console/account 抓包");
      $done();
      return;
    }

    console.log("共 " + totalAccounts + " 个账号");

    var allResults = [];
    var idx = 0;

    function next() {
      if (idx >= allCookies.length) {
        var ok = allResults.filter(function (r) { return r.code === 0; }).length;
        var dup = allResults.filter(function (r) { return r.code === 1; }).length;
        var fail = allResults.filter(function (r) { return r.code !== 0 && r.code !== 1; }).length;

        notifyFn("GLaDOS", "签到完成", "账号 " + totalAccounts + " | ✅" + ok + " 🔁" + dup + " ❌" + fail);

        for (var r = 0; r < allResults.length; r++) {
          var res = allResults[r];
          var icon = res.code === 0 ? "✅" : res.code === 1 ? "🔁" : "❌";
          var pts = res.earnedPoints !== "0" ? " | +" + res.earnedPoints + "积分" : "";
          notifyFn(icon + " " + res.email, res.status + pts, "剩余 " + res.daysAfter + " | 积分 " + res.totalPoints + " | " + res.exchange);
        }
        $done();
        return;
      }

      var item = allCookies[idx];
      idx++;
      checkinForAccount(item.cookie, item.domain, idx).then(function (result) {
        allResults.push(result);
        next();
      }).catch(function (e) {
        console.log("账号异常: " + e);
        next();
      });
    }

    next();
  }, delay * 1000);
}
