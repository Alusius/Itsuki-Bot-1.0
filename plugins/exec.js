//trying UwU
const syntaxerror = require('syntax-error');
const util = require('util');
const fs = require('fs');

let handler = async (m, _2) => {
  let { conn, usedPrefix, noPrefix, args, groupMetadata } = _2
  let peli = global.logo
  let ye = global.logo
  let _return
  let _syntax = ''
  let _text = (/^=/.test(usedPrefix) ? 'return ' : '') + noPrefix
  let old = m.exp * 1
  try {
    let i = 15
    let f = {
      exports: {}
    }
    let exec = new (async () => { }).constructor('print', 'm', 'handler', 'require', 'conn', 'Array', 'process', 'args', 'groupMetadata', 'module', 'exports', 'argument', _text)
    _return = await exec.call(conn, (...args) => {
      if (--i < 1) return
      console.log(...args)
      return /*conn.reply(m.chat, util.format(...args), m)*/
      conn.sendMessage(m.chat, util.format(...args), 'conversation', { thumbnail: peli, contextInfo: { externalAdReply: { title: 'Relldev', sourceUrl: '', body: ``, thumbnail: ye } } })
    }, m, handler, require, conn, CustomArray, process, args, groupMetadata, f, f.exports, [conn, _2])
  } catch (e) {
    let err = await syntaxerror(_text, 'Execution Function', {
      allowReturnOutsideFunction: true,
      allowAwaitOutsideFunction: true
    })
    if (err) _syntax = '```' + err + '```\n\n'
    _return = e
  } finally {
    /*conn.reply(m.chat, _syntax + util.format(_return), m)*/
    prep = conn.prepareMessageFromContent(m.chat, {
      orderMessage: {
        itemCount: 999999999999, status: 1,
        message: _syntax + util.format(_return),
        orderTitle: 'B',
        sellerJid: '0@s.whatsapp.net',
        thumbnail: fs.readFileSync('./src/RadBotZ.jpg')
      }
    }, { contextInfo: null, quoted: m })
    conn.relayWAMessage(prep)
    m.exp = old
  }
}
handler.help = ['>', '=>']
handler.tags = ['advanced']
handler.customPrefix = /^=?> /
handler.command = /(?:)/i
handler.rowner = false
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

class CustomArray extends Array {
  constructor(...args) {
    if (typeof args[0] == 'number') return super(Math.min(args[0], 10000))
    else return super(...args)
  }
}
