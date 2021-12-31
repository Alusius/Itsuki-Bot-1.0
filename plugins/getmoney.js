let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastgetmoney)
    let _timers = (86400000 - __timers)
    let timers = clockString(_timers) 
    if (new Date - user.lastgetmoney > 86400000) {
        conn.reply(m.chat, `Anda sudah menarik uang dan mendapatkan 4000 ðŸ’µmoney dan 500 exp`, m)
        global.db.data.users[m.sender].money += 4000
        global.db.data.users[m.sender].exp += 500
        global.db.data.users[m.sender].lastgetmoney = new Date * 1
    } else {
        let buttons = `silahkan tunggu *ðŸ•’${timers}* lagi untuk bisa menarik uang lagi`.trim()
        conn.reply(m.chat, buttons, m)
    }
}
handler.help = ['getmoney', 'tarikuang']
handler.tags = ['rpg', 'premium']
handler.command = /^(getmoney|tarikuang)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

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

function button(teks, user) {
    const buttons = []
    
    let claim = new Date - user.lastclaim > 86400000
    let monthly = new Date - user.lastmonthly > 2592000000
    let weekly = new Date - user.lastweekly > 604800000
    console.log({claim, monthly, weekly})
    
    if (monthly) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: '/monthly'}, type: 1})
    if (weekly) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: '/weekly'}, type: 1})
    if (claim) buttons.push({buttonId: `id${buttons.length + 1}`, buttonText: {displayText: '/claim'}, type: 1})
    if (buttons.length == 0) throw teks
    
    const buttonMessage = {
        contentText: teks,
        footerText: 'Â©games-wabot',
        buttons: buttons,
        headerType: 1
    }
    
    return buttonMessage
}
