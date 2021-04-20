const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.tag} adlı botun ile giriş yaptım!`);
});

client.on('message', msg => {
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.send('Aleyküm Selam');
  }
  if (msg.content.toLowerCase() === 'yusuf') {
    msg.channel.send('En kral adam!');
  }
  if (msg.content.toLowerCase() === 'adam') {
    msg.channel.send('Yusuf!');
  }
});

client.login('botunuzun tokeni');
