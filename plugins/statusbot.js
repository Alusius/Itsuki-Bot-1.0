let handler = async (m, { conn, usedPrefix, command, text, args, isROwner, isAdmin }) => {
  switch (args[0].toLowerCase()) {

    case 'botOffline':
      opts.disable = true
      m.reply('```BOT OFFLINE NOW```')
      break
    case 'botOnline':
      opts.disable = false
      m.reply('```BOT ONLINE NOW```')
      break
  }
      
}
handler.command = /^to$/i
handler.rowner = false
module.exports = handler

//Thanks To IlhamGans
