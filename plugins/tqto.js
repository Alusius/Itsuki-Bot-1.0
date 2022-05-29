let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(thanks)).buffer(), `
BIG THANKS TO

➸ Allah S.W.T
➸ My Parent
➸ Hyzer ( pemilik bot )
➸ Shiro (Bot)
➸ Exc (membantu)
➸ Tio (membantu)
➸ Andrii(membantu)
➸ Penyedia Layanan API
➸ Org2 yg berdonasi
`.trim(), watermark, 'Back', '.menu')
handler.help = ['Thanksto', 'tqto']
handler.tags = ['main']
handler.command = /^(tqto|thanks|thanksto|bigthanks)$/i

module.exports = handler

// di ilangin jangan,di tambahin boleh

