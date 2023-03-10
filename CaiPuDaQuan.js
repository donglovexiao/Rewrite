/******************************
脚本功能：菜谱大全解锁VIP
软件版本：5.0.8
使用声明：⚠️仅供学习交流，🈲️商业用途
*******************************
[rewrite_local]
# > 菜谱大全-v5.0.8(2022.01.19)
^https?:\/\/apiios_dq\.xiangha\.com\/v\d\/ url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/CaiPuDaQuan.js
^https?:\/\/appweb_dq\.xiangha\.com\/center\/pay\/home url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/CaiPuDaQuan.js

[mitm] 
hostname = apiios.xiangha.com, apiios_dq.xiangha.com, appweb_dq.xiangha.com
*******************************/
