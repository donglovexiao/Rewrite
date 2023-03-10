/******************************

脚本功能：AdGuard 解锁永久高级版
软件版本：4.4.5
下载地址：http://t.cn/A6Kmswld
脚本作者：Passer_by_yun
更新时间：2022-12-26
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > AdGuard 解锁永久高级版
^https?:\/\/mobile-api\.adguard\.org\/api\/.+\/ios_validate_receipt url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/adguard.js

[mitm] 
hostname = *.adguard.org

*******************************/

