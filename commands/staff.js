const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let staffembed = new Discord.RichEmbed()
  .setDescription("Alle Staff members")
  .setColor("#af0e97")
  .setThumbnail(message.guild.iconURL)
  .addField("Owner", `<@246693689731186688>`)
  .addField("Admin", `<@218137001155624960> <@180324781172719616>`)
  .addField("Mods", `<@197344574471929856> <@232221728619626496>`);

  message.channel.send(staffembed);

}

module.exports.help = {
  name: "staff"
}
