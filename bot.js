const Discord = require("discord.js");
const bot = new Discord.Client();



bot.on("ready", () => {
  let guild = bot.guilds.get('547843935964364849'); // ايدي ال سيرفر
  setInterval(function() {
    guild.members.get('595653353783033857').setNickname('كل زق').then(() => { // الايدي مالتك
      setTimeout(() => {
        guild.members.get('595653353783033857').setNickname('كل خرا').then(() => { // الايدي مالتك
          setTimeout(() => {
            guild.members.get('595653353783033857').setNickname('كل تبن') // الايدي مالتك
          }, 3000); // هذا الوقت الي يتغير فيه لاول مره
        });
      }, 6000); // هذا الوقت الي يتغير فيه لثاني مره
    });
  }, 12000); // هذا الوقت وينعاد النك نيم من جديد
}) 


const Discord = require('discord.js');
const bot = new Discord.bot();
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});


const developers = ["595653353783033857"]
const adminprefix = "!";
bot.on('message', message => {
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!developers.includes(message.author.id)) return;
      
  if (message.content.startsWith(adminprefix + 'ply')) {
    bot.user.setGame(argresult);
      message.channel.send(`**Status You   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'wat')) {
  bot.user.setActivity(argresult, {type:'WATCHING'});
      message.channel.send(`**Status You   ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'lis')) {
  bot.user.setActivity(argresult , {type:'LISTENING'});
      message.channel.send(`**Status You  ${argresult}**`)
  } else 
  if (message.content.startsWith(adminprefix + 'st')) {
    bot.user.setGame(argresult, "https://www.twitch.tv/M3roof");
      message.channel.send(`**Status You ${argresult} **`)
}
});
 



bot.login(process.env.BOT_TOKEN);
