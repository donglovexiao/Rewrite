/******************************

脚本功能：Goodnotes6 — 解锁订阅
下载地址：https://is.gd/npTODJ
软件版本：6.0.1
脚本作者：彭于晏💞
更新时间：2023-8-9
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/isi\..*\.g.*\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/Goodnotes6.js
^https:\/\/isi\..*\.g.*\.com\/.+\/(receipts$|subscribers\/?(.*?)*$) url script-request-header https://raw.githubusercontent.com/donglovexiao/Script/main/Goodnotes6.js

[mitm]
hostname = isi.*.g*.com

*******************************/
