const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpCembed = new Discord.RichEmbed()
  .setTitle("Please choose a category, madam")
  .setColor("#7493e4")
  .addField("Info", "general information about stuff", true)
  .addField("Fun", "extra things to play around with", true)
  .addField("Others", "extra commands for utility", true)
  .addField("Staff", "moderations for staff members", true)
  .setFooter("Usage: b!help {category name}");

  if(!args[0]) return message.channel.send(helpCembed);
  let question = args.slice(1).join(" ");

  let infoembed = new Discord.RichEmbed()
  .setDescription("Information Command List")
  .setColor("#7493e4")
  .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/536620944480010241/unknown.png")
  .addField("b!help", "shows a list of all my commands")
  .addField("b!rules", "shows all the rules in the server")
  .addField("b!serverinfo", "information about the Hentai World")
  .addField("b!botinfo", "information about Hanayuri")
  .addField("b!userinfo", "information about a user")
  .addField("b!invite", "shows all available invites to the Hentai World")
  .addField("b!staff", "shows all current staff members")
  .addField("b!colors", "shows all available colors that you can add")
  .addField("b!ping", "shows the response time of Hanayuri");

  let funembed = new Discord.RichEmbed()
  .setDescription("Fun Command List")
  .setColor("#7493e4")
  .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/536621340833087516/unknown.png")
  .addField("b!8ball", "ask Buck a question. Hey that's me!")
  .addField("b!cat", "shows a random cat picture. Better not be Maeve")
  .addField("b!doggo", "shows a random doggo picture");

  let othersembed = new Discord.RichEmbed()
  .setDescription("Others Command List")
  .setColor("#7493e4")
  .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/536621876366278657/LeeshaHannigan_Paladins.png")
  .addField("b!add", "add a color to yourself")
  .addField("b!remove", "remove a color from yourself")
  .addField("b!report", "report someone in the server")
  .addField("b!avatar", "get the avatar of a member in a URL");

  let staffhelpembed = new Discord.RichEmbed()
  .setDescription("Staff Command List")
  .setColor("#7493e4")
  .setThumbnail("https://cdn.discordapp.com/attachments/486583639253975042/536621996860243969/unknown.png")
  .addField("b!say", "let Buck say something")
  .addField("b!clear", "delete an ammount of messages in the chat")
  .addField("b!prefix", "change the prefix of Buck Bot")
  .addField("b!addrole", "give someone a role")
  .addField("b!removerole", "remove a role from someone")
  .addField("b!warn", "warns someone. The more warnings, the bigger the punishment")
  .addField("b!tempmute", "mute a person from the chat for a set ammount of time")
  .addField("b!kick", "kick someone from the server")
  .addField("b!ban", "ban someone from the server");

  let nopermembed = new Discord.RichEmbed()
  .setTitle("You have no business here, peasant!")
  .setColor("#7493e4");

  if(args[0] === 'info') {
    message.channel.send(infoembed);
  }
  if(args[0] === 'fun') {
    message.channel.send(funembed);
  }
  if(args[0] === 'others') {
    message.channel.send(othersembed);
  }
  if(args[0] === 'staff') {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(nopermembed);
    return message.channel.send(staffhelpembed);
  }
}

module.exports.help = {
  name: "help"
}
