let handler = m => m

let linkRegex = /chat.whatsapp.com/i

handler.before = function(m, { user, isAdmin, isBotAdmin, groupMetadata }) {
  if (m.isBaileys && m.fromMe) return false
  let participants = m.isGroup ? groupMetadata.participants : []
  let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {}
  if (!(bot.isAdmin || bot.isSuperAdmin)) return false
  let chat = global.db.data.chats[m.chat]
  let name = this.getName(m.sender)
  let link = linkRegex.exec(m.text)
  let aizin = m.text.includes("#izin") || m.text.includes("#Izin")

  if (chat.antiLink && link && !aizin && !isAdmin) {
    m.reply(`*「 ANTI LINK V2 」*\n\nTerdeteksi *${name}* telah mengirim link group!\n\nMaaf Kamu akan dikick dari grup ini!`)
    this.groupRemove(m.chat, [m.sender])
  } else if ( chat.antiLink && link && aizin && !isAdmin) {
    this.sendButton( m.chat, `KAMU TIDAK AKAN DIKICK KARENA KAMU MEMAKAI TANDA #izin`, `AntilinkV2`, `Oke`, `ok`, m)
  } else if (chat.antiLink && link && isAdmin) {
    return m.reply("KAMU TIDAK AKAN DIKICK KARENA KAMU ADMIN")
  }
}
handler.group = true

module.exports = handler