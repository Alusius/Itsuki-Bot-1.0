let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  await m.reply(global.wait)
  let res = await fetch(`https://islamic-api-indonesia.herokuapp.com/api/data/json/ayatkursi`)
  json = await res.json()
  let {
    tafsir,
    latin,
    arabic,
    translation
  } = json.result.data
  let caption = `
*「 Ayat Kursi 」*
${arabic}
${latin}
Artinya:
_"${translation}"_
`.trim()
  m.reply(caption)
  await m.reply(`Tafsir:\n\n${tafsir}`)
}
handler.help = ['ayatkursi']
handler.tags = ['islam']
handler.command = /^(ayatkursi)$/i


module.exports = handler
