let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://elyas-api2.herokuapp.com/api/randomimage/husbu`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'Nih Kak', watermark, 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^husbu$/i

handler.limit = true

module.exports = handler
