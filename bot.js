const Discord = require("discord.js");
const bot = new Discord.bot();



bot.on("ready", () => {
  let guild = bot.guilds.get('547843935964364849'); // ايدي ال سيرفر
  setInterval(function() {
    guild.members.get('595653353783033857').setNickname('N').then(() => { // الايدي مالتك
      setTimeout(() => {
        guild.members.get('595653353783033857').setNickname('NaS').then(() => { // الايدي مالتك
          setTimeout(() => {
            guild.members.get('595653353783033857').setNickname('NaSto') // الايدي مالتك
          }, 10000); // هذا الوقت الي يتغير فيه لاول مره
        });
      }, 10000); // هذا الوقت الي يتغير فيه لثاني مره
    });
  }, 10000); // هذا الوقت وينعاد النك نيم من جديد
})  



bot.login(process.env.BOT_TOKEN);
