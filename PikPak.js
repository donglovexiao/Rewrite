/******************************

脚本功能：PikPak 解锁会员订阅
软件版本：1.11.0
更新时间：2023-04-16
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > PikPak 解锁会员订阅
^https:\/\/api-drive\.mypikpak\.com\/(vip\/v\d\/(vip\/info|allSubscriptionStatus)|drive\/v\d\/about\?space) url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/PikPak.js

[mitm] 
hostname = api-drive.mypikpak.com

*******************************/
