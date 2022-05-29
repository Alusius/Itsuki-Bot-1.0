let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://api.lolhuman.xyz/api/random2/baka?apikey=rey2k21`)).buffer(), 'nih', watermark, 'NEXT', `${usedPrefix + command}`, m)

}

handler.help = ['baka']
handler.tags = ['anime']
handler.command = /^(baka)$/i

module.exports = handler
