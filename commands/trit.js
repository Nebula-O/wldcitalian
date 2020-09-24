module.exports = {
    name: '.trit',
    description: 'Trit!',
    execute(msg, args) {
        const {google} = require('googleapis');
        const apiKey = "579bd4f236802db9469b9ab341c02b789ab1596f";
        var googleTranslate = require('google-translate');
        googleTranslate.translate(args, "en", function(err, translation) {
          console.log("Translated " + args + " to " + translation.translatedText);
          msg.reply(translation.translatedText);
        });
    },
  };
  