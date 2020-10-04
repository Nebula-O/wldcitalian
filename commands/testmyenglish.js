module.exports = {
    name: '.tme',
    description: 'Test on italian words!',
    execute(msg, args) {
        
        const fs = require('fs');
        try {
            // read contents of the file
            const data = fs.readFileSync('words.txt', 'UTF-8');
            // split the contents by new line
            const lines = data.split(/\r?\n/);
            var layout;
            // print all lines
            var words = '__(Spoiler on italian words)__';
            lines.forEach((line) => {// do something with each line
                if(line.length > 2){
                    lineRep = line.split('=');
                    words = words.concat('\n**||'+lineRep[0]+'||** = `'+lineRep[1]+'`');
                }
            });
            msg.channel.send(words);
        } catch (err) {
            console.error(err);
        }

    },
  };
  