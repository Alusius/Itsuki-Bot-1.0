/*
Gausah Beli Apikey X Team lagi broo
Mahal, mending pake lolhuman aja
Setiap ada yang eror langsung di fix sama dia
Tiktod By X-RyuuZeyy
*/

let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply(wait)
let res = await fetch(`https://api.lolhuman.xyz/api/tiktok?apikey=Dawnfrostkey&url=${args[0]}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { description, author, statistic, link } = json.result
await conn.sendFile(m.chat, link, 'tt.mp4', `
▶ ${statistic.playCount} Views
❤ ${statistic.diggCount} Likes
🔁 ${statistic.shareCount} Shares
💬 ${statistic.commentCount} Comments
- *By:* ${author.nickname} (${author.username})
- *Desc:*
${description}
`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}

handler.help = ['tiktok <url>']
handler.tags = ['downloader']
//handler.command = /^tiktok$/i
handler.command = /^(tik(tok)?(dl)?)$/i
handler.limit = true
module.exports = handler


//await conn.sendFile(m.chat, url, 'tiktok.mp4', kasihcaption, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
