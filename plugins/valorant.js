let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = await fetch(`http://api.lolhuman.xyz/api/ephoto3/valorantbanner?apikey=rey2k21&text1=${response[0]}&text2=${response[1]}&text3=${response[2]}`)
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Mhank`, m, false)
}
handler.help = ['valorant'].map(v => v + ' <teks|teks|teks>')
handler.tags = ['nulis']
handler.command = /^(valorant)$/i
handler.register = true

handler.limit = true

module.exports = handler
