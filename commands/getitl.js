module.exports = {
    name: '.itl',
    description: 'Translate to italian',
    execute(msg, args) {

        const fs = require('fs');
        try {
            // read contents of the file
            const data = fs.readFileSync('words.txt', 'UTF-8');
            // split the contents by new line
            const lines = data.split(/\r?\n/);
            var layout;
            
            var words = args;
            var word = '';
            for(var wd in words) {
                word.concat(wd + ' ');
            }
            if(w.endsWith(' ')){
                w = w.substring(0, w.length - 1);
            }

            // print all lines
            lines.forEach((line) => {// do something with each line
                if(line.length > 2){
                    layout = line.split('=');
                    if(layout[1].toLowerCase() === word.toLowerCase()){// if english form matches word then return italian equivalent
                        msg.channel.send(layout[0]);
                    }
                }
            });
        } catch (err) {
            console.error(err);
            msg.channel.send("- *Error*");
        }
    },
  };
  