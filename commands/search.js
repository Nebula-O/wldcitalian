module.exports = {
  name: '.translate',
  description: 'Translate something!',
  execute(msg, args) {
    msg.channel.send('Translating...');
    var googleTranslate = require('google-translate')(apiKey, options);
    googleTranslate.translate('My name is Brandon', 'es', function(err, translation) {
      console.log(translation.translatedText);
      // =>  Mi nombre es Brandon
    });
  },
};
