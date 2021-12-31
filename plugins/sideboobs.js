let axios = require('axios');
let fetch = require('node-fetch')
let neko = require('nekos.life')
let Neko = new neko()
     let handler  = async (m, { conn, usedPrefix, command }) => {
     	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
     json = await fetch('https://meme-api.herokuapp.com/gimme/sideboobs')
   conn.sendButton(m.chat, await (await fetch(json.img)).buffer(), json.title, '©RadBotZ', 'Next', `${usedPrefix + command}`, m, false)
}
handler.help = ['sideboobs']
handler.tags = ['hentai']
handler.command = /^sideboobs$/i
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