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



bot.on("ready", () => {
  let guild = bot.guilds.get('599551730388041743'); // ايدي ال سيرفر
  setInterval(function() {
    guild.members.get('595653353783033857').setNickname('احبك').then(() => { // الايدي مالتك
      setTimeout(() => {
        guild.members.get('595653353783033857').setNickname('اعشقك').then(() => { // الايدي مالتك
          setTimeout(() => {
            guild.members.get('595653353783033857').setNickname('اموت فيك') // الايدي مالتك
          }, 3000); // هذا الوقت الي يتغير فيه لاول مره
        });
      }, 6000); // هذا الوقت الي يتغير فيه لثاني مره
    });
  }, 12000); // هذا الوقت وينعاد النك نيم من جديد
}) 



bot.login(process.env.BOT_TOKEN);
