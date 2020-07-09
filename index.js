/* eslint-disable brace-style */
const Discord = require('discord.js');
const { prefix, token, bot_info } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
	console.log(prefix);
	console.log(token);
	console.log(bot_info.name);
	console.log(bot_info.version);
});

client.login(token);

client.on('message', message => {
	if (message.content.startsWith(`${prefix}ping`)) {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong.');
	} else if (message.content.startsWith(`${prefix}Hi`)) {
		message.channel.send('Hello');
	}
});