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
            fs.writeFileSync('words.txt','');
        } catch(err) {
            console.error(err)
        }
        msg.channel.send('ALL WORDS DELETED.');
    },
  };