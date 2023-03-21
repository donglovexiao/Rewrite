/***************************************

脚本功能：芒果TV解锁VIP 无需登录账号
芒果TV:Vip+ No login
脚本作者：伟人
作者QQ: 5574****
更新时间：2023-03-18
问题反馈：添加作者频道
作者忠告: 不要贩卖
QQ会员群：PY作者
TG反馈群：https://t.me/WeiRenOvO
TG频道群：https://t.me/WeiRenQAQ
使用声明：⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

**************************************


[rewrite_local]
#芒果VIP
^http[s]?:\/\/mobile\.api\.mgtv\.com\/v[0-9]\/(playlist|video\/album|video\/relative|video\/list).*$ url script-request-header https://raw.githubusercontent.com/donglovexiao/Script/main/MGTK.js
^http[s]?:\/\/.*mgtv\.com/(client\/dynamic_entry|v8\/video\/getSource|GetUserInfo|v3\/module\/list|credits\/url).*$ url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/MGTV1.js
#去Ad
^https?:\/\/nuc\.api\.mgtv.com\/Logout url reject-200
^https?:\/\/pcvideoyd\.titan\.mgtv\.com\/pb\/ url reject-img
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/sdk\/ url reject-200
^https?:\/\/sf3-fe-tos\.pglstatp-toutiao\.com\/obj\/ad-pattern\/renderer\/package\.json url reject-200
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/server_bidding\/pre_fetch\/ url reject-200
&src\=mgtv\&suuid\=[a-z0-9]{32}&testversion\=&ticket\= url 302 &src=mgtv&testversion=&ticket=D5667E9FB7443AEFA6525BB1D3BEC6DC
^https?:\/\/api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/sdk\/stats\/batch\/ url reject-200
^https?:\/\/mob\.bz\.mgtv\.com\/odin\/c1\/channel\/ads\?_ url reject-200
^https?:\/\/mobile\.da\.mgtv\.com\/json\/app\/bdboot url reject-200
^https?:\/\/mobile\.api\.mgtv\.com\/mobile\/config\?_support url reject-200
^https?:\/\/sf3-fe-tos\.pglstatp-toutiao\.com\/obj\/ad-pattern\/renderer\/ url reject-200

[mitm]

hostname = *.mgtv.com

***************************************/
