let handler = async (m, { conn }) => {
if (!db.data.chats[m.chat].rpg && m.isGroup) throw global.rpg
let hasil = Math.floor(Math.random() * 1000)
global.db.data.users[m.sender].exp += hasil * 1 // Number(hasil)
   await m.reply(`Selamat! Anda mendapatkan ${hasil} exp!`)
}

handler.help = ['miningexp']
handler.tags = ['rpg']
handler.command = /^(miningexp)$/i
handler.limit = true
handler.register = true

module.exports = handler
 