/******************************

脚本功能：Picsew解锁专业版
软件版本：3.9.4
下载地址：http://t.cn/Aig753CC
脚本作者：Passer_by_yun
更新时间：2022-10-14
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > Picsew解锁专业版
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/PicsewPro.js


[mitm] 
hostname = buy.itunes.apple.com

*******************************/

