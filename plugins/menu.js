let levelling = require('../lib/levelling')
let { MessageType } = require('@adiwajshing/baileys')
let fs = require('fs')
let path = require('path')
let fetch = require('node-fetch')
let moment = require('moment-timezone')
const chats = conn.chats.all()
const groups = chats.filter(v => v.jid.endsWith('g.us'))
const defaultMenu = {
  before: `
╭══════════════════
║╭──❉[ *Hai, %name!* ]❉──
║│➸ Tersisa *%limit Limit*
║│➸ Role *%role*
║│➸ Level 
║│➸ *%level (%exp / %maxexp)* [%xp4levelup]
║│➸ %totalexp XP secara Total
║╰────────────────
╰══════════════════
╭══════════════════
║╭──❉[ 𝙒𝙖𝙠𝙩𝙪 ]❉───
║│➸ Tanggal: 
║│➸ *%week %weton, %date*
║│➸ Tanggal Islam:
║│➸ *%dateIslamic*
║│➸ Waktu: *%time*
║│➸ Uptime: *%uptime (%muptime)*
║│➸ Database: %rtotalreg dari %totalreg
║╰──────────────────
╰════════════════════
%readmore`.trimStart(),
  header: '┏━━ꕥ〔 *%category* 〕ꕥ━⬣',
  body: '┃➸ %cmd %islimit %isPremium',
  footer: '┗━ꕥ',
  after: `
*%npmname@^%version*
${'```%npmdesc```'}
`,
}
let handler = async (m, { conn, usedPrefix: _p, args, command }) => {
	let { anon, anticall, antispam, antitroli, backup, jadibot, groupOnly, nsfw } = global.db.data.settings[conn.user.jid]
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]

    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
  let tags
  let teks = `${args[0]}`.toLowerCase()
  let arrayMenu = ['all', 'game', 'edukasi', 'news', 'nsfw', 'xp', 'stiker', 'image', 'anime', 'kerangajaib', 'quotes', 'admin', 'rpg', 'grup', 'premium', 'internet', 'anonymous', 'nulis', 'downloader', 'tools', 'fun', 'database', 'quran', 'audio', 'jadibot', 'info', 'vote', 'tanpakategori', 'owner']
  if (!arrayMenu.includes(teks)) teks = '404'
  if (teks == 'all') tags = {
    'main': 'Utama',
    'game': 'Game',
    'xp': 'Exp & Limit',
    'nsfw': `NSFW ${global.opts['nsfw'] ? '' : '(Dinonaktifkan)'}`,
    'sticker': 'Stiker',
    'edukasi': 'Edukasi',
    'news': 'News',
    'kerang': 'Kerang Ajaib',
    'quotes': 'Quotes',
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`,
    'rpg': 'Epic Rpg',
    'group': 'Grup',
    'anime': 'Anime',
    'premium': 'Premium',
    'internet': 'Internet',
    'image': 'Random Image',
    'anonymous': 'Anonymous Chat',
    'nulis': 'MagerNulis & Logo',
    'downloader': 'Downloader',
    'tools': 'Tools',
    'fun': 'Fun',
    'database': 'Database',
    'vote': 'Voting',
    'absen': 'Absen',
    'quran': 'Islam',
    'audio': 'Pengubah Suara',
    'jadibot': 'Jadi Bot',
    'info': 'Info',
    '': 'Tanpa Kategori',
  }
  if (teks == 'game') tags = {
    'game': 'Game'
  }
  if (teks == 'xp') tags = {
    'xp': 'Exp & Limit'
  }
  if (teks == 'news') tags = {
    'news': 'News'
  }
  if (teks == 'edukasi') tags = {
    'edukasi': 'Edukasi'
  }
  if (teks == 'nsfw') tags = {
    'hentai': 'Hentai',
    'bokep': 'Bokep'
  }
  if (teks == 'stiker') tags = {
    'sticker': 'Stiker'
  }
  if (teks == 'rpg') tags = {
    'rpg': 'Epic Rpg'
  }
  if (teks == 'kerangajaib') tags = {
    'kerang': 'Kerang Ajaib'
  }
  if (teks == 'quotes') tags = {
    'quotes': 'Quotes'
  }
  if (teks == 'admin') tags = {
    'admin': `Admin ${global.opts['restrict'] ? '' : '(Dinonaktifkan)'}`
  }
  if (teks == 'grup') tags = {
    'group': 'Grup'
  }
  if (teks == 'premium') tags = {
    'premium': 'Premium'
  }
  if (teks == 'internet') tags = {
    'internet': 'Internet'
  }
  if (teks == 'image') tags = {
    'image': 'Random Image'
  }
  if (teks == 'anonymous') tags = {
    'anonymous': 'Anonymous Chat'
  }
  if (teks == 'nulis') tags = {
    'nulis': 'MagerNulis & Logo'
  }
  if (teks == 'downloader') tags = {
    'downloader': 'Downloader'
  }
  if (teks == 'tools') tags = {
    'tools': 'Tools'
  }
  if (teks == 'fun') tags = {
    'fun': 'Fun'
  }
  if (teks == 'database') tags = {
    'database': 'Database'
  }
  if (teks == 'vote') tags = {
    'vote': 'Voting',
    'absen': 'Absen'
  }
    if (teks == 'anime') tags = {
    'anime': 'Anime'
  }
  if (teks == 'quran') tags = {
    'quran': 'Islam'
  }
  if (teks == 'audio') tags = {
    'audio': 'Pengubah Suara'
  }
  if (teks == 'jadibot') tags = {
    'jadibot': 'Jadi Bot'
  }
  if (teks == 'info') tags = {
    'info': 'Info'
  }
  if (teks == 'tanpakategori') tags = {
    '': 'Tanpa Kategori'
  }
  if (teks == 'owner') tags = {
    'owner': 'Owner',
    'host': 'Host',
    'advanced': 'Advanced'
  }



  try {
    let package = JSON.parse(await fs.promises.readFile(path.join(__dirname, '../package.json')).catch(_ => '{}'))
    let { exp, limit, level, role, registered } = global.db.data.users[m.sender]
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
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
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
                    "listMessage":  {
                        "title": `*${ucapan()}, ${name}*`.trim(),
                        "description": `┏━━〔 𝐒𝐓𝐀𝐓𝐔𝐒 〕━⬣
┃⬡ 𝘼𝙠𝙩𝙞𝙛 𝙎𝙚𝙡𝙖𝙢𝙖 _*${uptime}*_
┃⬡ 𝘽𝙖𝙩𝙚𝙧𝙖𝙞 _*${conn.battery != undefined ? `${conn.battery.value}% ${conn.battery.live ? '🔌 pengisian' : ''}` : 'tidak diketahui'}*_
┃⬡ _*${Object.keys(global.db.data.users).length}*_ 𝙋𝙚𝙣𝙜𝙜𝙪𝙣𝙖
┃⬡ _*${totaljadibot.length}*_ 𝙅𝙖𝙙𝙞𝙗𝙤𝙩
┃⬡ _*${conn.blocklist.length}*_ 𝙏𝙚𝙧𝙗𝙡𝙤𝙘𝙠
┃⬡ _*${Object.entries(global.db.data.chats).filter(chat => chat[1].isBanned).length}*_ 𝘾𝙝𝙖𝙩 𝙩𝙚𝙧𝙗𝙖𝙣𝙣𝙚𝙙
┃⬡ _*${Object.entries(global.db.data.users).filter(user => user[1].banned).length}*_ 𝙋𝙚𝙣𝙜𝙜𝙪𝙣𝙖 𝙏𝙚𝙧𝙗𝙖𝙣𝙣𝙚𝙙
┗━━━━━━━━⬣`.trim(),
                        "footerText": "Hi kk >‿‿<",
                        "buttonText": "*Klik Disini*",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [{
                                    "title": "|🛠️|Status Bot",
                                    "description": "Status dan informasi Bot.",
                                    "rowId": ".botstatus"
                                }, {
                                    "title": "|❗|Rules",
                                    "description": "User yang bijak selalu mematuhi Rules.",
                                    "rowId": ".rules"
                                }, {
                                    "title": "|👑|Sewa bot - Premium",
                                    "description": "Untuk kamu yang ingin melihat daftar harga sewa dan premium.",
                                    "rowId": ".sewabot"
                                }, {
                                    "title": "|💌|Group Bot",
                                    "description": "Join bang",
                                    "rowId": ".gcbot"
                                }],
                                "title": "⟣─────────❲ Tentang Bot dan lainnya ❳──────────⟢"
                            }, {
                                "rows": [{
                                    "title": `|🧾| Semua Perintah`,
                                    "description": "Memberikan Semua Fitur Bot",
                                    "rowId": ".? all"
                                }, { 
                                    "title": "|🕋| Islam",
                                    "description": "Menu Tentang Islam",
                                    "rowId": ".? quran"
                                }, { 
                                    "title": "|🏫| Edukasi",
                                    "description": "Menu Edukasi",
                                    "rowId": ".? edukasi"
                                }, { 
                                    "title": "|📰| News",
                                    "description": "Menu Berita",
                                    "rowId": ".? News"
                                }, { 
                                    "title": "|🎮| Game",
                                    "description": "Menu Game",
                                    "rowId": ".? game"
                                }, { 
                                    "title": "|🗺️| Epic Rpg",
                                    "description": "Menu Game RPG",
                                    "rowId": ".? rpg"
                                }, { 
                                    "title": "|📈| XP",
                                    "description": "XP Dan Level",
                                    "rowId": ".? xp"
                                }, { 
                                    "title": "|🔞| NSFW",
                                    "description": "Menu Bokep",
                                    "rowId": ".? nsfw"
                                }, { 
                                    "title": "|🖼️| Random Image",
                                    "description": "Menu Foto Random",
                                    "rowId": ".? image"
                                }, { 
                                    "title": "|🎇| Stiker",
                                    "description": "Menu Buat Stiker",
                                    "rowId": ".? stiker"
                                }, { 
                                    "title": "|🐚| Kerang Ajaib",
                                    "description": "Menurut Kerang ajaib....",
                                    "rowId": ".? kerangajaib"
                                }, { 
                                    "title": "|📑| Quotes",
                                    "description": "Menu Quotes",
                                    "rowId": ".? quotes"
                                }, { 
                                    "title": "|🏛️| Admin",
                                    "description": "Menu Admin Group",
                                    "rowId": ".? admin"
                                }, { 
                                    "title": "|🏢| Grup",
                                    "description": "Menu Group",
                                    "rowId": ".? grup"
                                }, { 
                                    "title": "|🔝| Premium",
                                    "description": "Menu Untuk Premium",
                                    "rowId": ".? premium"
                                }, { 
                                    "title": "|🖥️| Internet",
                                    "description": "Cari Sesuatu Di Bot",
                                    "rowId": ".? internet"
                                }, { 
                                    "title": "|🥷| Anonymous",
                                    "description": "Mainkan Anonymous Chat",
                                    "rowId": ".? anonymous"
                                }, { 
                                    "title": "|✒️| Nulis & Logo",
                                    "description": "Menu Nulis & Logo",
                                    "rowId": ".? nulis"
                                }, { 
                                    "title": "|📺| Downloader",
                                    "description": "Download Sesuatu Di Bot",
                                    "rowId": ".? downloader"
                                }, { 
                                    "title": "|🔧| Tools",
                                    "description": "Tools Yang Bisa di Gunakan Di Bot",
                                    "rowId": ".? tools"
                                }, { 
                                    "title": "|🎇| Fun",
                                    "description": "Menu Ceria",
                                    "rowId": ".? fun"
                                }, { 
                                    "title": "|📂| Database",
                                    "description": "Simpan Sesuatu Di Bot",
                                    "rowId": ".? database"
                                }, { 
                                    "title": "|📝| Vote & Absen",
                                    "description": "Menu Vote & Absen",
                                    "rowId": ".? vote"
                                }, { 
                                    "title": "|🎙️| Pengubah Suara",
                                    "description": "Ubah Suaramu",
                                    "rowId": ".? audio"
                                }, { 
                                    "title": "|🤖| Jadi Bot",
                                    "description": "Jadi Bot",
                                    "rowId": ".? jadibot"
                                }, { 
                                    "title": "|⛩️| Anime",
                                    "description": "Cari Anime Di Bot",
                                    "rowId": ".? anime"
                                }, { 
                                    "title": "|ℹ️| Info",
                                    "description": "Info Tentang Bot",
                                    "rowId": ".? info"
                                }, { 
                                    "title": "|─|Tanpa Kategori",
                                    "description": "",
                                    "rowId": ".? tanpakategori"
                                }, { 
                                    "title": "|🧑‍💻| Owner",
                                    "description": "Menu Khusu Owner",
                                    "rowId": ".? owner"
                                }],
                                "title": "⟣──────────────❲  All-Menu  ❳──────────────⟢"
                            }, {
                                "rows": [{
                                    "title": "|👩🏻‍💼|Owner bot",
                                    "description": "pemilik Bot",
                                    "rowId": ".owner"
                                }, {
                                    "title": "|💰|Donasi",
                                    "description": "Jangan lupa donasi untuk mendukung bot agar aktif selalu",
                                    "rowId": ".donasi"
                                }, {
                                    "title": "|🥀|Kata penutup",
                                    "description": "Terimakasih untuk user yang telah menggunakan bot, jika ada kesalahan atau permintaan bisa chat ke nomor owner\nNote: chat P/main² tidak akan di respon(user bisa terkena banned/block)",
                                    "rowId": ".creator"
                                }, {
                                    "title": "|❤️|Thanks To",
                                    "description": "Terima kasih banyak untuk user yang telah berpartisipasi dalam bot",
                                    "rowId": ".tqto"
                                }],
                                "title": "⟣──────────────❲ Penutup ❳───────────────⟢"
                            }
                        ], "contextInfo": 
						{ "stanzaId": m.key.id,
                        "participant": "0@s.whatsapp.net",
                        "remoteJid": "6283136505591-1614953337@g.us",
                        "quotedMessage": m.message
						}
                    }
                 }, {}), {waitForAck: true})
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
    await conn.send2ButtonLoc(m.chat, await(await fetch(fla + teks)).buffer(), text.trim(), `Runtime : ${uptime}\n${week} ${date}`, 'Pemilik Bot', `${_p}owner`, 'Donasi', `${_p}donasi`, m)
  } catch (e) {
    conn.reply(m.chat, 'Maaf, menu sedang error', m)
    throw e
  }
}
handler.help = ['menu', 'help']
handler.tags = ['main']
handler.command = /^(\?|menu|help)$/i

handler.register = true

module.exports = handler

const more = String.fromCharCode(1)
const readMore = more.repeat(1)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "Selamat dinihari🌃"
  if (time >= 4) {
    res = "Selamat pagi🌄"
  }
  if (time > 10) {
    res = "Selamat siang🌄"
  }
  if (time >= 15) {
    res = "Selamat sore🌇"
  }
  if (time >= 18) {
    res = "Selamat malam🌉"
  }
  return res
}
