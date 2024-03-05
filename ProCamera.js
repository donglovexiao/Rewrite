/******************************

脚本功能：ProCamera — 解锁订阅
下载地址：https://is.gd/N4Xc7P
软件版本：17.1
脚本作者：彭于晏💞
更新时间：2023-11-25
使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

*******************************

[rewrite_local]


^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body https://raw.githubusercontent.com/donglovexiao/Rewrite/main/ProCamera.js

[mitm] 

hostname = buy.itunes.apple.com

********************************/

var objc = JSON.parse($response.body);

    objc = {
  "receipt" : {
    "receipt_type" : "Production",
    "in_app" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1691972860000",
        "expires_date" : "9999-09-09 09:09:09 Etc/GMT",
        "expires_date_pst" : "9999-09-09 09:09:09 America/Los_Angeles",
        "transaction_id" : "666666666666667",
        "original_transaction_id" : "666666666666667",
        "in_app_ownership_type" : "PURCHASED",
        "product_id" : "com.cocologics.ProCamera.Up.Yearly",
        "purchase_date" : "2023-08-14 15:27:40 Etc/GMT",
        "original_purchase_date_pst" : "2023-08-14 08:24:40 America/Los_Angeles",
        "original_purchase_date_ms" : "1692026680000",
        "expires_date_ms" : "7955085722000",
        "purchase_date_pst" : "2023-08-14 08:27:40 America/Los_Angeles",
        "original_purchase_date" : "2023-08-14 08:24:40 Etc/GMT"
      }
    ],
    "latest_receipt_info" : [
      {
        "quantity" : "1",
        "purchase_date_ms" : "1691972860000",
        "expires_date" : "9999-09-09 09:09:09 Etc/GMT",
        "is_in_intro_offer_period" : "false",
        "expires_date_pst" : "9999-09-09 09:09:09 America/Los_Angeles",
        "transaction_id" : "666666666666667",
        "is_trial_period" : "false",
        "original_transaction_id" : "666666666666667",
        "in_app_ownership_type" : "PURCHASED",
        "product_id" : "com.cocologics.ProCamera.Up.Yearly",
        "purchase_date" : "2023-08-14 15:27:40 Etc/GMT",
        "original_purchase_date_pst" : "2023-08-14 08:24:40 America/Los_Angeles",
        "original_purchase_date_ms" : "1692026680000",
        "expires_date_ms" : "7955085722000",
        "purchase_date_pst" : "2023-08-14 08:27:40 America/Los_Angeles",
        "original_purchase_date" : "2023-08-14 08:24:40 Etc/GMT"
      }
    ],
    "bundle_id" : "com.cocologics.ProCamera",
    "status" : 0,
    "environment" : "Production",
    "adam_id" : 1111111111,
    "pending_renewal_info" : [
      {
        "product_id" : "com.cocologics.ProCamera",
        "original_transaction_id" : "666666666666667",
        "auto_renew_product_id" : "com.cocologics.ProCamera.Up.Yearly",
        "auto_renew_status" : "1"
      }
    ],
    "receipt_creation_date_pst" : "2023-08-14 08:25:04 America/Los_Angeles",
    "request_date" : "2023-08-14 15:27:40 Etc/GMT",
    "request_date_pst" : "2023-08-14 08:27:40 America/Los_Angeles",
    "version_external_identifier" : 666666666,
    "request_date_ms" : "1692026860531",
    "original_purchase_date_pst" : "2023-08-14 08:24:40 America/Los_Angeles",
    "application_version" : "4192",
    "original_purchase_date_ms" : "1692026680000",
    "receipt_creation_date_ms" : "1691972704000",
    "original_application_version" : "4192",
    "download_id" : 666666666666666600
  },
  "environment" : "Production",
  "status" : 0,
  "pending_renewal_info" : [
    {
      "product_id" : "com.cocologics.ProCamera",
      "original_transaction_id" : "666666666666667",
      "auto_renew_product_id" : "com.cocologics.ProCamera.Up.Yearly",
      "auto_renew_status" : "1"
    }
  ],
  "latest_receipt_info" : [
    {
      "quantity" : "1",
      "purchase_date_ms" : "1691972860000",
      "expires_date" : "9999-09-09 09:09:09 Etc/GMT",
      "is_in_intro_offer_period" : "false",
      "expires_date_pst" : "9999-09-09 09:09:09 America/Los_Angeles",
      "transaction_id" : "666666666666667",
      "is_trial_period" : "false",
      "original_transaction_id" : "666666666666667",
      "in_app_ownership_type" : "PURCHASED",
      "product_id" : "com.cocologics.ProCamera.Up.Yearly",
      "purchase_date" : "2023-08-14 15:27:40 Etc/GMT",
      "original_purchase_date_pst" : "2023-08-14 08:24:40 America/Los_Angeles",
      "original_purchase_date_ms" : "1692026680000",
      "expires_date_ms" : "7955085722000",
      "purchase_date_pst" : "2023-08-14 08:27:40 America/Los_Angeles",
      "original_purchase_date" : "2023-08-14 08:24:40 Etc/GMT"
    }
  ],
  "latest_receipt" : ""
}
$done({body : JSON.stringify(objc)});
