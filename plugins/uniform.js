let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix, command }) => {
	if (!db.data.chats[m.chat].nsfw && m.isGroup) throw global.nsfw
  m.reply(global.wait)
  let res = await (await fetch(`https://api.xteam.xyz/randomimage/uniform?apikey=apivproject`)).buffer()
  conn.sendButtonImg(m.chat, res, `wangy wangy wangy`, watermark, 'Next',`${usedPrefix + command}`, m, false)
}
handler.help = ['uniform <erorr>']
handler.tags = ['hentai']

handler.command = /^(uniform)$/i

module.exports = handler
