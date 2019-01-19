const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

 let aTaged = message.mentions.users.first();
 let noTagAvatarEmbed = new Discord.RichEmbed()
 .setDescription(`Avatar van ${message.author.username}`)
 .setColor("#da3681")
 .setImage(`${message.author.displayAvatarURL}`);

 if(!args[0]) return message.channel.send(noTagAvatarEmbed);

 let avatarEmbed = new Discord.RichEmbed()
 .setDescription(`Avatar van ${aTaged.username}`)
 .setColor("#da3681")
 .setImage(`${aTaged.displayAvatarURL}`);

 message.channel.send(avatarEmbed);
}

module.exports.help = {
  name: "avatar"
}
