/******************************

脚本功能：PikPak 解锁会员订阅
软件下载：https://apps.apple.com/us/app/pikpak-private-cloud-saver/id1616861537?l=en-GB
软件版本：1.22.3
更新时间：2024-02-16
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > PikPak 解锁会员订阅
^https:\/\/api-drive\.mypikpak\.com\/(vip\/v\d\/(vip\/info|allSubscriptionStatus)|drive\/v\d\/about\?space) url script-response-body https://raw.githubusercontent.com/donglovexiao/Rewrite/main/PikPak.js

[mitm] 
hostname = *.mypikpak.com

*******************************/

var url = $request.url;
var objc = JSON.parse($response.body);
const URL1 = '/vip/info';
const URL2 = '/about';
const URL3 = '/allSubscriptionStatus';
if (url.indexOf(URL1) != -1) {
  objc.data.expire = "2099-09-09T00:00:00+09:00";
  objc.data.status = "ok";
  objc.data.type = "platinum";
  objc.data.vipItem = [
      {
        "status" : "ok",
        "expire" : "2099-09-09T00:00:00+09:00",
        "type" : "regional",
        "description" : "Regional members",
        "surplus_day" : 747364014
      }
    ];
};
if (url.indexOf(URL2) != -1) {
  objc.quota.limit = "10999166278790";
	objc.quota.is_unlimited = true;
};
if (url.indexOf(URL3) != -1) {
  objc.apple = {"subscribed":true,"purchased":true,"status":"trial","interval":"year","product":"sub.year","past_due_deadline":"","pay_type":"","region":"regional"};
};
$done({body:JSON.stringify(objc)});
