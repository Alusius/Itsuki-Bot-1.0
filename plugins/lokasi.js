/*
* Fitur Image To Maps
* Bukan fitur virus!!!
* Hanya work di wa ori , wa gb ngebug gambar nya :v
* Creator idhamthoriqbot
* Recode by BochilGaming :)
*/

let handler = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m 
  let mime = (q.msg || q).mimetype || ''
  if (/image|video/.test(mime)) {
    let img = await q.download()
    if (!img) throw 'Foto/Sticker tidak ditemukan'
    conn.sendMessage(m.chat, {degreesLatitude: 25.21465, degreesLongitude: 49.33476, jpegThumbnail: img, Image: img, caption: "WORK WA ORI"}, MessageType.location)
  } else m.reply('Reply Image/Video')
}

handler.help = ['lokasi']
handler.tags = ['tools']
handler.command = /^(lokasi)$/i

module.exports = handler
