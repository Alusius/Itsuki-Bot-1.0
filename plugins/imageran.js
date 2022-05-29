let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://api.xteam.xyz/randomimage/${command}?APIKEY=apivproject`)).buffer(), 'Nih kak', watermark, 'NEXT', `${usedPrefix + command}`, m)

}

handler.help = ['exo', 'bts', 'cewe', 'cowo', 'blackpink']
handler.tags = ['image']
handler.command = /^(exo|bts|cewe|cowo|blackpink)$/i
handler.register = true

handler.limit = true

module.exports = handler
