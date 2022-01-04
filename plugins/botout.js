let { Presence } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text }) => {
	await conn.updatePresence(m.chat, Presence.composing) 
	conn.reply(m.chat,`_Mohon Maaf Semuanya Saya akan keluar Dari Grup ini dalam waktu ${encodeURIComponent(text)} Jam Lagi , Terima Kasih_ >_<`, m)
	setTimeout(() => { conn.groupLeave(m.chat, [m.sender]) }, encodeURIComponent(text) * 3600000)
}
handler.help = ['settime <Time>']
handler.tags = ['info']
handler.command = /^(settime)$/i
handler.owner = true
handler.exp = 0
module.exports = handler
