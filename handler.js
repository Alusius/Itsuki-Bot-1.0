let util = require('util')
let fs = require('fs')
let fetch = require('node-fetch')
let simple = require('./lib/simple')
let time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
const uploadImage = require('./lib/uploadImage')
const knights = require('knights-canvas')
let { MessageType } = require('@adiwajshing/baileys')

const isNumber = x => typeof x === 'number' && !isNaN(x)
const delay = ms => isNumber(ms) && new Promise(resolve => setTimeout(resolve, ms))
module.exports = {
  async handler(chatUpdate) {
    // console.log(chatUpdate)
    if (!chatUpdate.hasNewMessage) return
    if (!chatUpdate.messages && !chatUpdate.count) return
    let m = chatUpdate.messages.all()[0]
    try {
      simple.smsg(this, m)
      switch (m.mtype) {
        case MessageType.image:
        case MessageType.video:
        case MessageType.audio:
          if (!m.key.fromMe) await delay(1000)
          if (!m.msg.url) await this.updateMediaMessage(m)
          break
      }
      m.exp = 0
      m.limit = false
      try {
        let user = global.db.data.users[m.sender]
        if (typeof user !== 'object') global.db.data.users[m.sender] = {}
        if (user) {
            if (!isNumber(user.healt)) user.healt = 0
            if (!isNumber(user.level)) user.level = 0
            if (!isNumber(user.exp)) user.exp = 0
            if (!isNumber(user.title)) user.title = 'Nothing'
            if (!isNumber(user.limit)) user.limit = 20
            if (!isNumber(user.lastclaim)) user.lastclaim = 0
            if (!isNumber(user.lastgetmoney)) user.lastgetmoney = 0
            if (!isNumber(user.money)) user.money = 12000
            
            if (!isNumber(user.diamond)) user.diamond = 0
            if (!isNumber(user.iron)) user.iron = 0

            if (!isNumber(user.common)) user.common = 0
            if (!isNumber(user.uncommon)) user.uncommon = 0
            if (!isNumber(user.mythic)) user.mythic = 0
            if (!isNumber(user.legendary)) user.legendary = 0
            if (!isNumber(user.pet)) user.pet = 0
        
            if (!isNumber(user.potion)) user.potion = 0
            if (!isNumber(user.sampah)) user.sampah = 0
            if (!isNumber(user.armor)) user.armor = 0
            
            if (!isNumber(user.kucing)) user.kucing = 0
            if (!isNumber(user.kucinglastclaim)) user.kucinglastclaim = 0
            if (!isNumber(user.kuda)) user.kuda = 0
            if (!isNumber(user.kudalastclaim)) user.kudalastclaim = 0
            if (!isNumber(user.rubah)) user.rubah = 0
            if (!isNumber(user.rubahlastclaim)) user.rubahlastclaim = 0
            if (!isNumber(user.anjing)) user.anjing = 0
            if (!isNumber(user.anjinglastclaim)) user.anjinglastclaim = 0

            if (!'banned' in user) user.banned = false
            if (!isNumber(user.warn)) user.warn = 0

            if (!isNumber(user.afk)) user.afk = -1
            if (!'afkReason' in user) user.afkReason = ''
        
            if (!isNumber(user.anakkucing)) user.anakkucing = 0
            if (!isNumber(user.anakkuda)) user.anakkuda = 0
            if (!isNumber(user.anakrubah)) user.anakrubah = 0
            if (!isNumber(user.anakanjing)) user.anakanjing = 0
            if (!isNumber(user.makananpet)) user.makananpet = 0

            if (!isNumber(user.antispam)) user.antispam = 0
            if (!isNumber(user.antispamlastclaim)) user.antispamlastclaim = 0

            if (!isNumber(user.kayu)) user.kayu = 0
            if (!isNumber(user.batu)) user.batu = 0
            if (!isNumber(user.string)) user.string = 0
            if (!isNumber(user.sword)) user.sword = 0
            if (!isNumber(user.sworddurability)) user.sworddurability = 0
            if (!isNumber(user.pickaxe)) user.pickaxe = 0
            if (!isNumber(user.pickaxedurability)) user.pickaxedurability = 0
            if (!isNumber(user.fishingrod)) user.fishingrod = 0
            if (!isNumber(user.fishingroddurability)) user.fishingroddurability = 0
            
            if (!isNumber(user.paus)) user.paus = 0
            if (!isNumber(user.kepiting)) user.kepiting = 0
            if (!isNumber(user.gurita)) user.gurita = 0
            if (!isNumber(user.cumi)) user.cumi= 0
            if (!isNumber(user.buntal)) user.buntal = 0
            if (!isNumber(user.dory)) user.dory = 0
            if (!isNumber(user.lumba)) user.lumba = 0
            if (!isNumber(user.lobster)) user.lobster = 0
            if (!isNumber(user.hiu)) user.hiu = 0
            if (!isNumber(user.udang)) user.udang = 0
            if (!isNumber(user.ikan)) user.ikan = 0
            if (!isNumber(user.orca)) user.orca = 0
            
            if (!isNumber(user.banteng)) user.banteng = 0
            if (!isNumber(user.harimau)) user.harimau = 0
            if (!isNumber(user.gajah)) user.gajah = 0
            if (!isNumber(user.kambing)) user.kambing = 0
            if (!isNumber(user.panda)) user.panda = 0
            if (!isNumber(user.buaya)) user.buaya = 0
            if (!isNumber(user.kerbau)) user.kerbau = 0
            if (!isNumber(user.sapi)) user.sapi = 0
            if (!isNumber(user.monyet)) user.monyet = 0
            if (!isNumber(user.babihutan)) user.babihutan = 0
            if (!isNumber(user.babi)) user.babi = 0
            if (!isNumber(user.ayam)) user.ayam = 0

            if (!isNumber(user.lastadventure)) user.lastadventure = 0
            if (!isNumber(user.lastfishing)) user.lastfishing = 0
            if (!isNumber(user.lastdungeon)) user.lastdungeon = 0
            if (!isNumber(user.lastduel)) user.lastduel = 0
            if (!isNumber(user.lastduel)) user.lastnguli = 0
            if (!isNumber(user.lastbansos)) user.lastbansos = 0
            if (!isNumber(user.lastnyampah)) user.lastnyampah = 0
            if (!isNumber(user.lastnebang)) user.lastnebang = 0
            if (!isNumber(user.lastmining)) user.lastmining = 0
            if (!isNumber(user.lasthunt)) user.lasthunt = 0
            if (!isNumber(user.lastweekly)) user.lastweekly = 0
            if (!isNumber(user.lastmonthly)) user.lastmonthly = 0
            if (!('registered' in user)) user.registered = false
            if (!user.registered) {
                if (!('name' in user)) user.name = this.getName(m.sender)
                if (!isNumber(user.age)) user.age = -1
                if (!isNumber(user.regTime)) user.regTime = -1
            }
            if (!('autolevelup' in user)) user.autolevelup = true
            if (!('lastIstugfar' in user)) user.lastIstigfar = true
        } else global.db.data.users[m.sender] = {
            healt: 100,
            level: 0,
            title: 'Nothing',
            exp: 0,
            limit: 20,
            lastclaim: 0,
            lastgetmoney: 0,
            money: 12000,
            diamond: 0,
            iron: 0,
            common: 0,
            uncommon: 0,
            mythic: 0,
            legendary: 0,
            pet: 0,
            potion: 0,
            sampah: 0,
            armor: 0,
            kucing: 0,
            as: 0,
            paus: 0,
            kepiting: 0,
            gurita: 0,
            cumi: 0,
            buntal: 0,
            dory: 0,
            lumba: 0,
            lobster: 0,
            hiu: 0,
            udang: 0,
            ikan: 0,
            orca: 0,
            banteng: 0,
            harimau: 0,
            gajah: 0,
            kambing: 0,
            panda: 0,
            buaya: 0,
            kerbau : 0,
            sapi: 0,
            monyet : 0,
            babihutan: 0,
            babi: 0,
            ayam: 0,
            kucinglastclaim: 0,
            kuda: 0,
            kudalastclaim: 0,
            rubah: 0,
            rubahlastclaim: 0,
            anjing: 0,
            anjinglastclaim: 0,
            banned: false,
            warn: 0,
            afk: -1,
            afkReason: '',
            anakkucing: 0,
            anakkuda: 0,
            anakrubah: 0,
            anakanjing: 0,
            makananpet: 0,
            antispam: 0,
            antispamlastclaim: 0,
            kayu: 0,
            batu: 0,
            string: 0,
            sword: 0,
            sworddurability: 0,
            pickaxe: 0,
            pickaxedurability: 0,
            fishingrod: 0,
            fishingroddurability: 0,
            lastadventure: 0,
            lastfishing: 0,
            lastdungeon: 0,
            lastduel: 0,
            lastnebang: 0,
            lastnguli: 0,
            lastnyampah: 0,
            lastmining: 0,
            lasthunt: 0,
            lastbansos: 0,
            lastweekly: 0,
            lastmonthly: 0,
            registered: false,
            name: this.getName(m.sender),
            age: -1,
            regTime: -1,
            autolevelup: true,
            lastIstigfar: 0,
        }

        let chat = global.db.data.chats[m.chat]
        if (typeof chat !== 'object') global.db.data.chats[m.chat] = {}
        if (chat) {
          if (!('isBanned' in chat)) chat.isBanned = false
          if (!('welcome' in chat)) chat.welcome = true
          if (!('detect' in chat)) chat.detect = false
          if (!('sWelcome' in chat)) chat.sWelcome = ''
          if (!('sBye' in chat)) chat.sBye = ''
          if (!('sPromote' in chat)) chat.sPromote = ''
          if (!('sDemote' in chat)) chat.sDemote = ''
          if (!('descUpdate' in chat)) chat.descUpdate = true
          if (!('delete' in chat)) chat.delete = true
          if (!('antiBadword' in chat)) chat.antiBadword = true
          if (!('stiker' in chat)) chat.stiker = false
          if (!('rpg' in chat)) chat.delete = true
          if (!('nsfw' in chat)) chat.delete = false
          if (!('antiLink' in chat)) chat.antiLink = false
          if (!('viewonce' in chat)) chat.viewonce = true
        } else global.db.data.chats[m.chat] = {
          isBanned: false,
          welcome: true,
          detect: false,
          sWelcome: '',
          sBye: '',
          sPromote: '',
          sDemote: '',
          descUpdate: true,
          delete: true,
          stiker: false,
          rpg: true,
          nsfw: false,
          antiBadword: true,
          antiLink: false,
          viewonce: true,
        }
        
                let settings = global.db.data.settings[this.user.jid]
        if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {}
        if (settings) {
          if (!'anon' in settings) settings.anon = true
          if (!'anticall' in settings) settings.anticall = true
          if (!'antispam' in settings) settings.antispam = true
          if (!'antitroli' in settings) settings.antitroli = false
          if (!'backup' in settings) settings.backup = false
          if (!isNumber(settings.backupDB)) settings.backupDB = 0
          if (!'groupOnly' in settings) settings.groupOnly = false
          if (!'jadibot' in settings) settings.groupOnly = false
          if (!'nsfw' in settings) settings.nsfw = true
          if (!isNumber(settings.status)) settings.status = 0
        } else global.db.data.settings[this.user.jid] = {
          anon: true,
          anticall: true,
          antispam: true,
          antitroli: false,
          backup: false,
          backupDB: 0,
          groupOnly: false,
          jadibot: false,
          onsfw: true,
          status: 0,
        }
      } catch (e) {
        console.error(e)
      }
      if (opts['nyimak']) return
      if (!m.fromMe && opts['self']) return
      if (opts['pconly'] && m.chat.endsWith('g.us')) return
      if (opts['gconly'] && !m.chat.endsWith('g.us')) return
      if (opts['swonly'] && m.chat !== 'status@broadcast') return
      if (typeof m.text !== 'string') m.text = ''
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        if (!plugin.all) continue
        if (typeof plugin.all !== 'function') continue
        try {
          await plugin.all.call(this, m, chatUpdate)
        } catch (e) {
          if (typeof e === 'string') continue
          console.error(e)
        }
      }
      if (m.isBaileys) return
      if (m.isBaileys) return
      if (m.chat.endsWith('broadcast')) return // Supaya tidak merespon di status
      let blockList = conn.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid)
      if (blockList.includes(m.sender)) return // Pengguna yang diblokir tidak bisa menggunakan bot
      m.exp += Math.ceil(Math.random() * 10)

      let usedPrefix
      let _user = global.db.data && global.db.data.users && global.db.data.users[m.sender]

      let isROwner = [global.conn.user.jid, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isOwner = isROwner || m.fromMe
      let isMods = isOwner || global.mods.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let isPrems = isROwner || global.prems.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
      let groupMetadata = m.isGroup ? this.chats.get(m.chat).metadata || await this.groupMetadata(m.chat) : {} || {}
      let participants = m.isGroup ? groupMetadata.participants : [] || []
      let user = m.isGroup ? participants.find(u => u.jid == m.sender) : {} // User Data
      let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {} // Your Data
      let isAdmin = user.isAdmin || user.isSuperAdmin || false // Is User Admin?
      let isBotAdmin = bot.isAdmin || bot.isSuperAdmin || false // Are you Admin?
      let isBlocked = this.blocklist.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != this.user.jid).includes(m.sender) // Apakah user diblokir?
      for (let name in global.plugins) {
        let plugin = global.plugins[name]
        if (!plugin) continue
        if (plugin.disabled) continue
        //if (!opts['restrict']) if (plugin.tags && plugin.tags.includes('admin')) continue
        // if (!opts['nsfw']) if (plugin.tags && plugin.tags.includes('hentai', 'bokep')) continue
        const str2Regex = str => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
        let _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix
        let match = (_prefix instanceof RegExp ? // RegExp Mode?
          [[_prefix.exec(m.text), _prefix]] :
          Array.isArray(_prefix) ? // Array?
            _prefix.map(p => {
              let re = p instanceof RegExp ? // RegExp in Array?
                p :
                new RegExp(str2Regex(p))
              return [re.exec(m.text), re]
            }) :
            typeof _prefix === 'string' ? // String?
              [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
              [[[], new RegExp]]
        ).find(p => p[1])
        if (typeof plugin.before === 'function') if (await plugin.before.call(this, m, {
          match,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isAdmin,
          isBotAdmin,
          isPrems,
          chatUpdate,
          isBlocked,
        })) continue
        if (typeof plugin !== 'function') continue
        if ((usedPrefix = (match[0] || '')[0])) {
          let noPrefix = m.text.replace(usedPrefix, '')
          let [command, ...args] = noPrefix.trim().split` `.filter(v => v)
          args = args || []
          let _args = noPrefix.trim().split` `.slice(1)
          let text = _args.join` `
          command = (command || '').toLowerCase()
          let fail = plugin.fail || global.dfail // When failed
          let isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
            plugin.command.test(command) :
            Array.isArray(plugin.command) ? // Array?
              plugin.command.some(cmd => cmd instanceof RegExp ? // RegExp in Array?
                cmd.test(command) :
                cmd === command
              ) :
              typeof plugin.command === 'string' ? // String?
                plugin.command === command :
                false

          if (!isAccept) continue
          m.plugin = name
          if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
            let chat = global.db.data.chats[m.chat]
            let user = global.db.data.users[m.sender]
            if (name != 'unbanchat.js' && chat && chat.isBanned) return // Except this
            if (name != 'unbanuser.js' && user && user.banned) return
          }
          if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.rowner && !isROwner) { // Real Owner
            fail('rowner', m, this)
            continue
          }
          if (plugin.owner && !isOwner) { // Number Owner
            fail('owner', m, this)
            continue
          }
          if (plugin.mods && !isMods) { // Moderator
            fail('mods', m, this)
            continue
          }
          if (plugin.premium && !isPrems) { // Premium
            fail('premium', m, this)
            continue
          }
          if (plugin.group && !m.isGroup) { // Group Only
            fail('group', m, this)
            continue
          } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
            fail('botAdmin', m, this)
            continue
          } else if (plugin.admin && !isAdmin) { // User Admin
            fail('admin', m, this)
            continue
          }
          if (plugin.private && m.isGroup) { // Private Chat Only
            fail('private', m, this)
            continue
          }
          if (plugin.register == true && _user.registered == false) { // Butuh daftar?
            fail('unreg', m, this)
            continue
          }

          m.isCommand = true
          let xp = 'exp' in plugin ? parseInt(plugin.exp) : 17 // XP Earning per command
          if (xp > 200) m.reply('Ngecit -_-') // Hehehe
          else m.exp += xp
          if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
            this.reply(m.chat, `Limit anda habis, silahkan beli melalui *${usedPrefix}buy*`, m)
            continue // Limit habis
          }
          if (plugin.level > _user.level) {
            this.reply(m.chat, `diperlukan level ${plugin.level} untuk menggunakan perintah ini. Level kamu ${_user.level}`, m)
            continue // If the level has not been reached
          }
          let extra = {
            match,
            usedPrefix,
            noPrefix,
            _args,
            args,
            command,
            text,
            conn: this,
            participants,
            groupMetadata,
            user,
            bot,
            isROwner,
            isOwner,
            isAdmin,
            isBotAdmin,
            isPrems,
            chatUpdate,
            isBlocked,
          }
          try {
            await plugin.call(this, m, extra)
            if (!isPrems) m.limit = m.limit || plugin.limit || false
          } catch (e) {
            // Error occured
            m.error = e
            console.error(e)
            if (e) {
              let text = util.format(e.message ? e.message : e)
              for (let key of Object.values(global.APIKeys))
                text = text.replace(new RegExp(key, 'g'), '#HIDDEN#')
              m.reply(text)
            }
          } finally {
            // m.reply(util.format(_user))
            if (typeof plugin.after === 'function') {
              try {
                await plugin.after.call(this, m, extra)
              } catch (e) {
                console.error(e)
              }
            }
            if (m.limit) m.reply(+ m.limit + ' Limit terpakai')
          }
          break
        }
      }
    } finally {
      //console.log(global.db.data.users[m.sender])
      let user, stats = global.db.data.stats
      if (m) {
        if (m.sender && (user = global.db.data.users[m.sender])) {
          user.exp += m.exp
          user.limit -= m.limit * 1
        }

        let stat
        if (m.plugin) {
          let now = + new Date
          if (m.plugin in stats) {
            stat = stats[m.plugin]
            if (!isNumber(stat.total)) stat.total = 1
            if (!isNumber(stat.success)) stat.success = m.error != null ? 0 : 1
            if (!isNumber(stat.last)) stat.last = now
            if (!isNumber(stat.lastSuccess)) stat.lastSuccess = m.error != null ? 0 : now
          } else stat = stats[m.plugin] = {
            total: 1,
            success: m.error != null ? 0 : 1,
            last: now,
            lastSuccess: m.error != null ? 0 : now
          }
          stat.total += 1
          stat.last = now
          if (m.error == null) {
            stat.success += 1
            stat.lastSuccess = now
          }
        }
      }

      try {
        require('./lib/print')(m, this)
      } catch (e) {
        console.log(m, m.quoted, e)
      }
    //  if (opts['autoread']) await this.chatRead(m.chat).catch(() => { })
    this.chatRead(m.chat).catch(() => { })
    }
  },
  async participantsUpdate({ jid, participants, action }) {
    let chat = global.db.data.chats[jid] || {}
    let text = ''
    switch (action) {
      case 'add':
      case 'remove':
        if (chat.welcome) {
          let groupMetadata = await this.groupMetadata(jid)
          for (let user of participants) {
            // let pp = './src/avatar_contact.png'
            let pp = './src/RadBotZ.jpg'
            let ppgc = './src/RadBotZ.jpg'
            try {
              pp = await uploadImage(await (await fetch(await this.getProfilePicture(user))).buffer())
              ppgc = await uploadImage(await (await fetch(await this.getProfilePicture(jid))).buffer())
            } catch (e) {
            } finally {
              text = (action === 'add' ? (chat.sWelcome || this.welcome || conn.welcome || 'Selamat datang, @user!').replace('@subject', this.getName(jid)).replace('@desc', groupMetadata.desc ? String.fromCharCode(8206).repeat(4001) + groupMetadata.desc : '') :
                (chat.sBye || this.bye || conn.bye || 'Sampai jumpa, @user!')).replace(/@user/g, '@' + user.split`@`[0])
              let wel = await new knights.Welcome()
                .setUsername(this.getName(user))
                .setGuildName(this.getName(jid))
                .setGuildIcon(ppgc)
                .setMemberCount(groupMetadata.participants.length)
                .setAvatar(pp)
                .setBackground("https://telegra.ph/file/89a6260f0a6720240e698.jpg")
                .toAttachment()

              let lea = await new knights.Goodbye()
                .setUsername(this.getName(user))
                .setGuildName(this.getName(jid))
                .setGuildIcon(ppgc)
                .setMemberCount(groupMetadata.participants.length)
                .setAvatar(pp)
                .setBackground("https://telegra.ph/file/89a6260f0a6720240e698.jpg")
                .toAttachment()

              this.sendButtonImg(jid, action === 'add' ? wel.toBuffer() : lea.toBuffer(), text, action === 'add' ? 'Welcome Message' : 'Leave Message', action === 'add' ? 'Welcome👋' : 'Byee👋',action === 'add' ? 'Welcome👋' : 'Byee👋', {
key: {
fromMe: false,
participant: '0@s.whatsapp.net',
remoteJid: 'status@broadcast'
},
message: {
contactMessage: {
displayName: this.getName(user),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;WA;;;\nFN:WA\nTEL;type=CELL;type=VOICE;waid=${user.split('@')[0]}:${user.split('@')[0]}\nEND:VCARD`
}
}
}, false, { contextInfo: { mentionedJid: [user]
                }
              })
            }
          }
        }
        break
      case 'promote':
        text = (chat.sPromote || this.spromote || conn.spromote || '@user ```is now Admin```')
      case 'demote':
        if (!text) text = (chat.sDemote || this.sdemote || conn.sdemote || '@user ```is no longer Admin```')
        text = text.replace('@user', '@' + participants[0].split('@')[0])
        let kntl = fs.readFileSync('./src/RadBotZ.jpg')
        if (chat.detect) this.send2ButtonLoc(jid, kntl, text, watermark, 'MENU', '#menu', 'OWNER', '#owner', null, {
          contextInfo: {
            mentionedJid: this.parseMention(text)
          }
        })
        break
    }
  },
  async delete(m) {
    if (m.key.fromMe) return
    let chat = global.db.data.chats[m.key.remoteJid]
    if (chat.delete) {
    await this.sendButton(m.key.remoteJid, `*—「 Anti Delete 」—*
*📢 Terdeteksi Penghapusan Pesan !*
*◇ Nama :* @${m.participant.split`@`[0]}
*◇ Type*: ${Object.keys(m.message.message)[0]}
*◇ Number*: ${require('awesome-phonenumber')(`+${m.participant.split`@`[0]}`).getNumber('international')}

klick untuk mematikannya atau ketik #disable delete
`.trim(), watermark, 'DISABLE DELETE', '.disable delete', {
      quoted: m.message,
      contextInfo: {
        mentionedJid: [m.participant]
      }
    })
    this.copyNForward(m.key.remoteJid, m.message).catch(e => console.log(e, m))
  }
},
  async onCall(json) {
    let { from } = json[2][0][1]
    let users = global.db.data.users
    let user = users[from] || {}
    if (user.whitelist) return
    if (!db.data.settings.anticall) return
    switch (this.callWhitelistMode) {
      case 'mycontact':
        if (from in this.contacts && 'short' in this.contacts[from])
          return
        break
    }
    await this.sendMessage(from, 'Maaf, karena anda menelfon bot. anda diblokir otomatis', MessageType.extendedText)
    await this.blockUser(from, 'add')
  }
}

global.dfail = (type, m, conn) => {
	let name = conn.getName(m.sender)
  let owr = {
    rowner: 'https://telegra.ph/file/2848948d64ea43302c882.png'
  }[type]
  if (owr) return conn.sendSticker(m.chat, 'https://telegra.ph/file/2848948d64ea43302c882.png', m ,{sendEphemeral: true})
  let msg = {
    owner: 'Khusus owner',
    mods: 'Perintah ini hanya dapat digunakan oleh _*Moderator*_ !',
    premium: 'Khusus premium',
    group: 'Perintah ini hanya dapat digunakan di grup!',
    private: 'Perintah ini hanya dapat digunakan di Chat Pribadi!',
    admin: 'Khusus Admin group',
    nsfw: 'Perintah ini hanya bisa diaktifkan oleh owner',
  }[type]
  if (msg) return conn.sendButton(m.chat, msg, watermark, 'OK', 'Nanii', m)
  let botAdmin = {
    botAdmin: 'Mikir dkit lah bang *BOT NYA BUKAN ADMIN*',
  }[type]
  if (botAdmin) return conn.sendButton(m.chat, botAdmin, 'Lupa Saya', 'Eh iya ya', 'Nanii', m)
  let unreg = {
    unreg: `Silahkan daftar untuk menggunakan fitur ini dengan cara mengetik:\n\n*#daftar nama.umur*\n\nContoh: *#daftar LynXzy.16*`
  }[type]
  if (unreg) return conn.sendButton(m.chat, `Halo kak ${name} Sebelum menggunakan fitur ini Harap Verify Terlebih dahulu`, watermark, 'Verify', `#daftar ${name}.17`, { key: { fromMe: false, remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { orderMessage: { message: `©shirobotz_\nJam ${time}`, itemCount: 2022, thumbnail: fs.readFileSync('./src/RadBotZ.jpg')}}})
}

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'handler.js'"))
  delete require.cache[file]
  if (global.reloadHandler) console.log(global.reloadHandler())
})
