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
                                    "description": "Chika",
                                    "rowId": `.chika`
                                }, {
                                    "title": `Gacha 2.`,
                                    "description": "Delvira",
                                    "rowId": `.delvira`
                                }, {
                                    "title": `Gacha 3.`,
                                    "description": "Ayu",
                                    "rowId": `.ayu`
                                }, {
                                    "title": `Gacha 4.`,
                                    "description": "Bunga",
                                    "rowId": `.bunga`
                                }, {
                                    "title": `Gacha 5.`,
                                    "description": "Aura",
                                    "rowId": `.aura`
                                }, {
                                    "title": `Gacha 6.`,
                                    "description": "Nisa",
                                    "rowId": `.nisa`
                                }, {
                                    "title": `Gacha 7.`,
                                    "description": "Zifa",
                                    "rowId": `.zifa`
                                }, {
                                    "title": `Gacha 8.`,
                                    "description": "Yana",
                                    "rowId": `.yana`
                                }, {
                                    "title": `Gacha 9.`,
                                    "description": "Viona",
                                    "rowId": `.viona`
                                }, {
                                    "title": `Gacha 10.`,
                                    "description": "Syania",
                                    "rowId": `.syania`
                                }, {
                                    "title": `Gacha 11.`,
                                    "description": "Riri",
                                    "rowId": `.riri`
                                }, {
                                    "title": `Gacha 12.`,
                                    "description": "Syifa",
                                    "rowId": `.syifa`
                                }, {
                                    "title": `Gacha 13.`,
                                    "description": "Mama Gina",
                                    "rowId": `.mamagina`
                                }, {
                                    "title": `Gacha 14.`,
                                    "description": "Alcakenya",
                                    "rowId": `.alcakenya`
                                }, {
                                    "title": `Gacha 15.`,
                                    "description": "Mangayutri",
                                    "rowId": `.mangayutri`
                                }, {
                                    "title": `Gacha 16.`,
                                    "description": "Rikagus riani",
                                    "rowId": `.rikagusriani`
                                }, {
                                    "title": `Gacha 17.`,
                                    "description": "Asupan",
                                    "rowId": `.asupan`
                                }, {
                                    "title": `Gacha 18.`,
                                    "description": "Bocil",
                                    "rowId": `.bocil`
                                }, {
                                    "title": `Gacha 19.`,
                                    "description": "Gheayubie",
                                    "rowId": `.geayubi`
                                }, {
                                    "title": `Gacha 20.`,
                                    "description": "Santuy",
                                    "rowId": `.santuy`
                                }, {
                                    "title": `Gacha 21.`,
                                    "description": "Ukhty",
                                    "rowId": `.ukhty`
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

handler.help = ['gachasupan']
handler.tags = ['internet', 'premium']
handler.command = /^(gachasupan)$/i
handler.premium = true

handler.limit = true

module.exports = handler
