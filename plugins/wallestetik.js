let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://server-api-rey.herokuapp.com/api/wallpaper/wallhp?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'Nih kak', watermark, 'NEXT', `${usedPrefix + command}`, m, false)
}
handler.help = ['wallestetik']
handler.tags = ['internet']
handler.command = /^wallestetik$/i
handler.register = true

handler.limit = true

module.exports = handler
