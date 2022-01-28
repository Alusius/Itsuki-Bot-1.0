let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Harap Masukan Nama Film nya', m)
	let json = await (await fetch(`https://api.lolhuman.xyz/api/lk21?apikey=rey2k21&query=${text}`)).json()
	if (!json) throw json
  let {
    title,
    genre,
    rating,
    link,
    desc,
  } = json.result
	 	let hasil = `*🎥Film Dari ${text}*\n\n🏷️Judul : ${title}\n🔖Genre: : ${genre}\n⭐Rating : ${rating}\n🎥Link Movie : ${link}\n📖Sinopsis : ${desc}`.trim()
    conn.sendButtonImg(m.chat, await (await fetch(json.result.thumbnail)).buffer(), hasil, watermark, 'Internet', '.listanime', m)
}
handler.help = ['filmanime'].map(v => v + '<film>')
handler.tags = ['internet', 'anime']

handler.command = /^(filmanime)?$/i

handler.limit = true

module.exports = handler
