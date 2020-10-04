const { Message } = require("discord.js");

module.exports = {
  name: '.search',
  description: 'Search!',
  execute(msg, args) {

    var replyStr = '';

    var words;
    for(word in getAllWords()){

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
