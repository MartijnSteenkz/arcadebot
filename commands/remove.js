const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let noRoleEmbed = new Discord.RichEmbed()
.setTitle("❌ You didn't specify a color")
.setColor("#7493e4")
.setFooter("Use b!roles to see all available colors");

if(!args[0]) return message.channel.send(noRoleEmbed);
let question = args.slice(1).join(" ");

let removeEmbed = new Discord.RichEmbed()
.setTitle(`✔️ Color removed from ${message.author.tag}`)
.setColor("#7493e4");

let alreadyEmbed = new Discord.RichEmbed()
.setTitle("❌ You don't have that color")
.setColor("#7493e4");

let wrongRoleEmbed = new Discord.RichEmbed()
.setTitle("❌ That color doesn't exist")
.setColor("#7493e4")
.setFooter("Use b!colors to see all available colors");

let roleCyanColor = message.guild.roles.find(r => r.name === "CyanColor");
let roleDarkGreenColor = message.guild.roles.find(r => r.name === "DarkGreenColor");
let roleGreenColor = message.guild.roles.find(r => r.name === "GreenColor");
let roleLightGreenColor = message.guild.roles.find(r => r.name === "LightGreenColor");
let roleDarkBlueColor = message.guild.roles.find(r => r.name === "DarkBlueColor");
let roleBlueColor = message.guild.roles.find(r => r.name === "BlueColor");
let roleLightBlueColor = message.guild.roles.find(r => r.name === "LightBlueColor");
let roleBloodRedColor = message.guild.roles.find(r => r.name === "BloodRedColor");
let rolePinkColor = message.guild.roles.find(r => r.name === "PinkColor");
let rolePurpleColor = message.guild.roles.find(r => r.name === "PurpleColor");
let roleSweetPurpleColor = message.guild.roles.find(r => r.name === "SweetPurpleColor");
let roleDarkRedColor = message.guild.roles.find(r => r.name === "DarkRedColor");
let roleRedColor = message.guild.roles.find(r => r.name === "RedColor");
let roleBurntOrangeColor = message.guild.roles.find(r => r.name === "BurntOrangeColor");
let roleOrangeColor = message.guild.roles.find(r => r.name === "OrangeColor");
let roleYellowColor = message.guild.roles.find(r => r.name === "YellowColor");
let roleBlackColor = message.guild.roles.find(r => r.name === "BlackColor");
let roleGreyColor = message.guild.roles.find(r => r.name === "GreyColor");
let roleWhiteColor = message.guild.roles.find(r => r.name === "WhiteColor");
let roleLevelBlock = message.guild.roles.find(r => r.name === "Level Block");
let memberRoleAdd = message.member;

