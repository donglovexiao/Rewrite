/******************************

脚本功能：SleepCycle 解锁永久高级版
软件版本：6.25.5
下载地址：http://t.cn/A6Kmswld
脚本作者：XiaoMao
更新时间：2023-10-22
使用声明：⚠️仅供学习交流，🈲️商业用途

使用方法：
1、QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器
https://raw.githubusercontent.com/xiaomaoJT/QxScript/main/rewrite/boxJS/XiaoMaoSleepCycle.js

2、打开软件 > 过引导教程 > 登录账号 > 继续订阅 > 付款时取消并关闭程序 > 重新打开软件即可


*******************************

[rewrite_local]
# > AdGuard 解锁永久高级版
https:\/\/ch\.sleepcycle\.com\/api\/v1\/subscription\/get$ url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/SleepCycle.js

[mitm] 
hostname = ch.sleepcycle.com

*******************************/
