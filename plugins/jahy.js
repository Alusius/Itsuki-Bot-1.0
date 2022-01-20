let fetch = require('node-fetch')
let handler = async (m, { conn, args, usedPrefix, command }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('Sedang Diproses...')
  let res = `https://api.xteam.xyz/randomimage/jahy?apikey=apivproject`
  conn.sendButtonImg(m.chat, await ( await fetch(res)).buffer(), `wangy wangy wangy`, watermark, 'NEXT', `${usedPrefix + command}`, m)
}
handler.help = ['jahy'].map(v => v + ' ')
handler.tags = ['image']

handler.command = /^(jahy)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

