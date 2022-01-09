/*let handler  = async (m, { conn, text }) => {
  let chats = conn.chats.all().filter(v => !v.read_only && v.message).map(v => v.jid)
  let content = await conn.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text + '\n' + readMore + '')
  for (let id of chats) conn.copyNForward(id, content)
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
}*/
let fetch = require('node-fetch')
let handler  = async (m, { conn, text }) => {
  let time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
  let thumb = 'https://telegra.ph/file/2a994c4949315bb7f51b8.jpg'
  let chats = conn.chats.all().filter(v => !v.read_only && v.message).map(v => v.jid)
  let content = await conn.cMod(m.chat, m, /bc|broadcast/i.test(text) ? text : text )
  for (let id of chats) /*conn.send2ButtonLoc*/conn.send2Button(id, `${text}`.trim(), `\n_* ALL BROADCAST*_\n${time}`, 'Owner', '.owner', 'Menu', '.menu', /*'Donasi', '.ds'*/)
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
}
handler.help = ['broadcast2', 'bcbutton', 'bc2'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(broadcast2|bcbutton|bc2)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

//
// B U A T - B U T T O N - A J A H
//
