/******************************

脚本功能：中华诗词库——解锁VIP
下载地址：https://is.gd/9mxCMB
软件版本：1.7
脚本作者：彭于晏💞
更新时间：2022-11-25
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

http:\/\/api\.chuangqi\.store\/ url script-response-body https://raw.githubusercontent.com/donglovexiao/Rewrite/main/zhsck.js

[mitm] 

hostname = api.chuangqi.store

*******************************/

body = $response.body.replace(/\"vip_end_time":\w+/g, '\"vip_end_time":4099040228000').replace(/\"is_ad_vip":\d+/g, '\"is_ad_vip":1').replace(/\"isvip":\d+/g, '\"isvip":1')
$done({body});
