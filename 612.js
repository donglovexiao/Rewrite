/******************************
脚本功能：B612咔叽 解锁会员订阅
软件版本：11.6.35
脚本作者：@ddgksf2013
更新时间：2023-03-15
使用声明：⚠️仅供学习交流，🈲️商业用途
*******************************

[rewrite_local]
# > B612 解锁会员订阅
https://user-kaji-api.b612kaji.com/v1/purchase/subscription/subscriber/status url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/b612.js

[mitm] 
hostname = user-kaji-api.b612kaji.com

*******************************/
