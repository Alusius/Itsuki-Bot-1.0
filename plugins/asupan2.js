let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendFile(m.chat, `https://api-alphabot.herokuapp.com/api/asupan/${command}?apikey=Alphabot`, '', 'Nih kak', m)

}

handler.help = ['asupan']
handler.tags = ['internet', 'premium']
handler.command = /^(chika|delvira|ayu|bunga|aura|nisa|ziva|yana|viona|syania|riri|syifa|mamagina|alcakenya|mangayutri|rikagusriani|asupan|bocil|geayubi|santuy|ukhty)$/i

handler.premium = true

handler.limit = true

module.exports = handler
