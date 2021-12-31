let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://api.lolhuman.xyz/api/random/shota?apikey=Dawnfrostkey`)).buffer(), 'Nih kak', watermark, 'NEXT', `.${command}`, m)

}

handler.help = ['shota']
handler.tags = ['anime']
handler.command = /^(shota)$/i

module.exports = handler
