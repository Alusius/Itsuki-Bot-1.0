let fs = require('fs')
let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix, DevMode }) => { 
	if (!db.data.chats[m.chat].rpg && m.isGroup) throw global.rpg
    try { 
        let __timers = (new Date - global.db.data.users[m.sender].lastadventure)
        let _timers = (300000 - __timers) 
        let timers = clockString(_timers)
        if (global.db.data.users[m.sender].healt > 79) {
            if (new Date - global.db.data.users[m.sender].lastadventure > 300000) {
            let armor = global.db.data.users[m.sender].armor
            let rubah = global.db.data.users[m.sender].rubah
            let kuda = global.db.data.users[m.sender].kuda
            let kucing = global.db.data.users[m.sender].kucing
            let ____health = `${Math.floor(Math.random() * 101)}`.trim()
            let ___health = (____health * 1)
            let kucingnya = (kucing == 0? 0 : '' || kucing == 1 ? 5 : '' || kucing == 2 ? 10 : '' || kucing == 3 ? 15 : '' || kucing == 4 ? 21 : ''  || kucing == 5 ? 30 : '')
            let armornya = (armor == 0 ? 0 : '' || armor == 1 ? 5 : '' || armor == 2 ? 10 : '' || armor == 3 ? 15 : '' || armor == 4 ? 21 : '' || armor == 5 ? 30 : '')
            let __health = (___health > 60 ? ___health - kucingnya - armornya : ___health)
            let healt = (kucing == 0 && armor == 0 ? pickRandom(['100', '99', '98', '97', '96', '95', '94', '93', '92', '91', '90']) : kucing > 0 && armor > 0 ? __health : ___health)
            let exp = (Math.floor(Math.random() * 400) + (kuda * 70))
            let uang = `${Math.floor(Math.random() * 400)}`.trim() 
            let _potion = `${Math.floor(Math.random() * 2)}`.trim()
            let potion = (_potion * 1)
            let _diamond = (rubah == 0 ? pickRandom(['0', '1', '0', '1', '0', '1', '0']) : '' || rubah == 1 ? pickRandom(['0', '1', '0', '1']) : '' || rubah == 2 ? pickRandom(['0', '1', '0', '1', '2']) : '' || rubah == 3 ? pickRandom(['0', '1', '0', '2', '2', '0']) : '' || rubah == 4 ? pickRandom(['0', '1', '1', '2', '1', '1', '0']) : '' || rubah == 5 ? pickRandom(['0', '0', '1', '2', '2', '1', '1', '0']) : '' )
            let diamond = (_diamond * 1)
            let _common = `${Math.floor(Math.random() * 3)}`.trim()
            let common = (_common * 1)
            let _uncommon = `${Math.floor(Math.random() * 2)}`.trim()
            let uncommon = (_uncommon * 1) 
            let _mythic = `${pickRandom(['1', '0', '0', '1'])}`
            let mythic = (_mythic * 1)
            let _legendary = `${pickRandom(['1', '0', '0', '0'])}`
            let sampah = `${Math.floor(Math.random() * 300)}`.trim()
            let legendary = (_legendary * 1)
            let shy = JSON.parse(fs.readFileSync(`./src/Adventure/dungeon.json`))
            let json = shy[Math.floor(Math.random() * shy.length)]
            let str = `
Nyawa mu berkurang -${healt * 1} karena Kamu telah berpetualang sampai ${json.tempat} dan mendapatkan
*exp:* ${exp} 
*uang:* ${uang}
*sampah:* ${sampah}${potion == 0 ? '' : '\n*Potion:* ' + potion + ''}${diamond == 0 ? '' : '\n*diamond:* ' + diamond + ''}${common == 0 ? '' : '\n*common crate:* ' + common + ''}${uncommon == 0 ? '' : '\n*uncommon crate:* ' + uncommon + ''}
`.trim()
            let img = await (await fetch(json.image)).buffer()
            global.db.data.users[m.sender].healt -= healt * 1
            global.db.data.users[m.sender].exp += exp * 1
            global.db.data.users[m.sender].money += uang * 1
            global.db.data.users[m.sender].potion += potion * 1
            global.db.data.users[m.sender].diamond += diamond * 1
            global.db.data.users[m.sender].common += common * 1 
            global.db.data.users[m.sender].uncommon += uncommon * 1
            global.db.data.users[m.sender].sampah += sampah * 1
            global.db.data.users[m.sender].lastadventure = new Date * 1
            conn.sendButtonLoc(m.chat, img, str, watermark, 'HEAL', '.heal', m)
            if (mythic > 0) {
                   global.db.data.users[m.sender].mythic += mythic * 1
                   conn.sendButton(m.chat, '*Selamat anda mendapatkan item Rare yaitu*\n' + mythic + ' Mythic Crate', watermark, 'Open', '.open mythic 1', m)
            }
            if (legendary > 0) {
                global.db.data.users[m.sender].legendary += legendary * 1
                conn.sendButton(m.chat, '*Selamat anda mendapatkan item Epic yaitu*\n' + legendary + ' Legendary Crate', watermark, 'Open', '.open legendary 1', m)
            }
            } else conn.sendButton(m.chat, `Anda sudah berpetualang dan kelelahan, silahkan coba *${timers}* lagi`.trim(), watermark, 'entory', '.inv', m)
        } else conn.send2Button(m.chat, 'Minimal 80 health untuk bisa berpetualang, beli nyawa dulu dengan ketik *' + usedPrefix + 'shop buy potion <jumlah>*\ndan ketik *' + usedPrefix + 'use potion <jumlah>*\n\n_Untuk mendapat money dan potion gratis ketik_ *' + usedPrefix + 'claim*', '©RadBotZ', 'Heal', '#heal', 'Buy Potion', '.buy potion 1', m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
        if (DevMode) {
            let file = require.resolve(__filename)
            for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)) {
                conn.sendMessage(jid, file + ' error\nNo: *' + m.sender.split`@`[0] + '*\nCommand: *' + m.text + '*\n\n*' + e + '*', MessageType.text)
            }
        }
    }
}
handler.help = ['adventure', 'kerja', 'petualang', 'berpetualang', 'mulung', 'work']
handler.tags = ['rpg']
handler.command = /^(adventure|(ber)?petualang(ang)?|mulung|work|kerja)$/i

handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}

global.adventure = [{
	
"result": "https://captain.ph/wp-content/uploads/elementor/thumbs/02BW053T1-full-orhl5ufhf1xjxg7jvzfgbp958hpu76oye7paovzb5q.png"},
{"museum": "https://i.ibb.co/9vqRLxg/3e12eb3f4b36e34a82d12de594105509.jpg"},
{"result": "https://i.ibb.co/8PNzkDg/d752ce600f6bbf1766aaad0edd184c95.jpg"},
{"result": "https://i.ibb.co/bsXfR0G/b38c234a1d05b14259fc48434830df72.jpg"},
{"result": "https://i.ibb.co/qF4KQBP/18f6ec4f59b6bd373a08df977b0001cf.jpg"},
{"result": "https://i.ibb.co/S61nW0y/fe50010ee76fe9b1e196bcc0144e7e8c.jpg"},
{"result": "https://i.ibb.co/zSLf7k6/a615370161a49003d96a9501c989f50d.jpg"},
{"result": "https://i.ibb.co/PwyzGm0/40354fdd2078127a8a070ac53f41b375.jpg"},
{"result": "https://i.ibb.co/yYgxnT8/dbf7c42c247ca6a46a6fc9f457ebd426.jpg"},
{"result": "https://i.ibb.co/M9nmhjd/b2587af0dd56fc4ec4043fe4bd0bb08b.jpg"},
{"result": "https://i.ibb.co/12kjHBw/4fb43d5685a55304266ffb380b13511b.jpg"},
{"result": "https://i.ibb.co/BnSQCHM/fbad11adbad4b01ce06730c8736bd6cd.jpg"},
{"result": "https://i.ibb.co/0QtYNjL/2fc5a6299b7af23a09aa8e87e878ff2b.jpg"},
{"result": "https://i.ibb.co/BLrgSyz/a25fe0233461b92b7e3be3b801d1963c.jpg"},
{"result": "https://i.ibb.co/cyXShW7/affbb1aa3fbe454f02246f1caf34cc71.jpg"},
{"result": "https://i.ibb.co/dGKXSz5/8f6ef6cb64eca372c8e9e50b7f83be1e.jpg"},
{"result": "https://i.ibb.co/9pKDV3C/072ab52b8430e4b8e71d2e13047ec81c.jpg"},
{"result": "https://i.ibb.co/fFqWPSN/9c2446a43e0406bfaa88b858b5af2b71.jpg"},
{"result": "https://i.ibb.co/bm1N9S6/0b85fd508fe76a7e06d0c285657e5700.jpg"},
{"result": "https://i.ibb.co/3yzhzdy/138655764fe4c350751c3d6a19b32d6e.jpg"},
{"result": "https://i.ibb.co/MNt4Twv/54d533aa1d0575ceb06c333dc2f6792c.jpg"},
{"result": "https://i.ibb.co/wcyCGRt/368e980738474028e1c51885c996bc42.jpg"},
{"result": "https://i.ibb.co/Scxq9KP/9141293b902071dece21a2fa08c92793.jpg"},
{"result": "https://i.ibb.co/MstjyJf/bc4c1b3796c70215b2e4fc498442c878.jpg"},
{"result": "https://i.ibb.co/hyX6P8C/1b8a923dbaa16cc909f60fd02d3bc0c1.jpg"},
{"result": "https://i.ibb.co/pLGLXgy/c351093ace6c8012f7bb270d19eab06e.jpg"},
{"result": "https://i.ibb.co/bWyQmP9/6a0538e61abc583ebfd77c9f0afcf144.jpg"},
{"result": "https://i.ibb.co/8xMtczB/b0f1219d622546aac56c6c532f117cb5.jpg"},
{"result": "https://i.ibb.co/YthC5Vm/fc50206cc9fa552b057852d5a5b626af.jpg"},
{"result": "https://i.ibb.co/dWJFDHw/1a5e7e4cb65c318866f83dfa9dc95f94.jpg"},
{"result": "https://i.ibb.co/mSnKN0t/e325358236b5a117512f639f52ee7cdf.jpg"}
]
