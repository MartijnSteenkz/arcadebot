const Discord = require("discord.js")
const superagent = require("superagent");

module.exports.run = async (bot,messages,args) => {

  let sicon = messages.guild.iconURL;
  let rolesEmbed = new Discord.RichEmbed()
  .setTitle("Extra Roles")
  .setColor("#af0e97")
  .setThumbnail(sicon)
  .addField("Info", "Level Block")
  .setFooter("To add a role, use the command a!add {role}");

  messages.channel.send(rolesEmbed);
}
module.exports.help = {
  name: "roles"
}
