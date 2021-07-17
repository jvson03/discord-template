module.exports = {
	name: 'ping',
	description: 'Ping!',
	//guildOnly: true,
	//usage: '<something>',
	//aliases: ['icon', 'pfp'],
	//permissions: 'KICK_MEMBERS',
	cooldown: 10,
	execute(message) {
		message.channel.send('Pong.');
	},
};