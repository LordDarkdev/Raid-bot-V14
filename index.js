const Discord = require("discord.js");
const client = new Discord.Client({ intents: 3276799 });
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
