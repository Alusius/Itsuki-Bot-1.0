let handler = async (m, { conn, text }) => {

  if (!text) return conn.reply(m.chat, 'Harap Masukan Teks yang akan direpeat!', m)

  let repeated = "";
  let count = 0;
  while (count < 400) {
    repeated += `${text}\n`;
    count++;
  }

  conn.reply(m.chat, repeated.trim(), m)
}
handler.help = ['repeat <teks>']
handler.tags = ['tools']
handler.command = /^(repeat)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler
