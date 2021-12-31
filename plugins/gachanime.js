let fetch = require('node-fetch')

let handler = async (m, { conn, args, usedPrefix, command, isPrems }) => {
	if (!args[0]) {
			let no = 0
				return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Daftar Gacha Nsfw untuk member premium",
                        "description": `Pencet tombol "LIST-GACHA" untuk menampilkan daftar gacha`,
						"footerText": "Lu premium bukan berartu ngespam command ini juga..",
                        "buttonText": "LIST-GACHA",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                {
                                    "title": "Status Bot",
                                    "description": "Status dan informasi Bot Atena.",
                                    "rowId": ".botstatus"
                                }, {
                                    "title": "Rules - S&K",
                                    "description": "User yang bijak selalu mematuhi Rules.",
                                    "rowId": ".snk"
                                }, {
                                    "title": "Sewa bot - Premium",
                                    "description": "Untuk kamu yang ingin melihat daftar harga sewa dan premium.",
                                    "rowId": ".sewabot"
                                }
                              ],
                                "title": "⟣────────❲ Tentang Bot dan lainnya ❳────────⟢"
                            }, {
                                "rows": [
                                {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Yaoi (dasar kau gay sialan)",
                                    "rowId": `${usedPrefix}nsfwgacha2 yaoi`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Ecchi",
                                    "rowId": `${usedPrefix}nsfwgacha2 ecchi`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Hentai",
                                    "rowId": `${usedPrefix}nsfwgacha2 hentai`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Ahegao",
                                    "rowId": `${usedPrefix}nsfwgacha2 ahegao`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Hololive Lewd",
                                    "rowId": `${usedPrefix}nsfwgacha2 hololewd`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Side Oppai",
                                    "rowId": `${usedPrefix}nsfwgacha2 sideoppai`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Anime Feets",
                                    "rowId": `${usedPrefix}nsfwgacha2 animefeets`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Anime Booty",
                                    "rowId": `${usedPrefix}nsfwgacha2 animebooty`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Chiisai Hentai",
                                    "rowId": `${usedPrefix}nsfwgacha2 chiisaihentai`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Anime Thighss",
                                    "rowId": `${usedPrefix}nsfwgacha2 animethighss`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Hentai Paradise",
                                    "rowId": `${usedPrefix}nsfwgacha2 hentaiparadise`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Hentai Femdom",
                                    "rowId": `${usedPrefix}nsfwgacha2 hentaifemdom`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Lewd Anime Girls",
                                    "rowId": `${usedPrefix}nsfwgacha2 lewdanimegirls`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Big Anime Tiddies",
                                    "rowId": `${usedPrefix}nsfwgacha2 biganimetiddies`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Anime Belly Button",
                                    "rowId": `${usedPrefix}nsfwgacha2 animebellybutton`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Hentai For Everyone",
                                    "rowId": `${usedPrefix}nsfwgacha2 hentai4everyone`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Anime Armpits (favorit owner hehe)",
                                    "rowId": `${usedPrefix}nsfwgacha2 animearmpits`
                                }
                              ],
                                "title": "⟣───────❲  List Gacha Nsfw Premium  ❳───────⟢"
                            }, {
                                "rows": [
                                {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Yuri",
                                    "rowId": `${usedPrefix}nsfwgacha2 yuri`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Ero",
                                    "rowId": `${usedPrefix}nsfwgacha2 ero`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Trap (dasar kau gay sialan)",
                                    "rowId": `${usedPrefix}nsfwgacha2 trap`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Lewd",
                                    "rowId": `${usedPrefix}nsfwgacha2 lewd`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Ero Neko",
                                    "rowId": `${usedPrefix}nsfwgacha2 eron`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Solo",
                                    "rowId": `${usedPrefix}nsfwgacha2 solo`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Keta",
                                    "rowId": `${usedPrefix}nsfwgacha2 keta`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Tits",
                                    "rowId": `${usedPrefix}nsfwgacha2 tits`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Ero Kitsune",
                                    "rowId": `${usedPrefix}nsfwgacha2 erok`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Solo Girls",
                                    "rowId": `${usedPrefix}nsfwgacha2 solog`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Feet Girl",
                                    "rowId": `${usedPrefix}nsfwgacha2 feetg`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Lewd Kitsune",
                                    "rowId": `${usedPrefix}nsfwgacha2 lewdk`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Pussy",
                                    "rowId": `${usedPrefix}nsfwgacha2 pussy_jpg`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Femdom",
                                    "rowId": `${usedPrefix}nsfwgacha2 femdom`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Ero Yuri",
                                    "rowId": `${usedPrefix}nsfwgacha2 eroyuri`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Cum",
                                    "rowId": `${usedPrefix}nsfwgacha2 cum_jpg`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Blowjob",
                                    "rowId": `${usedPrefix}nsfwgacha2 blowjob`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Ero Feet",
                                    "rowId": `${usedPrefix}nsfwgacha2 erofeet`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Hololive Ero",
                                    "rowId": `${usedPrefix}nsfwgacha2 ecchi`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Classic",
                                    "rowId": `${usedPrefix}nsfwgacha2 classic`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Ero Kemo",
                                    "rowId": `${usedPrefix}nsfwgacha2 erokemo`
                                }, {
                                    "title": `Gacha ${no+=1}.`,
                                    "description": "Futanari (bro?)",
                                    "rowId": `${usedPrefix}nsfwgacha2 futanari`
                                }
                              ],
                                "title": "⟣──────❲  List Gacha Nsfw Premium V2  ❳──────⟢"
                            }, {
                                "rows": [
                                {
                                    "title": "Owner bot",
                                    "description": "pemilik Bot Ayame",
                                    "rowId": ".owner"
                                }, {
                                    "title": "Donasi",
                                    "description": "Jangan lupa donasi untuk mendukung bot agar bisa membeli apikey",
                                    "rowId": ".donasi"
                                }, {
                                    "title": "Kata penutup",
                                    "description": "Gacha doang, donasi kagak :/",
                                    "rowId": ".creator"
                                }, 
                              ],
                                "title": "⟣─────────────❲ Penutup ❳─────────────⟢"
                            }
                        ], "contextInfo": 
							{
								"stanzaId": m.key.id,
								"participant": m.sender,
								"quotedMessage": m.message
							}
						}
                 }, {}), {waitForAck: true})
		}
	
	
