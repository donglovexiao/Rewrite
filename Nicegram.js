/******************************
脚本功能：Nicegram解锁会员权限
下载地址：https://is.gd/7OPpId
软件版本：1.5.6
脚本作者：ddgksf2013
更新时间：2024-2-24
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > Nicegram☆解锁会员权限（2024-02-24）@ddgksf2013
^https?:\/\/nicegram\.cloud\/api\/v\d\/(ai-assistant\/purchase-list|user\/info|telegram\/auth) url script-response-body https://raw.githubusercontent.com/donglovexiao/Rewrite/main/Nicegram.js

[mitm] 
hostname=nicegram.cloud
*******************************/

var body=$response.body.replace(/subscription":\w+/g,'subscription":true');
$done({body});
