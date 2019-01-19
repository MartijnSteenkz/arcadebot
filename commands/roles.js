const Discord = require("discord.js")
const superagent = require("superagent");

module.exports.run = async (bot,messages,args) => {

  let sicon = messages.guild.iconURL;
  let rolesEmbed = new Discord.RichEmbed()
  .setTitle("Roles")
  .setColor("#da3681")
  .setThumbnail(sicon)
  .addField("Gaming Roles", "Fortnite\nMinecraft\nOverwatch\nPaladins\nLeague Of Legends\nGTA V\nWorld Of Warcraft\nRocket League\nPokémon")
  .addField("Extra", "Level Block")
  .setFooter("To add a role, use the command a!add {role}");

  messages.channel.send(rolesEmbed);
}
module.exports.help = {
  name: "roles"
}
