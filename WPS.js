/******************************

脚本功能：WPS Office 解锁会员功能
软件版本：商店最新版11.35.1
下载地址：http://t.cn/A6KnWtUu
脚本作者：Sweet510
更新时间：2023-3-30
使用声明：⚠️仅供学习交流，🈲️商业用途

***************************
QuantumultX:

[rewrite_local]

^https:\/\/(vas|account)\.wps\.cn\/(query\/api\/v\d\/list_purchase_info|api\/users\/\d+\/overview) url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/WPS.js

[mitm] 

hostname = vas.wps.cn, account.wps.cn

***************************/
