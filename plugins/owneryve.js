let handler = function (m) {
	this.sendContact(m.chat, '994409869765', 'Owner RadBotZ :)', m)
}

handler.customPrefix = ['🍭Owner Mike'] 
handler.command = new RegExp

module.exports = handler