let vas = require('canvacord')
let handler = async (m, { text }) => {
if (!text) throw 'Tidak Ada Teks'
vas.Canvas.changemymind(text).then(v => {
conn.sendFile(m.chat, v, 'changemymind.jpeg', 'nih kak sudah jadi', m)
})
}
handler.help = ['changemymind <teks>']
handler.tags = ['fun']
handler.command = /^(changemymind)$/i

module.exports = handler
