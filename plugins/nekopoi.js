let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => { 

  await m.reply(global.wait)
    let res = await fetch(`https://mhankbarbar.herokuapp.com/api/nekopoi?url=${text}&apiKey=N2Ws9kp3KTDYtry5Jjyz`)
    let hasil = `*Nekopoi Link Tersedia* : ${res.data.judul}\n*Result* : ${res.data.result}\n*Dilihat* : ${res.data.dilihat}\n*Thumbnail* : ${res.data.tumbnail}`
    
    conn.sendMessage(m.chat, hasil.trim(), m)
    }
handler.help = ['nekopoi <link>']
handler.tags = ['hentai']
handler.command = /^nekopoi$/i

handler.limit = true

module.exports = handler
  