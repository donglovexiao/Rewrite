/******************************

脚本功能：手机硬件管家+解锁订阅
下载地址：https://is.gd/EjvJR6
软件版本：5.1.4
脚本作者：彭于晏💞
更新时间：2022-10-13
问题反馈：QQ+89996462
QQ会员群：779392027💞
TG反馈群：https://t.me/plus8889
TG频道群：https://t.me/py996
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************
[rewrite_local]

^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/(\$RCAnonymousID%)?(\w)*$) url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/SJYJGJ.js

[mitm]

hostname=api.revenuecat.com

*******************************/

