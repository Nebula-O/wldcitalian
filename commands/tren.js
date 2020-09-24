module.exports = {
    name: '.tren',
    description: 'Tren!',
    execute(msg, args) {
        const translate = require('@vitalets/google-translate-api');
        translate(args, { to:'it'}).then(res => {
          console.log("Translated " + args + " to " + translation.translatedText);
          msg.reply(translation.translatedText);
        }).catch(err => {
            console.error(err);
        });
    },
  };
  