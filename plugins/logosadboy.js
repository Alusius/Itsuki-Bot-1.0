let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('*Wait Ngab*\nProses...')
  let res = `https://caliphapi.com/api/sadboy?text=${response[0]}&text2=${response[0]}&apikey=wVLiUzSa`
  conn.sendFile(m.chat, res, 'sadboy.jpg', `Sudah Jadi`, m, false)
}
handler.help = ['sadboylogo'].map(v => v + ' <text|text>')
handler.tags = ['nulis']
handler.command = /^(sadboylogo)$/i

module.exports = handler
