/*************************************

项目名称：闪电水印-视频下载提取解析短视频
下载地址：https://apps.apple.com/cn/app/id6462673471
软件版本：4.2.0
更新日期：2025-05-12
脚本作者：WeiGiegie
电报频道：https://t.me/GieGie777
使用声明：⚠️仅供参考，🈲转载与售卖！

**************************************

[rewrite_local]
^https?:\/\/watershandiana.yunxiaoguo.cn\/user\/info url script-response-body https://raw.githubusercontent.com/donglovexiao/Rewrite/main/ShanDianShuiYin.js


[mitm]
hostname = watershandiana.yunxiaoguo.cn

*************************************/

var body = $response.body;
let obj = JSON.parse(body);


if (obj.content) {
    obj.content.isPurchasedSubscribe = 1;
    obj.content.user.maskMobile = "Dong";
    obj.content.waterVipInfo = {
        "subscribeCycle": -1,
        "beginTime": "2025-09-09 09:09:09",
        "firstOpenTime": "2025-09-09 09:09:09",
        "freeTimes": 0,
        "userSign": obj.content.user?.sign || "wa44coNPDkg",
        "expireTime": "2999-09-09 09:09:09",
        "typeName": "终身会员",
        "remainDays": 9,
        "sign": "wa44coNPDkg",
        "createTime": "2025-09-09 09:09:09"
    };
}

$done({body: JSON.stringify(obj)});

