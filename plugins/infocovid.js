let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {

  await m.reply('Searching...')

   let covid = await (await fetch('https://i.ibb.co/8db5c7S/Coronavirus-2.jpg')).buffer()

	let res = await (await fetch(`https://api.kawalcorona.com/indonesia/`)).json()
      let hasil = `*INFO COVID-19 INONESIA*\n\nPositif : ${res.positif}\nMeninggal : ${res.meninggal}\nDirawat : ${res.dirawat}\nSembuh : ${res.sembuh}\n\nTetap Jaga Kesehatan, Pakai Masker, Stay At Home :3`

    conn.sendFile(m.chat, covid, 'infocovid.jpg', hasil, m)
}
handler.help = ['infocovid']
handler.tags = ['news']
handler.command = /^(infocovid)$/i

module.exports = handler
