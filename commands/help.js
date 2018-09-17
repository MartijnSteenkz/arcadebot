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
  .addField("[staff only] a!addrole @someone role", "voeg een role aan iemand toe")
  .addField("[staff only] a!removerole @someone role", "verwijder een role van iemand")
  .addField("[staff only] a!tempmute @someone time", "mute iemand voor een bepaalde tijd")
  .addField("[staff only] a!kick @someone reason", "kick a person from the server")
  .addField("[staff only] a!ban @someone reason", "ban a person from the server");

  message.channel.send(helpembed);
}
module.exports.help = {
  name: "help"
}
