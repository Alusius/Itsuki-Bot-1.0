let fetch = require('node-fetch')
let handler = async (m, { usedPrefix, conn }) => await conn.sendButtonLoc(m.chat, await (await fetch(fla + 'ADDBOT')).buffer(), `
*"Cara menambahkan bot ke group"*

Cara menambahkan bot ke dalam group. 
Lucu bot memberlakukan trial gratis, 
Ada 3 opsi setiap opsi memiliki limit hingga 10 limit terpakai

1. ${usedPrefix}join3 (3 hours) [user]
2. ${usedPrefix}join5 (5 hours) user]
3. ${usedPrefix}join12 (12 hours) [owner]
4. ${usedPrefix}join24 (24 hours) [owner]
5. ${usedPrefix}joinp (permanent) [owner]

Setelah waktu habis maka bot akan keluar dari group. 
Untuk join Permanent silahkan ketik *${usedPrefix}sewa*
`.trim(), watermark, 'Ok Saya Mengerti', 'radit comel+ganteng no debat ok su<3', m)
handler.command = /^panduanadd/i
handler.private = false 
module.exports = handler
