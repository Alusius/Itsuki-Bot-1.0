let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
    if (!db.data.chats[m.chat].rpg && m.isGroup) throw global.rpg
    let healt = global.db.data.users[m.sender].healt
    let title = global.db.data.users[m.sender].title
    let role = global.db.data.users[m.sender].role
    let money = global.db.data.users[m.sender].money
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let sortedmoney = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].money - a[1].money)
    let usersmoney = sortedmoney.map(v => v[0])
    let str = `
Wallet *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*

🏷️Title: *${title}*\n
❤️Health: *${healt}*
💳Role: *${role}*
💰Money: *${money}*

Top Money *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}*
`.trim()
    await conn.send2ButtonLoc(m.chat, await (await fetch(bank)).buffer(), str, watermark, 'Adventure', '.adventure', 'Shop', '.shop', m)
}
handler.help = ['wallet', 'dompet']
handler.tags = ['rpg']
handler.command = /^(wallet|dompet)$/i
module.exports = handler

handler.register = true

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
