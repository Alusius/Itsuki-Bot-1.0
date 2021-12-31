let fs = require('fs')
let handler  = async (m, { conn, usedPrefix }) => {
prep = conn.prepareMessageFromContent(m.chat, { orderMessage: { 
itemCount: 999999999999, status: 1,
message: `┌─〔 MOD APK 〕\n├\n├ Minecraft (Original)\n├https://www.mediafire.com/file/4hixmktsfkhky91/Minecraft_v1.16.101.01_Terbaru.zip/file\n├ Geometry Dash (MOD)\n├http://www.mediafire.com/file/thnoi1wpa5ex2wn/Geometry_Dash_%2528MOD%2529.apk/file\n├ KineMaster (PRO)\n├https://www.mediafire.com/download/eshb8rra8eg5xa3\n├ KineMaster Diamond (MOD)\n├https://www.mediafire.com/download/9p8wsnwupnq0lun\n├ KineMaster Ruby (MOD)\n├https://www.mediafire.com/download/6b2wa08cmtsr8x8\n├ Adobe Photoshop (Original)\n├https://www.mediafire.com/download/whfh12tj4zjpedp\n├ Alight Motion (PRO)\n├http://www.mediafire.com/file/tpxj2grwf8imp6i/Alight_Motion_V.3.1.4_%2528Mod%2529_By_bilqis_neha.apk/file\n├ Avee Player (PRO)\n├https://www.mediafire.com/download/5vkde8d1gcyk33y\n├ Pixellab (PRO)\n├https://www.mediafire.com/download/kxj0xyvrkc8w6h0\n├ Inshot (PRO)\n├https://www.mediafire.com/download/7qcmrfdy2o1ynxf\n├ WavePad (PRO)\n├https://www.mediafire.com/download/oif50qb8ltdoe2x\n├ Vimage (PRO)\n├https://www.mediafire.com/download/egjumopr2wl89tl\n├ Zeotropic (PRO)\n├https://www.mediafire.com/download/tw9zwj2km2tjsnh\n├ 90s (PRO)\n├https://www.mediafire.com/download/0y2bba69f6wakuh\n╰────\n\n╭─「 TEMPLATE 」\n├ Template MineImator\n├http://www.mediafire.com/file/cxa8io0j0i3a0x4/Mine-Imator_%2528Template_Pika_Gamer%2529_Edited.zip/file\n├ 50 Template Avee Player 1\n├https://realsht.mobi/teCTj\n├ 50 Template Avee Player 2\n├https://realsht.mobi/hhSMc\n├ Template Quotes Rainbow\n├https://realsht.mobi/LbmVw\n├ Template Quotes 1\n├https://realsht.mobi/GZuvl\n├ Template Quotes 2\n├https://realsht.mobi/lFLqm\n├ Template Quotes 3\n├https://realsht.mobi/prMyC\n├ Template Quotes 4\n├https://realsht.mobi/FyGha\n├ Template Quotes 5\n├https://realsht.mobi/LdpNd\n├ Template Quotes 6\n├https://realsht.mobi/BdlQe\n├ Template Quotes 7\n├https://realsht.mobi/fdZCs\n├ Template Quotes 8\n├https://realsht.mobi/YkqIk\n├ Template Quotes 9\n├https://realsht.mobi/BcKdr\n├ Template Quotes 10\n├https://realsht.mobi/MaZno\n├ Template Mega Colab\n├https://realsht.mobi/JinWs\n├ Template Colab 1\n├https://realsht.mobi/bocSM\n├ Template Colab 2\n├https://realsht.mobi/eJwLd\n├ Template Colab 3\n├https://realsht.mobi/tGMxp\n├ Template Colab 4\n├https://realsht.mobi/oQtWo\n├ Template Colab 5\n├https://realsht.mobi/rbvWQ\n├ Template Wajah Orang\n├https://realsht.mobi/tGMxp\n├ Template Kacamata\n├https://realsht.mobi/MpoKs\n├ Template Unix 1\n├https://realsht.mobi/dfToI\n├ Template Unix 2\n├https://realsht.mobi/hRMsq\n├ Template Partikel\n├https://realsht.mobi/wOMlc\n├ Template Pistol\n├https://realsht.mobi/exXCy\n├ Template Solo\n├https://realsht.mobi/MvYbm\n┗━━━━━━━━━━━━━━━━\n\n╭─「 FONT 」\n├ Kumpulan Font Untuk Quotes\n├https://realsht.mobi/JkmXx\n├ 800 Font Picsay/Pixelab\n├https://realsht.mobi/brKhI\n├ 400 Font Picsay/Pixelab\n├https://realsht.mobi/gBhyt\n├ 200 Font Picsay/Pixelab\n├https://realsht.mobi/iJQbj\n├ 100 Font Picsay/Pixelab\n├https://realsht.mobi/hrTdE\n┗━━━━━━━━━━━━━━━━`,
orderTitle: 'B',
sellerJid: '0@s.whatsapp.net',
thumbnail: fs.readFileSync('./src/RadBotZ.jpg')
}}, {contextInfo: null, quoted: m})
conn.relayWAMessage(prep)
}



handler.help = ['modapk']

handler.tags = ['tools']

handler.command = /^modapk$/i
handler.owner = false


module.exports = handler
