let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  let ext= `
┌─〔 GRUB BOT 〕
│ 
├➥ *✗Link grub bot by raditya*
│https://chat.whatsapp.com/D5IU5pzGDSyE6lAkqqYnvr
├➥ *Yang ada Bot Boleh*
│   *masukin ke grub✅*
├➥ *Admin Selalu Benar✅*
├➥ *Jangan spam karna*
│   *owner grub hp nya kentang✅*
├➥ *Sebelum Bergabung Baca*
│   *Rules Terlebih dahulu❗*
│
├➥*©GRUB-BOT 2021*
└─「 *BOT* 」

`.trim()
conn.send2ButtonLoc(m.chat, await (await fetch(fla + 'GRUB SIRAD')).buffer(), ext, 'Grub Bot By Raditya', 'SIAP BANG🗿', 'AUTO JOIN', 'Donasi', '.donasi', m)

}
handler.help = ['Gruboffical']
handler.tags = ['main']
handler.command = /^(gruboffical)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
