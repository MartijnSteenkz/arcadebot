const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Command List")
  .setColor("#fa2a7d")
  .addField("a!help", "shows a list of all the commands")
  .addField("a!report @someone reason", "report someone in the server")
  .addField("a!serverinfo", "info about the server")
  .addField("a!botinfo", "info about the bot")
  .addField("a!userinfo", "info about the user")
  .addField("a!ping", "shows the response time of the bot")
  .addField("a!kick @someone reason [staff only]", "kick a person from the server")
  .addField("a!ban @someone reason [staff only]", "ban a person from the server");

  message.channel.send(helpembed);
}
module.exports.help = {
  name: "help"
}
