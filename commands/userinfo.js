const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let uicon = member.user.displayAvatarURL
  let userembed = new Discord.RichEmbed()
  .setDescription("User Information")
  .setColor("#7493e4")
  .setThumbnail(uicon)
  .addField("Full Username", `${message.author.tag}`, true)
  .addField("Nickname", message.member.displayName, true)
  .addField("User ID", message.author.id)
  .addField("Created At", message.author.createdAt)
  .addField("Joined At", message.member.joinedAt);

  message.channel.send(userembed);

}

module.exports.help = {
  name: "userinfo"
}
