/******************************

脚本功能：美图秀秀解锁高级粉钻VIP
软件版本：9.8.50
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > 美图秀秀(2023.04.06)
^https?:\/\/(h5|api)\.xiuxiu\.meitu\.com\/.+\/(h\d/vip|vip\/prompt|vip|user)\/(.*?) url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/MeiTuXiuXiu.js

[MITM]
hostname: *.xiuxiu.meitu.com

*******************************/
