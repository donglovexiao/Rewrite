/******************************
脚本功能：美颜相机解锁紫钻VIP
软件版本：6.18.0
使用声明：⚠️仅供学习交流，🈲️商业用途
*******************************
[rewrite_local]

# > 美颜相机-v10.3.00(2022.01.15)
^https?:\/\/api\.account\.meitu\.com\/(common\/check_device_login_pwd|users\/show_current\.json) url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/MeiYanXiangJi.js
^https?:\/\/api\.meiyan\.com\/vip\/(user_center\.json|user_info\.json) url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/MeiYanXiangJi.js

[mitm] 
hostname = api.account.meitu.com, api.meiyan.com
*******************************/
