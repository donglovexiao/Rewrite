/*******************************

脚本名称:悟饭趣玩解锁vip

下载地址:https://apps.apple.com/cn/app/id1549154479

*******************************
[rewrite_local]

^http[s]?:\/\/.+user/ios_store_pay_edition.+(check_members_identity_v2|get_member_info) url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/wufan.js

[mitm] 
hostname = iosv2.cjapi.wufan88.com

*******************************/
