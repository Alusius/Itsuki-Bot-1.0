let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix, command }) => {
conn.sendButtonImg(m.chat, await ( await fetch(global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'))).buffer(), 'Drag joles', watermark, 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['darkjokes']
handler.tags = ['internet','image']
handler.command = /^(darkjoke)$/i

module.exports = handler
