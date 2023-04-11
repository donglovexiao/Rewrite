/***********************************

> ScriptName        阿里云盘净化+解锁本地会员功能[倍速、码率]
> UpdateTime        2023-02-16
> Suitable          自行观看“# > ”注释内容
> Attention         如需引用请注明出处，谢谢合作！

***********************************

[rewrite_local]

# > 阿里云盘_首页设置
^https?:\/\/api\.aliyundrive\.com\/apps\/v\d\/users\/(apps|home)\/widgets$ url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
# > 阿里云盘_我的页面VIP卡片
https://api.aliyundrive.com/business/v1/users/me/vip/info url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
# > 阿里云盘_我的信息
https://member.aliyundrive.com/v1/users/me url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
# > 阿里云盘_会员信息
https://api.aliyundrive.com/business/v1.0/users/vip/info url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
# > 阿里云盘_个人信息
https://api.aliyundrive.com/v2/databox/get_personal_info url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js
# > 阿里云盘_列表属性
https://api.aliyundrive.com/business/v1.0/users/feature/list url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/alicloud.js

[mitm] 

hostname = api.aliyundrive.com, member.aliyundrive.com

***********************************/

