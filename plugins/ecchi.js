let axios = require('axios');

let handler = async (m, { conn }) => {
  if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  json = (await axios.get('https://meme-api.herokuapp.com/gimme/ecchi')).data
  conn.sendFile(m.chat, json.url, 'ecchi.jpg', json.title, m, false)
}
handler.help = ['ecchi']
handler.tags = ['hentai']
handler.command = /^ecchi$/i
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