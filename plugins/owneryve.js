let handler = function (m) {
	this.sendContact(m.chat, '60189830350', 'Owner Bot Lyn :)', m)
}

handler.customPrefix = ['Owner bot'] 
handler.command = new RegExp

module.exports = handler
