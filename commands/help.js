module.exports = {
    name: 'help',
    description: 'Help me!',
    execute(msg, args) {
      msg.channel.send('__Help__```.ping\n.help``````-Work in progress-\n.dailywords\n.score\n.scores\n.toeng <italian word>\n.toitl <english word>\n.add <english word> <italian equivalent>\n.listwords\n.dictlookup <first letter>\n.dailywords```');
    },
  };
  