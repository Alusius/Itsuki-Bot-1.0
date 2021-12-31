let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
	if (!db.data.chats[m.chat].rpg && m.isGroup) throw global.rpg
    let healt = global.db.data.users[m.sender].healt
    let armor = global.db.data.users[m.sender].armor 
    let pickaxe = global.db.data.users[m.sender].pickaxe
    let pdurability = global.db.data.users[m.sender].pickaxedurability
    let fishingrod = global.db.data.users[m.sender].fishingrod
    let fdurability = global.db.data.users[m.sender].fishingroddurability
    let warn = global.db.data.users[m.sender].warn
    let title = global.db.data.users[m.sender].title
    let role = global.db.data.users[m.sender].role
    let pet = global.db.data.users[m.sender].pet
    let limit = global.db.data.users[m.sender].limit
    let kucing = global.db.data.users[m.sender].kucing
    let _kucing = global.db.data.users[m.sender].anakkucing
    let rubah = global.db.data.users[m.sender].rubah
    let _rubah = global.db.data.users[m.sender].anakrubah
    let kuda = global.db.data.users[m.sender].kuda
    let _kuda = global.db.data.users[m.sender].anakkuda
    let diamond = global.db.data.users[m.sender].diamond
    let batu = global.db.data.users[m.sender].batu
    let iron = global.db.data.users[m.sender].iron
    let potion = global.db.data.users[m.sender].potion
    let common = global.db.data.users[m.sender].common
    let makananpet = global.db.data.users[m.sender].makananpet
    let uncommon = global.db.data.users[m.sender].uncommon
    let mythic = global.db.data.users[m.sender].mythic
    let legendary = global.db.data.users[m.sender].legendary
    let level = global.db.data.users[m.sender].level
    let money = global.db.data.users[m.sender].money
    let exp = global.db.data.users[m.sender].exp
    let sampah = global.db.data.users[m.sender].sampah
    let { max } = levelling.xpRange(level, exp, global.multiplier)
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]
    let sortedmoney = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].money - a[1].money)
    let sortedlevel = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].level - a[1].level)
    let sorteddiamond = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].diamond - a[1].diamond)
    let sortedpotion = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].potion - a[1].potion)
    let sortedsampah = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].sampah - a[1].sampah)
    let sortedcommon = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].common - a[1].common)
    let sorteduncommon = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].uncommon - a[1].uncommon)
    let sortedmythic = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].mythic - a[1].mythic)
    let sortedlegendary = Object.entries(global.DATABASE.data.users).sort((a, b) => b[1].legendary - a[1].legendary)
    let usersmoney = sortedmoney.map(v => v[0])
    let usersdiamond = sorteddiamond.map(v => v[0])
    let userspotion = sortedpotion.map(v => v[0])
    let userssampah = sortedsampah.map(v => v[0])
    let userslevel = sortedlevel.map(v => v[0])
    let userscommon = sortedcommon.map(v => v[0])
    let usersuncommon = sorteduncommon.map(v => v[0])
    let usersmythic = sortedmythic.map(v => v[0])
    let userslegendary = sortedlegendary.map(v => v[0])
    let str = `
Wallet *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*

🏷️Title: *${title}*\n
❤️Health: *${healt}*
💳Role: *${role}*
💰Money: *${money}*

Top Money *${usersmoney.indexOf(m.sender) + 1}* dari *${usersmoney.length}*
`.trim()
    await conn.send2ButtonLoc(m.chat, await(await fetch(bank)).buffer(), str, watermark, 'Adventure', '.adventure', 'Shop', '.shop', m)
}
handler.help = ['wallet', 'dompet']
handler.tags = ['rpg']
handler.command = /^(wallet|dompet)$/i
module.exports = handler

handler.register = true

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
