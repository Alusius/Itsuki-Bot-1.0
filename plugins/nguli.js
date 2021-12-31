let handler = async (m, { conn }) => {
  if (new Date - global.db.data.users[m.sender].lastnguli > 86400000) {
    global.db.data.users[m.sender].limit += 5
    m.reply('_Selamat kamu mendapatkan +5 limit_')
    global.db.data.users[m.sender].lastnguli = new Date * 1
  } else m.reply('Anda sudah mengklaim upah nguli hari ini')
}
handler.help = ['nguli']
handler.tags = ['xp']
handler.command = /^(nguli)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = 0

module.exports = handler

