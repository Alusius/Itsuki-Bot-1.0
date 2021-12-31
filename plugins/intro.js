//let { getBuffer, succes } = require('../lib/functions.js');
let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
   let cap = `Nih Intro Mu Dah Jadi`
  if (!text) throw 'Masukkan Nama'
  m.reply('Sedang Diproses...')
     let intro = await fetch(`https://kuhong-api.herokuapp.com/api/intromaker?text=${text}&apikey=Coh48liHq136dyR2Tpe`)
    conn.sendFile(m.chat, intro, 'intro.mp4', cap, m)
    }

handler.help = ['intro <teks>']
handler.tags = ['maker']
handler.command = /^(intro)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler