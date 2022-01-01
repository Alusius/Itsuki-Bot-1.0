let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    conn.sendButton(m.chat, `🪙*${user.limit}* Limit\n📈*${user.exp}* XP\n🧬Level *${user.level}*\n💳Role *${user.role}*`, watermark, 'Inventory', '.inv', m)
}
handler.help = ['my [@user]']
handler.tags = ['xp']
handler.command = /^(my|limit)$/i
module.exports = handler
