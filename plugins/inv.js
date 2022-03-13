let levelling = require('../lib/levelling')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
	if (!db.data.chats[m.chat].rpg && m.isGroup) throw global.rpg
	let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let healt = global.db.data.users[who].healt
    let armor = global.db.data.users[who].armor 
    let sword = global.db.data.users[m.sender].sword
    let sdurability = global.db.data.users[m.sender].sworddurability
    let pickaxe = global.db.data.users[who].pickaxe
    let pdurability = global.db.data.users[who].pickaxedurability
    let fishingrod = global.db.data.users[who].fishingrod
    let fdurability = global.db.data.users[who].fishingroddurability
    let warn = global.db.data.users[who].warn
    let title = global.db.data.users[who].title
    let role = global.db.data.users[who].role
    let pet = global.db.data.users[who].pet
    let limit = global.db.data.users[who].limit
    let kucing = global.db.data.users[who].kucing
    let _kucing = global.db.data.users[who].anakkucing
    let rubah = global.db.data.users[who].rubah
    let _rubah = global.db.data.users[who].anakrubah
    let kuda = global.db.data.users[who].kuda
    let _kuda = global.db.data.users[who].anakkuda
    let diamond = global.db.data.users[who].diamond
    let batu = global.db.data.users[who].batu
    let iron = global.db.data.users[who].iron
    let potion = global.db.data.users[who].potion
    let common = global.db.data.users[who].common
    let makananpet = global.db.data.users[who].makananpet
    let uncommon = global.db.data.users[who].uncommon
    let mythic = global.db.data.users[who].mythic
    let legendary = global.db.data.users[who].legendary
    let level = global.db.data.users[who].level
    let money = global.db.data.users[who].money
    let exp = global.db.data.users[who].exp
    let sampah = global.db.data.users[who].sampah
    let { max } = levelling.xpRange(level, exp, global.multiplier)
    let name = m.fromMe ? conn.user : conn.contacts[who]
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
Inventory *${name.vnmae || name.notify || name.name || ('+' + name.jid.split`@`[0])}*
${readMore}
🏷️Title: *${title ? '' : 'Tidak ada'}*\n
❤️Health: *${healt}*
💳Role: *${role}*
🥋Armor: *${armor == 0 ? 'Tidak Punya' : '' || armor == 1 ? 'Leather Armor' : '' || armor == 2 ? 'Iron Armor' : '' || armor == 3 ? 'Gold Armor' : '' || armor == 4 ? 'Diamond Armor' : '' || armor == 5 ? 'Netherite Armor' : ''}*\n
🗡️Sword: *${sword == 0 ? 'Tidak Punya' : 'Cracked Sword' || sword == 1 ? 'Stone Sword' : '' || pickaxe == 2 ? 'Golden Sword' : '' || pickaxe == 3 ? 'Iron Sword' : '' || armor == 4 ? 'Diamond Sword' : '' || armor == 5 ? 'Netherite Sword' : ''}*
🗡️Sword: *${sdurability}*
⛏️Pickaxe: *${pickaxe == 0 ? 'Tidak Punya' : '' || pickaxe == 1 ? 'Stone Pickaxe' : '' || pickaxe == 2 ? 'Golden Pickaxe' : '' || pickaxe == 3 ? 'Iron Pickaxe' : '' || armor == 4 ? 'Diamond Pickaxe' : '' || armor == 5 ? 'Netherite Pickaxe' : ''}*
⛏️Durability: *${pdurability}*
🎣Fishing Rod: *${fishingrod == 0 ? 'Tidak Punya' : '' || fishingrod == 1 ? 'Pancingan Bambu' : '' || fishingrod == 2 ? 'Pancingan Biasa' : '' || fishingrod == 3 ? 'Pancingan Besi' : '' || fishingrod == 4 ? 'Pancingan Emas' : '' || fishingrod == 5 ? 'Jaring Ikan' : ''}*
🎣Durability: *${fdurability}*\n
💰Money: *${money}*
🪙Limit: *${limit}*
🧬Level: *${level}*
📈Exp: *${exp}*\n
*Inventory*
💎Diamond: *${diamond}*
🪨Batu: *${batu}*
⛓️Iron: *${iron}*
🧃Potion: *${potion}*
🗑️Sampah: *${sampah}*
🍖Makanan Pet: *${makananpet}*
Total inv: *${diamond + potion + sampah + makananpet}* item\n
*Crate*
📦Common: *${common}*
📦Uncommon: *${uncommon}*
📦Mythic: *${mythic}*
🎁Legendary: *${legendary}*
🎁Pet: *${pet}*\n
*Pet*
🐎Kuda: *${kuda == 0 ? 'Tidak Punya' : '' || kuda == 1 ? 'Level 1' : '' || kuda == 2 ? 'Level 2' : '' || kuda == 3 ? 'Level 3' : '' || kuda == 4 ? 'Level 4' : '' || kuda == 5 ? 'Level MAX' : ''}*
🦊Rubah: *${rubah == 0 ? 'Tidak Punya' : '' || rubah == 1 ? 'Level 1' : '' || rubah == 2 ? 'Level 2' : '' || rubah == 3 ? 'Level 3' : '' || rubah == 4 ? 'Level 4' : '' || rubah == 5 ? 'Level MAX' : ''}*
🐈Kucing: *${kucing == 0 ? 'Tidak Punya' : '' || kucing == 1 ? 'Level 1' : '' || kucing == 2 ? 'Level 2' : '' || kucing == 3 ? 'Level 3' : '' || kucing == 4 ? 'Level 4' : '' || kucing == 5 ? 'Level MAX' : ''}*\n\n
*Progres*\n
╭────────────────
│🧬Level *${level}* To Level *${level}*
│📈Exp *${exp}* -> *${max}*
╰────────────────
╭────────────────
│Rubah🦊 ${rubah == 0 ? 'Tidak Punya' : '' || rubah > 0 && rubah < 5 ? `Level *${rubah}* To level *${rubah + 1}*\n│Exp *${_rubah}* -> *${rubah *100}*` : '' || rubah == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Kucing🐈 ${kucing == 0 ? 'Tidak Punya' : '' || kucing > 0 && kucing < 5 ? `Level *${kucing}* To level *${kucing + 1}*\n│Exp *${_kucing}* -> *${kucing *100}*` : '' || kucing == 5 ? '*Max Level*' : ''}
╰────────────────
╭────────────────
│Kuda🐎 ${kuda == 0 ? 'Tidak Punya' : '' || kuda > 0 && kuda < 5 ? `Level *${kuda}* To level *${kuda + 1}*\n│Exp *${_kuda}* -> *${kuda *100}*` : '' || kuda == 5 ? '*Max Level*' : ''}
╰────────────────\n\n
*achievement*
${readMore}
1.Top level *${userslevel.indexOf(who) + 1}* dari *${userslevel.length}*
2.Top Money *${usersmoney.indexOf(who) + 1}* dari *${usersmoney.length}*
3.Top Diamond *${usersdiamond.indexOf(who) + 1}* dari *${usersdiamond.length}*
4.Top Potion *${userspotion.indexOf(who) + 1}* dari *${userspotion.length}*
5.Top Common *${userscommon.indexOf(who) + 1}* dari *${userscommon.length}*
6.Top Uncommon *${usersuncommon.indexOf(who) + 1}* dari *${usersuncommon.length}*
7.Top Mythic *${usersmythic.indexOf(who) + 1}* dari *${usersmythic.length}*
8.Top Legendary *${userslegendary.indexOf(who) + 1}* dari *${userslegendary.length}*
9.Top Sampah *${userssampah.indexOf(who) + 1}* dari *${userssampah.length}*
\n${readMore}\n
Warn: *${warn}*
Banned: *No*
`.trim()
    await conn.send2ButtonLoc(m.chat, await(await fetch(image)).buffer(), str, '©shirobotz', 'PROFILE', '.profile', 'Shop', '.shop', m)
}
handler.help = ['inventory', 'inv']
handler.tags = ['rpg']
handler.command = /^(inv(entory)?|bal|level(ing)?|money|e?xp)$/i
module.exports = handler

handler.register = true

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
