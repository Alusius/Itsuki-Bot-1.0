let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://velgrynd.herokuapp.com/api/randomimage/milf?apikey=8NKQzMp5jUBrGnGJoJaHJmCGZ`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'WIBU', watermark, 'NEXT', `${usedPrefix + command}`, m, false)
}
handler.help = ['milf']
handler.tags = ['anime']
handler.command = /^milf$/i

handler.limit = true

module.exports = handler
