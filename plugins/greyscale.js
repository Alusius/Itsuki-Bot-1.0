// Tolong jangan bully saya bang,, saya cuman mau bisnis :)
const uploadImage = require('../lib/uploadImage');
const fetch = require('node-fetch');

let handler = async (m, { conn, args }) => {
  try {
    let gay = `sayang`

    if (!m.quoted) throw `Tag Fotonya ` + gay // org gay

    await m.reply(`*[❗] Wait,Sedang Dalam Proses...*`)
    let q = m.quoted ? m.quoted : m
    let media = await q.download()
    let img = await uploadImage(media)
    let buffer = await (await fetch('https://leyscoders-api.herokuapp.com/api/img/greyscale?url=' + img + '&apikey=MIMINGANZ')).buffer() // Masukan ApiKeymu disini..
    let res = await fetch('https://raw.githubusercontent.com/herokuapp-com/kuhong-api/main/info/credit.json')
    let json = await res.json()

    await conn.sendFile(m.chat, buffer, 'greyscale.jpg', 'Nih Kak', m)

  } catch (e) {

    err = await (await fetch('https://raw.githubusercontent.com/herokuapp-com/kuhong-api/main/info/erorr.json')).json() // jika Erorr
    throw err
  }
}
handler.help = ['greyscale reply']
handler.tags = ['sticker']
handler.command = /^greyscale$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = true

module.exports = handler
