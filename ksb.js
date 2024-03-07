/******************************

脚本功能：考试宝 - 部分功能解锁&广告拦截
下载地址：https://apps.apple.com/cn/app/考试宝-职业资格题库在线考试培训学习/id1625047243
特别说明：老版本解锁，然后同步新版本，
软件版本：3.7.0
脚本作者：XiaoMao
更新时间：2024-3-7
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

https:\/\/api\.ankianki\.com url script-response-body https://raw.githubusercontent.com/donglovexiao/Rewrite/main/ksb.js
https:\/\/api\.ankianki\.com\/banner\/get url reject-200
https:\/\/api\.ankianki\.com\/popupAd\/get url reject-200
https:\/\/api\.ankianki\.com\/ad url reject-200

[mitm] 

hostname = api.ankianki.com

*******************************/

let requestUrl = $request.url;
let status = isJSON($response.body);
var obj = status
  ? JSON.parse(
      $response.body
        .replace(/\"status\":\"\w+\"/g, '"status":"9"')
        .replace(/\"price\":\"\w+\"/g, '"price":"0"')
        .replace(/\"user_point\":\"\w+\"/g, '"user_point":"100000"')
        .replace(/\"sell_way\":\"\w+\"/g, '"sell_way":"0"')
        .replace(/\"ptype\":\"\w+\"/g, '"ptype":"0"')
        .replace(
          /\"auto_analysis_package\":\"\w+\"/g,
          '"auto_analysis_package":"100000"'
        )
        .replace(
          /\"kefu_import_paper_number\":\"\w+\"/g,
          '"kefu_import_paper_number":"100000"'
        )
    )
  : $response.body;
if (/^https:\/\/api\.ankianki\.com\/user\/userInfo\/get?/.test(requestUrl)) {
  obj.data.vip_expiration_time = "2222-02-02 08:00:00";
  obj.data.yst_vip_expiration_time = "2222-02-02 08:00:00";
  obj.data.expiration_time = "2222-02-02 08:00:00";
  obj.data.status = "1";
  obj.data.yst_vip_type = "2";
  obj.data.user_type = "2";
  obj.data.max_paper_limit = "1000";
  obj.data.auto_analysis_package = "1000";
  obj.data.extra_exam_number = "1000";
  obj.data.remove_error_limit = "1000";
  obj.data.export_system_paper_number = "1000";
  obj.data.kefu_import_paper_number = "1000";
  obj.data.system_error_recovery = "1000";
  obj.data.smart_create_question = "1000";
  obj.data.vip_config = {
    exam_questions_limit: "10000",
    paper_create_limit: "2000",
    exam_paper_limit: "10000",
    question_limit: "150000",
    paper_collect_limit: "3000",
    exam_member_limit: "5000",
    desc: "个人用户或小微企业刷题学习",
    exam_limit: "1000",
    price: "10000",
    paper_document_limit: "200",
    exam_submit_limit: "300",
    paid_kaoshi_limit: "000",
    alert_title: "高级用户",
    paper_limit: "4000",
  };
  obj.data.is_show_ad = "0";
  obj.data.vip_type = "2";
} else if (
  /^https:\/\/api\.ankianki\.com\/user\/paper\/list?/.test(requestUrl)
) {
  obj.data.export_system_paper_number = "10000";
  obj.data.show_paper_cover = "10000";
} else if (
  /^https:\/\/api\.ankianki\.com\/system\/setPassphrase?/.test(requestUrl)
) {
  obj.data.expire_at = "2222-02-02 08:00:00";
} else if (
  /^https:\/\/api\.ankianki\.com\/help\/commonSwitch\/getConfig?/.test(
    requestUrl
  )
) {
  obj.data = {
    ai_analysis: "1000",
    recommend_tips: "11000",
    ai_analysis_sse: "11000",
  };
} else if (
  /^https:\/\/api\.ankianki\.com\/user\/userSetting\/getFreeAnalysisNumber?/.test(
    requestUrl
  )
) {
  obj.data = {
    total: "10000",
    used: "10000",
  };
}
$done({ body: status ? JSON.stringify(obj) : obj });

function isJSON(str) {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
}
