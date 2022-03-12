let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
	conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'sewa bot')).buffer(), `╠═〘 Beli Bot 〙 ═
╠➥ *1 Minggu* :      *Rm 5.00*
╠➥ *2 Minggu* :      *Rm 10.00*
╠➥ *3 Minggu* : *Rm 15.00*
╠➥ *1 Bulan* :   *Rm 20.00*
║
╠═〘 𝐏𝐄𝐌𝐁𝐀𝐘𝐀𝐑𝐀𝐍 〙 ═
╠➥ Topup/Pin
║
╠═ Tertarik Untuk Beli Bot Ini?
╠➥Klil Button Di Bawah
║
╠═〘 Hyzer 〙 ═`.trim(), '©shirobotz', 'Digi', '#viadigi', 'Umobile', '#viaumobile', m)
}

handler.command = /^sewabot$/i

module.exports = handler
