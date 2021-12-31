let fs = require('fs')
let handler = async (m) => {
let ara = fs.readFileSync('./audio/baka.m4a') 
conn.fakeReply(m.chat, ara, '0@s.whatsapp.net', '*B,bakka !**', 'status@broadcast')
}

handler.customPrefix = ['b']
handler.tags = ['audio'] 
handler.command = /^(aka)$/i

handler.owner = false
handler.mods = false 
handler.premium = false
handler.group = false 
handler.private = false

module.exports = handler
