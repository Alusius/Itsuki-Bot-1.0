const { mediafireDl } = require('../lib/mediafire.js')

let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
    if (!text) return m.reply(`Kirim perintah ${usedPrefix + command} *link mediafire*`)
    if (!args[0].includes('mediafire.com')) return m.reply(error.linkmf)
    let mdjon = args.join(' ')
    let res = await mediafireDl(mdjon)
    let text = `「 *MEDIAFIRE DOWNLOAD* 」
*Data Berhasil Didapatkan!*
🆔 Nama : ${res.filename}
📊 Ukuran : ${res.size}
💬 Link : ${res.dlink}
_Tunggu Proses Upload Media_`
    m.reply(text)
    //await sleep(100)
    conn.sendFile(m.chat, res.dlink, res.filename, null, m, false, { asDocument: true, mimetype: res.mimetype })
}
handler.command = ['mediafire']

module.exports = handler
