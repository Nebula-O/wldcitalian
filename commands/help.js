module.exports = {
    name: '.help',
    description: 'Help me!',
    execute(msg, args) {
      //msg.channel.send('__Help__```.ping\n.help``````-Work in progress-\n.dailywords\n.score\n.scores\n.toeng <italian word>\n.toitl <english word>\n.add <english word> <italian equivalent>\n.listwords\n.dictlookup <first letter>\n.dailywords```');
      msg.channel.send('__Help__```.s [english word]=[italian equivalent]\n.list (List all registered words)\n.tmi (Test my italian (Puts spoilers on italian words only))\n.tme (Test my italian (Puts spoilers on english words only))\n.search [prefix] (Returns words starting with the specified prefix.)\n.itl [english word] (Translates the word into italian based on memory)\n.eng [italian word] (Translates to english (^))\n.deleteall ( /!\\ DELETES EVERY WORD FROM MEMORY WHEN CALLED)\n\n.ping\n.help```');
    },
  };
  