const Discord = require("discord.js");

module.exports.run = async (bot, messages, args) => {

  if(!messages.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Euhh no brother.");
  if(!args[0]) return messages.channel.send("You maybe wanna eh, select a number to delete sir");
  let clearEmbed = new Discord.RichEmbed()
    .setColor("#7493e4")
    .setTitle(`I deleted ${args[0]} for you! Now where's my reward money?`);

  messages.channel.bulkDelete(args[0]).then(() => {
    messages.channel.send(clearEmbed).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}
