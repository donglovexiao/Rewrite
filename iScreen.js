/******************************

脚本功能：我的桌面·iScreen 解锁会员订阅
软件版本：3.6.3
脚本作者：Dong
更新时间：2023-04-06
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > iScreen 解锁会员订阅
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body  https://raw.githubusercontent.com/donglovexiao/Script/main/iScreen.js

[mitm] 
hostname = buy.itunes.apple.com

*******************************/
