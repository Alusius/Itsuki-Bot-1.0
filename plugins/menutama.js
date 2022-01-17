let { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler  = async (m, { conn, text }) => {
let nani = 'https://telegra.ph/file/d9c9976e61ab8f717ea65.jpg' 
  let chats = conn.chats.all().filter(v => !v.read_only && v.message && !v.archive).map(v => v.jid)
let content = conn.send3ButtonLoc(m.chat, await (await fetch(nani)).buffer(), `Halo *${conn.getName(m.sender)}* \nSaya BotolBotZ, Bot WhatsApp Yang Membantu Kamu Untuk Mempermudah Sesuatu Seperti Membuat Stiker Dan Lainnya, Ada Butuh Info Dariku?`, 'Note : Jika Button Tidak Muncul, Kamu Bisa Ketik #? all', 'MENU2', '.menu2', 'MENU3', '.menu3', `RULES`, `.rules`, m)
  for (let id of chats) conn.copyNForward(id, content, true)
}

handler.command = /^(menu|help)$/i

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
