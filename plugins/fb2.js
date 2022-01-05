let fetch = require('node-fetch')

let handler = async (m, { conn, command, text, usedPrefix }) => {
    if (!text) throw `uhm.. urlnya mana?\n\npenggunaan:\n${usedPrefix + command} url\n\ncontoh:\n${usedPrefix + command} https://www.facebook.com/100003873289819/videos/625313175459585/`
    let res = await fetch(`https://api.neoxr.eu.org/api/fb?url=${text}&apikey=yntkts`)
   
    let json = await res.json()
    if (!json.status) throw json
    await m.reply(wait)
    await conn.sendFile(m.chat, json.data[1].url, json.data[1].url, 'f', m)
}
handler.help = ['facebook2'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(facebook2|fb2)$/i

handler.limit = 1

module.exports = handler
