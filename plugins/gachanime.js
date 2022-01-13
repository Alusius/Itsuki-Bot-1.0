let handler = async (m, { conn, args, usedPrefix, command }) => {
	if (!args[0]) {
		let no = 0
			return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Daftar Gacha yang ada pada RadBotZ",
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
                                    "description": "pemilik radbotz",
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
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
		
handler.help = ['gachanime'].map(v => v + ' <type>')
handler.tags = ['anime']
handler.command = /^gachanime$/i

handler.limit = true

module.exports = handler
//credit: KhaelSan
