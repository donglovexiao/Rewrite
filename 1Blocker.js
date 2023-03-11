/******************************

脚本功能：1Blocker 解锁永久订阅
软件版本：5.3.3
下载地址：http://t.cn/A6KnWtUu
脚本作者：Passer_by_yun
更新时间：2022-12-23
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > 1Blocker 解锁永久订阅
^https?:\/\/api\.revenuecat\.com\/v1\/(receipts|subscribers\/) url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/1Blocker.js

[mitm] 
hostname = api.revenuecat.com

*******************************/
