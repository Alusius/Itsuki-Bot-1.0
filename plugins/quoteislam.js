let fetch = require('node-fetch')
 let handler = async (m, { conn, usedPrefix, command }) => {
 	let heum = await fetch(`https://api.lolhuman.xyz/api/quotes/islami?apikey=rey2k21`)
 amin = await heum.json()
    conn.sendButton(m.chat, `${amin.result}`.trim(), watermark, 'Quote Islami', `${usedPrefix + command}`)
    }
    
handler.help = ['muslimq']
handler.tags = ['quotes']
handler.command = /^(muslimq)$/i
module.exports = handler
