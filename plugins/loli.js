let fetch = require('node-fetch')
     let handler  = async (m, { conn, usedPrefix, command }) => {
    heum = await fetch(`https://api.lolhuman.xyz/api/random/loli?apikey=Dawnfrostkey`)
    json = await heum.buffer()
   conn.sendButtonImg(m.chat, json, 'Lomlinya kak\nterkadang gambar mengandung nsfw', 'RadBotZ×͜×', 'NEXT', `${usedPrefix + command}`, m, false)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^loli$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
