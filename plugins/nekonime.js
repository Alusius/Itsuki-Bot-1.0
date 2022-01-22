let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://bx-hunter.herokuapp.com/api/sfw/neko?apikey=FuckBitch`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'Nekonya kak\nterkadang gambar mengandung nsfw', watermark, 'NEXT', `${usedPrefix + command}`, m, false)
}
handler.help = ['nekonime']
handler.tags = ['anime']
handler.command = /^nekonime$/i
handler.register = true

handler.limit = true

module.exports = handler
