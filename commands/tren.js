module.exports = {
    name: '.tren',
    description: 'Tren!',
    execute(msg, args) {
        var googleTranslate = require('google-translate')(apiKey, options);
        googleTranslate.translate(args, "it", function(err, translation) {
          console.log("Translated " + args + " to " + translation.translatedText);
          msg.reply(translation.translatedText);
        });
    },
  };
  