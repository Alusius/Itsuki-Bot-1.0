let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://server-api-rey.herokuapp.com/api/wallpaper/miku?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'Nih kak', watermark, 'NEXT', `${usedPrefix + command}`, m, false)
}
handler.help = ['miku']
handler.tags = ['anime']
handler.command = /^miku$/i
handler.register = true

handler.limit = true

module.exports = handler
