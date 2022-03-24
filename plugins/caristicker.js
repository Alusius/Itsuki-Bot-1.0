const imageToBase64 = require('image-to-base64');
const { sticker } = require('../lib/sticker');
const fetch = require('node-fetch');

let handler = async (m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap masukan query!', m)

  await m.reply('Searching...')
  let json = await (await fetch('https://api.zeks.xyz/api/searchsticker?apikey=MIMINGANZ&q=' + text)).json()
  let body = JSON.parse(JSON.stringify(json.sticker))
  let result = body[Math.floor(Math.random() * body.length)];
  let img = await imageToBase64(result)
  let buffer = Buffer.from(img, 'base64')
  let hasil = await sticker(buffer, false, 'Sticker Search', 'MIMIN NETBOT')

  conn.sendFile(m.chat, hasil, 'sticker.jpg', '', m, false, { asSticker: true })
}
handler.help = ['caristicker <query>']
handler.tags = ['tools']
handler.command = /^(caristic?ker)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
