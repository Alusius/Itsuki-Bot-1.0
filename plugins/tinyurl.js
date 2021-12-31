let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => { 
	if (!text) throw 'masukan link'

  await m.reply(global.wait) 
      let json = await (await fetch(`https://api.xteam.xyz/shorturl/tinyurl?url=${text}&apikey=Dawnfrostkey`)).json()
      if (!json.status) throw json
    let hasil = `ShortLink Telah Selesai :\n\nNih ${json.result}`.trim()
          
    m.reply(hasil)
    }
handler.help = ['tinyurl', 'short2']
handler.tags = ['internet']
handler.command = /^(tinyurl|short2)$/i
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
