let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./audio/araara.m4a')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*Ara Ara*', 'status@broadcast')
}
handler.customPrefix = /ara ara|araara|ara2|araara|arara/i
handler.command = new RegExp

module.exports = handler
