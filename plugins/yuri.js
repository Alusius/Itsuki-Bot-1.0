let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
     let handler  = async (m, { conn, args }) => {
if (!db.data.chats[m.chat].nsfw && m.isGroup) throw 'Feature Nsfw Disable\nType *!enable* *nsfw* to activate this feature'
     json = (await Neko.nsfw.yuri()).url
   conn.sendButtonImg(m.chat, await (await fetch(json)).buffer, 'Nih kak', watermark, 'NEXT', '.yuri', m, false)
}
handler.help = ['yuri']
handler.tags = ['hentai']
handler.command = /^yuri$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.limit = true
handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
