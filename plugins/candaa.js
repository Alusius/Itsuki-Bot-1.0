let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/canda.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*CANDA TOD*', 'status@broadcast')
}

handler.customPrefix = /^(canda)$/i
handler.command = new RegExp

module.exports = handler
