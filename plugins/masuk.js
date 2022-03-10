function handler(m) {
    m.reply('Chat ke owner untuk informasi lebih lanjut.')
    this.sendContact(m.chat, global.owner[0], this.getName(global.owner[0] + '@s.whatsapp.net'), m)
    this.sendContact(m.chat, '60189830350@s.whatsapp.net', 'Owner Bot', m)
  }
  handler.command = /^(masuk)$/i
  
  module.exports = handler
  
