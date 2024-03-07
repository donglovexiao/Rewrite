/******************************
脚本功能：Nicegram解锁会员权限
下载地址：https://apps.apple.com/us/app/nicegram-ai-chat-for-telegram/id1608870673?l=en-GB
软件版本：1.5.6
脚本作者：David
使用说明：要激活高级版，请单击底部的“助手”，然后单击“释放您的 Nicegram 福利”，最后单击底部的“开始”。完成此操作后，Premium 应该已解锁
更新时间：2024-2-24
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
*******************************

[rewrite_local]
^https?:\/\/nicegram\.cloud\/api\/v\d\/(ai-assistant\/purchase-list|user\/info|telegram\/auth) url script-response-body https://raw.githubusercontent.com/donglovexiao/Rewrite/main//Nicegram.js

[mitm]
hostname = nicegram.cloud
*/

var body = $response.body;

body = body.replace(/"store_subscription":false/g, '"store_subscription":true');
body = body.replace(/"lifetime_subscription":false/g,'"lifetime_subscription":true');
body = body.replace(/"subscription":false/g,'"subscription":true');


$done({ body });
