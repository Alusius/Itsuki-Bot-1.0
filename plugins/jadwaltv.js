let axios = require("axios")
let handler = async(m, { conn, text }) => { 

  await m.reply(global.wait) 
   axios.get(`https://api.haipbis.xyz/jadwaltvnow`).then((res) => {
    let hasil = `Jam : ${res.data.jam}\n\n${res.data.jadwalTV}`
          
    conn.reply(m.chat, hasil, m)
    })
}
handler.command = /^(jadwaltv)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.disable = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler 