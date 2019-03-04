const Discord = require('discord.js')
const client = new Discord.Client()
const config = require("./config.json");
let prefix = "!";
client.on('ready', () => {
    console.log("Connected as " + client.user.tag)
})

const embed = new Discord.RichEmbed()
.setImage("https://i.kym-cdn.com/entries/icons/original/000/000/142/feelsgoodman.png")


client.on('message', (message) => {
    // If message does not start with prefix or is sent by a bot then return
    if(!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }
    // If message starts with prefix and fgm continue code
    if(message.content.startsWith(prefix + "fgm")) {
        message.channel.send({embed});
    }

});


// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"

client.login(config.token)
