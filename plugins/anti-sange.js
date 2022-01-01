let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./audio/ingat.m4a')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*INGAT*' , 'status@broadcast')
}
handler.customPrefix = /link bokep|link doujin|bagi link doujin|bagi link bokep|bokep|hentai|sange|coli|bagilinkbokep|bagilinkdoujin|bagilink doujin|bagi link hentai|hentai|nsfw/i
handler.command = new RegExp

module.exports = handler
