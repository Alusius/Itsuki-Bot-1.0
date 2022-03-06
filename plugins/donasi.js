let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*────────「 DONATE 」 ────────*

Hai 👋
Kalian bisa mendukung saya agar bot ini tetap up to date dengan:
╭════════════
║╭─ [ DONASI ]
║│➸ UMOBILE : 60149431385
║│➸ DIGI : 60189830350
║╰─────────
╰═════════════
`.trim(), 'Donasi jan asal mencet', 'SEWA', '.sewa')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
