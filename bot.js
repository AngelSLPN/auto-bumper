const config = require("./config.json");
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`${client.user.username} | ${client.guilds.size} Guilds!`);
});

client.on("ready", () => {
      setInterval(() => { 
       let autobumpchannel = client.channels.get(config.channelid)


        autobumpchannel.send("!d bump")


      }, 7220000);//DONT CHANGE!
})

client.login(config.token)