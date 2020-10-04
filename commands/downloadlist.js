const { Client, Attatchment } = require('discord.js');

module.exports = {
    name: '.download',
    description: 'Download the words file!',
    execute(msg, args) {
        const fs = require('fs');
        const content = fs.readFileSync('words.txt', 'utf-8');
        const attatchment = new Discord.Attachment('words.txt');
        msg.channel.send(msg.author, attatchment);
        
    },
  };
  