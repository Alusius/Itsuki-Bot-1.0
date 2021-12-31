let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[❗] Wait,Tunggu Bentar Kak Sedang Dalam Proses...*')
  let res = `http://lolhuman.herokuapp.com/api/textprome/advanceglow?apikey=Dawnfrostkey&text=${response}`
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Mhank`, m, false)
}
handler.help = ['advancedglow'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(advancedglow)$/i
handler.register = true
handler.limit = true

module.exports = handler

