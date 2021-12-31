let handler = async(m, { conn, args, usedPrefix }) => {

    if (args.length == 0) return conn.reply(m.chat, `Harap masukan Kode FreeGiftmu!`, m)
    if (args[0] == 'Yusqsopp09' || args[0] == '' || args[0] == 'pPiOoxd027' || args[0] == 'A820bdoqP') {

    if (new Date - global.db.data.users[m.sender].lastclaim > 86400000) {
       conn.reply(m.chat, '*🎉 SELAMAT!*\nKamu telah mendapatkan\n10000 XP ✨\n 10 Limit! 🎫\n100000 Money 💹\n10 Gold 🪙\n5 Legendary 🧰', m)
    global.db.data.users[m.sender].exp += 10000
    global.db.data.users[m.sender].limit += 10
    global.db.data.users[m.sender].money +=100000
    global.db.data.users[m.sender].lastclaim = new Date * 1
} else conn.reply(m.chat, '[❗] Kode Gift Gratis hanya dapat digunakan sehari sekali !\n\nKetik *!buygift* untuk membeli kodegift premium', m)
   } else {
        conn.reply(m.chat, `*「 KODE FREE TIDAK VALID 」*\n\nSilahkan belinya terlebih dahulu untuk mendapatkan kodegift !\n\nKetik *!buygift*`, m)
    }
}
handler.help = ['premgift <kode>']
handler.tags = ['xp']
handler.command = /^(premgift)$/i

module.exports = handler
