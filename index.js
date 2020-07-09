/* eslint-disable brace-style */
const Discord = require('discord.js');
const { prefix, token, bot_info } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

client.on('message', message => {
	if (message.content.startsWith(`${prefix}ping`)) {
		// send back "Pong." to the channel the message was sent in
		message.channel.send('Pong.');
	} else if (message.content.startsWith(`${prefix}Hi`)) {
		message.channel.send('Hello');
	}

	if (message.content === `${prefix}server`) {
		message.channel.send(`This server's name is: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	} else if (message.content === `${prefix}user-info`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}
});