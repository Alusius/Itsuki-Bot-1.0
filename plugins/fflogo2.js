let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*Proses...*')
  let res = `http://api.lolhuman.xyz/api/ephoto1/freefire?apikey=rey2k21&text=${response}`
  conn.sendFile(m.chat, res, 'nama.jpg', `Dasar Player 8 Bit`, m, false)
}
handler.help = ['fflogo2'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(fflogo2)$/i
handler.limit = true
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba
