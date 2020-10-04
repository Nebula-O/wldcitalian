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
const DBPORT = process.env.DBPORT;
/*
var mysql = require('mysql');

var con = mysql.createConnection({
  host: DBHOST,
  database: DBASE,
  user: DBUNAME,
  password: DBPASSWD,
});
var con = mysql.createConnection('mysql://"user":pass@host/db?debug=true&charset=BIG5_CHINESE_CI&timezone=-0700')
/*con.connect(function(err) {
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
}
*/
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

bot.on('message', msg => {
  const args = msg.content.split(/ +/);
  const command = args.shift().toLowerCase();
  console.info(`Called command: ${command}`);

  if (!bot.commands.has(command)){ return;
  }else if(command != '.download') return;

  try {
    if(command != '.download'){
      bot.commands.get(command).execute(msg, args);
    } else {
      const fs = require('fs');
      const content = fs.readFileSync('words.txt', 'utf-8');
      const attatchment = new Discord.Attachment('words.txt');
      msg.channel.send(message.author, attatchment);
    }
  } catch (error) {
    console.error(error);
    msg.reply('An error occured while trying to execute that command!');
  }
});

/*
function saveWord(eng,itl) {
  console.log('Saving word ( 0% ) ('+itl+'='+eng+') ...');
  var fs = require('fs');
  fs.appendFile('words.txt', itl+'='+eng+"\n", function (err) {
    if (err) throw err;
    console.log('Saved ( 100% ) ('+itl+'='+eng+')');
  });
}

function getAllWords() {// ITALIAN = ENGLISH
  const fs = require('fs');
  try {
      // read contents of the file
      const data = fs.readFileSync('words.txt', 'UTF-8');
      // split the contents by new line
      const lines = data.split(/\r?\n/);
      var layout;
      // print all lines
      var words;
      lines.forEach((line) => {// do something with each line
        words.add(line);
      });
      return words;
  } catch (err) {
      console.error(err);
  }
}

function getITLWordsStartingWith(prefix){
  var words;
  for(word in getAllWords()){
    if(word.split('=').get(0).startsWith(prefix)){
      words.add(word);
    }
  }return words;
}
function getENGWordsStartingWith(prefix){
  var words;
  for(word in getAllWords()){
    if(word.split('=').get(1).startsWith(prefix)){
      words.add(word);
    }
  }return word;
}

function getItlFor(word){// word is english
  const fs = require('fs');
  try {
      // read contents of the file
      const data = fs.readFileSync('words.txt', 'UTF-8');
      // split the contents by new line
      const lines = data.split(/\r?\n/);
      var layout;
      // print all lines
      lines.forEach((line) => {// do something with each line
        layout = line.split('=');
        if(layout.get(1).toLowerCase() === word.toLowerCase()){// if english form matches word then return italian equivalent
          return layout.get(0);
        }
      });
  } catch (err) {
      console.error(err);
  }
  return "- *Error*: "+word+" is not recognised. -";
}

function getEngFor(word){// word is italian
  const fs = require('fs');
  try {
      // read contents of the file
      const data = fs.readFileSync('words.txt', 'UTF-8');
      // split the contents by new line
      const lines = data.split(/\r?\n/);
      var layout;
      // print all lines
      lines.forEach((line) => {// do something with each line
        layout = line.split('=');
        if(layout.get(0).toLowerCase() === word.toLowerCase()){
          return layout.get(0);
        }
      });
  } catch (err) {
      console.error(err);
  }
  return "- Error: "+word+" is not recognised.";
}

function getRandomWord(){
  const theWords = getAllWords();
  return theWords.get(getRandomNumberBetween(1, theWords.length()));
}

function getRandomNumberBetween(min, max) {  
  return Math.floor(
    Math.random() * (max - min) + min
  )
}*/