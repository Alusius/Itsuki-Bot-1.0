let fetch = require('node-fetch') 

let handler = async (m, { conn:fur, text, usedPrefix, command }) => { 

let res = await fetch(' https://raw.githubusercontent.com/Alfarqun/database/main/anime/randomanime.json')

 if (!res.ok) throw await `${res.status} ${res.statusText}`;
 
 let json = await res.json();
 
 let url = json[Math.floor(Math.random() * json.length)] 
await fur.sendButtonImg(m.chat, url, url, null, 'NEXT', `${usedPrefix + command}`, m) }
 handler.command = /^(randomnime)$/i
 handler.limit = true

 //handler.tags = ['f'] 

//handler.help = ['l'] 
module.exports = handler
