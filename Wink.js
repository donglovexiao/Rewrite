/***************************************

脚本功能：wink
下载地址：appstore
软件版本：所有
脚本作者：伟人
更新时间：2023-02-22
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************

[mitm]

hostname = *meitu*

[rewrite_local]

^http[s]?:\/\/api-((winkcut)|(sub))\.meitu\.com\/(user\/show|v2\/user\/vip_info_by_group).json url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/Wink.js

***************************************/

