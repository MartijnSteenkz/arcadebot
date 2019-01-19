const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let helpembed = new Discord.RichEmbed()
  .setDescription("Gebruik de prefix van een bot met de help command om meer informatie te zien.")
  .setColor("#da3681")
  .addField("Normal Bots", "`42 [+]` `ArcadeBot DGC [a!]` `Ayana [=]` `Ayana Beta [+]` `Dad bot [@dadbot]` `Dank Memer [pls ]` `Dyno [pls ]` `Hanayuri [h!]` `Intexisty's Bot [uh ]` `InviteManager [!]` `Koya [^^]` `Mantaro [->]` `Matbot [!]` `Mee6 [!]` `Melijn [>]` `Nadeko [.]` `NekoBot [n!]` `NotSoBot [.]` `Pokécord [p!]` `Pollux [+]` `qtChan [-]` `Sheri Blossom [fur]` `Shinobu [.]` `Sx4 [s?]` `Tatsumaki [t!]` `UB3R-B0T [.]` `Welcomer [+]` `Welcomer Donator [+]` `Welcomer-Beta [+]` `Xerxez [.]` `YAGPDB.xyz [-]` `Yggdrasil [--]`")
  .addField("Music Bots", "`Atalanta [a!]` `Ayana [=]` `Ayana Beta [+]` `Dank Memer [pls ]` `Dyno [pls ]` `FredBoat♪♪ [;;]` `Mantaro [->]` `Melijn [>]` `Rythm [!]` `Sheri Blossom [fur]` `Sx4 [s?]` `Welcomer [+]`")
  .addField("Waifu Bots", "`Mudae [$]` `Mudamaid4 [$]`")
  .addField("Bump Bots", "`Bump ! [b!]` `Bump Bot [?]` `Bump Central [~]` `DISBOARD [!disboard]` `Discord Center [dc!]` `DLM [dlm!]` `DSC [.]` `ServerHound [=]` `Wolfo Bump [w!]`")
  return message.channel.send(helpembed);
}
module.exports.help = {
  name: "bots"
}
