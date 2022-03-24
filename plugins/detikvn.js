let handler = async (m, { conn, args }) => {
  try {
    let q = m.quoted ? m.quoted : m
    let tes = await q.download()
    conn.sendFile(m.chat, tes, 'ok.mp3', null, m, false, { duration: args[0] })
  } catch (e) {
    throw e
  }
}
handler.help = ['detikvn', 'detikvideo'].map(v => v + ' [vn]')
handler.tags = ['audio']
handler.command = /^(detikvn|detikvideo)$/i

module.exports = handler
