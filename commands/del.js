module.exports = {
    name: '.deleteall',
    description: 'delete all words!',
    execute(msg, args) {

        const fs = require('fs')

        const path = './words.txt'

        try {
            fs.unlinkSync(path)
            //file removed
            //fresh file made
            fs.appendFile('words.txt', "", function (err) {
                if (err) throw err;
                console.log('Saved new file ( 100% )');
            });
        } catch(err) {
            console.error(err)
        }
        msg.channel.send('ALL WORDS DELETED.');
    },
  };