let moment = require('moment-timezone')
let fs = require('fs')
let handler = async (m, { conn, command, text }) => {
let img = './src/RadBot.png'
let user = global.db.data.users[m.sender]
conn.send2Button(m.chat, `Silahkan pilih button dibawah untuk mengaktifkan fitur welcome`, 'Shiro-Botz', 'On', '#on welcome', 'Off', '#off welcome', { key: { fromMe: false, remoteJid: '6283136505591-1614953337@g.us', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `${ucapan()} ${conn.getName(m.sender)}`, itemCount: 2022, thumbnail: fs.readFileSync('./src/RadBotZ.jpg')
}}})
}
handler.command = /^welcome$/i

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari🌖"
    if (time >= 4) {
        res = "Selamat pagi🌝"
    }
    if (time > 10) {
        res = "Selamat siang🌞"
    }
    if (time >= 15) {
        res = "Selamat sore🌕"
    }
    if (time >= 18) {
        res = "Selamat malam🌚"
    }
    return res
}
