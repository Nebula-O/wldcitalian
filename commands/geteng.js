module.exports = {
    name: '.eng',
    description: 'Translate to english',
    execute(msg, args) {

        const fs = require('fs');
        try {
            var word = args[0];
            // read contents of the file
            const data = fs.readFileSync('words.txt', 'UTF-8');
            // split the contents by new line
            const lines = data.split(/\r?\n/);
            var layout;
            // print all lines
            lines.forEach((line) => {// do something with each line
              layout = line.split('=');
              if(layout.get(0).toLowerCase() === word.toLowerCase()){// if english form matches word then return italian equivalent
                msg.channel.send(layout.get(1));
              }
            });
        } catch (err) {
            console.error(err);
        }
        msg.channel.send("- *Error*: "+word+" is not recognised as an italian word. -");
    },
  };
  