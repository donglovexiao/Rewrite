/*
 *
 *
脚本功能：破解vip观看视频，去广告
软件版本：4.3.00
下载地址：苹果商店搜索“埋堆堆”
脚本作者：凉意
更新时间：2022.03.19
电报频道：https://t.me/liangyiA
问题反馈：https://t.me/LiangYi66
使用声明：⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
*******************************
[rewrite_local]
# > 埋堆堆vip
^https:\/\/mob\.mddcloud\.com\.cn\/(api\/vod\/getSaction\.action|adApi\/advert\/firstpart\/advertList|vert\/thirdpart\/getCoopenAdParam)$ url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/maiduidui.js

[mitm]
hostname = mob.mddcloud.com.cn
*
*
*/

