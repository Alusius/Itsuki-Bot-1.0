let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('```Dalam Proses...```')
  let res = await fetch(`http://api.lolhuman.xyz/api/textprome2/avenger?apikey=rey2k21&text1=${response[0]}&text2=${response[1]}`)
  conn.sendFile(m.chat, res, 'nama.jpg', `Nih Mhank`, m, false)
}
handler.help = ['avengers'].map(v => v + ' <teks|teks>')
handler.tags = ['nulis']
handler.command = /^(avengers)$/i
handler.register = true

handler.limit = true

module.exports = handler
