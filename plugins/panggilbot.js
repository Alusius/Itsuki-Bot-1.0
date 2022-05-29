let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./src/WS20211008120810477.webp')
function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
  }
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', `Uptime : ${clockString(process.uptime() * 1000)}\nBattery : ${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? 'Pengisian Daya' : '🔋'}` : 'tidak diketahui'}`)
}
handler.customPrefix = /^(bot|Lyn|lyn)$/i
handler.command = new RegExp

module.exports = handler
