let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://server-api-rey.herokuapp.com/api/wallpaper/anime?apikey=apirey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'Nih kak', watermark, 'NEXT', `${usedPrefix + command}`, m, false)
}
handler.help = ['wallhpnime']
handler.tags = ['anime']
handler.command = /^wallhpnime$/i
handler.register = true

handler.limit = true

module.exports = handler
