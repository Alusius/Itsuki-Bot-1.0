const fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    if (!text) return m.reply(`contoh:\n${usedPrefix + command} jakarta`)
    let res = await fetch(`https://api.lolhuman.xyz/api/sholat/${text}?apikey=rey2k21`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    if (!json.status) {
        if (json.result == 'eror') throw 'Masukkan Nama Kota Yang benar'
 }
    m.reply(`Jadwal Sholat ${text}\n\n${json.result.string}`.trim())

}
handler.help = ['salat <daerah>']
handler.tags = ['quran']
handler.command = /^(jadwal)?s(a|o|ha|ho)lat$/i

module.exports = handler
