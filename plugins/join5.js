let { MessageType } = require('@adiwajshing/baileys')
let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, usedPrefix }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link Salah'
    let res = await conn.acceptInvite(code)
    m.reply(`Berhasil join grup ${res.gid} *BOT AKAN KELUAR DALAM WAKTU 4JAM 25MENIT*`).then(() => {
        var jumlahHari = 86400000 * 0.2
        var now = new Date() * 1
        if (now < global.db.data.chats[res.gid].expired) global.db.data.chats[res.gid].expired += jumlahHari
        else global.db.data.chats[res.gid].expired = now + jumlahHari
    })
    await conn.sendMessage(res.gid, `Halo,\n *${conn.user.name}* adalah bot whatsapp yang dibangun dengan Nodejs, Saya baru saja bergabung di grup ini diundang oleh @${m.sender.split`@`[0]}
    
ketik *#menu* untuk melihat daftar perintah`, MessageType.text, { contextInfo: { externalAdReply :{
       mediaUrl: ' ',
       mediaType: 4,
       title: 'LynXzy🥀',
       body: 'Whatsapp Developer Bot',
       thumbnailUrl: image,
sourceUrl: 'https://wa.me/60189830350?text=Assalamualaikum'
}}})
}
handler.help = ['join5 <linkgrup> ']
handler.tags = ['main']
handler.command = /^join5$/i

handler.limit = 20

module.exports = handler
