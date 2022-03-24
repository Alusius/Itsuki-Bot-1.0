const axios = require("axios");

let handler = async (m, { conn, usedPrefix, command }) => {

  let res = await axios.get(`https://leyscoders-api.herokuapp.com/api/katailham?apikey=MIMINGANZ`);
  let hasil = `${res.data.result}`
  conn.sendButton(m.chat, hasil, '©RadBotZ', 'Kata ilham', `${usedPrefix + command}`, m)
}
handler.help = ['kata'].map(v => v + 'ilham')
handler.tags = ['quotes']
handler.command = /^(katailham)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
