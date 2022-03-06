let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/tag.webp')
conn.fakeReply(m.chat, stc, '60189830350@s.whatsapp.net', '*Kenapa Tag Owner Saya*')
}
handler.customPrefix = /^(@60189830350)$/i
handler.command = new RegExp

module.exports = handler
