let handler = async (m, { conn, usedPrefix, text, isAdmin, isOwner }) => {
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
            global.dfail('admin', m, conn)
            throw false
        }
    }
    conn.absen = conn.absen ? conn.absen : {}
    let id = m.chat
    if (id in conn.absen) {
        await conn.send2Button(m.chat, `Masih ada absen di chat ini!`, watermark, 'Hapus', `${usedPrefix}hapusabsen`, 'Cek', `${usedPrefix}cekabsen`, m)
        throw false
    }
    conn.absen[id] = [
        await conn.sendButton(m.chat, `Absen dimulai`, watermark, 'Absen', `${usedPrefix}absen`, m),
        [],
        text
    ]
}
handler.help = ['mulaikehadiran [teks]']
handler.tags = ['absen']
handler.command = /^(startkehadiran|mulaikehadiran)$/i

module.exports = handler