//    let er = `
//┌〔 Gacha Nsfw v2 〕
//│⬦ yaoi [yang make gay]
//│⬦ ecchi
//│⬦ hentai
//│⬦ ahegao
//│⬦ hololewd
//│⬦ sideoppai
//│⬦ animefeets
//│⬦ animebooty
//│⬦ chiisaihentai
//│⬦ animethighss
//│⬦ hentaiparadise
//│⬦ hentaifemdom
//│⬦ lewdanimegirls
//│⬦ biganimetiddies
//│⬦ animebellybutton
//│⬦ hentai4everyone
//│⬦ animearmpits [fav]
//└────
//
//┌〔 Gacha Nsfw v2 〕
//│⬦ ero
//│⬦ yuri
//│⬦ trap
//│⬦ lewd
//│⬦ eron
//│⬦ solo
//│⬦ keta
//│⬦ tits
//│⬦ erok
//│⬦ solog
//│⬦ feetg
//│⬦ lewdk
//│⬦ pussy_jpg
//│⬦ femdom
//│⬦ eroyuri
//│⬦ cum_jpg
//│⬦ blowjob
//│⬦ erofeet
//│⬦ holoero
//│⬦ classic
//│⬦ erokemo
//│⬦ futanari
//└────
//
//example:
//${usedPrefix + command} hololewd
//${usedPrefix + command} pussy_jpg
//    `.trim()

    switch (args[0].toLowerCase()) {
				case 'chiisaihentai':
                case 'yaoi':
                case 'ecchi':
                case 'hentai':
                case 'ahegao':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
		let res = await fetch(global.API('lolhum', '/api/random/nsfw/' + args[0].toLowerCase(), {}, 'Dawnfrostkey'))
		m.reply(global.wait)
			if (!res.ok) throw await res.text()
			let img = await res.buffer()
			if (!img) throw img
				conn.sendButtonImg(m.chat, await(img), 'Hayoo ngapain gosok layar hp ke tytyd', watermark, 'Gacha Again', `${usedPrefix}nsfwgacha2 ` + args[0].toLowerCase(), m)
            	break
				case 'ero':
				case 'yuri':
				case 'trap':
				case 'lewd':
				case 'eron':
				case 'solo':
				case 'keta':
				case 'tits':
				case 'erok':
				case 'solog':
				case 'feetg':
				case 'lewdk':
				case 'pussy_jpg':
				case 'femdom':
				case 'eroyuri':
				case 'cum_jpg':
				case 'blowjob':
				case 'erofeet':
				case 'holoero':
				case 'classic':
				case 'erokemo':
				case 'futanari':
				let res2 = await fetch(global.API('lolhum', '/api/random2/' + args[0].toLowerCase(), {}, 'Dawnfrostkey'))
		m.reply(global.wait)
			if (!res2.ok) throw await res2.text()
			let img2 = await res2.buffer()
			if (!img2) throw img2
				conn.sendButtonImg(m.chat, await(img2), 'Hayoo ngapain gosok layar hp ke tytyd', watermark, 'Gacha Again', `${usedPrefix}nsfwgacha2 ` + args[0].toLowerCase(), m)
				break
        default:
            throw er
    }
}
handler.help = ['nsfwgacha2'].map(v => v + ' <type>')
handler.tags = ['hentai']
handler.command = /^nsfwgacha2$/i

handler.premium = true
handler.limit = true

module.exports = handler
//Credit: By KhaelSan
