const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Command List")
  .setColor("#fa2a7d")
  .addField("a!help", "laat een lijst met alle commands zien")
  .addField("a!report @someone reason", "report iemand in de server")
  .addField("a!serverinfo", "informatie over de server")
  .addField("a!botinfo", "informatie over de bott")
  .addField("a!userinfo", "informatie over een user")
  .addField("a!ping", "laat de reactie tijd zien van de bot")
  .addField("[staff only] a!addrole @someone role", "voeg een role aan iemand toe")
  .addField("[staff only] a!removerole @someone role", "verwijder een role van iemand")
  .addField("[staff only] a!tempmute @someone time", "mute iemand voor een bepaalde tijd")
  .addField("[staff only] a!kick @someone reason", "kick iemand van de server")
  .addField("[staff only] a!ban @someone reason", "ban iemand van de server");

  message.channel.send(helpembed);
}
module.exports.help = {
  name: "help"
}
