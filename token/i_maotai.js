/*
脚本名称：i茅台Token
更新时间：2023-02-07

====================================================================================================
配置 (Quantumult X)
[rewrite_local]
^https:\/\/app\.moutai519\.com\.cn\/xhr\/front\/mall\/message\/unRead\/query url script-request-headers https://raw.githubusercontent.com/donglovexiao/Script/main/token/i_maotai.js

[MITM]
hostname = app.moutai519.com.cn
====================================================================================================
配置 (Surge)
[Script]
i茅台Token = type=http-request,pattern=^https:\/\/app\.moutai519\.com\.cn\/xhr\/front\/mall\/message\/unRead\/query,requires-body=0,max-size=0,timeout=1000,script-path=https://raw.githubusercontent.com/donglovexiao/Script/main/token/i_maotai.js,script-update-interval=0

[MITM]
hostname = %APPEND% app.moutai519.com.cn
====================================================================================================
*/
