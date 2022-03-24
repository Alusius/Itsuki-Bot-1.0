const Canvacord = require('canvacord');

let handler = async (m, { conn, text }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Contoh penggunaan, Reply atau send image dengan caption #8bit'
  try {
    if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
    let image = await q.download()

    Canvacord.Canvas.pixelate(image)
      .then(async buffer => {
        conn.sendMessage(m.chat, buffer, 'imageMessage', { quoted: m, caption: '*Free Fire RTX On!!*' })
      })
  } catch (e) {
    m.reply('Error || Pastikan menggunakan image!!\njika masih error yah dari sononya:v')
    //m.reply(`${e}`)
  }
}
handler.help = ['pixel']
handler.tags = ['sticker']
handler.command = /^8bit|pixel|pixelate$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
