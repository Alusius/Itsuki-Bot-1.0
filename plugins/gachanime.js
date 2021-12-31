let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command }) => {
	if (!args[0]) {
		let no = 0
			return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Daftar Gacha yang ada pada Bot Atena",
                        "description": `Pencet tombol "LIST-GACHA" untuk menampilkan daftar gacha`,
						"footerText": "Harap menggunakan command ini dengan bijak!",
                        "buttonText": "LIST-GACHA",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [{
                                    "title": "Status Bot",
                                    "description": "Status dan informasi Bot.",
                                    "rowId": ".botstatus"
                                }, {
                                    "title": "Rules - S&K",
                                    "description": "User yang bijak selalu mematuhi Rules.",
                                    "rowId": ".snk"
                                }, {
                                    "title": "Sewa bot - Premium",
                                    "description": "Untuk kamu yang ingin melihat daftar harga sewa dan premium.",
                                    "rowId": ".sewabot"
                                }],
                                "title": "⟣────────❲ Tentang Bot dan lainnya ❳────────⟢"
                            }, {
                                "rows": [{
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Waifu",
                                    "rowId": `${usedPrefix}waifu`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Husbu",
                                    "rowId": `${usedPrefix}husbu`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Neko",
                                    "rowId": `${usedPrefix}neko`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Loli (buat para pedo👎🏿)",
                                    "rowId": `${usedPrefix}loli`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Elf",
                                    "rowId": `${usedPrefix}elf`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Shota",
                                    "rowId": `${usedPrefix}shota`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Sagiri",
                                    "rowId": `${usedPrefix}sagiri`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Elaina",
                                    "rowId": `${usedPrefix}elaina`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Kanna",
                                    "rowId": `${usedPrefix}kanna`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Shinobu",
                                    "rowId": `${usedPrefix}shinobu`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Megumin",
                                    "rowId": `${usedPrefix}megumin`
                                }, {
                                    "title": `Gacha ${no+=1}. `,
                                    "description": "Art",
                                    "rowId": `${usedPrefix} art`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Wallpaper Anime",
                                    "rowId": `${usedPrefix}wallnime` 
                                }],
                                "title": "⟣────────────❲  List Gacha  ❳────────────⟢"
                            }, {
                                "rows": [{
                                    "title": "Owner bot",
                                    "description": "pemilik RadBotZ",
                                    "rowId": ".owner"
                                }, {
                                    "title": "Donasi",
                                    "description": "Jangan lupa donasi untuk mendukung bot agar bisa membeli apikey",
                                    "rowId": ".donasi"
                                }, {
                                    "title": "Kata penutup",
                                    "description": "Terimakasih sudah menggunakan fiture ini dengan baik, jika ada kesalahan atau permintaan bisa chat ke nomor owner\nNote: chat P/main² tidak akan di respon(user bisa terkena banned/block)",
                                    "rowId": ".creator"
                                }],
                                "title": "⟣─────────────❲ Penutup ❳─────────────⟢"
                            }
                        ], "contextInfo": 
						{ "stanzaId": m.key.id,
                        "participant": m.sender,
                        "quotedMessage": m.message
						}
                    }
                 }, {}), {waitForAck: true})
		}
// For WhatsApp Business
//let er = `
//┌〔 List Gacha 〕
//│⬦ waifu
//│⬦ husbu
//│⬦ neko
//│⬦ loli
//│⬦ elf
//│⬦ shota
//│⬦ sagiri
//│⬦ elaina
//│⬦ kanna
//│⬦ shinobu
//│⬦ megumin
//│⬦ art
//│⬦ wallnime
//│⬦ genshin
//│⬦furry
//│⬦ azurlane
//│⬦ frontline
//│⬦ lol
//│⬦ dota2
//└────
//
//example:
//${usedPrefix + command} elf
//_© Atena_
//    `.trim()
//    if (!args[0]) throw er

    switch (args[0].toLowerCase()) {
        case 'waifu':
        case 'husbu':
        case 'neko':
        case 'loli':
        case 'elf':
        case 'shota':
        case 'sagiri':
        case 'kanna':
        case 'elaina':
        case 'shinobu':
        case 'megumin':
        case 'art':
        case 'wallnime':
        m.reply(global.wait)
		let res = await fetch(global.API('lolhum', '/api/random/' + args[0].toLowerCase(), {}, 'apikey'))
			if (!res.ok) throw await res.text()
			let img = await res.buffer()
			if (!img) throw img
				conn.sendButtonImg(m.chat, await(img), 'Nih ' + args[0].toLowerCase() + ' nya', watermark, '⏩Get Again', `${usedPrefix}gacha ` + args[0].toLowerCase(), m, { thumbnail: img })
            break
		case 'genshin':
		case 'furry':
		case 'azurlane':
		case 'frontline':
		case 'lol': //league of legends
		case 'dota2':
		let res2 = await fetch(global.API('fxc7', '/api/sfw/' + args[0].toLowerCase(), {}, 'apikey'))
		m.reply(global.wait)
		if (!res2.ok) throw await res2.text()
			let img2 = await res2.buffer()
			if (!img2) throw img2
				conn.sendButtonImg(m.chat, await(img2), 'Nih ' + args[0].toLowerCase() + ' nya', watermark, '⏩Get Again', `${usedPrefix}gacha ` + args[0].toLowerCase(), m)
			break
        default:
            throw er
    }
}
handler.help = ['gachanime'].map(v => v + ' <type>')
handler.tags = ['anime']
handler.command = /^gachanime$/i

handler.limit = true

module.exports = handler
//credit: KhaelSan
