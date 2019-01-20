const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let staffembed = new Discord.RichEmbed()
  .setDescription("All Staff members")
  .setColor("#7493e4")
  .setThumbnail(message.guild.iconURL)
  .addField("Owner", `<@246693689731186688>`)
  .addField("Admin")
  .addField("Mods");

  message.channel.send(staffembed);

}

module.exports.help = {
  name: "staff"
}
