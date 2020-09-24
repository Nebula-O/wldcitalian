module.exports = {
    name: '.trit',
    description: 'Trit!',
    execute(msg, args) {
        var googleTranslate = require('google-translate')(apiKey, options);
        googleTranslate.translate(args, "en", function(err, translation) {
          console.log("Translated " + args + " to " + translation.translatedText);
          msg.reply(translation.translatedText);
        });
    },
  };
  