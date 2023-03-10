/******************************
脚本功能：WPS解锁稻壳会员
软件版本：11.26.0
下载地址：http://t.cn/A6ZD2hl3
脚本作者：Hausd0rff
更新时间：2022-07-05
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > WPS解锁稻壳会员
^https?:\/\/.+\.(docer.)?wps.cn\/(user\/v1\/vip|android\/mb\/buy|download\/v1\/ios|partner\/invoke\/usable|(api|rank)\/v1(\/mobile\/mb)?\/detail) url script-request-header https://raw.githubusercontent.com/donglovexiao/Rewrite/main/WPSDocerVIPowerCrack.js
[mitm] 
hostname = *.docer.wps.cn, vipapi.wps.cn
*******************************/

