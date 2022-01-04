let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastnebang)
    let _timers = (86400000 - __timers)
    let timers = clockString(_timers) 
    if (new Date - user.lastnebang > 86400000) {
        conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan 2000 馃挼money dan 500 exp`, m)
        global.db.data.users[m.sender].money += 2000
        global.db.data.users[m.sender].exp += 500
        global.db.data.users[m.sender].lastnebang = new Date * 1
    } else {
        let buttons = `silahkan tunggu *馃晵${timers}* lagi untuk bisa menebang lagi`.trim()
        conn.send2Button(m.chat, buttons, '漏RadBotZ', 'nyampah', '#nyampah', 'Inventory', '#inv', m)
    }
}
handler.help = ['nebang']
handler.tags = ['rpg']
handler.command = /^nebang$/i
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
