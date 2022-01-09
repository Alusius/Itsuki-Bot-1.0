let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {

  await m.reply(global.wait)

    let res = await (await fetch(`https://st4rz.herokuapp.com/api/infogempa`)).json()
        let str = `*INFO GEMPA*\n\nLokasi : ${res.lokasi}\nKedalaman : ${res.kedalaman}\nKoordinat : ${res.koordinat}\nMagnitude : ${res.magnitude}\nPotensi : ${res.potensi}\nWaktu : ${res.waktu}`

    conn.sendButtonLoc(m.chat, await (await fetch(res.map)).buffer(), str, watermark, 'News', '#? news', m)
}
handler.help = ['infobmkg','infogempa']
handler.tags = ['news']
handler.command = /^(infobmkg|infogempa)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
