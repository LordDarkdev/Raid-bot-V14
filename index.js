const Discord = require("discord.js");
const client = new Discord.Client({
  intents: [
    1,
    512,
    32768,
    2,
    128,
    Discord.IntentsBitField.Flags.DirectMessages,
    Discord.IntentsBitField.Flags.GuildInvites,
    Discord.IntentsBitField.Flags.GuildMembers,
    Discord.IntentsBitField.Flags.GuildPresences,
    Discord.IntentsBitField.Flags.Guilds,
    Discord.IntentsBitField.Flags.MessageContent,
    Discord.IntentsBitField.Flags.Guilds,
    Discord.IntentsBitField.Flags.GuildMessageReactions,
    Discord.IntentsBitField.Flags.GuildEmojisAndStickers,
  ],
  partials: [
    Discord.Partials.User,
    Discord.Partials.Message,
    Discord.Partials.Reaction,
    Discord.Partials.Channel,
    Discord.Partials.GuildMember,
  ],
});

module.exports = client;
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
require("./handler/prefixCommands.js")(client);
require("./handler/eventos.js")(client);

client.on('ready', async(client, message) => {
  console.log('[ Bot Online !]')
})
client.login(
  ""
);
process.on("uncaughtException", (error) => {
  console.error("Erro não capturado:", error);
});

process.on("unhandledRejection", (error) => {
  console.error("Promessa rejeitada:", error);
});
