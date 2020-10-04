module.exports = {
    name: '.r',
    description: 'Random word!',
    execute(msg, args) {
        const fs = require('fs');
        try {
      
            // GET ALL WORDS
            // -
            // read contents of the file
            const data = fs.readFileSync('words.txt', 'UTF-8');
            // split the contents by new line
            const lines = data.split(/\r?\n/);
            var layout;
            // print all lines
            var words = [];
            lines.forEach((line) => {// do something with each line
                if(line.length > 1){
                    words.push(line);
                }
            });
            // -
            // PICK A RANDOM WORD
            // -
            var theWord = words[Math.floor(Math.random() * (words.length - 0) + 0)];
            // -
            // OUTPUT THE RANDOM WORD CHOSEN
            msg.channel.send(theWord);

        } catch (err) {
            console.error(err);
            msg.channel.send('Sorry! An error occured.');
        }
        // -


    },
  };
  