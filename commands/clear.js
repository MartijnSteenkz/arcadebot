const Discord = require("discord.js");

module.exports.run = async (bot, messages, args) => {

  if(!messages.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Fuck off");
  if(!args[0]) return messages.channel.send("Fuck off will ya?");
  let clearEmbed = new Discord.RichEmbed()
    .setColor("#da3681")
    .setTitle(`${args[0]} berichten verwijderd!`);

  messages.channel.bulkDelete(args[0]).then(() => {
    messages.channel.send(clearEmbed).then(msg => msg.delete(5000));
  });
}

module.exports.help = {
  name: "clear"
}
