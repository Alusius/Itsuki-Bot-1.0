let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, 'https://api.lolhuman.xyz/api/random/nsfw/loli?apikey=Dawnfrostkey', '', 'sange~an', m)
}
handler.help = ['loli18']
handler.tags = ['hentai']
handler.command = /^(loli18)$/i

handler.limit = true

module.exports = handler