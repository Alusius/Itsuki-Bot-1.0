let fetch = require('node-fetch')
let handler  = async (m, { conn, usedPrefix, command }) => {
  let res = await fetch(`https://raw.githubusercontent.com/Alfarqun/database/main/jokes/darkjokes.json`)
  let json = await res.buffer()
  conn.sendButtonImg(m.chat, json, 'DarkJokes', watermark, 'Get Again', `${usedPrefix + command}`, m)
}
handler.help = ['darkjokes', 'darkjoke']
handler.tags = ['internet','image']

handler.command = /^(darkjokes|darkjoke)$/i
handler.register = true

module.exports = handler
