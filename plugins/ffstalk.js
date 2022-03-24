const axios = require("axios");

let handler = async (m, { conn, text }) => {
    if (!text) return conn.reply(m.chat, 'Masukan ID FFmu', m)

    let res = await axios.get(`http://api.lolhuman.xyz/api/freefire/${text}?apikey=rey2k21`)
    let hasil = `Nama : ${res.data.result}\nID : ${text}`
    conn.reply(m.chat, hasil, m)
}
handler.help = ['ffstalk'].map(v => v + ' <id ff>')
handler.tags = ['internet']
handler.command = /^(ffstalk)$/i

handler.limit = true

module.exports = handler
