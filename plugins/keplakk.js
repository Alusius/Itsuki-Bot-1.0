const fs = require('fs');

let handler = async (m) => {
    let stc = fs.readFileSync('./sticker/keplak.webp')
    conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*KEPLAK DIA*', 'status@broadcast')
}

handler.customPrefix = /^(keplak)$/i
handler.command = new RegExp

module.exports = handler
