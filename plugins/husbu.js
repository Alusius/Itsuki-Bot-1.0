let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://api.xteam.xyz/randomimage/husbu2?APIKEY=apivproject`)).buffer(), 'Nih kak', watermark, 'NEXT', `${usedPrefix + command}`, m)

}

handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i
handler.register = true

handler.limit = true

module.exports = handler
