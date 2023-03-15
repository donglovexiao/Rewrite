/******************************

脚本功能：Notability +解锁订阅
下载地址：http://mtw.so/6bQodv
特别说明：先用老版本解锁，然后同步新版本！
软件版本：11.7.1
脚本作者：彭于晏💞
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]


^https?:\/\/notability\.com\/subscriptions url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/Notability.js

[mitm] 

hostname = notability.com

*******************************/
