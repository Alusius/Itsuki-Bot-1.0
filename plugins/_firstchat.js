let moment = require('moment-timezone')
let fetch = require ('node-fetch')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.db.data.users[m.sender]
    let name = conn.user.name
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await conn.send3ButtonLoc(m.chat, await(await fetch(image)).buffer(), `
Hai, ${ucapan()}

${user.banned ? 'kamu dibanned' : `𝙎𝙖𝙮𝙖 𝙖𝙙𝙖𝙡𝙖𝙝 𝙨𝙖𝙡𝙖𝙝 𝙨𝙖𝙩𝙪 𝘽𝙤𝙩 𝙒𝙝𝙖𝙩𝙨𝙖𝙥𝙥. 𝙃𝙖𝙧𝙖𝙥 𝙩𝙞𝙙𝙖𝙠 𝙨𝙥𝙖𝙢/𝙩𝙚𝙡𝙥𝙤𝙣/𝙢𝙚𝙢𝙞𝙣𝙩𝙖 𝙨𝙖𝙫𝙚 𝙠𝙚 𝙣𝙤𝙢𝙤𝙧 𝙞𝙣𝙞. 𝘼𝙙𝙖 𝙮𝙖𝙣𝙜 𝙗𝙞𝙨𝙖 𝙨𝙖𝙮𝙖 𝙗𝙖𝙣𝙩𝙪?`}
`.trim(), watermark, user.banned ? 'Pemilik Bot' : 'Menu', user.banned ? ',owner' : '.menu', 'Panduan penggunaan', '.tutorbot', 'Verify', '.daftar undefined.16', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi🌅"
    }
    if (time > 10) {
        res = "Selamat siang🏞️"
    }
    if (time >= 15) {
        res = "Selamat sore🌇"
    }
    if (time >= 18) {
        res = "Selamat malam🌌"
    }
    return res
}
