const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!kUser) return message.channel.send("Can't find user");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Nope");
  if(kUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Staff are un-kickable, retard");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("Kick")
  .setColor("#7493e4")
  .addField("Kicked User", `${kUser} ID ${kUser.id}`)
  .addField("Kicked By", `<@${message.author.id}> ID ${message.author.id}`)
  .addField("Kicked In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", kReason);
  let kickChannel = message.guild.channels.find(`name`, "logs");
  if(!kickChannel) return message.channel.send("Can't find incidents channel.");
  let kickEmbed2 = new Discord.RichEmbed()
  .setColor("#7493e4")
  .addField("Kicked", `${kUser}`);

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed)
  message.channel.send(kickEmbed2)
}
module.exports.help = {
  name: "kick"
}
