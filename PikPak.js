/******************************

脚本功能：PikPak 解锁会员订阅
软件版本：1.11.0
更新时间：2023-04-16
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > PikPak 解锁会员订阅
^https:\/\/api-drive\.mypikpak\.com\/(vip\/v\d\/(vip\/info|allSubscriptionStatus)|drive\/v\d\/about\?space) url script-response-body https://raw.githubusercontent.com/donglovexiao/Rewrite/main/PikPak.js

[mitm] 
hostname = api-drive.mypikpak.com

*******************************/

var url = $request.url;
var modified = JSON.parse($response.body);
const URL1 = '/vip/info';
const URL2 = '/about';
const URL3 = '/allSubscriptionStatus';
if (url.indexOf(URL1) != -1) {
  modified.data.expire = "2099-01-01T00:00:00+08:00";
  modified.data.status = "ok";
  modified.data.type = "platinum";
  modified.data.vipItem = [
      {
        "status" : "ok",
        "expire" : "2099-01-01T00:00:00+08:00",
        "type" : "regional",
        "description" : "区域会员",
        "surplus_day" : 510004015
      }
    ];
};
if (url.indexOf(URL2) != -1) {
  modified.quota.limit = "10995116277760";
};
if (url.indexOf(URL3) != -1) {
  modified.apple = {"subscribed":true,"purchased":true,"status":"trial","interval":"year","product":"sub.year","past_due_deadline":"","pay_type":"","region":"regional"};
};
$done({body:JSON.stringify(modified)});
