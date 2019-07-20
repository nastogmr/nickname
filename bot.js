const Discord = require("discord.js");
const bot = new Discord.bot();



bot.on("ready", () => {
  let guild = bot.guilds.get('579775835683291148'); // ايدي ال سيرفر
  setInterval(function() {
    guild.members.get('587865288150745098').setNickname('i').then(() => { // الايدي مالتك
      setTimeout(() => {
        guild.members.get('587865288150745098').setNickname('Best Iraqi Discord Developer').then(() => { // الايدي مالتك
          setTimeout(() => {
            guild.members.get('587865288150745098').setNickname('Report Me :)') // الايدي مالتك
          }, 10000); // هذا الوقت الي يتغير فيه لاول مره
        });
      }, 10000); // هذا الوقت الي يتغير فيه لثاني مره
    });
  }, 10000); // هذا الوقت وينعاد النك نيم من جديد
})  



bot.login(process.env.BOT_TOKEN);