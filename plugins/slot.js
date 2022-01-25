let axios = require("axios");
let handler = async(m, { conn, text }) => {

	axios.get(`https://api.xteam.xyz/game/virtualslot?APIKEY=apivproject`).then ((res) => {
	 	let hasil = `${res.data.map}\nHasil : ${res.data.hasil}\nScore :${res.data.score}`                  

    conn.sendButton(m.chat, hasil, watermark, 'Lagi', '.slot', m)
	})
}
handler.help = ['slot']
handler.tags = ['game']
handler.command = /^(slot)$/i
handler.register = true

handler.limit = true

module.exports = handler
