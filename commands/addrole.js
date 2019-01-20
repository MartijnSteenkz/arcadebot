const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("HAH, you thought! Get outa here");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Can't find user");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("That role doesn't exist");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Cannot find that role");

  if(rMember.roles.has(gRole.id)) return message.reply("Ze hebben al die role");
  await(rMember.addRole(gRole.id));

try{
  await rMember.send(`Ayy, you got the ${gRole.name} role, congrats brother!`)
}catch(e){
  message.channel.send(`${gRole.name} toegevoegd aan <@${rMember.id}>`)
  }
}

module.exports.help = {
  name: "addrole"
}
