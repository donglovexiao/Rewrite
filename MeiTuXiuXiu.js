/******************************
脚本功能：美图秀秀解锁高级VIP
软件版本：9.3.80
使用声明：⚠️仅供学习交流，🈲️商业用途
*******************************
[rewrite_local]
# > 美图秀秀(2022.04.23)
^https?://(api|h5).xiuxiu.meitu.com/(v1/user/show.json|v1/vip/vip_show.json|v1/vip/prompt/query.json|v1/h5/vip/sub_detail.json|v1/h5/user/self_show.json|v1/h5/vip/user_detail.json|v1/vip/prompt/query.json|v1/vip/prompt/query.json) url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/MeiTuXiuXiu.js

[MITM]
hostname: api.xiuxiu.meitu.com, h5.xiuxiu.meitu.com
*******************************/
