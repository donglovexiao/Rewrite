/******************************
脚本功能：夸克 解锁会员订阅
软件版本：6.1.8
更新时间：2023-2-23
使用声明：⚠️仅供学习交流，🈲️商业用途
*******************************

[rewrite_local]

^https:\/\/quark-api\.uc\.cn\/\d\/clouddrive\/member url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/Quark.js

[mitm] 

hostname = quark-api.uc.cn

*******************************/
