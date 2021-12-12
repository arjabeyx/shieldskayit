

const yedlixdiscord = require('discord.js');

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bilgi", "sunucubilgi", "sunucu-bilgi", "sb"],
  permLevel: 0,
  kategori: "bot",
};

exports.help = {
  name: 'say',
  description: 'yedlix',
  usage: 'yedlix',

};
exports.run = async (client, message, args) => {
  const seskanallari = message.guild.channels.cache.filter(c => c.type === 'voice');
  let tag = '≶'
  let taglı = message.guild.members.cache.filter(a => a.user.username.includes(tag)).size
  let Sesli = message.guild.members.cache.filter(s => s.voice.channel).size;
  let etiket =  message.guild.members.cache.filter(s => !s.bot).filter(member => member.user.discriminator == "0041").size;
  let yedlix3 = 0
  let  yedlix2 = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size
  for (const [id, voiceChannel] of seskanallari) yedlix3 += voiceChannel.members.size;
  const yedlix = new yedlixdiscord.MessageEmbed()
  .setColor("BLACK")
  .setTitle("**Sunucu İstatistik**")
  .setDescription(`
 • Toplam üye sayımız **${message.guild.memberCount}**
 • Toplam **${yedlix2}** aktif üye bulunmakta.
 • Toplam Taglı **${taglı}** üye bulunmakta.
 • Toplam Seste **${Sesli}** üye bulunmakta.
`)
  message.channel.send(yedlix)
  }