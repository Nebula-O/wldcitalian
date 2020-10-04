module.exports = {
    name: '.s',
    description: 'Save a word!',
    execute(msg, args) {

        var words = args;
        var w = '';
        for(var wd in words) {
            w = w.concat(args[wd] + ' ');
        }
        if(w.endsWith(' ')){
            w = w.substring(0, w.length - 1);
        }
        var itl = w.split('=')[0];
        var eng = w.split('=')[1];
        if(eng.startsWith(' ')){
            w = w.substring(1, w.length);
        }
/*
        var eng = words[0].split('=');
        var itl = '';
        var i = 0;
        words.forEach((word) => {
            i++;
            itl = itl.concat(word + ' ');
        });
        if(i > 1){
            itl.replace(itl.lastIndexOf(' '), '');
        }*/

        // SAVE WORD
        console.log('Saving word ( 0% ) ('+itl+'='+eng+') ...');
        var fs = require('fs');
        fs.appendFile('words.txt', itl+'='+eng+"\n", function (err) {
          if (err) throw err;
          console.log('Saved ( 100% ) ('+itl+'='+eng+')');
        });

        
        msg.channel.send('Saved. **It: **'+itl+' = **En: **'+eng);
    },
  };
  