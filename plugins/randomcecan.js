let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://api-alphabot.herokuapp.com/api/cecan/${command}?apikey=Alphabot`)).buffer(), 'Nih kak', watermark, 'NEXT', `${usedPrefix + command}`, m)

}

handler.help = ['indonesia']
handler.tags = ['image', 'premium']
handler.command = /^(vietnam|malaysia|indonesia|korea|japan|china|thailand|jiso|lisa)$/i
handler.premium = true

handler.limit = true

module.exports = handler
