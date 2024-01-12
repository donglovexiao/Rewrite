/******************************
脚本功能：手机硬件管家 解锁会员订阅
软件版本：5.2.0
App下载地址：https://apps.apple.com/cn/app/手机硬件管家-最流行的网络数据流量监控桌面小组件/id1329937809
更新时间：2024-01-12
使用声明：⚠️仅供学习交流，🈲️商业用途
*******************************

[rewrite_local]
# > 手机硬件管家 解锁会员订阅
https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/CPU.js
https:\/\/api\.revenuecat\.com\/v1\/(subscribers|receipts) url script-response-header https://raw.githubusercontent.com/donglovexiao/Script/main/CPU.js

[mitm] 
hostname = api.revenuecat.com

*******************************/
