module.exports = {
    name: '.wordcount',
    description: 'How many words are registered?',
    execute(msg, args) {
        
        const fs = require('fs');
        try {
            // read contents of the file
            const data = fs.readFileSync('words.txt', 'UTF-8');
            // split the contents by new line
            const lines = data.split(/\r?\n/);
            var layout;
            
            var num;
            lines.forEach((line) => {// do something with each line
              if(line.length > 2){
                  num++;
              }
            });
            msg.channel.send("**"+num+"** words.");
        } catch (err) {
            console.error(err);
        }

    },
  };
  