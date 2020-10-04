module.exports = {
    name: '.s',
    description: 'Save a word!',
    execute(msg, args) {

        var words = args;

        var eng = words[0].split('=');
        var itl = '';
        var i = 0;
        words.forEach((word) => {
            i++;
            itl = itl.concat(word + ' ');
        });
        if(i > 1){
            itl.replace(itl.lastIndexOf(' '), '');
        }

        // SAVE WORD
        console.log('Saving word ( 0% ) ('+itl+'='+eng+') ...');
        var fs = require('fs');
        fs.appendFile('words.txt', itl+'='+eng+"\n", function (err) {
          if (err) throw err;
          console.log('Saved ( 100% ) ('+itl+'='+eng+')');
        });

        
        msg.channel.send('Saved. **I: **'+itl+' = **E: **'+eng);
    },
  };
  