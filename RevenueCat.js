/***********************************

> 应用名称：RevenueCat多合一脚本
> 脚本作者：Cuttlefish
> 微信账号：墨鱼手记
> 更新时间：2022-11-12
> 通知频道：https://t.me/ddgksf2021
> 投稿助手：https://t.me/ddgksf2013_bot
> 问题反馈：📮 ddgksf2013@163.com 📮
> 特别说明：本脚本仅供学习交流使用，禁止转载售卖
> 解锁应用：如下所示（共计31个）

Pixelmator、Planny、Gear、图图记账、Aphrodite、Apollo、MoneyThings、目标地图、Audiomack、
1Blocker、Scanner Pro、Darkroom、谜底时钟、Pillow、VSCO、Grow、WhiteCloud、Fin、奇妙组件、
Widgetsmith、vision、Percento、Airmail、Usage、pdfviewer、Spark、谜底黑胶、ColorWidgets、
手机硬件管家、WidgetArt、卡片馆

[rewrite_local]

# ～ RevenueCat（2022-11-12）@ddgksf2013
^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/*) url script-echo-response https://raw.githubusercontent.com/donglovexiao/Script/main/RevenueCat.js

[mitm]

hostname=api.revenuecat.com

***********************************/
