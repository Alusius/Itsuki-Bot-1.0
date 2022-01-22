let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
let handler = async (m, { conn, usedPrefix: _p, args, command, text }) => {
 // BAGIAN TAG
 let tag = `@${m.sender.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}
 let waofc = `@${'0'.split('@')[0]}`
 m, { contextInfo: { mentionedJid: conn.parseMention(tag) }}
 try {
  	imeg = await conn.getProfilePicture(conn.user.jid)
} catch {
imeg = fs.readFileSync('./src/RadBotZ.jpg')
}
// BAGIAN MENU 
const defaultMenu = {
  before: `
%me
Hai, ${tag} 👋!

Tersisa *%limit Limit*
Role *%role*
Level *%level (%exp / %maxexp)* [%xp4levelup]
%totalexp XP secara Total

❏ *T I M E*
- Tanggal: *%week %weton, %date*
- Tanggal Islam: *%dateIslamic*
- Waktu: *%time*

❏ *TUKANG BANNED*
- ${waofc}

%readmore`.trimStart(),
  header: '❏ *%category*',
  body: '» %cmd %islimit %isPremium',
  footer: '\n',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'rpg', 'game', 'xp', 'anime', 'nsfw', 'stiker', 'kerangajaib', 'quotes', 'admin', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'M  A I N',
  'rpg': 'R P G',
  'game': 'G A M E',
  'xp': 'E X P & L I M I T',
  'anime': 'A N I M E',
  'nsfw': 'N S F W',
  'sticker': 'S T I C K E R',
  'kerang': 'K E R A N G  A J A I B',
  'quotes': 'Q U O T E S',
  'admin': `A D M I N ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
  'group': 'G R O U P',
  'premium': 'P R E M I U M',
  'internet': 'I N T E R N E T',
  'anonymous': 'A N O N Y M O U S  C H A T',
  'nulis': 'M A G E R N U L I S & L O G O',
  'downloader': 'D O W N L O A D E R',
  'tools': 'T O O L S',
  'fun': 'F U N',
  'database': 'D A T A B A S E',
  'vote': 'V O T I N G',
  'absen': 'A B S E N',
  'quran': 'Al Qur\'an',
  'audio': 'P E N G U B A H  S U A R A',
  'jadibot': 'J A D I B O T',
  'owner': 'O W N E R',
  'host': 'H O S T',
  'advanced': 'A D V A N C E D',
  'info': 'I N F O',
  '': 'N O  C A T E G O R Y',
  }
  if (teks == 'rpg') tags = {
    'rpg': 'R P G'
  }
  if (teks == 'game') tags = {
    'game': 'G A M E'
  }
  if (teks == 'xp') tags = {
    'xp': 'E X P & L I M I T'
  }
  if (teks == 'anime') tags = {
    'anime': 'A N I M E'
   }
  if (teks == 'nsfw') tags = {
    'hentai': 'H E N T A I',
    'bokep': 'B O K E P'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'S T I C K E R'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'K E R A N G  A J A I B'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Q U O T E S'
  }
  if (teks == 'admin') tags = {
    'admin': `A D M I N ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
    'group': 'G R O U P'
  }
  if (teks == 'premium') tags = {
    'premium': 'P R E M I U M'
  }
  if (teks == 'internet') tags = {
    'internet': 'I N T E R N E T'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'A N O N Y M O U S  C H A T'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'M A G E R N U L I S & L O G O'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'D O W N L O A D E R'
  }
  if (teks == 'tools') tags = {
    'tools': 'T O O L S'
  }
  if (teks == 'fun') tags = {
    'fun': 'F U N'
  }
  if (teks == 'database') tags = {
    'database': 'D A T A B A S E'
  }
  if (teks == 'vote') tags = {
  'vote': 'V O T I N G',
  'absen': 'A B S E N'
  }
  if (teks == 'quran') tags = {
    'quran': 'Al Qur\'an'
  }
  if (teks == 'audio') tags = {
    'audio': 'P E N G U B A H  S U A R A'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'J A D I B O T'
  }
  if (teks == 'info') tags = {
    'info': 'I N F O'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'N O  C A T E G O R Y'
  }
  if (teks == 'owner') tags = {
  'owner': 'O W N E R',
  'host': 'H O S T',
  'advanced': 'A D V A N C E D'
  }



  try {
  	const jam = moment.tz('Asia/Jakarta').format('HH')
 var ucapanWaktu = 'Selamat Pagi 🌄'

				if (jam >= '03' && jam <= '10') {

				ucapanWaktu = 'Selamat Pagi 🌄'

				} else if (jam >= '10' && jam <= '13') {

				ucapanWaktu = 'Selamat Siang ☀️'

				} else if (jam >= '13' && jam <= '18') {

				ucapanWaktu = 'Selamat Sore 🌅'

				} else if (jam >= '18' && jam <= '23') {

				ucapanWaktu = 'Selamat Malam 🌙'


				} else {

				ucapanWaktu = 'Selamat Malam 🌙'

				}
const ftroli = {
	key: {
  fromMe: false,
  remoteJid: 'status@broadcast',
  participant: '0@s.whatsapp.net'
  },
  message: {
   orderMessage: {
    itemCount: Object.keys(db.data.users).length, 
    thumbnail: await (await require('node-fetch')(imeg)).buffer(),
    message: `Battery : ${conn.battery ? `${conn.battery.value}% ${conn.battery.live ? 'Charging' : 'No Charged'}` : 'No detected'}`.trim(),
    orderTitle: 'FakeTroli', // Idk what this does
    orderId: require('crypto').randomBytes(10).toString('hex').toUpperCase(), // Biar Ga ke detect bug troli
    sellerJid: '0@s.whatsapp.net' // Seller
                     }
                }
          }
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered, premium } = global.db.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let name = registered ? global.db.data.users[m.sender].name : conn.getName(m.sender)
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
    const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    const hariRaya = new Date('January 1, 2023 23:59:59')
    const sekarang = new Date().getTime()
    const Selisih = hariRaya - sekarang
    const jhari = Math.floor( Selisih / (1000 * 60 * 60 * 24));
    const jjam = Math.floor( Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const mmmenit = Math.floor( Selisih % (1000 * 60 * 60) / (1000 * 60))
    const ddetik = Math.floor( Selisih % (1000 * 60) / 1000)
    const hariRayaramadan = new Date('April 2, 2022 23:59:59')
    const sekarangg = new Date().getTime()
    const lebih = hariRayaramadan - sekarangg
    const harii = Math.floor( lebih / (1000 * 60 * 60 * 24));
    const jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60))
    const detikk = Math.floor( lebih % (1000 * 60) / 1000)
    const ultah = new Date('December 24, 2022 23:59:59')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.sender
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.help) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    if (teks == '404') {
      return conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
        "listMessage": {
          "title": `${ucapanWaktu} ${name} 👋
          
❏ INFO USER
» Nama : ${name}
${about != 401 ? '» Bio : ' + about : ''} 
» Tag : ${tag}
» Limit : ${limit} 
» Premium : ${premium ? `✅\nPremium Expired: ${conn.msToDate(premiumTime - new Date() * 1)}` : '❌'}

❏ WAKTU
» Wib : ${time}
» Tanggal : ${week} ${weton} ${date}

❏ 𝙏𝘼𝙃𝙐𝙉 𝘽𝘼𝙍𝙐
_${jhari} Hari ${jjam} Jam ${mmmenit} Menit ${ddetik} Detik_

❏ 𝙍𝘼𝙈𝘼𝘿𝘼𝙉
_${harii} Hari ${jamm} Jam ${menitt} Menit ${detikk} Detik_

❏ 𝙐𝙇𝘼𝙉𝙂 𝙏𝘼𝙃𝙐𝙉 𝙊𝙒𝙉𝙀𝙍
_${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik_

`.trim(),
          "description": `\n*© ${conn.getName(conn.user.jid)} || 2021*`,
          "footerText": "Jika menemukan bug, error atau kesulitan dalam penggunaan silahkan laporkan/tanyakan kepada owner.",
          "buttonText": "Klik Disini",
          "listType": "SINGLE_SELECT",
          "sections": [
            {
              "rows": [
                {
                  "title": `Semua Perintah`,
                  "description": "",
                  "rowId": `${_p}! all`
                }, {
                  "title": "Epic Rpg",
                  "description": "",
                  "rowId": `${_p}1 rpg`
                }, {
                  "title": "Game",
                  "description": "",
                  "rowId": `${_p}! game`

                }, {
                  "title": "XP",
                  "description": "",
                  "rowId": `${_p}! xp`
                 
                 }, {
                  "title": "Anime",
                  "description": "",
                  "rowId": `${_p}! anime`
                
                }, {
                  "title": "Hentai",
                  "description": "",
                  "rowId": `${_p}! nsfw`

                }, {
                  "title": "Stiker",
                  "description": "",
                  "rowId": `${_p}! stiker`
                }, {
                  "title": "Kerang Ajaib",
                  "description": "",
                  "rowId": `${_p}! kerangajaib`
                }, {
                  "title": "Quotes",
                  "description": "",
                  "rowId": `${_p}! quotes`
                }, {
                  "title": "Admin",
                  "description": "",
                  "rowId": `${_p}! admin`
                }, {
                  "title": "Grup",
                  "description": "",
                  "rowId": `${_p}! grup`
                }, {
                  "title": "Premium",
                  "description": "",
                  "rowId": `${_p}! premium`
                }, {
                  "title": "Internet",
                  "description": "",
                  "rowId": `${_p}! internet`
                }, {
                  "title": "Anonymous",
                  "description": "",
                  "rowId": `${_p}! anonymous`
                }, {
                  "title": "Nulis & Logo",
                  "description": "",
                  "rowId": `${_p}! nulis`
                }, {
                  "title": "Downloader",
                  "description": "",
                  "rowId": `${_p}! downloader`
                }, {
                  "title": "Tools",
                  "description": "",
                  "rowId": `${_p}! tools`
                }, {
                  "title": "Fun",
                  "description": "",
                  "rowId": `${_p}! fun`
                }, {
                  "title": "Database",
                  "description": "",
                  "rowId": `${_p}! database`
                }, {
                  "title": "Vote & Absen",
                  "description": "",
                  "rowId": `${_p}! vote`
                }, {
                  "title": "Al-Qur\'an",
                  "description": "",
                  "rowId": `${_p}! quran`
                }, {
                  "title": "Pengubah Suara",
                  "description": "",
                  "rowId": `${_p}! audio`
                }, {
                  "title": "Jadi Bot",
                  "description": "",
                  "rowId": `${_p}! jadibot`
                }, {
                  "title": "Info",
                  "description": "",
                  "rowId": `${_p}! info`
                }, {
                  "title": "Tanpa Kategori",
                  "description": "",
                  "rowId": `${_p}! tanpakategori`
                }, {
                  "title": "Owner",
                  "description": "",
                  "rowId": `${_p}! owner`
               }, {
                  "title": "Source code",
                  "description": "",
                  "rowId": `${_p}sc`
                }
              ]
            }
          ]
        }
      }, {quoted: ftroli, contextInfo: { mentionedJid: conn.parseMention(tag) }}), { waitForAck: true })
    }
    // gunakan ini jika kamu menggunakan whatsapp bisnis
    //   throw `
    // ┌〔 DAFTAR MENU 〕
    // ├ ${_p + command} all
    // ├ ${_p + command} game
    // ├ ${_p + command} xp
    // ├ ${_p + command} stiker
    // ├ ${_p + command} kerang
    // ├ ${_p + command} quotes
    // ├ ${_p + command} admin
    // ├ ${_p + command} group
    // ├ ${_p + command} premium
    // ├ ${_p + command} internet
    // ├ ${_p + command} anonymous
    // ├ ${_p + command} nulis
    // ├ ${_p + command} downloader
    // ├ ${_p + command} tools
    // ├ ${_p + command} fun
    // ├ ${_p + command} database
    // ├ ${_p + command} vote
    // ├ ${_p + command} quran
    // ├ ${_p + command} audio
    // ├ ${_p + command} jadibot
    // ├ ${_p + command} info
    // ├ ${_p + command} tanpa kategori
    // ├ ${_p + command} owner
    // ├ ${_p + command} sc
    // └────  
    //     `.trim()
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let plugin of help)
        if (plugin.tags && plugin.tags.includes(tag))
          if (plugin.help) groups[tag].push(plugin)
      // for (let tag of plugin.tags)
      //   if (!(tag in tags)) tags[tag] = tag
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == global.conn.user.jid ? '' : `Dipersembahkan oleh https://wa.me/${global.conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(Limit)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Premium)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')
    text = typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime, muptime,
      me: conn.user.name,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp <= 0 ? `Siap untuk *${_p}levelup*` : `${max - exp} XP lagi untuk levelup`,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
    await conn.sendMessage(m.chat, { "contentText": text.trim(), "footerText": `©radbotz`,
"buttons": [
{buttonId: '.owner', buttonText: {displayText: 'Pemilik Bot'}, type: 1},
{buttonId: '.donasi', buttonText: {displayText: 'Donasi'}, type: 1}
],
"headerType": "DOCUMENT", "documentMessage": {
            "url": "https://mmg.whatsapp.net/d/f/Ah9LXq1Z_XnRLzlVnZSt6_yWxC6mp20xTpZRSJxc7TUP.enc",
            "mimetype": "application/pdf",
            "title": "ness.pdf",
            "fileSha256": "8Xfe3NQDhjwVjR54tkkShLDGrIFKR9QT5EsthPyxDCI=",
            "fileLength": "99999999999999",
            "pageCount": 99999999999999,
            "mediaKey": "XWv4hcnpGY51qEVSO9+e+q6LYqPR3DbtT4iqS9yKhkI=",
            "fileName": "Bot WhatsApp",
            "fileEncSha256": "NI9ykWUcXKquea4BmH7GgzhMb3pAeqqwE+MTFbH/Wk8=",
            "directPath": "/v/t62.7118-24/35150115_287008086621545_8250021012380583765_n.enc?ccb=11-4&oh=6f0f730e5224c054969c276a6276a920&oe=61A21F46",
            "mediaKeyTimestamp": "1634472176",
            "jpegThumbnail": fs.readFileSync('./src/RadBotZ.jpg'),
  }}, 'buttonsMessage', { contextInfo: { mentionedJid: conn.parseMention(text), forwardingScore: 999, isForwarded: true, externalAdReply :{ sourceUrl: 'https://chat.whatsapp.com/D5IU5pzGDSyE6lAkqqYnvr',mediaType: 2,title: `${ucapanWaktu} ${name}`,body: `${week} ${date}`,thumbnail: fs.readFileSync('./src/RadBotZ.jpg')}}})  
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu3']
handler.tags = ['main']
handler.command = /^(menu3|\!)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 3

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
