const { promisify } = require('util');
const _gis = require('g-i-s');
const gis = promisify(_gis);
const fetch = require('node-fetch');

let handler = async (m, { conn, text, command, usedPrefix }) => {
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} pisang`
  let results = await gis(text) || []
  let { url, width, height } = pickRandom(results) || {}
  if (!url) throw '404 Not Found'
  conn.sendButtonImg(m.chat, await (await fetch(url)).buffer(), `*──── 「 GOOGLE IMAGE 」 ────*\n\n${text}\n➸ *width*: ${width}\n➸ *height*: ${height}`, watermark, 'NEXT', `.gimage ${text}`, m)
}
handler.help = ['gimage <pencarian>', 'image <pencarian>']
handler.tags = ['internet']
handler.command = /^(g?image)$/i

module.exports = handler

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}
