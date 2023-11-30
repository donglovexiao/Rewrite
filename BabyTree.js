#!name=宝宝树净化
#!desc=宝宝树净化

[Rule]
# 宝宝树孕育
URL-REGEX,^http:\/\/go\.babytree\.com\/go_tool\/api\/feeding_record\/get_home_banner_info,REJECT
URL-REGEX,^http:\/\/go\.babytree\.com\/go_pregnancy\/api\/feeds,REJECT 
URL-REGEX,^http:\/\/api\.babytree\.com\/api\/advertising,REJECT
URL-REGEX,^http:\/\/api\.babytree\.com\/api\/mobile_activity,REJECT 
URL-REGEX,^http:\/\/api\.babytree\.com\/preg_intf\/index_content\/index_banner,REJECT
URL-REGEX,^http:\/\/go\.babytree\.com\/go_tool\/api\/tools\/get_third_privacy_msgbox_list,REJECT 
URL-REGEX,^http:\/\/go\.babytree\.com\/go_pregnancy\/api\/app_index\/get_ceramic_chip_area,REJECT 
URL-REGEX,^http:\/\/go\.babytree\.com\/go_pregnancy\/api\/index_activity,REJECT 
URL-REGEX,^http:\/\/go\.babytree\.com\/go_pregnancy\/api\/cms_second_tab\/topic_tab_list,REJECT 

DOMAIN,m.meitun.com,REJECT 
DOMAIN,adx.babytree.com,REJECT 
DOMAIN,adx-backend.babytree.com,REJECT 
DOMAIN,ads.babytree.com,REJECT 
DOMAIN,bbtads.babytree.com,REJECT 
DOMAIN,tracking.babytree.com,REJECT 
DOMAIN,mobads-pre-config.cdn.bcebos.com,REJECT 

[Script]
http-response ^http:\/\/go\.babytree\.com\/go_pregnancy\/api/app_index\/get_app_tab script-path = 宝宝树.js, requires-body = true, tag = 宝宝树底部Tab净化
http-response ^http:\/\/go\.babytree\.com\/go_pregnancy\/api\/cms_column script-path = 宝宝树.js, requires-body = true, tag = 宝宝我的页面净化

[MITM]
hostname= %APPEND% *.babytree.com
