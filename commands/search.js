const { Message } = require("discord.js");

module.exports = {
  name: '.search',
  description: 'Search!',
  execute(msg, args) {

    var replyStr = '';


    var allWords = [];
    const fs = require('fs');
    try {
        // read contents of the file
        const data = fs.readFileSync('words.txt', 'UTF-8');
        // split the contents by new line
        const lines = data.split(/\r?\n/);
        var layout;
        // print all lines
        lines.forEach((line) => {// do something with each line
          if(line.includes('=')) {
            allWords.push(line);
          }
        });
    } catch (err) {
        console.error(err);
    }



    var words;
    const prefix = args[0];

    for(word in allWords){
      if(word.includes('=')){
        if(word.split('=')[0].startsWith(prefix)){
          words.add(word);
        }

        else if(word.split('=')[1].startsWith(prefix)){
          words.add(word);
        }
      }
    }
    
    for(word in words){
      replyStr = replyStr.concat('\n' + word.replaceAll('=', ' = '));
    }
    if(allWords.length < 1){
      msg.channel.send('No words found.');
    }else{
      msg.channel.send(replyStr);
    }

  },
};
