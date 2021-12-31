//by Caliph & Akbar
const Canvacord = require('canvacord')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (/image/.test(mime)) {
let image = await q.download()
Canvacord.Canvas.wanted(image)
  .then(async buffer => {
 conn.sendMessage(m.chat, buffer, 'imageMessage', { quoted: m, caption: '*Pengumuman*\nOrang tersebut dicari!!'})
  }) 
  } else throw 'Gunakan Foto!'
}
handler.help = ['wanted2 (caption|reply)']
handler.tags = ['tools']
handler.command = /^wanted2$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
