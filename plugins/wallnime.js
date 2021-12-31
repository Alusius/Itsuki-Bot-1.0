let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://api.lolhuman.xyz/api/random/wallnime?apikey=Dawnfrostkey`)).buffer(), 'Nih kak', watermark, 'NEXT', `.${command}`, m)

}

handler.help = ['wallnime']
handler.tags = ['anime']
handler.command = /^(wallnime)$/i

module.exports = handler
