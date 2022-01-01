let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/sama2.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*OK*', 'status@broadcast')
}
handler.customPrefix = /thanks/i
handler.command = new RegExp

module.exports = handler
