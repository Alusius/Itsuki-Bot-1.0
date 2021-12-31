let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://api.lolhuman.xyz/api/random/kanna?apikey=Dawnfrostkey`)).buffer(), 'Nih kak', watermark, 'NEXT', `.${command}`, m)

}

handler.help = ['kanna']
handler.tags = ['anime']
handler.command = /^(kanna)$/i

module.exports = handler
