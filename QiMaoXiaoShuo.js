/******************************
脚本功能：七猫小说解锁终身VIP + 去除所有广告 + 无限下载权限 + 无限听书权限 + 无限阅读权限
软件版本：5.13
使用声明：⚠️仅供学习交流，🈲️商业用途
*******************************
[rewrite_local]
# > 七猫小说(2022.01.18)
^https?:\/\/(api-\w+|xiaoshuo)\.wtzw\.com\/api\/v\d\/ url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/QiMaoXiaoShuo.js

[mitm] 
hostname = *.wtzw.com
*******************************/
