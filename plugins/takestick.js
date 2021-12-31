const { MessageType, mimetype } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text }) => {
  let stiker = false
    let [packname, ...author] = text.split('|')
    author = (author || []).join('|')
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
let img = await q.download()
if (!img) throw 'Foto/Video tidak ditemukan'
    stiker = await sticker(img, false, packname || global.packname, author || global.author)
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw 'Conversion failed'
  }
}
handler.help = ['takestick']
handler.tags = ['sticker']
handler.command = /^takestick$/i

module.exports = handler