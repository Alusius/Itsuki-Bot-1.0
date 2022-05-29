let { performance } = require('perf_hooks')
let fetch = require('node-fetch')
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
  let str = `
╭═══════════════════════
║╭─❉〘 ${package.name} 〙❉─
║│➸ *Versi* : 1.5.0
║│➸ *Issue:* ${package.bugs.url}
║│➸ *Prefix:* ' ${usedPrefix} '
║│➸ *Menu:* ${usedPrefix}menu
║│➸ *Ping:* ${neww - old} *ms*
║│➸ *Total user:* ${totalreg} *user*
║│➸ *Uptime:* ${uptime}
║│
║╭─❉〘 𝐆𝐑𝐎𝐔𝐏 𝐁𝐎𝐓 〙❉─
║│➸ 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 𝗚𝗿𝗼𝘂𝗽 𝗕𝗼𝘁¹
║│➸ https://tinyurl.com/y7xymnkd
║│
║│➸ 𝗢𝗳𝗳𝗶𝗰𝗶𝗮𝗹 𝗚𝗿𝗼𝘂𝗽 𝗕𝗼𝘁²
║│➸ https://tinyurl.com/yc92fva7
║│
║│ ${readMore}
║╭─❉〘 𝐏𝐑𝐈𝐕𝐀𝐂𝐘 𝐁𝐎𝐓 〙❉─
║│➸ *KAMI TIDAK BERTANGGUNG*
║│➸ *JAWAB ATAS PENYALAH*
║│➸ *GUNAAN BOT*
║│➸ *KAMI TIDAK BERTANGGUNG*
║│➸ *JAWAB ATAS KEBOCORAN DATA*
║│➸ *PRIBADI ANDA*
║│➸ *KAMI AKAN MENYIMPAN DATA*
║│➸ *SEPERTI NOMER TELEPON*
║│➸ *ANDA DI DATABASE KAMI*
║╰─────────
╰═════════════════`.trim()
     await conn.send2ButtonLoc(m.chat, await(await fetch(image)).buffer(), str, '©LynXzy💌', 'Owner', '.owner', 'Menu', '.menu', m)
}
handler.help = ['infobot']
handler.tags = ['info']
handler.command = /^(info(bot)?)$/i

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
