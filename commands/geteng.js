module.exports = {
    name: '.eng',
    description: 'Translate to english',
    execute(msg, args) {

        const fs = require('fs');
        try {

            var word = '';
            for(var wd in args) {
                word = word.concat(args[wd] + ' ');
            }
            if(word.endsWith(' ')){
                word = word.substring(0, word.length - 1);
            }

            // read contents of the file
            const data = fs.readFileSync('words.txt', 'UTF-8');
            // split the contents by new line
            const lines = data.split(/\r?\n/);
            var layout;
            // print all lines
            lines.forEach((line) => {// do something with each line
              layout = line.split('=');
              if(layout[0].toLowerCase() === word.toLowerCase()){// if english form matches word then return italian equivalent
                msg.channel.send(layout[1]);
              }
            });
        } catch (err) {
            console.error(err);
            msg.channel.send("- *Error*");
        }
    },
  };
  