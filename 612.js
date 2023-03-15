/*
脚本功能：B612咔叽解锁会员订阅
Author：@ddgksf2013

[rewrite_local]
# > B612 解锁会员订阅
https://user-kaji-api.b612kaji.com/v1/purchase/subscription/subscriber/status url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/b612.js

[mitm] 
hostname = user-kaji-api.b612kaji.com

