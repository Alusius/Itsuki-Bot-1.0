const fetch = require('node-fetch');

let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `uhm.. teksnya mana?\n\ncontoh:\n${usedPrefix + command} membaca`
    let res = await fetch(global.API('pencarikode', '/kbbi', { kata: text }, 'APIKEY'))
    if (!res.ok) throw eror
    let json = await res.json()
    if (!json.status) throw json
    let list = json.kata.list.map((v, i) => `${i + 1}. ${v}`).join('\n')
    m.reply(`${json.kata.word}
    
${list}
`.trim())
}
handler.help = ['kbbi <teks>']
handler.tags = ['edukasi']
handler.command = /^kbbi$/i
module.exports = handler
