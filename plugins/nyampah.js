let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastnyampah)
    let _timers = (86400000 - __timers)
    let timers = clockString(_timers) 
    if (new Date - user.lastnyampah > 86400000) {
        conn.reply(m.chat, `Anda sudah mengnyampah dan mendapatkan 2000 馃挼money`, m)
        global.db.data.users[m.sender].money += 2000
        global.db.data.users[m.sender].lastnyampah = new Date * 1
    } else {
        let buttons = `silahkan tunggu *馃晵${timers}* untuk bisa menyampah lagi`.trim()
        conn.send2Button(m.chat, buttons, '漏RadBotZ', 'Shop', '#shop', 'Inventory', '#inv', m)
    }
}
handler.help = ['nyampah']
handler.tags = ['rpg']
handler.command = /^nyampah$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.money = 0

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
