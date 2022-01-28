const fetch = require('node-fetch')
const { sticker } = require('../lib/sticker.js')
const { MessageType } = require('@adiwajshing/baileys')

let handler  = async (m, { conn, text }) => {

 try {
  if (!text) throw 'Emojinya?'
  if (text) {
   await m.reply('Sedang membuat...')
    let img = await (await fetch(`http://api.lolhuman.xyz/api/smoji/${encodeURIComponent(text)}?apikey=rey2k21`)).buffer()
    if (!img) throw img
    let stiker = await sticker(img, false, 'Emoji Maker', 'Lord Mimin')
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  }
 } catch (e) {
   m.reply('Ada yang Erorr!')
  }
}
handler.help = ['semoji2 <teks>']
handler.tags = ['sticker']
handler.command = /^semoji2$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
