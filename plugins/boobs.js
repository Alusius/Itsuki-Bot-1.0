const fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
  if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  json = await fetch(`https://meme-api.herokuapp.com/gimme/biganimetiddies`)
  conn.sendButton(m.chat, await (await fetch(json.url)).buffer(), 'oppai', watermark, 'NEXT', `${usedPrefix + command}`, m, false)
}
handler.help = ['boobs']
handler.tags = ['hentai']
handler.command = /^boobs$/i
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
