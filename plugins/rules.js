let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `Kebijakan Privasi, Syarat Ketentuan dan Peraturan Sirad BOT

Kebijakan Privasi
1. RadBotZ tidak akan merekam data riwayat chat user.
2. RadBotZ tidak akan menyebarkan nomor users.
3. RadBotZ tidak akan menyimpan media yang dikirimkan oleh users.
4. RadBotZ tidak akan menyalah gunakan data data users.
5. Owner RadBotZ berhak melihat data riwayat chat users.
6. Owner RadBotZ berhak melihat status users.
7. Owner RadBotZ dapat melihat riwayat chat, dan media yang dikirimkan users.

Peraturan Sirad Bot
1. Users dilarang menelpon maupun memvideo call nomor bot.
2. Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3. Users diharap tidak melakukan spam dalam penggunaan bot.
4. Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.
5. Users diharap untuk tidak menyalah gunakan fitur fitur bot.

Syarat Ketentuan Sirad Bot
1. Bot akan keluar dari group apabila sudah waktunya keluar.
2. RadBotZ dapat mem-ban users secara sepihak terlepas dari users salah atau tidak.
3. RadBotZ *tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.*
4. RadBotZ akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
5. RadBotZ bertanggung jawab atas kesalahan fatal dalam programing maupun owner.

-Raditya

Peraturan: 1 Oktober 2021
`.trim()
  const button = {
        buttonText: 'Klik Di sini',
        description: kontol,
        sections:  [{title: "Silahkan di pilih gausah pilih yang gaada", rows: [
        {title: 'Menu Utama', description: "Kembali ke Menu Utama", rowId:".?"},
        {title: 'Sewa Bot', description: "Sewa bot dengan memasukkan bot ke grup kamu", rowId:".sewa"},
        {title: 'Cara Invit?', description: "Cara Memasukkan Bot Di GC", rowId:".tutorbot"},
        {title: 'Nomor Owner', description: "CHAT *P* TIDAK DI BALAS", rowId:".owner"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}

handler.tags = ['main', 'update']
handler.command = /^(rules|rule)$/i
handler.help = ['rules']
module.exports = handler
