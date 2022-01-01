let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./audio/mimpi.mp3')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Mimpi Lu*', 'status@broadcast')
}
handler.customPrefix = /mimpi|Mimpi|ngayal|hayal|halu/i
handler.command = new RegExp

module.exports = handler
