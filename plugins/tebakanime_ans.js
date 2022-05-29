const similarity = require('similarity')
const threshold = 0.72
let handler = m => m
handler.before = async function (m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/Ketik.*wa/i.test(m.quoted.contentText)) return !0
    this.tebakanime = this.tebakanime ? this.tebakanime : {}
    if (!(id in this.tebakanime)) return m.reply('Soal itu telah berakhir')
    if (m.quoted.id == this.tebakanime[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakanime[id][1]))
        if (['.wa', 'Bantuan', ''].includes(m.text)) return !0
        if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakanime[id][2]
            await this.sendButton(m.chat, `*Benar!* +${this.tebakanime[id][2]} XP`, watermark, 'Tebak Anime', '.tebakanime', m)
            clearTimeout(this.tebakanime[id][3])
            delete this.tebakanime[id]
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) m.reply(`*Dikit Lagi!*`)
        else m.reply(`*Salah!*`)
    }
    return !0
}
handler.exp = 0

module.exports = handler
