let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => { 
	if (!text) throw 'masukan link'

  await m.reply(global.wait) 
      let json = await (await fetch(`https://api.xteam.xyz/shorturl/bitly?url=${text}&apikey=cristian9407`)).json()
      if (!json.status) throw json
    let hasil = `ShortLink Telah Selesai :\n\nNih ${json.result.link}`.trim()
          
    m.reply(hasil)
    }
handler.help = ['bitly', 'short']
handler.tags = ['internet']
handler.command = /^(bitly|short)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler
