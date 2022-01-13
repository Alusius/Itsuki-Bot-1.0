let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
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
                                    "title": `Gacha 1.`,
                                    "description": "Waifu",
                                    "rowId": `.waifu`
                                }, {
                                    "title": `Gacha 2.`,
                                    "description": "Husbu",
                                    "rowId": `.husbu`
                                }, {
                                    "title": `Gacha 3.`,
                                    "description": "Neko",
                                    "rowId": `.neko`
                                }, {
                                    "title": `Gacha 4.`,
                                    "description": "Loli (buat para pedo👎🏿)",
                                    "rowId": `.loli`
                                }, {
                                    "title": `Gacha 5.`,
                                    "description": "Elf",
                                    "rowId": `.elf`
                                }, {
                                    "title": `Gacha 6.`,
                                    "description": "Shota",
                                    "rowId": `.shota`
                                }, {
                                    "title": `Gacha 7.`,
                                    "description": "Sagiri",
                                    "rowId": `.sagiri`
                                }, {
                                    "title": `Gacha 8.`,
                                    "description": "Elaina",
                                    "rowId": `.elaina`
                                }, {
                                    "title": `Gacha 9.`,
                                    "description": "Kanna",
                                    "rowId": `.kanna`
                                }, {
                                    "title": `Gacha 10.`,
                                    "description": "Shinobu",
                                    "rowId": `.shinobu`
                                }, {
                                    "title": `Gacha 11.`,
                                    "description": "Megumin",
                                    "rowId": `.megumin`
                                }, {
                                    "title": `Gacha 12. `,
                                    "description": "Art",
                                    "rowId": `. art`
                                }, {
                                    "title": `Gacha 13.`,
                                    "description": "Wallpaper Anime",
                                    "rowId": `.wallnime` 
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
"participant": "0@s.whatsapp.net",
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.help = ['gachanime']
handler.tags = ['anime']
handler.command = /^(gachanime)$/i

handler.limit = true

module.exports = handler
