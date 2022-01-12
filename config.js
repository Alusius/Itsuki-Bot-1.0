// Bismillahirrahmanirrahim
// thank you to ALLAH Swt
// thank you to Nurutomo as wabot-aq
// thank you to ariffb as stikerinbot
// thank you to botstylee
// thank you to bochilgaming as games-wabot
// thank you to benni ismael
// thank you to zerochanBot
// thank you to fernazer
// thank you to MikeBot Dev Team
// thank you to ALL Bot creator
// and thanks you to who support my Bot
let fs = require('fs')
let chalk = require('chalk')

global.linkGC = ['https://chat.whatsapp.com/EVCGfzxLWfp81n0WhmVklH', 'https://chat.whatsapp.com/FnNAbem8o6r4pgLhSdO8Q9', 'https://chat.whatsapp.com/HBhy7rVae3o0PkIfkhvs2N'] // ganti jadi group lu
global.owner = ['6285813385281', '62858929626673', '6285892962667'] // Masukan nomot kalian
global.mods = ['6289669349047', '6288261394557'] // Moderator
global.prems = JSON.parse(fs.readFileSync('./src/premium.json')) // Pengguna premium tidak memerlukan limit
global.APIs = { // API Prefix
  // name: 'https://website'
  bx: 'https://bx-hunter.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  hardianto: 'https://hardianto-chan.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  fxc7: 'https://fxc7-api.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey' (apikey kalian^_^)
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://bx-hunter.herokuapp.com': 'Ikyy69',
  'https://hardianto-chan.herokuapp.com': 'hardianto',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': 'Dawnfrostkey',
  'https://api.lolhuman.xyz': 'Dawnfrostkey',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://fxc7-api.herokuapp.com': 'fxc7COOL',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

// Sticker WM
const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'rad#'
  var sticker_author = '©radbotz'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

global.packname = sticker_name
global.author = sticker_author

// silakan di ganti klo mau
global.wait = '_Wait.._'
global.rpg = 'Fitur Rpg Dimatikan\nKetik *!enable* *rpg* untuk menggunakan fitur ini!\nKalo Mau main Disini aja\nhttps://chat.whatsapp.com/FnNAbem8o6r4pgLhSdO8Q9'
global.nsfw = 'Fitur NSFW Dimatikan\nKetik *!enable* *nsfw* untuk menggunakan fitur ini!\n“Katakanlah kepada orang laki-laki yang beriman: Hendaklah mereka menahan pandanganya, dan memelihara kemaluannya; … Katakanlah kepada wanita yang beriman: Hendaklah mereka menahan pandangannya, dan kemaluannya, dan janganlah mereka Menampakkan perhiasannya, kecuali yang (biasa) nampak dari padany,” \n(TQS. Al-Nur [24]: 30-31).'
global.eror = '_*Error*_'

global.fla = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=500&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text='
global.watermark = '©Games ×͜×' //change the watermark (beberapa harus manual)
global.version = '𝑩𝑶𝑻 @^1.1.4'
global.ttq = `Thanks to:
•Allah swt
•Nurutomo
•Ariffb
•IrwanX
•Dawnfrosty
•Beniismael
•Raditya (owner)
•Rasel
•Furqan
•Elyas
•Atenabot  
•Nadin
•Aca Mirabel
•Penyedia Layanan API
•Orang-orang yang Berdonasi
•My ortu

Jika menemukan bug atau request fitur dan join bot harap chat owner dengan cara:
*-report* [pesan].

(Bot join group NOT FREE!)
Price:
10K untuk 1 bulan
Untuk 1 group

Nb:bot ini masih terus dikembangkan.`

// Ubah saja
global.ppkosong = 'https://telegra.ph/file/22fd84e4a3244e1b17e4e.png'
global.ppgc = 'https://telegra.ph/file/22fd84e4a3244e1b17e4e.png'
global.image = 'https://telegra.ph/file/4f4a5a3cde6a98a96da79.jpg'//change the image
global.bank = 'https://telegra.ph/file/d5ddf4cc627bb0e6bc420.jpg'
global.kandang = 'https://telegra.ph/file/67a6ee607d03a4e52757d.jpg'
global.kolam = 'https://telegra.ph/file/5aa5dfa3394477e11fb18.jpg'
global.thanks = 'https://telegra.ph/file/01917f7782b70de8f418d.jpg'
global.deskripsiurl = 'Saya adalah Bot WhatsApp ×͜×.'

// tingkat kesulitan, semakin tinggi semakin susah
global.multiplier = 500 // The higher, The harder levelup

//*****************PEMBATAS*********************
// JANGAN DI GANTI NTAR KLO GABISA JAN TANYA GW

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
