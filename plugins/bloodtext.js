let fetch = require('node-fetch');
let ftype = require('file-type');
let { getBuffer, succes } = require('../lib/functions.js');

let handler = async(m, { conn, text }) => {
let str = `
Nih
`.trim()

    if (!text) return conn.reply(m.chat, 'Silahkan masukan teksnya', m)

  await m.reply('Sedang membuat...')

  let hasil = await (await fetch('http://api.lolhuman.xyz/api/textprome/bloodfrosted?apikey=rey2k21&text=' + text)).buffer()

     conn.sendFile(m.chat, hasil, 'foto.jpg', str, m)
}
handler.help = ['bloodtext <teks>']
handler.tags = ['sticker']
handler.command = /^(bloodtext)$/i
handler.register = true

handler.limit = true

module.exports = handler
