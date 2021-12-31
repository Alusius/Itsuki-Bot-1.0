let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/besok-senin.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*≥﹏≤*', 'status@broadcast')
}

handler.customPrefix = /^(senin|Senin|Besok Senin|Besok senin|besok senin|besok Senin)$/i
handler.command = new RegExp

module.exports = handler