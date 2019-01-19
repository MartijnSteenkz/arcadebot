const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let invEmbed = new Discord.RichEmbed()
  .setDescription("Server Invites")
  .setColor("#da3681")
  .setThumbnail(message.guild.iconURL)
  .addField("Instant Invite", `https://discord.gg/xj8VCV2`)
  .addField("DiscordServerList", `https://discord.sl/server/dutchgaming`)
  .addField("DiscordServers", `https://discord.chat/dutchgaming`)
  .addField("Discord.Me", `https://discord.me/dutchgaming`)
  .addField("Discord.IO", `https://discord.io/dutchgaming`)
  .addField("DiscordList.Me", `https://disco.gg/dutchgaming`)
  .setFooter(`requested by ${message.author.tag}`, message.author.displayAvatarURL);
  message.channel.send(invEmbed);

}

module.exports.help = {
  name: "invite"
}
