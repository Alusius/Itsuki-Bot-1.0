let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/sabar.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*sabar*', 'status@broadcast')
}

handler.customPrefix = /^(sabar)$/i
handler.command = new RegExp

module.exports = handler
