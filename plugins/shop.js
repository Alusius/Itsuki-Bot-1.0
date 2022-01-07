let { MessageType } = require('@adiwajshing/baileys')
const potion = 500
const Spotion = 150 
const Bdiamond = 900
const Sdiamond = 750
const Blimit = 500
const Bcommon = 200
const Scommon = 20
const Suncommon = 100
const Buncommon = 600
const Bmythic = 2000 
const Smythic = 500
const Biron = 500
const Siron = 300
const Sbatu = 1
const Usword = 20000
const Upickaxe = 25000
const Ufishing = 25000
const Blegendary = 7500 
const Slegendary = 3000
const Bsampah = 10
const Ssampah = 2
let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
	if (!db.data.chats[m.chat].rpg && m.isGroup) throw global.rpg
    const _armor = global.db.data.users[m.sender].armor
    const armor = (_armor == 0 ? 20000 : '' || _armor == 1 ? 49999 : '' || _armor == 2 ? 99999 : '' || _armor == 3 ? 149999 : '' || _armor == 4 ? 299999 : '')
    const _sword = global.db.data.users[m.sender].sword
	const sword = (_sword == 0 ? 20000 : '' || _sword == 1 ? 49999 : '' || _sword == 2 ? 99999 : '' || _sword == 3 ? 149999 : '' || _sword == 4 ? 299999 : '')
    const _pickaxe = global.db.data.users[m.sender].pickaxe
    const pickaxe = (_pickaxe == 0 ? 20000 : '' || _pickaxe == 1 ? 49999 : '' || _pickaxe == 2 ? 99999 : '' || _pickaxe == 3 ? 149999 : '' || _pickaxe == 4 ? 299999 : '')
        const _fishingrod = global.db.data.users[m.sender].fishingrod
    const fishingrod = (_fishingrod == 0 ? 20000 : '' || _fishingrod == 1 ? 49999 : '' || _fishingrod == 2 ? 99999 : '' || _fishingrod == 3 ? 149999 : '' || _fishingrod == 4 ? 299999 : '')
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const Kchhat = `
${usedPrefix}shop <Buy|sell|upgrade> <item> <jumlah>\n
Contoh penggunaan: *${usedPrefix}shop buy potion 1*
*${usedPrefix}shop upgrade fishingrod* \n\n
List Barang:\n\n
*Barang   |  Harga beli*\n
Limit :.        ${Blimit}
Potion:       ${potion}
Diamond:     ${Bdiamond}
Common:     ${Bcommon}
Uncommon:  ${Buncommon}
Mythic:     ${Bmythic}
Legendary: ${Blegendary}
Sampah:     ${Bsampah}
Armor:       ${armor}
Pickaxe:    ${pickaxe} +500 durability
Fishingrod: ${fishingrod} +500 durability\n\n
*Upgrade   | Harga Update*\n
Upgrade Pickaxe: ${Upickaxe} 
+500 durability
Upgrade Fishing Rod: ${Ufishing} 
+500 durability\n\n
*Barang   | Harga Jual*\n
Potion:       ${Spotion}
Diamond:     ${Sdiamond}
Common:     ${Scommon}
Uncommon:  ${Suncommon}
Mythic:     ${Smythic}
Legendary: ${Slegendary}
Sampah:     ${Ssampah}\n\n
`.trim()
let name = conn.getName(m.sender)
const Kchat = `*Halo ${name}*
*Selamat Datang Di shop*

Contoh penggunaan: *${usedPrefix + command} buy potion 1*
*${usedPrefix + command} upgrade fishingrod*

*Daftar Yang Bisa Di Beli*:

*Barang   |  Harga beli*

🪙Limit :            ${Blimit}
🧃Potion:          ${potion}
💎Diamond:      ${Bdiamond}
⛓️Iron:               ${Biron}
📦Common:      ${Bcommon}
📦Uncommon:  ${Buncommon}
📦Mythic:           ${Bmythic}
🎁Legendary:    ${Blegendary}
🗑️Sampah:        ${Bsampah}
🥋Armor:            ${armor}
🗡️Sword:          ${sword} +500 durability
⛏️Pickaxe:          ${pickaxe} +500 durability
🎣Fishingrod:      ${fishingrod} +500 durability

*Barang Upgrade*:

*Upgrade   |  Harga Update*

🔧Upgrade Sword:        ${Usword} +500 durability
🔧Upgrade Pickaxe:        ${Upickaxe} +500 durability
🔧Upgrade Fishing Rod: ${Ufishing} +500 durability

*Barang Jual*:

*Barang   |  Harga Jual*

🧃Potion:            ${Spotion}
💎Diamond:       ${Sdiamond}
⛓️Iron:                 ${Siron}
🪨Batu:               ${Sbatu}
📦Common:       ${Scommon}
📦Uncommon:   ${Suncommon}
📦Mythic:            ${Smythic}
🎁Legendary:     ${Slegendary}
🗑️Sampah:         ${Ssampah}
`.trim()
    try {
        if (/shop|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            const sampah = global.db.data.users[m.sender].sampah
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                    case 'potion':
                            if (global.db.data.users[m.sender].money >= potion * count) {
                                global.db.data.users[m.sender].money -= potion * count
                                global.db.data.users[m.sender].potion += count * 1
                                conn.reply(m.chat, `Succes membeli ${count} Potion dengan harga ${potion * count} money\n\nGunakan potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Potion dengan harga ${potion * count} money`,)
                        break
                    case 'diamond':
                            if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                                global.db.data.users[m.sender].diamond += count * 1
                                global.db.data.users[m.sender].money -= Bdiamond * count
                                conn.reply(m.chat, `Succes membeli ${count} Diamond dengan harga ${Bdiamond * count} money`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup`, m)
                        
                        break
                    case 'iron':
                            if (global.db.data.users[m.sender].money >= Biron * count) {
                                global.db.data.users[m.sender].iron += count * 1
                                global.db.data.users[m.sender].money -= Biron * count
                                conn.reply(m.chat, `Succes membeli ${count} iron dengan harga ${Biron * count} money`, m)
                            } else conn.reply(m.chat, `Money anda tidak cukup`, m)
                        
                        break
                    case 'common':
                            if (global.db.data.users[m.sender].money >= Bcommon * count) {
                                global.db.data.users[m.sender].common += count * 1
                                global.db.data.users[m.sender].money -= Bcommon * count
                                conn.reply(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                        
                        break
                    case 'limit':
                            if (global.db.data.users[m.sender].money >= Blimit * count) {
                                global.db.data.users[m.sender].limit += count * 1
                                global.db.data.users[m.sender].money -= Blimit * count
                                conn.reply(m.chat, `Succes membeli ${count} Limit dengan harga ${Blimit * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Limit dengan harga ${Blimit * count} money\n*`, m)
                        
                        break
                    case 'uncommon':
                            if (global.db.data.users[m.sender].money >= Buncommon * count) {
                                global.db.data.users[m.sender].uncommon += count * 1
                                global.db.data.users[m.sender].money -= Buncommon * count
                                conn.reply(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                        
                        break
                    case 'mythic':
                            if (global.db.data.users[m.sender].money >= Bmythic * count) {
                                    global.db.data.users[m.sender].mythic += count * 1
                                global.db.data.users[m.sender].money -= Bmythic * count
                                conn.reply(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} money\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                        
                        break
                    case 'legendary':
                            if (global.db.data.users[m.sender].money >= Blegendary * count) {
                                global.db.data.users[m.sender].legendary += count * 1
                                global.db.data.users[m.sender].money -= Blegendary * count
                                conn.reply(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                        
                        break
                    case 'sampah':
                            if (global.db.data.users[m.sender].money >= Bsampah * count) {
                                global.db.data.users[m.sender].sampah += count * 1
                                global.db.data.users[m.sender].money -= Bsampah * count
                                conn.reply(m.chat, `Succes membeli ${count} Sampah dengan harga ${Bsampah * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Sampah dengan harga ${Bsampah * count} money`.trim(), m)
                        
                        break
                    case 'armor':
                            if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                            if (global.db.data.users[m.sender].money > armor) {
                                global.db.data.users[m.sender].armor += 1
                                global.db.data.users[m.sender].money -= armor * 1
                                conn.reply(m.chat, `Succes membeli armor seharga ${armor} money` ,m)
                            } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli armor seharga ${armor} money`, m)
                        
                        break
                case 'pickaxe':
                        if (global.db.data.users[m.sender].pickaxe == 5) return conn.reply(m.chat, 'Pickaxemu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > pickaxe * 1) {
                            global.db.data.users[m.sender].pickaxe += 1
                            global.db.data.users[m.sender].pickaxedurability += ( 0 ? 500 : '' || 1 ? 1000 : '' || 2 ? 1500 : '' || 3 ? 2000 : '' || 4 ? 2500 : '' || 5 ? 3000 : '')
                            global.db.data.users[m.sender].money -= pickaxe * 1
                            conn.reply(m.chat, `Succes membeli pickaxe seharga ${pickaxe} money` ,m)
                          
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli pickaxe seharga ${pickaxe} money`, m)
                        break
                  case 'fishingrod':
                        if (global.db.data.users[m.sender].fishingrod == 5) return conn.reply(m.chat, 'Fishingrodmu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > fishingrod * 1) {
                            global.db.data.users[m.sender].fishingrod += 1
                            global.db.data.users[m.sender].fishingroddurability += ( 0 ? 500 : '' || 1 ? 1000 : '' || 2 ? 1500 : '' || 3 ? 2000 : '' || 4 ? 2500 : '' || 5 ? 3000 : '')
                            global.db.data.users[m.sender].money -= fishingrod * 1
                            conn.reply(m.chat, `Succes membeli fishingrod seharga ${fishingrod} money` ,m)
                            
                       } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli fishingrod seharga ${fishingrod} money`, m)
                       break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'upgrade':
               switch (_type) {
               	case 'pickaxe':
                        if (global.db.data.users[m.sender].pickaxedurability > 5000) return conn.reply(m.chat, 'Pickaxemu sudah *Sangat Kuat*', m)
                        if (global.db.data.users[m.sender].money > Upickaxe * 1) {
                            global.db.data.users[m.sender].pickaxedurability += 500
                            global.db.data.users[m.sender].money -= Upickaxe * 1
                            conn.reply(m.chat, `Succes menambah durability pickaxe seharga ${Upickaxe} money` ,m)
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk menambah durability pickaxe seharga ${Upickaxe} money`, m)
                        break
                   case 'fishingrod':
                        if (global.db.data.users[m.sender].fishingroddurability > 5000) return conn.reply(m.chat, 'Fishing rodmu sudah *Sangat Kuat*', m)
                        if (global.db.data.users[m.sender].money > Ufishing * 1) {
                            global.db.data.users[m.sender].fishingroddurability += 500
                            global.db.data.users[m.sender].money -= Ufishing * 1
                            m.reply(m.chat, `Succes menambah durability pickaxe seharga ${Ufishing} money` ,m)
                        } else m.reply(m.chat, `uang mu tidak cukup untuk menambah durability pickaxe seharga ${Ufishing} money`, m)
                        break
                     default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'potion':
                        if (global.db.data.users[m.sender].potion >= count * 1) {
                            global.db.data.users[m.sender].money += Spotion * count
                            global.db.data.users[m.sender].potion -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                        break
                    case 'common':
                        if (global.db.data.users[m.sender].common >= count * 1) {
                            global.db.data.users[m.sender].money += Scommon * count
                            global.db.data.users[m.sender].common -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'uncommon':
                        if (global.db.data.users[m.sender].uncommon >= count * 1) {
                            global.db.data.users[m.sender].money += Suncommon * count
                            global.db.data.users[m.sender].uncommon -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'mythic':
                        if (global.db.data.users[m.sender].mythic >= count * 1) {
                            global.db.data.users[m.sender].money += Smythic * count
                            global.db.data.users[m.sender].mythic -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'legendary':
                        if (global.db.data.users[m.sender].legendary >= count * 1) {
                            global.db.data.users[m.sender].money += Slegendary * count
                            global.db.data.users[m.sender].legendary -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} money`.trim(), m)
                        } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                        break
                    case 'sampah':
                        if (global.db.data.users[m.sender].sampah >= count * 1) {
                            global.db.data.users[m.sender].sampah -= count * 1
                            global.db.data.users[m.sender].money += Ssampah * count
                            conn.reply(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} money`, m)
                        } else conn.reply(m.chat, `Sampah anda tidak cukup`, m)
                        break
                    case 'batu':
                        if (global.db.data.users[m.sender].batu >= count * 1) {
                            global.db.data.users[m.sender].batu -= count * 1
                            global.db.data.users[m.sender].money += Sbatu * count
                            conn.reply(m.chat, `Succes menjual ${count} batu, dan anda mendapatkan ${Sbatu * count} money`, m)
                        } else conn.reply(m.chat, `batu anda tidak cukup`, m)
                        break
                    case 'diamond':
                        if (global.db.data.users[m.sender].diamond >= count * 1) {
                            global.db.data.users[m.sender].diamond -= count * 1
                            global.db.data.users[m.sender].money += Sdiamond * count
                            conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} money`, m)
                        } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                        break
                   case 'iron':
                        if (global.db.data.users[m.sender].iron >= count * 1) {
                            global.db.data.users[m.sender].iron -= count * 1
                            global.db.data.users[m.sender].money += Siron * count
                            conn.reply(m.chat, `Succes menjual ${count} iron, dan anda mendapatkan ${Siron * count} money`, m)
                        } else conn.reply(m.chat, `iron anda tidak cukup`, m)
                        break
                    default:
                        return conn.reply(m.chat, Kchat, m)
                }
                break
            default:
                return conn.send2Button(m.chat, Kchat, watermark, 'Dompet', '.dompet', 'Inventory', '.inv', m)
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                        if (global.db.data.users[m.sender].money >= potion * count) {
                            global.db.data.users[m.sender].money -= potion * count
                            global.db.data.users[m.sender].potion += count * 1
                            conn.reply(m.chat, `Succes membeli ${count} Potion dengan harga ${potion * count} money\n\nGunakan potion dengan ketik: *${usedPrefix}use potion <jumlah>*`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Potion dengan harga ${potion * count} money`,m)
                    
                    break
                case 'diamond':
                        if (global.db.data.users[m.sender].money >= Bdiamond * count) {
                            global.db.data.users[m.sender].diamond += count * 1
                            global.db.data.users[m.sender].money -= Bdiamond * count
                            conn.reply(m.chat, `Succes membeli ${count} Diamond dengan harga ${Bdiamond * count} money`, m)
                        } else conn.reply(m.chat, `Money anda tidak cukup`, m)
                    
                    break
                case 'iron':
                        if (global.db.data.users[m.sender].money >= Biron * count) {
                            global.db.data.users[m.sender].iron += count * 1
                            global.db.data.users[m.sender].money -= Biron * count
                            conn.reply(m.chat, `Succes membeli ${count} iron dengan harga ${Biron * count} money`, m)
                        } else conn.reply(m.chat, `Money anda tidak cukup`, m)
                    
                    break
                case 'common':
                        if (global.db.data.users[m.sender].money >= Bcommon * count) {
                            global.db.data.users[m.sender].common += count * 1
                            global.db.data.users[m.sender].money -= Bcommon * count
                            conn.reply(m.chat, `Succes membeli ${count} Common crate dengan harga ${Bcommon * count} money`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Common crate dengan harga ${Bcommon * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open common*`, m)
                    
                    break
                    case 'limit':
                            if (global.db.data.users[m.sender].money >= Blimit * count) {
                                global.db.data.users[m.sender].limit += count * 1
                                global.db.data.users[m.sender].money -= Blimit * count
                                conn.reply(m.chat, `Succes membeli ${count} Limit dengan harga ${Blimit * count} money`, m)
                            } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Limit dengan harga ${Blimit * count} money\n*`, m)
                        
                        break
                case 'uncommon':
                        if (global.db.data.users[m.sender].money >= Buncommon * count) {
                            global.db.data.users[m.sender].uncommon += count * 1
                            global.db.data.users[m.sender].money -= Buncommon * count
                            conn.reply(m.chat, `Succes membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Uncommon crate dengan harga ${Buncommon * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open uncommon*`, m)
                   
                    break
                case 'mythic':
                        if (global.db.data.users[m.sender].money >= Bmythic * count) {
                            global.db.data.users[m.sender].mythic += count * 1
                            global.db.data.users[m.sender].money -= Bmythic * count
                            conn.reply(m.chat, `Succes membeli ${count} Mythic crate dengan harga ${Bmythic * count} money`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Mythic crate dengan harga ${Bmythic* count} money\n\nBuka crate dengan ketik: *${usedPrefix}open mythic*`, m)
                    
                    break
                case 'legendary':
                        if (global.db.data.users[m.sender].money >= Blegendary * count) {
                            global.db.data.users[m.sender].legendary += count * 1
                            global.db.data.users[m.sender].money -= Blegendary * count
                            conn.reply(m.chat, `Succes membeli ${count} Legendary crate dengan harga ${Blegendary * count} money`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Legendary crate dengan harga ${Blegendary * count} money\n\nBuka crate dengan ketik: *${usedPrefix}open legendary*`, m)
                    
                    break
                case 'sampah':
                        if (global.db.data.users[m.sender].money >= Bsampah * count) {
                            global.db.data.users[m.sender].sampah += count * 1
                            global.db.data.users[m.sender].money -= Bsampah * count
                            conn.reply(m.chat, `Succes membeli ${count} Sampah dengan harga ${Bsampah * count} money`, m)
                        } else conn.reply(m.chat, `Uang anda tidak cukup untuk membeli ${count} Sampah dengan harga ${Bsampah * count} money`.trim(), m)
                    
                    break
                case 'armor':
                        if (global.db.data.users[m.sender].armor == 5) return conn.reply(m.chat, 'Armormu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > armor * 1) {
                            global.db.data.users[m.sender].armor += 1
                            global.db.data.users[m.sender].money -= armor * 1
                            conn.reply(m.chat, `Succes membeli armor seharga ${armor} money` ,m)
                          
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli armor seharga ${armor} money`, m)
                    
                    break
                case 'sword':
                        if (global.db.data.users[m.sender].sword == 5) return conn.reply(m.chat, 'Sword mu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > sword * 1) {
                            global.db.data.users[m.sender].sword += 1
                            global.db.data.users[m.sender].sworddurability += ( 0 ? 500 : '' || 1 ? 1000 : '' || 2 ? 1500 : '' || 3 ? 2000 : '' || 4 ? 2500 : '' || 5 ? 3000 : '')
                            global.db.data.users[m.sender].money -= sword * 1
                            conn.reply(m.chat, `Succes membeli Sword seharga ${sword} money` ,m)
                                                      
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli Sword seharga ${sword} money`, m)
                        break
                case 'pickaxe':
                        if (global.db.data.users[m.sender].pickaxe == 5) return conn.reply(m.chat, 'Pickaxemu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > pickaxe * 1) {
                            global.db.data.users[m.sender].pickaxe += 1
                            global.db.data.users[m.sender].pickaxedurability += ( 0 ? 500 : '' || 1 ? 1000 : '' || 2 ? 1500 : '' || 3 ? 2000 : '' || 4 ? 2500 : '' || 5 ? 3000 : '')
                            global.db.data.users[m.sender].money -= pickaxe * 1
                            conn.reply(m.chat, `Succes membeli pickaxe seharga ${pickaxe} money` ,m)
                                                      
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli pickaxe seharga ${pickaxe} money`, m)
                        break
                  case 'fishingrod':
                        if (global.db.data.users[m.sender].fishingrod == 5) return conn.reply(m.chat, 'Fishingrodmu sudah *Level Max*', m)
                        if (global.db.data.users[m.sender].money > fishingrod * 1) {
                            global.db.data.users[m.sender].fishingrod += 1
                            global.db.data.users[m.sender].fishingroddurability += ( 0 ? 500 : '' || 1 ? 1000 : '' || 2 ? 1500 : '' || 3 ? 2000 : '' || 4 ? 2500 : '' || 5 ? 3000 : '')
                            global.db.data.users[m.sender].money -= fishingrod * 1
                            conn.reply(m.chat, `Succes membeli fishingrod seharga ${fishingrod} money` ,m)
                            
                       } else conn.reply(m.chat, `uang mu tidak cukup untuk membeli fishingrod seharga ${fishingrod} money`, m)
                       break
                default:
                    return conn.reply(m.chat, Kchat, m)
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'potion':
                    if (global.db.data.users[m.sender].potion >= count * 1) {
                        global.db.data.users[m.sender].money += Spotion * count
                        global.db.data.users[m.sender].potion -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Potion dengan harga ${Spotion * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Potion kamu tidak cukup`.trim(), m)
                    break
                case 'common':
                    if (global.db.data.users[m.sender].common >= count * 1) {
                        global.db.data.users[m.sender].money += Scommon * count
                        global.db.data.users[m.sender].common -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Common Crate dengan harga ${Scommon * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Common Crate kamu tidak cukup`.trim(), m)
                    break
                case 'uncommon':
                    if (global.db.data.users[m.sender].uncommon >= count * 1) {
                        global.db.data.users[m.sender].money += Suncommon * count
                        global.db.data.users[m.sender].uncommon -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Uncommon Crate dengan harga ${Suncommon * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Uncommon Crate kamu tidak cukup`.trim(), m)
                    break
                case 'mythic':
                    if (global.db.data.users[m.sender].mythic >= count * 1) {
                        global.db.data.users[m.sender].money += Smythic * count
                        global.db.data.users[m.sender].mythic -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Mythic Crate dengan harga ${Smythic * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Mythic Crate kamu tidak cukup`.trim(), m)
                    break
                case 'legendary':
                    if (global.db.data.users[m.sender].legendary >= count * 1) {
                        global.db.data.users[m.sender].money += Slegendary * count
                        global.db.data.users[m.sender].legendary -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Legendary Crate dengan harga ${Slegendary * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Legendary Crate kamu tidak cukup`.trim(), m)
                    break
                case 'sampah':
                    if (global.db.data.users[m.sender].sampah >= count * 1) {
                        global.db.data.users[m.sender].sampah -= count * 1
                        global.db.data.users[m.sender].money += Ssampah * count
                        conn.reply(m.chat, `Succes menjual ${count} sampah, dan anda mendapatkan ${Ssampah * count} money`.trim(), m)
                    } else conn.reply(m.chat, `Sampah anda tidak cukup`.trim(), m)
                    break
                case 'diamond':
                    if (global.db.data.users[m.sender].diamond >= count * 1) {
                        global.db.data.users[m.sender].diamond -= count * 1
                        global.db.data.users[m.sender].money += Sdiamond * count
                        conn.reply(m.chat, `Succes menjual ${count} Diamond, dan anda mendapatkan ${Sdiamond * count} money`, m)
                    } else conn.reply(m.chat, `Diamond anda tidak cukup`, m)
                    break
                 case 'iron':
                        if (global.db.data.users[m.sender].iron >= count * 1) {
                            global.db.data.users[m.sender].iron -= count * 1
                            global.db.data.users[m.sender].money += Siron * count
                            conn.reply(m.chat, `Succes menjual ${count} iron, dan anda mendapatkan ${Siron * count} money`, m)
                        } else conn.reply(m.chat, `iron anda tidak cukup`, m)
                        break
                  case 'batu':
                        if (global.db.data.users[m.sender].batu >= count * 1) {
                            global.db.data.users[m.sender].batu -= count * 1
                            global.db.data.users[m.sender].money += Sbatu * count
                            conn.reply(m.chat, `Succes menjual ${count} batu, dan anda mendapatkan ${Sbatu * count} money`, m)
                        } else conn.reply(m.chat, `batu anda tidak cukup`, m)
                        break
                default:
                    return conn.reply(m.chat, Kchat, m)
                }
            } else if (/upgrade/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
            	case 'sword':
                        if (global.db.data.users[m.sender].sworddurability > 5000) {
                        if (global.db.data.users[m.sender].money > Usword * 1) {
                            global.db.data.users[m.sender].sworddurability += 500
                            global.db.data.users[m.sender].money -= Usword * 1
                            conn.reply(m.chat, `Succes menambah durability sword seharga ${Ufishing} money` ,m)
                          
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk menambah durability pickaxe seharga ${Ufishing} money`, m)
                        } else conn.reply(m.chat, 'Sword mu sudah *Sangat Kuat*', m)
                        break
            	case 'fishingrod':
                        if (global.db.data.users[m.sender].fishingroddurability > 5000) {
                        if (global.db.data.users[m.sender].money > Ufishing * 1) {
                            global.db.data.users[m.sender].fishingroddurability += 500
                            global.db.data.users[m.sender].money -= Ufishing * 1
                            conn.reply(m.chat, `Succes menambah durability pickaxe seharga ${Ufishing} money` ,m)
                          
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk menambah durability Fishing Rod seharga ${Ufishing} money`, m)
                        } else conn.reply(m.chat, 'Fishing rodmu sudah *Sangat Kuat*', m)
                        break
               	case 'pickaxe':
                        if (global.db.data.users[m.sender].pickaxedurability > 5000) {
                        if (global.db.data.users[m.sender].money > Upickaxe * 1) {
                            global.db.data.users[m.sender].pickaxedurability += 500
                            global.db.data.users[m.sender].money -= Upickaxe * 1
                            conn.reply(m.chat, `Succes menambah durability pickaxe seharga ${Upickaxe} money` ,m)
                          
                        } else conn.reply(m.chat, `uang mu tidak cukup untuk menambah durability pickaxe seharga ${Upickaxe} money`, m)
                        } else conn.reply(m.chat, 'Pickaxemu sudah *Sangat Kuat*', m)
                        break 
                        default:
                        return conn.reply(m.chat, Kchat, m)
            }
          }
        }catch (e) {
        conn.reply(m.chat, Kchat, m)
        console.log(e)
        if (DevMode) {
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, 'shop.js error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
              
            }
        }
    }
}

handler.help = ['shop <sell|buy> <args>', 'toko <sell|buy> <args>']
handler.tags = ['rpg']
    
handler.command = /^(shop|toko|buy|beli|sell|jual)$/i
handler.register = true

module.exports = handler
