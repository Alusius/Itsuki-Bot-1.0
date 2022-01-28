let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://api.lolhuman.xyz/api/random/shinobu?apikey=rey2k21`)).buffer(), 'Nih kak', watermark, 'NEXT', `.${command}`, m)

}

handler.help = ['shinobu']
handler.tags = ['anime']
handler.command = /^(shinobu)$/i

module.exports = handler
