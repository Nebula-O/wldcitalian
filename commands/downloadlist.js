module.exports = {
    name: '.download',
    description: 'Download the words file!',
    execute(msg, args) {
        const fs = require('fs');
        const content = fs.readFileSync('words.txt', 'utf-8');
        msg.channel.send(content);
    },
  };
  