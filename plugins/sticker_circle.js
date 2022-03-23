const uploadImage = require('../lib/uploadImage')
const { sticker } = require('../lib/sticker')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  try {
    //  let [teks, teks2] = text.split('|')
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw 'Tidak ada foto'
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
    let img = await q.download()
    let url = await uploadImage(img)
    let wasted = `https://lolhuman.herokuapp.com/api/editor/roundimage?apikey=Dawnfrostkey&img=${url}`
    let stiker = await sticker(null, wasted, packname, author)
    conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  } catch (e) {
    m.reply('Reply image, Kalau gabisa error paok!!')
  }
}
handler.help = ['circle']
handler.tags = ['sticker']
handler.command = /^circle$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
