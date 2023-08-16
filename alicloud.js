/**************************
 *  * @Author: XiaoMao
 * @LastMod: 2023-08-04

\阿\里\云\盘\s\v\i\p\+\部\分\优\化\+\去\广\告\+\彩\蛋\+\自\定\义\+\解\锁\所\有\图\标\
\解\锁\倍\率\、\长\按\倍\率\、\清\晰\度\等\
\适\配\4\.\9\.\0\版\本\

仅供学习参考，请于下载后24小时内删除

QX > 右下角风车 > 重写 > 规则资源 > 引用以下脚本 > 打开资源解析器
https://raw.githubusercontent.com/donglovexiao/Rewrite/main/alicloud.js

********************************

[rewrite_local]

https:\/\/api\.(aliyundrive|alipan)\.com\/v2\/databox\/get_personal_info url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
https:\/\/api\.(aliyundrive|alipan)\.com\/business\/v1.0\/users\/vip\/info url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
https:\/\/member\.(aliyundrive|alipan)\.com\/v1\/users\/tools url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
https:\/\/api\.(aliyundrive|alipan)\.com\/business\/v1\/users\/me\/vip\/info url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
https:\/\/member\.(aliyundrive|alipan)\.com\/v1\/users\/tools url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
https:\/\/api\.(aliyundrive|alipan)\.com\/business\/v1.1\/users\/me\/vip\/info url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
https:\/\/api\.(aliyundrive|alipan)\.com\/apps\/v1\/users\/home\/widgets url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
https:\/\/api\.(aliyundrive|alipan)\.com\/apps\/v2\/users\/home\/widgets url reject-dict
https://api.aliyundrive.com/apps/v1/users/home/news url reject-200
https:\/\/api\.(aliyundrive|alipan)\.com\/adrive\/v1\/app\/logos url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
https:\/\/api\.(aliyundrive|alipan)\.com\/adrive\/v2\/user\/get url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
https:\/\/api\.(aliyundrive|alipan)\.com\/business\/v1.0\/users\/feature\/list url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
https:\/\/api\.(aliyundrive|alipan)\.com\/business\/v1.0\/users\/feature\/trial url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
https:\/\/api\.(aliyundrive|alipan)\.com\/v2\/file\/get_video_preview_play_info url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
https:\/\/api\.(aliyundrive|alipan)\.com\/adrive\/v2\/batch url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
https:\/\/member\.alipan\.com\/v2\/activity\/sign_in_info url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
https:\/\/member\.aliyundrive\.com\/v2\/activity\/sign_in_list url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
https:\/\/api\.alipan\.com\/business\/v1.0\/users\/coupon\/detail url reject-200
https:\/\/member\.alipan\.com\/v1\/users\/onboard_list url reject-200
https:\/\/member\.alipan\.com\/v1\/users\/me url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
https:\/\/api\.alipan\.com\/adrive\/v1\/timeline\/user\/get url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
;https:\/\/api\.(aliyundrive|alipan)\.com\/apps\/v1\/users\/apps\/welcome url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js


[mitm]
hostname = api.aliyundrive.com,member.aliyundrive.com,api.alipan.com,member.alipan.com,auth.alipan.com

**************************/


