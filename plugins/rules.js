let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `╭═════〘 𝗥 𝗨 𝗟 𝗘 𝗦  𝗕 𝗢 𝗧 〙═══
⬡ 𝙈𝙤𝙝𝙤𝙣 𝙪𝙣𝙩𝙪𝙠 𝙩𝙞𝙙𝙖𝙠 𝙎𝙥𝙖𝙢 𝘽𝙤𝙩 𝙠𝙖𝙧𝙚𝙣𝙖 𝘽𝙤𝙩 𝙞𝙣𝙞 𝙨𝙪𝙙𝙖𝙝 𝙢𝙚𝙢𝙞𝙡𝙞𝙠𝙞 𝙊𝙩𝙤𝙢𝙖𝙩𝙞𝙨 𝘽𝙡𝙤𝙠𝙞𝙧 𝘽𝙖𝙜𝙞 𝙋𝙚𝙣𝙜𝙜𝙪𝙣𝙖 𝘽𝙤𝙩 𝙮𝙖𝙣𝙜 𝙎𝙥𝙖𝙢
⬡ 𝙈𝙤𝙝𝙤𝙣 𝙢𝙖𝙖𝙛 𝙟𝙞𝙠𝙖 𝙖𝙙 𝙮𝙜 𝙢𝙚𝙢𝙖𝙠𝙖𝙞 𝙢𝙚𝙣𝙪 𝙉𝙨𝙛𝙬 𝙢𝙖𝙠𝙖 𝙖𝙠𝙖𝙣 𝙙𝙞 𝙗𝙡𝙤𝙘𝙠 𝙤𝙡𝙚𝙝 𝙗𝙤𝙩, 𝙟𝙞𝙠𝙖 𝙙𝙞 𝙜𝙘 𝙩𝙤𝙡𝙤𝙣𝙜 𝙖𝙙𝙢𝙞𝙣 𝙪𝙣𝙩𝙪𝙠 𝙢𝙚𝙣𝙜𝙝𝙪𝙗𝙪𝙣𝙜𝙞 𝙠𝙖𝙢𝙞!!
⬡ 𝙈𝙤𝙝𝙤𝙣 𝙪𝙣𝙩𝙪𝙠 𝙩𝙞𝙙𝙖𝙠 𝙈𝙚𝙣𝙚𝙡𝙥𝙤𝙣 𝘽𝙤𝙩 𝙠𝙖𝙧𝙚𝙣𝙖 𝘽𝙤𝙩 𝙞𝙣𝙞 𝙨𝙪𝙙𝙖𝙝 𝙢𝙚𝙢𝙞𝙡𝙞𝙠𝙞 𝙊𝙩𝙤𝙢𝙖𝙩𝙞𝙨 𝘽𝙡𝙤𝙠𝙞𝙧 𝘽𝙖𝙜𝙞 𝙤𝙧𝙖𝙣𝙜 𝙮𝙖𝙣𝙜 𝙣𝙚𝙡𝙥𝙤𝙣 𝘽𝙤𝙩
⬡ 𝙆𝙖𝙢𝙞 𝙩𝙞𝙙𝙖𝙠 𝙗𝙚𝙧𝙩𝙖𝙣𝙜𝙜𝙪𝙣𝙜 𝙟𝙖𝙬𝙖𝙗 𝙖𝙩𝙖𝙨 𝙥𝙚𝙣𝙮𝙖𝙡𝙖𝙝𝙜𝙪𝙣𝙖𝙖𝙣 𝙗𝙤𝙩
⬡ 𝙆𝙖𝙢𝙞 𝙩𝙞𝙙𝙖𝙠 𝙗𝙚𝙧𝙩𝙖𝙣𝙜𝙜𝙪𝙣𝙜 𝙟𝙖𝙬𝙖𝙗 𝙖𝙩𝙖𝙨 𝙠𝙚𝙗𝙤𝙘𝙤𝙧𝙖𝙣 𝙙𝙖𝙩𝙖 𝙥𝙧𝙞𝙗𝙖𝙙𝙞 𝙖𝙣𝙙𝙖
⬡ 𝙐𝙨𝙚𝙧𝙨 𝙙𝙞𝙡𝙖𝙧𝙖𝙣𝙜 𝙢𝙚𝙣𝙜𝙞𝙧𝙞𝙢𝙠𝙖𝙣 𝙗𝙚𝙧𝙗𝙖𝙜𝙖𝙞 𝙗𝙪𝙜, 𝙫𝙞𝙧𝙩𝙚𝙭, 𝙙𝙡𝙡 𝙠𝙚 𝙣𝙤𝙢𝙤𝙧 𝙗𝙤𝙩.
⬡ 𝙐𝙨𝙚𝙧𝙨 𝙙𝙞𝙝𝙖𝙧𝙖𝙥 𝙩𝙞𝙙𝙖𝙠 𝙢𝙚𝙡𝙖𝙠𝙪𝙠𝙖𝙣 𝙨𝙥𝙖𝙢 𝙙𝙖𝙡𝙖𝙢 𝙥𝙚𝙣𝙜𝙜𝙪𝙣𝙖𝙖𝙣 𝙗𝙤𝙩.
⬡ 𝙐𝙨𝙚𝙧𝙨 𝙙𝙞𝙡𝙖𝙧𝙖𝙣𝙜 𝙢𝙚𝙣𝙖𝙢𝙗𝙖𝙝𝙠𝙖𝙣 𝙣𝙤𝙢𝙤𝙧 𝙗𝙤𝙩 𝙨𝙚𝙘𝙖𝙧𝙖 𝙞𝙡𝙡𝙚𝙜𝙖𝙡, 𝙪𝙣𝙩𝙪𝙠 𝙢𝙚𝙣𝙖𝙢𝙗𝙖𝙝𝙠𝙖𝙣 𝙨𝙞𝙡𝙖𝙝𝙠𝙖𝙣 𝙝𝙪𝙗𝙪𝙣𝙜𝙞 𝙤𝙬𝙣𝙚𝙧.
⬡ 𝙐𝙨𝙚𝙧𝙨 𝙙𝙞𝙝𝙖𝙧𝙖𝙥 𝙪𝙣𝙩𝙪𝙠 𝙩𝙞𝙙𝙖𝙠 𝙢𝙚𝙣𝙮𝙖𝙡𝙖𝙝 𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙛𝙞𝙩𝙪𝙧 𝙛𝙞𝙩𝙪𝙧 𝙗𝙤𝙩.
╰═════════════════════════
╭═════〘 𝗞𝗘𝗕𝗜𝗝𝗔𝗞𝗔𝗡 𝗣𝗥𝗜𝗩𝗔𝗦𝗜 〙═══
1. 𝙇𝙮𝙣𝙓𝙯𝙮 𝙩𝙞𝙙𝙖𝙠 𝙖𝙠𝙖𝙣 𝙢𝙚𝙧𝙚𝙠𝙖𝙢 𝙙𝙖𝙩𝙖 𝙧𝙞𝙬𝙖𝙮𝙖𝙩 𝙘𝙝𝙖𝙩 𝙪𝙨𝙚𝙧.
2. 𝙇𝙮𝙣𝙓𝙯𝙮 𝙩𝙞𝙙𝙖𝙠 𝙖𝙠𝙖𝙣 𝙢𝙚𝙣𝙮𝙚𝙗𝙖𝙧𝙠𝙖𝙣 𝙣𝙤𝙢𝙤𝙧 𝙪𝙨𝙚𝙧𝙨.
3. 𝙇𝙮𝙣𝙓𝙯𝙮 𝙩𝙞𝙙𝙖𝙠 𝙖𝙠𝙖𝙣 𝙢𝙚𝙣𝙮𝙞𝙢𝙥𝙖𝙣 𝙢𝙚𝙙𝙞𝙖 𝙮𝙖𝙣𝙜 𝙙𝙞𝙠𝙞𝙧𝙞𝙢𝙠𝙖𝙣 𝙤𝙡𝙚𝙝 𝙪𝙨𝙚𝙧𝙨.
4. 𝙇𝙮𝙣𝙓𝙯𝙮 𝙩𝙞𝙙𝙖𝙠 𝙖𝙠𝙖𝙣 𝙢𝙚𝙣𝙮𝙖𝙡𝙖𝙝 𝙜𝙪𝙣𝙖𝙠𝙖𝙣 𝙙𝙖𝙩𝙖 𝙙𝙖𝙩𝙖 𝙪𝙨𝙚𝙧𝙨.
5. 𝙊𝙬𝙣𝙚𝙧 𝙇𝙮𝙣𝙓𝙯𝙮 𝙗𝙚𝙧𝙝𝙖𝙠 𝙢𝙚𝙡𝙞𝙝𝙖𝙩 𝙙𝙖𝙩𝙖 𝙧𝙞𝙬𝙖𝙮𝙖𝙩 𝙘𝙝𝙖𝙩 𝙪𝙨𝙚𝙧𝙨.
6. 𝙊𝙬𝙣𝙚𝙧 𝙇𝙮𝙣𝙓𝙯𝙮 𝙗𝙚𝙧𝙝𝙖𝙠 𝙢𝙚𝙡𝙞𝙝𝙖𝙩 𝙨𝙩𝙖𝙩𝙪𝙨 𝙪𝙨𝙚𝙧𝙨.
7. 𝙊𝙬𝙣𝙚𝙧 𝙇𝙮𝙣𝙓𝙯𝙮 𝙙𝙖𝙥𝙖𝙩 𝙢𝙚𝙡𝙞𝙝𝙖𝙩 𝙧𝙞𝙬𝙖𝙮𝙖𝙩 𝙘𝙝𝙖𝙩, 𝙙𝙖𝙣 𝙢𝙚𝙙𝙞𝙖 𝙮𝙖𝙣𝙜 𝙙𝙞𝙠𝙞𝙧𝙞𝙢𝙠𝙖𝙣 𝙪𝙨𝙚𝙧𝙨.
╰═════════════════════════
║╭─────❉ 〔 𝗦𝗧𝗔𝗧𝗨𝗦 𝗕𝗢𝗧 〕 ❉─────
║│➥ *name:* 𝙇𝙮𝙣𝙓𝙯𝙮
║│➥ *HomePage:* github.com/LANxBOT
║│➥ *Issue:* https://github.com/LANxBOT
║│➥ *Total user:* *${Object.keys(global.db.data.users).length}* Pengguna
║╰──────────────────
║╭─────❉〘 𝘿𝙊𝙉𝘼𝙎𝙄 〙❉───── 
║│➥ Digi : 60149431385
║│➥ Umobile : 60189830350
║╰──────────────────
║╭─────❉〘 𝗥𝗘𝗤𝗨𝗘𝗦𝗧 〙❉─────
║│➥https://github.com/LANxBOT
║╰──────────────────
╠════════════════════════
║╭────❉ 「 𝙎𝙊𝘾𝙄𝘼𝙇 𝙈𝙀𝘿𝙄𝘼 」 ❉─────
║│ ❍ *𝗢𝗪𝗡𝗘𝗥*          :
║│ wa.me/60189830350
║│ ❍ *𝗬𝗢𝗨𝗧𝗨𝗕𝗘*               :
║│ https://tinyurl.com/ya49ovfp
║│ ❍ *𝗧𝗜𝗞𝗧𝗢𝗞*                   :
║│ https://vt.tiktok.com/ZSeos3uX5/
║╰──────────────────
╠════════════════════════
║╭─────────────────
║│ ©𝗕𝗮𝘀𝗲𝗡𝗲𝘄 𝙇𝙮𝙣𝙓𝙯𝙮
║│ 𝘾𝙧𝙚𝙖𝙩𝙤𝙧 𝙗𝙮 𝙇𝙖𝙣𝙓𝙯𝙮👑
║╰──────────────────
╠════════════════════════
║╭─────────────────
║│ ©𝟮𝟬𝟮𝟭 𝗥𝗽𝗴 𝘄𝗮𝗯𝗼𝘁-𝗮𝗾
║│ 𝗦𝗰𝗿𝗶𝗽 𝗼𝗿𝗶𝗴𝗶𝗻𝗮𝗹 𝗯𝘆 𝗟𝗮𝗻𝗫𝘇𝘆
║╰──────────────────
╰═════〘 𝙇𝙮𝙣𝙓𝙯𝙮 *_?_*〙 ═`.trim()
  const button = {
        buttonText: 'Klik Di sini',
        description: kontol,
        sections:  [{title: "Silahkan di pilih gausah pilih yang gaada", rows: [
        {title: 'Menu Utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Sewa Bot', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewa"},
        {title: 'Group Bot', description: "Official Group Bot Lyn", rowId:".gcbot"},
        {title: 'Cara Invit?', description: "Cara Memasukkan Bot Di GC", rowId:".tutorbot"},
        {title: 'Owner', description: "Owner/Creator Bot", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(rules|rule)$/i
handler.help = ['rules']
module.exports = handler
