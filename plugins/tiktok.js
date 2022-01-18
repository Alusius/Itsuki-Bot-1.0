let fetch = require('node-fetch')
let fs = require('fs')
let handler = async (m, { conn, args, command, usedPrefix }) => {
let anu = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(m.chat ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title":"hallo bang",
                 "h": `Hmm`,
                 'seconds': '182', 
                 'caption': 'Nothing to see',
                 'jpegThumbnail': fs.readFileSync('./src/RadBotZ.jpg')
                        }
                       }
	                  }
  if (!args[0]) throw `Gunakan format: ${usedPrefix}${command} https://tiktokxxxx`
  let { video, description, music, author } = await tiktok(args[0])
  let url = video.no_watermark || video.with_watermark || video.no_watermark_raw || music
  if (!url) throw 'Gagal mengambil url download'
  await conn.sendFile(m.chat, url, 'tiktok.mp4', `
- *By:* ${author.nickname} (${author.unique_id})
- *Desc:*
${description}
`.trim(), anu)
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^(tik(tok)?(dl)?)$/i

module.exports = handler

const axios = require('axios')
async function tiktok(url) {
  try {
    let results = {}
    if (/v[tm]\.tiktok\.com/g.test(url)) {
      let res = await axios.get(url)
      url = res.request.res.responseUrl
    }
    let key = await axios.get(`https://api.snaptik.site/video-key?video_url=${url}`)
    key = JSON.parse(JSON.stringify(key.data, null, 2))
    if (key.status !== 'success') throw key
    let data = await axios.get(`https://api.snaptik.site/video-details-by-key?key=${key.data.key}`)
    data = JSON.parse(JSON.stringify(data.data, null, 2))
    if (data.status !== 'success') throw data
    results = {
      author: { ...data.data.author },
      description: data.data.description,
      video: {
        with_watermark: `https://api.snaptik.site/download?key=${data.data.video.with_watermark}&type=video`,
        no_watermark: `https://api.snaptik.site/download?key=${data.data.video.no_watermark}&type=video`,
        no_watermark_raw: data.data.video.no_watermark_raw
      },
      music: `https://api.snaptik.site/download?key=${data.data.music}&type=music`
    }
    return results
  } catch (e) {
    throw 'Mungkin video private?!'
  }
}
