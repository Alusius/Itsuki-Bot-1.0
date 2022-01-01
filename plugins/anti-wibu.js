let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/wibu.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*IHH WIBU!*', 'status@broadcast')
}
handler.customPrefix = /wibu/i
handler.command = new RegExp

module.exports = handler
