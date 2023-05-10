/******************************

脚本功能：百度地图去广告净化
脚本作者：@Zoo
更新时间：2023.05.02
电报频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
^https:\/\/180\.97\.104\.134\/order\/customer\/homeandcompany url script-response-body https://raw.githubusercontent.com/donglovexiao/Rewrite/main/BaiduMap.js
^https:\/\/yongche\.baidu\.com\/(marketing\/activity\/activitycard|\/goorder\/passenger\/baseinfo|\/gomarketing\/api\/popup\/getentrancecordovaurl) url script-response-body https://raw.githubusercontent.com/donglovexiao/Rewrite/main/BaiduMap.js
^https:\/\/yongche\.baidu\.com\/goorder\/passenger\/notice url script-response-body https://raw.githubusercontent.com/donglovexiao/Rewrite/main/BaiduMap.js
^https:\/\/afd\.baidu\.com url reject-dict
^https:\/\/map-mobile-opnimg.cdn.bcebos.com/* url reject-img
^https:\/\/newclient\.map\.baidu\.com\/living\/nearby\/api url reject-dict
^https:\/\/newclient\.map\.baidu\.com\/client\/(usersystem\/mine\/page|\/phpui2\/) url script-response-body https://raw.githubusercontent.com/donglovexiao/Rewrite/main/BaiduMap.js

[mitm] 
hostname = 36.152.44.187,yongche.baidu.com,map-mobile-opnimg.cdn.bcebos.com,newclient.map.baidu.com,afd.baidu.com

*******************************/
