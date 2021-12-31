let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://api.lolhuman.xyz/api/random/sagiri?apikey=Dawnfrostkey`)).buffer(), 'Nih kak', watermark, 'NEXT', `.${command}`, m)

}

handler.help = ['sagiri']
handler.tags = ['anime']
handler.command = /^(sagiri)$/i

module.exports = handler
