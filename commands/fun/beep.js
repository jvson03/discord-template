module.exports = {
	name: 'beep',
	description: 'Beep!',
	cooldown: 10,
	execute(message) {
		message.channel.send('Boop.');
	},
};