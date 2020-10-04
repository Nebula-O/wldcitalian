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
          splitLn.forEach((str) => {//console.log('prfx check detected');
            if(str.startsWith(prfx)){//console.log('= detected');
              //console.log('replyStr = '+replyStr);
              if(splitLn[0]==splitLn[1]){
                lang = "English & Italian";
              }
              else if(str == splitLn[0]) lang = 'Italian';
              replyStr += (' `' + str + '` (*'+lang+'*), ');
              done = true;
              lang = 'English';
              //console.log('replyStr = '+replyStr);
            }
          });
          if(done) replyStr += '\n';

      });
      
      // end
      rl.on('close', function(line) {
          //console.log('Total lines : ' + line_no);
          if(replyStr.length < 14){
            msg.channel.send('No match(es) found.');
          }else if(replyStr.length <= 2000){
            msg.channel.send(replyStr);
          }
          else if((replyStr.length) <= 4000) {
            msg.channel.send(replyStr.substring(0, replyStr.length / 2));
            msg.channel.send(replyStr.substring((replyStr.length / 2) + 1, replyStr.length));
          }
          else{
            msg.channel.reply("Sorry but there are too many results to display here! Please try narrowing your search down.");
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
