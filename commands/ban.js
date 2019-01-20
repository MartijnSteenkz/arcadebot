const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if (!bUser) return message.channel.send("Can't find user");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.channel.send("HAH you thought! Get outa here kid");
  if(bUser.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Staff are un-banable, you backstabber!");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("User Banned")
  .setColor("#7493e4")
  .addField(`Terminus smashed ${bUser} with his Ban Hammer!`, `Well, he tried to do it. But he bugged out.`)
  .addField("Reason", bReason)
  .setImage("https://cdn.discordapp.com/attachments/486583639253975042/536615035334819867/ScratchyImpoliteChicken-size_restricted.gif");
  let banChannel = message.guild.channels.find(`name`, "main_chat");
  if(!banChannel) return message.channel.send("Can't find incidents channel.");
  let banEmbed2 = new Discord.RichEmbed()

  message.guild.member(bUser).ban(bReason);
  banChannel.send(banEmbed)
}

module.exports.help = {
  name: "ban"
}
