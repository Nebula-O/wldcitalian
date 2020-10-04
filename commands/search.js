const { Message } = require("discord.js");

module.exports = {
  name: '.search',
  description: 'Search!',
  execute(msg, args) {

    var replyStr = '';


    var allWords;
    const fs = require('fs');
    try {
        // read contents of the file
        const data = fs.readFileSync('words.txt', 'UTF-8');
        // split the contents by new line
        const lines = data.split(/\r?\n/);
        var layout;
        // print all lines
        lines.forEach((line) => {// do something with each line
          allWords.add(line);
        });
        return words;
    } catch (err) {
        console.error(err);
    }



    var words;
    for(word in allWords){

      if(word.split('=').get(0).startsWith(prefix)){
        words.add(word);
      }

      else if(word.split('=').get(1).startsWith(prefix)){
        words.add(word);
      }

    }
    
    for(word in words){
      replyStr = replyStr.concat('\n' + word.replaceAll('=', ' = '));
    }

  },
};
