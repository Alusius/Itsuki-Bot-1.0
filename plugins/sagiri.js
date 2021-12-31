let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
  conn.sendButtonImg(m.chat, await ( await fetch(`https://api.lolhuman.xyz/api/random/sagiri?apikey=Dawnfrostkey`))).buffer(), 'Nih Kak', watermark, 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['sagiri']
handler.tags = ['anime']
handler.command = /^(sagiri)$/i

module.exports = handler
