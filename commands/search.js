const { Message } = require("discord.js");

module.exports = {
  name: '.search',
  description: 'Search!',
  execute(msg, args) {

    var replyStr = 'Words found:  ';


    var allWords = [];
    const fs = require('fs');
    try {
        // read contents of the file
        const data = fs.readFileSync('words.txt', 'UTF-8');
        // split the contents by new line
        const lines = data.split('\n');
        var layout;
        // print all lines
        lines.forEach((line) => {// do something with each line
          allWords.push(line);
        });
    } catch (err) {
        console.error(err);
    }



    var words = [];
    const prefix = args;

    for(word in allWords){
      if(word.includes('=')){
        if(word.split('=')[0].startsWith(prefix)){
          word = word.replaceAll('=', ' = ');
          replyStr = replyStr.concat(' `' + word + '`, ');
        }

        else if(word.split('=')[1].startsWith(prefix)){
          word = word.replaceAll('=', ' = ');
          replyStr = replyStr.concat(' `' + word + '`, ');
        }
      }
    }
    
    if(allWords.length < 1){
      msg.channel.send('No words found.');
    }else{
      msg.channel.send(replyStr);
    }

  },
};
