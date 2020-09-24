require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
  bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;
const DBASE = process.env.DBASE;
const DBUNAME = process.env.DBUNAME;
const DBPASSWD = process.env.DBPASSWD;
const DBHOST = process.env.DBHOST;
/*
var mysql = require('mysql');

var con = mysql.createConnection({
  host: DBHOST,
  user: DBUNAME,
  password: DBPASSWD
});
con.connect(function(err) {
  if (err) throw err;
  console.log("MySQL Connected!");
});

function querySql(str){
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
      return result;
    });
  }); 
}*/

bot.login(TOKEN);
bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
  bot.user.setActivity('italian!',{ type : 'LISTENING' });
});

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.on('line', inputStr => {
  if(inputStr.startsWith("s.")){
    var details = inputStr.split(',');
    details[0] = details[0].replace("s.","");
    const channel = bot.channels.get(bot.user.client.channels.find(bot.channels.find(channel => channel.name === details[0]).id));
    channel.send(inputStr.substring(details[0].length+1,inputStr.length));
    readline.close();
  }
});

function translate(msg, lang) {

  var sep = msg.substring((".tren ").length, msg.length);// ".tren " has the same length as ".trit "
  var googleTranslate = require('google-translate')(apiKey, options);
  googleTranslate.translate(sep, lang, function(err, translation) {
    console.log("Translated " + sep + " to " + translation.translatedText);
    return translation.translatedText;
  });

}

bot.on('message', msg => {
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();
  console.info(`Called command: ${command}`);

  if (!bot.commands.has(command) && (!command.startsWith(".tren") || !command.startsWith(".trit"))) return;

  try {
    if(command.startsWith(".tren "))
    {
      var sep = msg.substring((".tren ").length, msg.length);// ".tren " has the same length as ".trit "
      var googleTranslate = require('google-translate')(apiKey, options);
      googleTranslate.translate(sep, "it", function(err, translation) {
        console.log("Translated " + sep + " to " + translation.translatedText);
        msg.reply(translation.translatedText);
      });
    }
    if(command.startsWith(".trit "))
    {
      var sep = msg.substring((".tren ").length, msg.length);// ".tren " has the same length as ".trit "
      var googleTranslate = require('google-translate')(apiKey, options);
      googleTranslate.translate(sep, "en", function(err, translation) {
        console.log("Translated " + sep + " to " + translation.translatedText);
        msg.reply(translation.translatedText);
      });
    }
    else bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('An error occured while trying to execute that command!');
  }
});