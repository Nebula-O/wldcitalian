const { Message } = require("discord.js");

module.exports = {
  name: '.search',
  description: 'Search!',
  execute(msg, args) {

    var replyStr = 'Words found:  ';


    var allWords = [];
    const fs = require('fs');
    try {

      const readline = require('readline');
      const fs = require('fs');
      
      // create instance of readline
      // each instance is associated with single input stream
      let rl = readline.createInterface({
          input: fs.createReadStream('words.txt')
      });
      
      let line_no = 0;
      
      // event is emitted after each line
      rl.on('line', function(line) {
          line_no++;
          console.log(line);
          allWords.push(line);
      });
      
      // end
      rl.on('close', function(line) {
          console.log('Total lines : ' + line_no);
      });

        // read contents of the file
        //const data = fs.readFileSync('words.txt', 'UTF-8');
        // split the contents by new line
        //const lines = data.split(/\r?\n/);
        //var layout;
        // print all lines
        //lines.forEach((line) => {// do something with each line
          //allWords.push(line);
        //});
    } catch (err) {
        console.error(err);
    }



    var words = [];
    const prefix = args[0];

    for(var word in allWords){
        if(word.split('=')[0].startsWith(prefix)){
          word = word.replaceAll('=', ' = ');
          replyStr = replyStr.concat(' `' + word + '`, ');
        }

        else if(word.split('=')[1].startsWith(prefix)){
          word = word.replaceAll('=', ' = ');
          replyStr = replyStr.concat(' `' + word + '`, ');
        }
      }
    
    if(allWords.length < 1){
      msg.channel.send('No words found.');
    }else{
      msg.channel.send(replyStr);
    }

  },
};
