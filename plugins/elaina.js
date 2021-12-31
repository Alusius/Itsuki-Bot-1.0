let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://api.lolhuman.xyz/api/random/elaina?apikey=Dawnfrostkey`)).buffer(), 'Nih kak', watermark, 'NEXT', `.${command}`, m)

}

handler.help = ['elaina']
handler.tags = ['anime']
handler.command = /^(elaina)$/i

module.exports = handler
