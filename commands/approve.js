const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
  if(!message.member.hasPermission("")) return message.reply("Sorry my dude, je kan dat niet zomaar doen");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Kan de user niet vinden");

try{
  await rMember.send(`Your report has been approved! Thank you for reporting your bug and cooperation. Your bug report has been sent to Hirez, and you've been given the Bug Hunter role.`)
}catch(e){
  message.channel.send(`Report approved from <@${rMember.id}>`)
  }
}


module.exports.help = {
  name: "approve"
}
