let fetch = require('node-fetch')
let handler = async (m, { conn }) => conn.sendButtonLoc(m.chat, await (await fetch(bank)).buffer(), `
*───────「 DONATE 」 ─────*
𝙃𝙖𝙣𝙮𝙖 𝙢𝙚𝙣𝙚𝙧𝙞𝙢𝙖 𝙢𝙖𝙩𝙖 𝙪𝙖𝙣𝙜 𝙢𝙖𝙡𝙖𝙮𝙨𝙞𝙖
╭═══════════════
║╭─── [ DONASI ] ───
║│➸ _*UMOBILE*_✅ : 
║│- 60189830350
║│
║│➸ _*DIGI*_✅: 
║│- 60149431385
║│
║│➸ _*OWNER*_
║│- wa.me/60189830350
║╰────────────
╰═══════════════
`.trim(), ' ', 'Owner Bot', '.owner')
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
