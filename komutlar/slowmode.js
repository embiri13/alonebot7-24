const Discord = require('discord.js');

exports.run = async(client, msg, args) => {
if (msg.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.RichEmbed()
                .setDescription(`Doğru kullanım: \`prefixiniz!yavaş-mod [0/10]\``)
                .setColor(client.ayarlar.renk)
                .setTimestamp()
            msg.channel.send({embed})
            return
          }
if (limit > 10) {
    return msg.channel.sendEmbed(new Discord.RichEmbed().setDescription("Süre limiti maksimum **10** saniye olabilir.").setColor(client.ayarlar.renk));
}
    msg.channel.sendEmbed(new Discord.RichEmbed().setDescription(`Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`).setColor(client.ayarlar.renk));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${msg.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.ayarlar.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod'],
  permLevel: 3,
};

exports.help = {
  name: 'yavaş-mod',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'yavaş-mod [1/10]',
};
    