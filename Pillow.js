/******************************

脚本功能：Pillow 解锁永久年度订阅
软件版本：5.10
下载地址：http://t.cn/A6Kmswld
脚本作者：XiaoMao
更新时间：2023-09-24
使用声明：⚠️仅供学习交流，🈲️商业用途

使用方法：
1、QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器
https://raw.githubusercontent.com/donglovexiao/Rewrite/refs/heads/main/Pillow.js

2、打开软件 > 自动解锁会员 ，若未解锁成功 > 底部「中间按钮」，右上角「设置」「恢复购买」> 或重新重启App或清空缓存或重装。

3、解锁成功理论上有消息弹窗。[🚨🚨🚨无效请关掉软件进程后，先打开脚本，再进软件进行解锁]

4、⚠️⚠️⚠️此脚本需常驻，建议置于较后的优先级，以免影响其他脚本「若置于同类脚本前面将影响其他恢复类解锁脚本」。

*******************************

[rewrite_local]
# > Pillow 解锁永久年度订阅
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/Pillow.js
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/donglovexiao/Script/main/Pillow.js


[mitm] 
hostname = api.revenuecat.com

*******************************/
