const Discord = require("discord.js");

module.exports.run = async (bot,message,args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("Sorry my dude, je kan dat niet zomaar doen");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Kan de user niet vinden");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Dat is geen role");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Kon die role niet vinden");

  if(rMember.roles.has(gRole.id)) return message.reply("Ze hebben al die role");
  await(rMember.addRole(gRole.id));

try{
  await rMember.send(`Ayy, je kreeg de rol ${gRole.name}`)
}catch(e){
  message.channel.send(`${gRole.name} toegevoegd aan <@${rMember.id}>`)
  }
}

module.exports.help = {
  name: "addrole"
}
