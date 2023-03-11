

/******************************

脚本功能：TouchRetouch - 解锁订阅
下载地址：https://is.gd/8rSPp1
软件版本：5.1.2
脚本作者：彭于晏💞
更新时间：2023-3-3
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/\$RCAnonymousID%3A\w{32})$ url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/TouchRetouch.js

[mitm] 

hostname = api.revenuecat.com

*******************************/

