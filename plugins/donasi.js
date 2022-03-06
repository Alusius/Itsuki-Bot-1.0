//Jangan Di Hapus Tapi kalo Di tambah Boleh

let fetch = require('node-fetch')
let handler = async (m, { conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(thumbfoto)).buffer(), `
╭═══ 〔 𝐃𝐎𝐍𝐀𝐒𝐈 〕 ═══
║│➸ 𝐃𝐈𝐆𝐈:
║│➸ *60149431385*
║│
║│➸ 𝐔𝐌𝐎𝐁𝐈𝐋𝐄:
║│➸ *60189830350*
║│
║│➸ OWNER :
║│➸ wa.me/60189830350
║╰──────────────────
╰═══════════════════
`.trim(), watermark, 'Menu', '.menu', m)
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
