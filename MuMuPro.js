/******************************

脚本功能：MuMu模拟器Pro 解锁会员
软件版本：v1.3.12及以下版本使用
下载地址：https://mumu.163.com/mac/
脚本作者：Dong
更新时间：2024-3-21
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > MuMu Pro解锁会员
^https:\/\/api-pro\.mumu\.163\.com\/api\/v1\/user\/info url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/mumu.js

[mitm] 
hostname = *.mumu.163.com

*******************************/
