let fs = require('fs')
let speed = require('performance-now')
let handler = async (m, { conn }) => {
            const formater1 = (seconds) => {
                    const pad1 = (s) => {
                        return (s < 10 ? '0' : '') + s
                    }                   
                    const hrs = Math.floor(seconds / (60 * 60))
                    const mins = Math.floor(seconds % (60 * 60) / 60)
                    const secs = Math.floor(seconds % 60)
                    return '  ' + pad1(hrs) + ' : ' + pad1(mins) + ' : ' + pad1(secs)
                }
            const uptime1 = process.uptime()
            const timestampi = speed();
            const latensip = speed() - timestampi
			conn.reply(m.chat, `BOT ONLINE SELAMA\n ${formater1(uptime1)}`, 'conversation', { quoted: m, contextInfo: { externalAdReply :{
sourceUrl: 'https://wa.me/62858929626673?text=Assalamualaikum',
mediaType: 2,
title: `Runtime : ${formater1(uptime1)}`,
body: 'RadBotZ By Raditya',
thumbnailUrl: fs.readFileSync('./src/RadBotZ.jpg')
,
}}})
        }
        
handler.help = ['runtime']
handler.tags = ['info', 'tools']

handler.command = /^(runtime)$/i
module.exports = handler 
