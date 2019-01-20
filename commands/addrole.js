const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("HAH, you thought! Get outa here");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Can't find user");
  let role = args.join(" ").slice(22);
  let gRole = message.guild.roles.find(`name`, role);

  await(rMember.addRole(gRole.id));

try{
  await rMember.send(`Your report has been declined. Thank you for reporting. Please check your report to see the reason why it was declined.`)
}catch(e){
  message.channel.send(`Report declined from <@${rMember.id}>`)
  }
}

module.exports.help = {
  name: "decline"
}
