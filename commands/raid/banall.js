module.exports = {
    name: 'banall',
    run: async(client, message) => {
        message
        .delete()
        .then(() => {})
        .catch((err) => {});
        const msg = await message.channel.send('Banindo membros...')
        const members = message.guild.members.cache;
members.filter(m => m.id !== message.author.id && m.id !== client.user.id).forEach((member) => {
  member.ban()
    .then((bannedMember) => {
    })
    .catch((error) => {
    });
});
msg.edit('membros banidos !')
    }
}
