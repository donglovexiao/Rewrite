/* 
脚本名称：完美解锁酷我音乐vip
脚本功能：听无损+下无损+听VIP书+换VIP肤+数字专辑
脚本作者：king
下载地址：https://apps.apple.com/cn/app/id588673713
更新时间：2022.8.16
脚本频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️⚠️⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️

代码重构:这版是 最完美！！！的酷我解锁
当前版本:10.2.8

[rewrite_local]
# 完美解锁酷我音乐
^https?:\/\/.*\.(kuwo|lrts)\.(cn|me)\/(a\.p|music\.pay|(vip\/(v2|enc)\/(theme|user\/vip))|(EcomResource|(Mobile)?Ad)Serv(er|ice)).* url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/kuwo.js
[mitm] 
hostname = *.kuwo.cn, *.lrts.me
********************************
*/

