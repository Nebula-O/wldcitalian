const { Message } = require("discord.js");

module.exports = {
  name: '.search',
  description: 'Search!',
  execute(msg, args) {

    var replyStr = 'Words found:  \n';


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
      
      //let line_no = 0;
      
      var prfx = args[0];
      // event is emitted after each line
      rl.on('line', function(line) {
          //line_no++;
          //console.log(line);
          allWords.push(line);
          //console.log('prfx = '+prfx);
          var done= false;
          var splitLn = line.split('=');
          var lang = 'English';
          splitLn.forEach((str) => {console.log('prfx check detected');
            if(str.startsWith(prfx)){console.log('= detected');
              //console.log('replyStr = '+replyStr);
              if(splitLn[0]==splitLn[1]){
                lang = "English & Italian";
              }
              else if(str == splitLn[0]) lang = 'Italian';
              replyStr += (' `' + str + '` (*'+lang+'*), ');
              done = true;
              //console.log('replyStr = '+replyStr);
            }
          });
          if(done) replyStr += '\n';

      });
      
      // end
      rl.on('close', function(line) {
          //console.log('Total lines : ' + line_no);
          if(replyStr.length < 14){
            msg.channel.send('No words found.');
          }else{
            msg.channel.send(replyStr);
          }
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
        msg.channel.reply("**`/!\\`**Error: "+err.name);
    }
  },
};
