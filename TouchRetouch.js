

/******************************

脚本功能：TouchRetouch - 解锁订阅
下载地址：https://is.gd/8rSPp1
软件版本：5.1.23
脚本作者：Hausd0rff
更新时间：2024-02-26
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/\$RCAnonymousID%3A\w{32}|receipts)$ url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/TouchRetouch.js


[mitm] 

hostname = api.revenuecat.com

*******************************/

