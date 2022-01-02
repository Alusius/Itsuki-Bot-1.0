let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let handler = async (m, { conn, text, participants }) => {
const anu = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    locationMessage: {
                    name: '1 Tag',
                    jpegThumbnail: fs.readFileSync('./src/RadBotZ.jpg')
                          }
                        }
                      }
  const { MessageType } = require('@adiwajshing/baileys')
  let users = participants.map(u => u.jid)
  let q = m.quoted ? m.quoted : m
  let c = m.quoted ? m.quoted : m.msg
  let msg = conn.cMod(
    m.chat,
    conn.prepareMessageFromContent(
      m.chat,
      { [c.toJSON ? q.mtype : MessageType.extendedText]: c.toJSON ? c.toJSON() : {
        text: c || ''
      } },
      {
        contextInfo: {
          mentionedJid: users
        },
        quoted: anu
      }
    ),
    text || q.text 
  )
  await conn.relayWAMessage(msg)
}
handler.help = ['hidetag'].map(v => 'o' + v + ' [teks]')
handler.tags = ['grup']
handler.command = /^(tag)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = false

handler.fail = null

module.exports = handler
