let moment = require('moment-timezone')
let fs = require('fs')
let handler = async (m, { conn, command, text }) => {
let img = './src/RadBot.png'
let user = global.db.data.users[m.sender]
conn.sendButton(m.chat, `Halo ${conn.getName(m.sender)}, selamat datang di menu panduan Sirad BOT. di menu ini kalian bisa mendapatkan panduan soal bot whatsapp.\nowner\n- Owner atau Pemilik Bot adalah orang yang membuat bot. OWNER BUKANLAH BOT. chat owner apabila ada kepentingan atau ada yang perlu di tanyakan soal bot whatsapp,\n- Penjelasan OWNER/PEMILIK BOT\n\nhow\n- Cara menggunakan bot adalah dengan mengetikkan command bot. List command bot ada pada menu bot. jangan lupa, untuk mengakses command harus menggunakan prefix.\nPrefix Sirad bot adalah all prefix.\nContoh penggunaan prefix dan command yang benar: *.menu*\n- Cara menggunakan bot dan prefix\n\nberlangganan\n- Layanan berlangganan Sirad Bot adalah dengan menyewa bot dalam jumlah waktu ke dalam group. Untukm list harga/layanan silahkan baca pada *.sewa*\n- Berlangganan\n        \nbot\n- Bot adalah sebuah program komputer yang dijalankan di lingkungan. Bot Whatsapp adalah program komputer yang di-aplikasikan di whatsapp. Bot whatsapp diharapkan dapat membantu beberapa aktifitas maupun sekedar untuk senang senang.\n- Apa itu bot whatsapp\n\n\nPenggunaan: .join5 <linkgrub>\ncontoh: .sewa`, 'LynXzy', 'Menu', '#Menu', { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `${ucapan()} ${conn.getName(m.sender)}`, itemCount: 999, thumbnail: fs.readFileSync('./src/RadBotZ.jpg')
}}})
}
handler.help = ['tutorbot']
handler.tags = ['main']
handler.command = /^tutorbot$/i

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari🌖"
    if (time >= 4) {
        res = "Selamat pagi🌝"
    }
    if (time > 10) {
        res = "Selamat siang🌞"
    }
    if (time >= 15) {
        res = "Selamat sore🌕"
    }
    if (time >= 18) {
        res = "Selamat malam🌚"
    }
    return res
}
