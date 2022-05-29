let fs = require('fs')
let handler  = async (m, { conn, usedPrefix: _p }) => {
const {
    MessageType,
    Mimetype
} = require("@adiwajshing/baileys");
const anu = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`,
                 'seconds': '182', 
                 'caption': 'Nothing to see',
                 'jpegThumbnail': fs.readFileSync('./src/RadBotZ.jpg')
                        }
                       }
	                  }
conn.sendMessage(m.chat, 'Test',
MessageType.text, {quoted: anu, contextInfo:{"forwardingScore":999, "isForwarded": true}})
}



handler.help = ['vid']

handler.tags = ['main']

handler.command = /^vid$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true

module.exports = handler
