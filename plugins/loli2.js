//Zefkiel Bot, Haruno Bot
let handler = async(m, { conn }) => {
conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/loli' })
handler.help = ['loli2']
handler.tags = ['anime', 'internet']
handler.command = /^(loli2)$/i
handler.limit = true
module.export = handler
