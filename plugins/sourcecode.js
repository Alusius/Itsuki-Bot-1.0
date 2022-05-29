let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(fla + 'Source code')).buffer(), `
Sc Nya Liat Di https://youtu.be/0wz53xj_5hI
Jgn Lupa Di Subscribe yaa
`.trim(), '❖ Kanao-Bot', 'Siap Banh🗿', 'Thanks')
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sourcecode|sc|scbot|script|github)$/i

module.exports = handler
