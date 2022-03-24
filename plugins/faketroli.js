const { MessageType } = require("@adiwajshing/baileys")
const fs = require("fs");

let handler = async (m, { conn, args, text, usedPrefix: _p }) => {
  let [poop, tytyd] = text.split("|");
  if (!poop) return m.reply("Masukkan Teks Utama");
  if (!tytyd) tytyd = "Shiro-Botz";
  try {
    const xixi = {
      key: {
        participant: '0@s.whatsapp.net'
      },
      message: {
        orderMessage: {
          itemCount: 1,
          status: 1,
          surface: 1,
          message: tytyd,
          orderTitle: "Shiro-Botz",
          thumbnail: fs.readFileSync("./src/mike.jpg"),
          sellerJid: '0@s.whatsapp.net'
        }
      }
    }
    conn.sendMessage(m.chat, poop, MessageType.extendedText, { quoted: xixi })
  } catch (e) {
    m.reply("```ERROR```")
    console.log(e)
  }
}

handler.command = /^(troly)$/i

module.exports = handler
