
const { readdirSync } = require("fs");

module.exports = async(client) => {
      readdirSync('./commands/').forEach(dir => {
         
        const commands = readdirSync(`./commands/${dir}`).filter(file => file.endsWith('.js'));

        for (const file of commands) {
            const pull = require(`../commands/${dir}/${file}`);

            try {
                if (!pull.name) {
                    console.log(`Não consegui carregar o comando por prefixo ${file}, a propriedade name deve existir, e sendo strings.`)
                    continue;
                }

                pull.category = dir;
                client.commands.set(pull.name, pull);
            } catch (err) {
                console.log(`Erro ao carregar o comando ${file}, error: ${err}`)
                continue;
            }


            if (pull.aliases && Array.isArray(pull.aliases)) {
                pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
            }
        }
    })
    console.log("[ Comandos carregados ! ]")
}
