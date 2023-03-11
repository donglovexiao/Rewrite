/*************************

京东多合一签到脚本

更新时间: 2021.09.09 20:20 v2.1.3
有效接口: 20+
脚本兼容: QuantumultX, Surge, Loon, JSBox, Node.js
电报频道: @NobyDa 
问题反馈: @NobyDa_bot 
如果转载: 请注明出处

*************************
【 QX, Surge, Loon 说明 】 :
*************************

初次使用时, app配置文件添加脚本配置, 并启用Mitm后:

Safari浏览器打开登录 https://home.m.jd.com/myJd/newhome.action 点击"我的"页面
或者使用旧版网址 https://bean.m.jd.com/bean/signIndex.action 点击签到并且出现签到日历
如果通知获取Cookie成功, 则可以使用此签到脚本. 注: 请勿在京东APP内获取!!!

获取京东金融签到Body说明: 正确添加脚本配置后, 进入"京东金融"APP, 在"首页"点击"签到"并签到一次, 待通知提示成功即可.

由于cookie的有效性(经测试网页Cookie有效周期最长31天)，如果脚本后续弹出cookie无效的通知，则需要重复上述步骤。 
签到脚本将在每天的凌晨0:05执行, 您可以修改执行时间。 因部分接口京豆限量领取, 建议调整为凌晨签到。

BoxJs或QX Gallery订阅地址: https://raw.githubusercontent.com/NobyDa/Script/master/NobyDa_BoxJs.json

*************************
【 配置多京东账号签到说明 】 : 
*************************

正确配置QX、Surge、Loon后, 并使用此脚本获取"账号1"Cookie成功后, 请勿点击退出账号(可能会导致Cookie失效), 需清除浏览器资料或更换浏览器登录"账号2"获取即可; 账号3或以上同理.
注: 如需清除所有Cookie, 您可开启脚本内"DeleteCookie"选项 (第114行)

*************************
【 JSbox, Node.js 说明 】 :
*************************

开启抓包app后, Safari浏览器登录 https://home.m.jd.com/myJd/newhome.action 点击个人中心页面后, 返回抓包app搜索关键字 info/GetJDUserInfoUnion 复制请求头Cookie字段填入json串数据内即可

如需获取京东金融签到Body, 可进入"京东金融"APP (iOS), 在"首页"点击"签到"并签到一次, 返回抓包app搜索关键字 h5/m/appSign 复制请求体填入json串数据内即可
*/

var Key = ''; //该参数已废弃; 仅用于下游脚本的兼容, 请使用json串数据 ↓

var DualKey = ''; //该参数已废弃; 仅用于下游脚本的兼容, 请使用json串数据  ↓

var OtherKey = ``; //无限账号Cookie json串数据, 请严格按照json格式填写, 具体格式请看以下样例:

/*以下样例为双账号("cookie"为必须,其他可选), 第一个账号仅包含Cookie, 第二个账号包含Cookie和金融签到Body: 

var OtherKey = `[{
  "cookie": "pt_key=xxx;pt_pin=yyy;"
}, {
  "cookie": "pt_key=yyy;pt_pin=xxx;",
  "jrBody": "reqData=xxx"
}]`

   注1: 以上选项仅针对于JsBox或Node.js, 如果使用QX,Surge,Loon, 请使用脚本获取Cookie.
   注2: 多账号用户抓取"账号1"Cookie后, 请勿点击退出账号(可能会导致Cookie失效), 需清除浏览器资料或更换浏览器登录"账号2"抓取.
   注3: 如果使用Node.js, 需自行安装'request'模块. 例: npm install request -g
   注4: Node.js或JSbox环境下已配置数据持久化, 填写Cookie运行一次后, 后续更新脚本无需再次填写, 待Cookie失效后重新抓取填写即可.
   注5: 脚本将自动处理"持久化数据"和"手动填写cookie"之间的重复关系, 例如填写多个账号Cookie后, 后续其中一个失效, 仅需填写该失效账号的新Cookie即可, 其他账号不会被清除.

*************************
【Surge 4.2+ 脚本配置】:
*************************

[Script]
京东多合一签到 = type=cron,cronexp=5 0 * * *,wake-system=1,timeout=60,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

获取京东Cookie = type=http-request,requires-body=1,pattern=^https:\/\/(api\.m|me-api|ms\.jr)\.jd\.com\/(client\.action\?functionId=signBean|user_new\/info\/GetJDUserInfoUnion\?|gw\/generic\/hy\/h5\/m\/appSign\?),script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

[MITM]
hostname = ms.jr.jd.com, me-api.jd.com, api.m.jd.com

*************************
【Loon 2.1+ 脚本配置】:
*************************

[Script]
cron "5 0 * * *" tag=京东多合一签到, script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

http-request ^https:\/\/(api\.m|me-api|ms\.jr)\.jd\.com\/(client\.action\?functionId=signBean|user_new\/info\/GetJDUserInfoUnion\?|gw\/generic\/hy\/h5\/m\/appSign\?) tag=获取京东Cookie, requires-body=true, script-path=https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

[MITM]
hostname = ms.jr.jd.com, me-api.jd.com, api.m.jd.com

*************************
【 QuantumultX 1.0.10+ 脚本配置 】 :
*************************

[task_local]
# 京东多合一签到
5 0 * * * https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js, tag=京东多合一签到, img-url=https://raw.githubusercontent.com/NobyDa/mini/master/Color/jd.png,enabled=true

[rewrite_local]
# 获取京东Cookie. 
^https:\/\/(api\.m|me-api)\.jd\.com\/(client\.action\?functionId=signBean|user_new\/info\/GetJDUserInfoUnion\?) url script-request-header https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

# 获取钢镚签到body. 
^https:\/\/ms\.jr\.jd\.com\/gw\/generic\/hy\/h5\/m\/appSign\? url script-request-body https://raw.githubusercontent.com/NobyDa/Script/master/JD-DailyBonus/JD_DailyBonus.js

[mitm]
hostname = ms.jr.jd.com, me-api.jd.com, api.m.jd.com

*************************/
