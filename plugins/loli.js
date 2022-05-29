let fetch = require('node-fetch')

let handler = async (m, { conn, text }) => {
let res = await fetch(' https://raw.githubusercontent.com/Alfarqun/database/main/loli.json ')
if (!res.ok) throw await `${res.status} ${res.statusText}`;
let json = await res.json();
let url = json[Math.floor(Math.random() * json.length)]
await conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), 'Random Loli', watermark, 'NEXT', '/loli', m)
}
handler.command = /^(loli)$/i
handler.limit = true
handler.tags = ['anime']
handler.help = ['loli']
module.exports = handler
