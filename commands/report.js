//REPORT COMMAND
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

      let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
      if(!rUser) return message.channel.send("Couldn't find user.");
      let reason = args.join(" ").slice(22);
      let reportEmbed = new Discord.RichEmbed()
      .setDescription("Reports")
      .setColor("#017bfc")
      .addField("Reported User", `${rUser} ID: ${rUser.id}`)
      .addField("Reported By", `${message.author} ID: ${message.author.id}`)
      .addField("Channel", message.channel)
      .addField("Time", message.createdAt)
      .addField("Reason", reason);
      let reportEmbed2 = new Discord.RichEmbed()
      .setColor("#fa2a7d")
      .addField("Je report is verzonden", "We zullen zo snel mogelijk terug reageren");

      let reportschannel = message.guild.channels.find(`name`, "ban_mute_reports");
      if(!reportschannel) return message.channel.send("Couldn't find reports channel.");
      message.channel.send(reportEmbed2);
      message.delete().catch(O_o=>{});
      reportschannel.send(reportEmbed)

}

module.exports.help = {
  name: "report"
}
