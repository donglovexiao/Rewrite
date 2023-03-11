/******************************
脚本功能：猫头鹰文件解锁VIP
软件版本：12.1
使用声明：⚠️仅供学习交流，🈲️商业用途
*******************************
[rewrite_local]

^https:\/\/www\.skyjos\.cn:58080\/ws\/loadaccountinfo$ url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/MaoTouYingWJ.js

[mitm]

hostname = www.skyjos.cn:58080

*******************************/
