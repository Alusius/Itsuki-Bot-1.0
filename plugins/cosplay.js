let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://velgrynd.herokuapp.com/api/randomimage/cosplay?apikey=8NKQzMp5jUBrGnGJoJaHJmCGZ`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'WIBU', '©RadBotZ', 'Next', `${usedPrefix + command}`, m, false)
}
handler.help = ['cosplay']
handler.tags = ['anime']
handler.command = /^cosplay$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.limit = true

handler.fail = null

module.exports = handler
