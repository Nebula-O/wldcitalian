module.exports = {
    name: '.list',
    description: 'List words!',
    execute(msg, args) {
        
        const fs = require('fs');
        try {
            // read contents of the file
            const data = fs.readFileSync('words.txt', 'UTF-8');
            // split the contents by new line
            const lines = data.split(/\r?\n/);
            var layout;
            // print all lines
            var words = '__List of registered words__';
            lines.forEach((line) => {// do something with each line
              words = words.concat('\n'+line);
            });
            msg.channel.send(words);
        } catch (err) {
            console.error(err);
        }

    },
  };
  