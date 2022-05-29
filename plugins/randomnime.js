let fetch = require('node-fetch') 
let handler = async (m, { conn, text, usedPrefix, command }) => { 
let res = await (await fetch('https://raw.githubusercontent.com/Alfarqun/database/main/anime/randomanime.json'))
 if (!res.ok) throw await `${res.status} ${res.statusText}`; 
 let json = await res.json(); 
 let url = json[Math.floor(Math.random() * json.length)] 
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), url, watermark, 'NEXT', `${usedPrefix + command}`, m)
}

handler.help = ['randomnime']
handler.tags = ['internet', 'anime'] 
handler.command = /^(randomnime)$/i
handler.register = true

handler.limit = true

module.exports = handler



//By Alfarqun