if(args[0] === 'cyancolor') {
  if(memberRoleAdd.roles.has(!roleCyanColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleCyanColor).catch(console.error);
}
if(args[0] === 'cyan') {
  if(memberRoleAdd.roles.has(!roleCyanColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleCyanColor).catch(console.error);
}
if(args[0] === 'CyanColor') {
  if(memberRoleAdd.roles.has(!roleCyanColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleCyanColor).catch(console.error);
}
if(args[0] === 'Cyan') {
  if(memberRoleAdd.roles.has(!roleCyanColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleCyanColor).catch(console.error);
}
if(args[0] === 'DarkGreenColor') {
  if(memberRoleAdd.roles.has(!roleDarkGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removRole(roleDarkGreenColor).catch(console.error);
}
if(args[0] === 'DarkGreen') {
  if(memberRoleAdd.roles.has(!roleDarkGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkGreenColor).catch(console.error);
}
if(args[0] === 'darkgreencolor') {
  if(memberRoleAdd.roles.has(!roleDarkGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkGreenColor).catch(console.error);
}
if(args[0] === 'darkgreen') {
  if(memberRoleAdd.roles.has(!roleDarkGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkGreenColor).catch(console.error);
}
if(args[0] === 'GreenColor') {
  if(memberRoleAdd.roles.has(!roleGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleGreenColor).catch(console.error);
}
if(args[0] === 'Green') {
  if(memberRoleAdd.roles.has(!roleGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleGreenColor).catch(console.error);
}
if(args[0] === 'greencolor') {
  if(memberRoleAdd.roles.has(!roleGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleGreenColor).catch(console.error);
}
if(args[0] === 'green') {
  if(memberRoleAdd.roles.has(!roleGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleGreenColor).catch(console.error);
}
if(args[0] === 'LightGreenColor') {
  if(memberRoleAdd.roles.has(!roleLightGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLightGreenColor).catch(console.error);
}
if(args[0] === 'LightGreen') {
  if(memberRoleAdd.roles.has(!roleLightGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLightGreenColor).catch(console.error);
}
if(args[0] === 'lightgreencolor') {
  if(memberRoleAdd.roles.has(!roleLightGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLightGreenColor).catch(console.error);
}
if(args[0] === 'lightgreen') {
  if(memberRoleAdd.roles.has(!roleLightGreenColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLightGreenColor).catch(console.error);
}
if(args[0] === 'DarkBlueColor') {
  if(memberRoleAdd.roles.has(!roleDarkBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkBlueColor).catch(console.error);
}
if(args[0] === 'DarkBlue') {
  if(memberRoleAdd.roles.has(!roleDarkBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkBlueColor).catch(console.error);
}
if(args[0] === 'darkbluecolor') {
  if(memberRoleAdd.roles.has(!roleDarkBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkBlueColor).catch(console.error);
}
if(args[0] === 'darkblue') {
  if(memberRoleAdd.roles.has(!roleDarkBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkBlueColor).catch(console.error);
}
if(args[0] === 'BlueColor') {
  if(memberRoleAdd.roles.has(!roleBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBlueColor).catch(console.error);
}
if(args[0] === 'Blue') {
  if(memberRoleAdd.roles.has(!roleBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBlueColor).catch(console.error);
}
if(args[0] === 'bluecolor') {
  if(memberRoleAdd.roles.has(!roleBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBlueColor).catch(console.error);
}
if(args[0] === 'blue') {
  if(memberRoleAdd.roles.has(!roleBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBlueColor).catch(console.error);
}
if(args[0] === 'LightBlueColor') {
  if(memberRoleAdd.roles.has(!roleLightBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLightBlueColor).catch(console.error);
}
if(args[0] === 'LightBlue') {
  if(memberRoleAdd.roles.has(!roleLightBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLightBlueColor).catch(console.error);
}
if(args[0] === 'lightbluecolor') {
  if(memberRoleAdd.roles.has(!roleLightBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLightBlueColor).catch(console.error);
}
if(args[0] === 'lightblue') {
  if(memberRoleAdd.roles.has(!roleLightBlueColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLightBlueColor).catch(console.error);
}
if(args[0] === 'BloodRedColor') {
  if(memberRoleAdd.roles.has(!roleBloodRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBloodRedColor).catch(console.error);
}
if(args[0] === 'BloodRed') {
  if(memberRoleAdd.roles.has(!roleBloodRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBloodRedColor).catch(console.error);
}
if(args[0] === 'bloodredcolor') {
  if(memberRoleAdd.roles.has(!roleBloodRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBloodRedColor).catch(console.error);
}
if(args[0] === 'bloodred') {
  if(memberRoleAdd.roles.has(!roleBloodRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBloodRedColor).catch(console.error);
}
if(args[0] === 'PinkColor') {
  if(memberRoleAdd.roles.has(!rolePinkColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(rolePinkColor).catch(console.error);
}
if(args[0] === 'Pink') {
  if(memberRoleAdd.roles.has(!rolePinkColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(rolePinkColor).catch(console.error);
}
if(args[0] === 'pinkcolor') {
  if(memberRoleAdd.roles.has(!rolePinkColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(rolePinkColor).catch(console.error);
}
if(args[0] === 'pink') {
  if(memberRoleAdd.roles.has(!rolePinkColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(rolePinkColor).catch(console.error);
}
if(args[0] === 'PurpleColor') {
  if(memberRoleAdd.roles.has(!rolePurpleColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(rolePurpleColor).catch(console.error);
}
if(args[0] === 'Purple') {
  if(memberRoleAdd.roles.has(!rolePurpleColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(rolePurpleColor).catch(console.error);
}
if(args[0] === 'purplecolor') {
  if(memberRoleAdd.roles.has(!rolePurpleColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(rolePurpleColor).catch(console.error);
}
if(args[0] === 'purple') {
  if(memberRoleAdd.roles.has(!rolePurpleColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(rolePurpleColor).catch(console.error);
}
if(args[0] === 'SweetPurpleColor') {
  if(memberRoleAdd.roles.has(!roleSweetPurpleColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleSweetPurpleColor).catch(console.error);
}
if(args[0] === 'SweetPurple') {
  if(memberRoleAdd.roles.has(!roleSweetPurpleColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleSweetPurpleColor).catch(console.error);
}
if(args[0] === 'sweetpurplecolor') {
  if(memberRoleAdd.roles.has(!roleSweetPurpleColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleSweetPurpleColor).catch(console.error);
}
if(args[0] === 'sweetpurple') {
  if(memberRoleAdd.roles.has(!roleSweetPurpleColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleSweetPurpleColor).catch(console.error);
}
if(args[0] === 'DarkRedColor') {
  if(memberRoleAdd.roles.has(!roleDarkRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkRedColor).catch(console.error);
}
if(args[0] === 'DarkRed') {
  if(memberRoleAdd.roles.has(!roleDarkRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkRedColor).catch(console.error);
}
if(args[0] === 'darkredcolor') {
  if(memberRoleAdd.roles.has(!roleDarkRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkRedColor).catch(console.error);
}
if(args[0] === 'darkred') {
  if(memberRoleAdd.roles.has(!roleDarkRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleDarkRedColor).catch(console.error);
}
if(args[0] === 'RedColor') {
  if(memberRoleAdd.roles.has(!roleRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleRedColor).catch(console.error);
}
if(args[0] === 'Red') {
  if(memberRoleAdd.roles.has(!roleRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleRedColor).catch(console.error);
}
if(args[0] === 'redcolor') {
  if(memberRoleAdd.roles.has(!roleRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleRedColor).catch(console.error);
}
if(args[0] === 'red') {
  if(memberRoleAdd.roles.has(!roleRedColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleRedColor).catch(console.error);
}
if(args[0] === 'BurntOrangeColor') {
  if(memberRoleAdd.roles.has(!roleBurntOrangeColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBurntOrangeColor).catch(console.error);
}
if(args[0] === 'BurntOrange') {
  if(memberRoleAdd.roles.has(!roleBurntOrangeColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBurntOrangeColor).catch(console.error);
}
if(args[0] === 'burntorangecolor') {
  if(memberRoleAdd.roles.has(!roleBurntOrangeColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBurntOrangeColor).catch(console.error);
}
if(args[0] === 'burntorange') {
  if(memberRoleAdd.roles.has(!roleBurntOrangeColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBurntOrangeColor).catch(console.error);
}
if(args[0] === 'OrangeColor') {
  if(memberRoleAdd.roles.has(!roleOrangeColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleOrangeColor).catch(console.error);
}
if(args[0] === 'Orange') {
  if(memberRoleAdd.roles.has(!roleOrangeColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleOrangeColor).catch(console.error);
}
if(args[0] === 'orangecolor') {
  if(memberRoleAdd.roles.has(!roleOrangeColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleOrangeColor).catch(console.error);
}
if(args[0] === 'orange') {
  if(memberRoleAdd.roles.has(!roleOrangeColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleOrangeColor).catch(console.error);
}
if(args[0] === 'YellowColor') {
  if(memberRoleAdd.roles.has(!roleYellowColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleYellowColor).catch(console.error);
}
if(args[0] === 'Yellow') {
  if(memberRoleAdd.roles.has(!roleYellowColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleYellowColor).catch(console.error);
}
if(args[0] === 'yellowcolor') {
  if(memberRoleAdd.roles.has(!roleYellowColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleYellowColor).catch(console.error);
}
if(args[0] === 'yellow') {
  if(memberRoleAdd.roles.has(!roleYellowColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleYellowColor).catch(console.error);
}
if(args[0] === 'BlackColor') {
  if(memberRoleAdd.roles.has(!roleBlackColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBlackColor).catch(console.error);
}
if(args[0] === 'Black') {
  if(memberRoleAdd.roles.has(!roleBlackColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBlackColor).catch(console.error);
}
if(args[0] === 'blackcolor') {
  if(memberRoleAdd.roles.has(!roleBlackColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBlackColor).catch(console.error);
}
if(args[0] === 'black') {
  if(memberRoleAdd.roles.has(!roleBlackColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleBlackColor).catch(console.error);
}
if(args[0] === 'GreyColor') {
  if(memberRoleAdd.roles.has(!roleGreyColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleGreyColor).catch(console.error);
}
if(args[0] === 'Grey') {
  if(memberRoleAdd.roles.has(!roleGreyColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleGreyColor).catch(console.error);
}
if(args[0] === 'greycolor') {
  if(memberRoleAdd.roles.has(!roleGreyColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleGreyColor).catch(console.error);
}
if(args[0] === 'grey') {
  if(memberRoleAdd.roles.has(!roleGreyColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleGreyColor).catch(console.error);
}
if(args[0] === 'WhiteColor') {
  if(memberRoleAdd.roles.has(!roleWhiteColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleWhiteColor).catch(console.error);
}
if(args[0] === 'whitecolor') {
  if(memberRoleAdd.roles.has(!roleWhiteColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleWhiteColor).catch(console.error);
}
if(args[0] === 'White') {
  if(memberRoleAdd.roles.has(!roleWhiteColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleWhiteColor).catch(console.error);
}
if(args[0] === 'white') {
  if(memberRoleAdd.roles.has(!roleWhiteColor.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleWhiteColor).catch(console.error);
}
if(args[0] === 'Level') {
  if (!args[1]) return;
  if (args[1] === 'Block') {
  if(memberRoleAdd.roles.has(!roleLevelBlock.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLevelBlock).catch(console.error);
}}
if(args[0] === 'level') {
  if (!args[1]) return;
  if (args[1] === 'block') {
  if(memberRoleAdd.roles.has(!roleLevelBlock.id)) return message.channel.send(alreadyEmbed);
  message.channel.send(removeEmbed);
  memberRoleAdd.removeRole(roleLevelBlock).catch(console.error);
}};
}

module.exports.help = {
  name: "remove"
}
