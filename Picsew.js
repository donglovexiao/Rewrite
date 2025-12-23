/******************************

脚本功能：Picsew解锁专业版
软件版本：3.9.4
下载地址：https://apps.apple.com/app/id1208145167
脚本作者：Guding88
更新时间：2022-10-14
使用声明：⚠️仅供学习交流，🈲️商业用途

*******************************

[rewrite_local]
# > Picsew解锁专业版
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt$ url script-response-body https://raw.githubusercontent.com/donglovexiao/Rewrite/main/Picsew.js


[mitm] 
hostname = buy.itunes.apple.com

*******************************/

var guding = {
  "receipt": {
    "receipt_type": "Production",
    "bundle_id": "com.sugarmo.ScrollClip",
    "in_app": [
      {
        "quantity": "1",
        "purchase_date_ms": "1669275526000",
        "transaction_id": "300001282466542",
        "original_transaction_id": "300001282466542",
        "product_id": "com.sugarmo.ScrollClip.pro",
        "in_app_ownership_type": "PURCHASED",
        "original_purchase_date_ms": "1669275526000"
      }
    ],
    "application_version": "3206",
    "original_purchase_date_ms": "1669275302000",
    "original_application_version": "3206",
  },
  "environment": "Production",
  "status": 0,
}
$done({ body: JSON.stringify(guding) });
