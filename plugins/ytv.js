let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL sebagai parameter.\n\nContoh: ${usedPrefix + command} https://xxxxxxxx.com`
    let res = await fetch(global.API('rey', '/api/download/ytmp4', { url: text }, 'apikey'))
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendButtonVid(m.chat, await (await fetch(json.result.url)).buffer(), `Nih Kakk\n${json.result.title}`, watermark, 'Thanks', `Thanks`, m)
}
handler.command = /^ytmp4$/i
handler.tags = ['downloader']
handler.help = ['ytmp4']
handler.limit = true
module.exports = handler
