const Discord = require('discord.js');

module.exports = {
    name: '.download',
    description: 'Download the words file!',
    execute(msg, args) {
        const fs = require('fs');
        //const content = fs.readFileSync('words.txt', 'utf-8');
        const fileSizeInBytes = fs.statSync('words.txt').size;
        const fileSizeInMegabytes = fileSizeInBytes / 1000000.0;
        const attatchment = new Discord.Attachment('words.txt');
        msg.channel.send(msg.author+" "+fileSizeInMegabytes+"**MB**", attatchment);
    },
  };
  