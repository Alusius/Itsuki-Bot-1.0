let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/naniii.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*NANI*', 'status@broadcast')
}
handler.customPrefix = /Nanii/i
handler.command = new RegExp

module.exports = handler
