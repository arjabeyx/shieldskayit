const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
if(!["827994653416488981", "827994653416488981"].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) return message.channel.send(`Bu Komutu Kullanabilmek İçin Yetkin Bulunmuyor.`)
  
const kadin = message.guild.roles.cache.find(r => r.id === "792834180316135447")
const kayıtsız = message.guild.roles.cache.find(r => r.id === "750085717199290439")
const reglog = message.guild.channels.cache.find(c => c.id === "792832706491711490")
const genelchat = message.guild.channels.cache.find(g => g.id === "793391350707650570")

const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return message.channel.send(`Bir Kullanıcı Belirt.`)
if(!member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(`Bu Kullanıcıyı kayıt edemessin.`)
const x = message.guild.member(member)

let isim = args[1]
if(!isim) return message.channel.send(`Bir İsim Belirt`)

let bilgi = db.get(`yetkili.${member.id}`);  
db.add(`yetkili.${message.author.id}.kadin`,1 )
db.add(`yetkili.${message.author.id}.toplam`, 1)  
let toplami = db.fetch(`yetkili.${message.author.id}.toplam`)  

message.react('✅')
x.setNickname(`${isim}`)
x.roles.add(kadin)
x.roles.remove(kayıtsız)
//
x.setNickname(`${isim}`)
x.roles.add(kadin)
x.roles.remove(kayıtsız)


genelchat.send(`Aramıza Hoşgeldin <@${member.id}>, İyi eğlenceler.\nSunucumuzun (≶) Tagını alarak ailemize katılabilirsin.`)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["kadın", "k", "woman", "girl", "kız"],
    permLevel: 0
};

exports.help = {
    name: "kadın"
}

