const { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m, { conn, text }) => {

    const json = JSON.parse(fs.readFileSync('./src/premium.json'))
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    if (json.includes(who.split`@`[0])) throw `${conn.getName(who)} sudah premium!`
    json.push(`${who.split`@`[0]}`)
    fs.writeFileSync('./src/premium.json', JSON.stringify(json))
    m.reply(`${conn.getName(who)} sekarang premium!`)

    m.reply('Terimakasih Karena sudah membeli Member Premium Bot kami,\nJika anda membeli Premium Anda harus memenuhi beberapa syarat dibawah:\n1.Mohon untuk tidak melakukan top-up atau transfer dengan jumlah Yang berlebihan ke-sesama pengguna bot. Jika melanggar, anda akan di warning oleh owner.\n2. jika anda ingin menambahkan bot ke grup anda, anda haruslah seorang admin jika tidak bot akan keluar dari grup tersebut. Dan kalau bisa jadikan bot sebagai admin.', who) 
    delete require.cache[require.resolve('../config')]
    require('../config')

}
handler.help = ['addprem [@user]']
handler.tags = ['owner']
handler.command = /^(add|tambah|\+)prem$/i

handler.owner = true

module.exports = handler
