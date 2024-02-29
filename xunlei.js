##############################################
/*
> 应用名称：迅雷 解锁 SVIP超级会员
> 软件版本：1.4.5
> 脚本作者：@Marol62926
> 更新时间：2022-03-19
> 特别说明：本脚本仅供学习交流使用，禁止转载售卖

[rewrite_local]
# > 迅雷 解锁 SVIP
https://xluser-ssl.xunlei.com/xluser.core.login/v3/getuserinfo url script-response-body https://raw.githubusercontent.com/donglovexiao/Rewrite/main/xunlei.js

[mitm] 
hostname = xluser-ssl.xunlei.com

*/
##############################################

var body = $response.body;
var obj = JSON.parse(body);

obj.vipList = [{
    "expireDate": "20290609",
    "isAutoDeduct": "0",
    "isVip": "1",
    "isYear": "1",
    "payId": "0",
    "payName": "---",
    "register": "0",
    "vasid": "2",
    "vasType": "5",
    "vipDayGrow": "20",
    "vipGrow": "840",
    "vipLevel": "7"
  }]

body = JSON.stringify(obj);
$done({body});


