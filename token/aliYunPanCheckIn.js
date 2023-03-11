************************
/*
阿里云盘签到-lowking-v1.0.1

按下面配置完之后，打开阿里云盘获取token（如获取不到，等一段时间再打开）  

hostname = auth.aliyundrive.com

[rewrite_local]
#阿里云盘签到cookie
^https:\/\/auth.aliyundrive.com\/v2\/account\/token url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/token/aliYunPanCheckIn.js

[task_local]
0 10 0 * * ? https://raw.githubusercontent.com/donglovexiao/Script/main/token/aliYunPanCheckIn.js

*/
************************
