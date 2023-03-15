/******************************
脚本功能：扫描全能王解锁专业版
软件版本：6.18.0
使用声明：⚠️仅供学习交流，🈲️商业用途
*******************************

[rewrite_local]
# > 扫描全能王
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/CamscannerPro.js

[mitm] 
hostname = ap*.intsig.net

*******************************/


