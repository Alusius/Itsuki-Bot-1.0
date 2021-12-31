let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": `Hai Kak ${conn.getName(m.sender)}\n*setelan grub*`,
                        "description": "\n\n*@Raditya*",
                        "footerText": "jika ada bug atau erorr silahkan laporkan ke owner bot.",
                        "buttonText": "*KLIK DISINI*",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                    	"title": "WELCOME👋",
                                        "description": "mengaktifkan fitur welcome",
                                        "rowId": ".on welcome"
                                        },{
                                    	"title": "OFF WELCOME👋",
                                        "description": "menonaktifkan fitur welcome",
                                        "rowId": ".off welcome"
                                        },{
                                    	"title": "ANTI DELETE⛔",
                                        "description": "mengaktifkan fitur antidelete",
                                        "rowId": ".on delete"
                                        },{
                                        "title": "OFF ANTI DELETE⛔",
                                        "description": "menonaktifkan fitur antidelete",
                                        "rowId": ".off delete"
                                        },{
                                        "title": "VIEWONCE💾",
                                        "description": "mengaktifkan fitur viewonce",
                                        "rowId": ".on viewonce"
                                        },{
                                        "title": "OFF VIEWONCE💾",
                                        "description": "menonaktifkan fitur viewonce",
                                        "rowId": ".off viewonce"             
                                        },{
                                        "title": "DETECT⁉",
                                        "description": "mengaktifkan fitur detect",
                                        "rowId": ".on detect"
                                        },{
                                        "title": "OFF DETECT⁉",
                                        "description": "menonaktifkan fitur detect",
                                        "rowId": ".off detect"
                                        },{
                                    	"title": "ANTIBADWORD🚫",
                                        "description": "mengaktifkan fitur antibadword",
                                        "rowId": ".on antibadword"
                                        },{
                                    	"title": "OFF ANTIBADWORD🚫",
                                        "description": "menonaktifkan fitur antibadword",
                                        "rowId": ".off antibadword"
                                        },{
                                    	"title": "ANTILINK❗",
                                        "description": "mengaktifkan fitur antilink",
                                        "rowId": ".on antilink"
                                        },{
                                    	"title": "OFF ANTILINK❗",
                                        "description": "menonaktifkan fitur antilink",
                                        "rowId": ".off antilink"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": "0@s.whatsapp.net",
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.help = ['grubsettings']
handler.tags = ['group']
handler.command = /^(setelangrub|grubsett|settingsgrub|grubsettings|settgrub|groupsett)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = true
handler.botAdmin = true

handler.fail = null

module.exports = handler
