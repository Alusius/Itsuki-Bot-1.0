let get = require('../lib/ttaudio')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
m.reply('Scraping....')
   try {
   a = await get(args[0])
   conn.sendFile(m.chat, a.result.audio, 'tiktok.mp3', '', m)
   } catch {
   throw 'Error , Mungkin Link Tidak Valid!'
   }
    }
handler.help = ['tiktokaudio', 'ttaudio'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(ttaudio|tiktokaudio)$/i

module.exports = handler
