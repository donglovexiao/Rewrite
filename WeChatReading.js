/***************************************

脚本功能：微信读书 解锁付费会员卡
脚本作者：伟人
更新时间：2023-04-02
作者忠告: 不要乱搞
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************


[rewrite_local]

#微信读书
^http[s]?:\/\/(i|res)\.weread\.qq.com\/(login|pay\/balance|book\/chapterInfos|user\?userVid\=|upload\?type\=avatar).*$ url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/WeChatReading.js
^http[s]:\/\/i\.weread\.qq\.com\/login url request-body [\s\S]+ request-body {}
^http[s]?:\/\/i\.weread\.qq\.com\/device\/logout url reject-200
^http[s]?:\/\/i\.weread\.qq\.com\/updateConfig url reject-200
^http[s]?:\/\/res\.weread\.qq.com\/upload\?type\=avatar url reject-200

[mitm]

hostname = *.weread.qq.com

***************************************/
