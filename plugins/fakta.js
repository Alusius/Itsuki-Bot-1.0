let fetch = require('node-fetch')


let handler  = async (m, { conn }) => {
  ddd = await fetch('https://recoders-area.caliph.repl.co/api/fakta?apikey='+APIKeys["https://recoders-area.caliph.repl.co"])
  f = await ddd.json()
  conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Fakta unik')).buffer(), `*─────── 「 FAKTA 」 ───────*\n\n${f.result}`, '_*Fakta*_', 'Faktaunik', `.faktaunik`, m)
} 
handler.help = ['fakta']
handler.tags = ['edukasi']
handler.command = /^(fakta|faktaunik)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
