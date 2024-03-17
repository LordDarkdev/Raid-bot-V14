
const { readdirSync } = require("fs");

module.exports = async(client) => {
      readdirSync('./commands/').forEach(dir => {
        
console.log(`[Os comandos estão sendo carregados...]`)
         
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
              console.log(`\x1b[32m%s\x1b[0m`,`${pull.name} carregado com sucesso`);
            } catch (err) {
                console.log(`Erro ao carregar o comando ${file}, error: ${err}`)
                continue;
            }


            if (pull.aliases && Array.isArray(pull.aliases)) {
                pull.aliases.forEach(alias => client.aliases.set(alias, pull.name));
            }
        }
    })
};