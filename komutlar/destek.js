const Discord = require('discord.js');

exports.run = async(client, message, args) => {
    message.guild.createChannel(`talep-${message.author.id}`, 'text').then(ch => {
        message.guild.roles.forEach((role) => {
            if (!role.hasPermission("MANAGE_MESSAGES")) {
                ch.overwritePermissions(role,{
                    VIEW_CHANNEL: false,
                }).catch()
            if (role.hasPermission("MANAGE_MESSAGES")) {
                ch.overwritePermissions(role,{
                    VIEW_CHANNEL: true,
                }).catch()
                ch.overwritePermissions(message.author.id,{
                    VIEW_CHANNEL: true,
                }).catch()
            }
        }})

        const embed = new Discord.RichEmbed()
        .setAuthor("» Alone Bot | Canlı Destek")
        .setDescription(`Merhaba! Müsait bir yetkilimiz sizinle ilgilenecektir.\nEğer ilgilenen olmazsa birisiyle özel mesaja geçebilirsiniz. Ayrıca [prefixiniz!kapat](destek sunucunuzun linki) yazabilirsiniz!**`)
        .setFooter('» Alone Bot | Canlı Destek', client.user.avatarURL)
        .setTimestamp()
        ch.send(embed).catch()
        ch.awaitMessages((msg)=> {
            if (msg.content === `prefixiniz!kapat`) {
                ch.send("`Talebiniz iptal ediliyor!`").then(()=>{
                    setTimeout(()=> {
                        ch.delete().catch()
                    },1000)
                });
            }
        },{time:86400000})
    })
};

module.exports.help = {
  name: 'talep',
};