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

此项目也通用如下App解锁订阅：

软件版本：均适配2023.9.8最新 （每一个下载地址对应一个UAMappings）
下载地址：TouchRetouch 5.1.12
下载地址：星锤日记 https://is.gd/R5KqD4
下载地址：倒数鸭  https://is.gd/rETAhp
下载地址：星垂专注 https://is.gd/rEG9H5
下载地址：Context https://is.gd/splCnF
下载地址： Vision-个人OKR目标管理 https://t.cn/A6OxXNxK
下载地址：Structured-每日计划 https://t.cn/A6cWhz4X
下载地址：cookie记账 
下载地址：倒数鸭 
下载地址：HTTPBOT 2022.2.1 作者zoo
下载地址：Mypianist 2.08
下载地址：Appspree https://t.cn/A6otfeAc 3.1
下载地址：Persona 1.824
下载地址：WordSwag 4.56
下载地址：AnkiPro 1.22.1
下载地址：SmartAI 
下载地址：AI Chat 
下载地址：‎AI Type
下载地址：TextMask
下载地址：Music Mate
下载地址：Langster https://too.st/7aW 同作者5个软件 
下载地址：muse 同作者2个软件
下载地址：Funexpected 
下载地址：中国法律

*******************************

[rewrite_local]
# > Pillow 解锁永久年度订阅
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/Pillow.js
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers\/[^\/]+$|receipts$) url script-request-header https://raw.githubusercontent.com/donglovexiao/Script/main/Pillow.js
https://api.lianjiu.fun/app/api/v1/profile url reject


[mitm] 
hostname = api.revenuecat.com , api.lianjiu.fun

*******************************/
