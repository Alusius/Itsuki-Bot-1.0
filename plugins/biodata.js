const { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, text }) => {
  let ext= `
*BIODATA OWNER*
*Nama* : Raditya
*Umur* : 19
*Kelas* : 3 Smk
*Status* : Private
*SOSIAL MEDIA*
*instagran* : Private
*Facebook* : Private
*Chanel Youtube* : none
*Gmail* : Xnxx@gmail.com
*Github* : https://github.com/Drz103
_Oke udah itu aja terimakasih_
`
let name = await conn.getName(m.sender)

let fkon = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { contactMessage: { displayName: `${name}`, vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}}

  sumberImg = fs.readFileSync(`./src/RadBotZ.jpg`)
  image = (await conn.prepareMessage('0@s.whatsapp.net', sumberImg, MessageType.image, { thumbnail: Buffer.alloc(0) })).message.imageMessage
  res = await conn.prepareMessageFromContent(m.chat, {
    "productMessage": {
      "product": {
        "productImage": image,
        "productId": "4938174216214248",
        "title": "───────[ OWNER ]───────",
        "description": '\n\n' + ext,
        "retailerId": "Itu Owner ku ya ^~^",
        "url": '',
        "descriptionCount": "999999999",
        "productImageCount": "1",
      },
      "businessOwnerJid": "62858929626673@s.whatsapp.net",
      "contextInfo": {
        "forwardingScore": 9999,
        "isForwarded": false
      }
    }
  },
    { quoted: fkon })
  conn.relayWAMessage(res)

}
handler.help = ['infoowner', 'infocreator']
handler.tags = ['info']
handler.command = /^(infoowner|infocreator)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
