let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://server-api-rey.herokuapp.com/api/wallpaper/anime?apikey=apirey`)).buffer(), 'Nih kak', watermark, 'NEXT', `.${command}`, m)

}

handler.help = ['wallnime']
handler.tags = ['anime']
handler.command = /^(wallnime)$/i
handler.register = true

handler.limit = true

module.exports = handler
