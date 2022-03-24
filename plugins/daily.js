let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
    let __timers = (new Date - user.lastclaim)
    let _timers = (86400000 - __timers)
    let timers = clockString(_timers) 
    if (new Date - user.lastclaim > 86400000) {
        conn.reply(m.chat, `Anda sudah mengklaim dan mendapatkan 1000 💵money dan 1 potion`, m)
        global.db.data.users[m.sender].money += 1000
        global.db.data.users[m.sender].potion += 1
        global.db.data.users[m.sender].lastclaim = new Date * 1
    } else {
        let buttons = `silahkan tunggu *🕒${timers}* lagi untuk bisa mengclaim lagi`.trim()
        conn.send2Button(m.chat, buttons, '©RadBotZ', 'Weekly', '#weekly', 'Monthly', '#monthly')
    }
}
handler.help = ['claim', 'daily']
handler.tags = ['rpg']
handler.command = /^(claim|daily)$/i
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
        footerText: '©games-wabot',
        buttons: buttons,
        headerType: 1
    }
    
    return buttonMessage
}