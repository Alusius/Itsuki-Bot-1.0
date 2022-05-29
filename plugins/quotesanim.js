let fetch = require('node-fetch')
let handler = async(m, { conn, usedPrefix, command }) => {

	let res = await (await fetch(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=rey2k21`)).json()
	 	let hasil = `${res.result.quote}
chara: ${res.result.character}
anime: ${res.result.anime}
episode: ${res.result.episode}`.trim()

    conn.sendButton(m.chat, hasil, watermark, 'Next', `${usedPrefix + command}`, m)
}
handler.help = ['quoteanime']
handler.tags = ['anime', 'quotes']
handler.command = /^(quoteanime)$/i
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
