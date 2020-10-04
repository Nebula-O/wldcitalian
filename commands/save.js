module.exports = {
    name: '.s',
    description: 'Save a word!',
    execute(msg, args) {

        var words = args;

        var eng = words[0].split('=');
        var itl = words[1];

        // SAVE WORD
        console.log('Saving word ( 0% ) ('+itl+'='+eng+') ...');
        var fs = require('fs');
        fs.appendFile('words.txt', itl+'='+eng+"\n", function (err) {
          if (err) throw err;
          console.log('Saved ( 100% ) ('+itl+'='+eng+')');
        });

        
        msg.channel.send('Saved. '+itl+' = '+eng);
    },
  };
  