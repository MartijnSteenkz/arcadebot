const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {
  if(!message.member.hasPermission("")) return message.reply("Sorry my dude, je kan dat niet zomaar doen");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Kan de user niet vinden");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Dat is geen role");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Kan de role niet vinden");

  if(!rMember.roles.has(gRole.id)) return message.reply("Ze hebben die role niet");
  await(rMember.removeRole(gRole.id));

try{
  await rMember.send(`Das jammer, je hebt de ${gRole.name} role verloren`)
}catch(e){
  message.channel.send(`${gRole.name} verwijderd van <@${rMember.id}>`)
  }
}


module.exports.help = {
  name: "removerole"
}
