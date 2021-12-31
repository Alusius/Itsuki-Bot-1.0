let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/pembohong.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*DASAR PEMBOHONG*', 'status@broadcast')
}

handler.customPrefix = /^(bener|beneran)$/i
handler.command = new RegExp

module.exports = handler
