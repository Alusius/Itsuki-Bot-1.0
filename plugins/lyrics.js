// Pngocok handal

const fetch = require('node-fetch');

let handler = async (m, { conn, usedPrefix, command, text }) => {
  let res = await fetch(global.API('https://some-random-api.ml', '/lyrics', {
    title: text
  }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.thumbnail.genius) throw json
  conn.sendButtonLoc(m.chat, await (await fetch(json.thumbnail.genius)).buffer(), `
*${json.title}*
_${json.author}_\n
${json.lyrics}\n\n
${json.links.genius}
`, watermark, 'NEXT', `.lirik ${text}`, m)
}
handler.help = ['lirik'].map(v => v + ' <Apa>')
handler.tags = ['internet', 'edukasi']
handler.command = /^(lirik|lyrics|lyric)$/i

module.exports = handler
