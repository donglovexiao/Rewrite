/******************************

脚本名称: 建工计算器——解锁VIP
下载地址：https://is.gd/luD7ph
软件版本：3.8.5
脚本作者：彭于晏💞
更新时间：2023-9-2
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]

^https:\/\/calc\.kuaicad\.com\/authority\/verify_vip\? url script-response-body https://raw.githubusercontent.com/donglovexiao/Rewrite/main/jiangongjsq.js

[mitm]

hostname = calc.kuaicad.com

********************************/

var originalResponse = $response.body;

var lovebaby = JSON.parse(originalResponse);
lovebaby.data.type = 3;
lovebaby.data.expiresTime = "2099-08-03 16:11:22";
lovebaby.data.isExpires = false;
var modifiedResponseString = JSON.stringify(lovebaby);
$done({
  body: modifiedResponseString
});
