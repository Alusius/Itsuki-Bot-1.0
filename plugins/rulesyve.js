let { performance } = require('perf_hooks')
let fs = require ('fs')
let path = require('path')
let handler  = async (m, { conn, usedPrefix }) => { 
  let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))
  let _uptime = process.uptime() * 1000
  let uptime = clockString(_uptime) 
  let totalreg = Object.keys(global.db.data.users).length
  let old = Math.round(performance.now())
  await m.reply('wait Kakak!!')
  let neww = Math.round(performance.now())
  conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Rules Bot*', 'status@broadcast')`
╠═〘 PIRACY BOT 〙 ═
║
╠➥ *SEMUA YANG DIKATAKAN OWNER*
║     *ADALAH MUTLAK*
╠➥ *KALO KETAHUAN MENGHINA BOT*
║    *SAMA OWNER BAKALAN DI WARN*
║    *ATAU DI BAN*
╠➥ *MOHON UNTUK TIDAK MENELPON*
║    *DAN SPAM CHAT SAMA BOT*
║    *JIKA MELANGGAR = BLOCK*
╠➥ *KAMI TIDAK BERTANGGUNG*
║   *JAWAB ATAS PENYALAH*
║   *GUNAAN BOT*
╠➥ *KAMI TIDAK BERTANGGUNG*
║   *JAWAB ATAS KEBOCORAN DATA*
║   *PRIBADI ANDA*
╠➥ *KAMI AKAN MENYIMPAN DATA*
║   *SEPERTI NOMER TELEPON*
║   *ANDA DI DATABASE KAMI*
║ 
║${readMore}
╠═〘 ${package.name} 〙 ═
╠➥ *Versi:* ${package.version}
╠➥ *HomePage:* ${(package.homepage ? package.homepage.url || package.homepage : '[unknown github url]')}
╠➥ *Issue:* ${package.bugs.url}
╠➥ *Ping:* ${neww - old} *ms*
╠➥ *Total user:* ${totalreg} *user*
╠➥ *Uptime:* ${uptime}
║
╠═〘 DONASI 〙 ═
╠➥ PULSA : 083813679823
╠➥ DANA : 085714313795
║
╠═ Request? ${package.bugs.url}
╠═ officiall Group *${conn.getName(conn.user.jid)}* :
${(global.linkGC).map((v, i) => '║ *Group ' + (i + 1) + '*\n║' + v).join`\n║\n`}
║
║ 
╠═ ©2021 ${package.name}
╠═ Scrip original by Nurutomo
╠═〘 RAD BOT〙 ═
`.trim(), m)
}

handler.help = ['main']
handler.tags = ['infobot', 'rules']
handler.command = /^(infobot|rules)$/i

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
