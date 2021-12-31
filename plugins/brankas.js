let PhoneNumber = require('awesome-phonenumber')
let handler = async (m, { conn }) => {
  let pp = './src/avatar_contact.png'
  let botol = global.botwm
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, tigame, user, level, role, money, premium, limit, exp, lastclaim, registered, regTime, age } = global.db.data.users[m.sender]
    let username = conn.getName(who)
    let str = `
╭◈ *「 USER 」*
├─ 📇 *Name* : ${username}
├─ 🆔 *Nomor* : ${require('awesome-phonenumber')(`+${m.sender.split('@')[0]}`).getNumber('international')}
├─ 🌟 *Premium* : ${premium ? "Yes" :"No"}
├─ 〽️ *Age* : ${registered ? '' + age : ''}
├─ 📍 *Role* : ${role}
├─ 🎫 *Limit* : ${limit}
├─ 🎟 ️ *Limit Game* : ${tigame}
├─ 📊 *Level* : ${level}
├─ 💹 *Money* : ${money}
╰─ ✨ *Exp* : ${exp}

`.trim()
    let mentionedJid = [who]
    conn.send2ButtonImg(m.chat, str, pp, watermark, `⋮☰ Back`, `.menu`, `👤 Profile`, `.profile`, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['my','dompet']
handler.tags = ['xp']
handler.register = true
handler.command = /^my|dompet$/i
module.exports = handler