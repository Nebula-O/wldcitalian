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

var mysql = require('mysql');

var con = mysql.createConnection({

  host: DBHOST,
  database: DBASE,
  user: DBUNAME,
  password: DBPASSWD,
  port: DBPORT
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
}

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

  if (!bot.commands.has(command)) return;

  try {
    bot.commands.get(command).execute(msg, args);
  } catch (error) {
    console.error(error);
    msg.reply('An error occured while trying to execute that command!');
  }
});