##############################################
# > 如需引用请注明出处，谢谢合作！
# > https://t.me/ddgksf2013
# > Only for own use, created by ddgksf2013
# > 更新时间：2023-02-08
# > 以下APP解锁，适用【最新版】，墨鱼都已逐一测试其有效性
# > 仅支持旧版解锁的重写都已删除或已注释
# > https://github.com/ddgksf2013/dev/raw/master/ForOwnUse.conf
##############################################

[rewrite_local]
# ✅ 傲软抠图(need登录)
https?:\/\/.*\.aoscdn\.com\/base\/vip\/client\/authorizations$ url script-response-body https://raw.githubusercontent.com/donglovexiao/Script/main/AoRuan.js

[mitm] 
hostname = *.aoscdn.com
