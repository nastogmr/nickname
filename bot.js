const Discord = require("discord.js");
const bot = new Discord.Client();



bot.on("ready", () => {
  let guild = bot.guilds.get('547843935964364849'); // ايدي ال سيرفر
  setInterval(function() {
    guild.members.get('598570807903518731').setNickname('N').then(() => { // الايدي مالتك
      setTimeout(() => {
        guild.members.get('598570807903518731').setNickname('NaS').then(() => { // الايدي مالتك
          setTimeout(() => {
            guild.members.get('598570807903518731').setNickname('NaSto') // الايدي مالتك
          }, 1000); // هذا الوقت الي يتغير فيه لاول مره
        });
      }, 1000); // هذا الوقت الي يتغير فيه لثاني مره
    });
  }, 2500); // هذا الوقت وينعاد النك نيم من جديد
})  



bot.login(process.env.BOT_TOKEN);
