const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let uicon = member.user.displayAvatarURL
  let userembed = new Discord.RichEmbed()
  .setDescription("User Information")
  .setColor("#fa2a7d")
  .setThumbnail(uicon)
  .addField("Full Username", `${message.author.tag}`)
  .addField("Nickname", message.member.displayName)
  .addField("User ID", message.author.id)
  .addField("Created At", message.author.createdAt);

  message.channel.send(userembed);

}

module.exports.help = {
  name: "userinfo"
}
