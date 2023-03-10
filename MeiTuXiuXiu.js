/******************************
脚本功能：美图秀秀解锁高级VIP
软件版本：9.3.80
使用声明：⚠️仅供学习交流，🈲️商业用途
*******************************
[rewrite_local]
# > 美图秀秀(2022.01.17)
^https?:\/\/(h5|api)\.xiuxiu\.meitu\.com\/v\d\/(h\d\/vip|vip|user)\/ url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/MeiTuXiuXiu.js

[mitm] 
hostname = api.xiuxiu.meitu.com, h5.xiuxiu.meitu.com
*******************************/
