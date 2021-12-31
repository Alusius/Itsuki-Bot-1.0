let handler  = async (m, { conn, command, args, usedPrefix }) => {
	let count = args[1] && args[1].length > 0 ? Math.min(9999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
        let who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
        who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
        let name = conn.getName(who)
        let users = global.db.data.users
	users[who].money += count * 1
                        conn.reply(m.chat, `Berhasil mentopup ${name} money sebesar ${count}`.trim(), m)
                        }
                        
handler.help = ['topup <Args>']
handler.tags = ['rpg']
handler.command = /^topup$/i
handler.premium = true

module.exports = handler