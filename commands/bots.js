const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Gebruik de prefix van een bot met de help command om meer informatie te zien.")
  .setColor("#da3681")
  .addField("ERROR", "Verplaatst naar de command .inrole 🤖Bots");
  return message.channel.send(helpembed);
}
module.exports.help = {
  name: "bots"
}
