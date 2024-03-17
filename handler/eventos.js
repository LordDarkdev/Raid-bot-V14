const { readdirSync } = require("fs");

module.exports = async (client) => {
  for (const dir of readdirSync("./Eventos/")) {
    for (const file of readdirSync("./Eventos/" + dir).filter((f) =>
      f.endsWith(".js")
    )) {
      const module = require("../Eventos/" + dir + "/" + file);

      if (!module) continue;

      if (!module.event || !module.run) {
        console.log(
          "[ Eventos ] - Não foi possivel carregar o Evento " +
            file +
            " faltou o nome do evento ou a propriedade run."
        );

        continue;
      }

      console.log(
        `[ Eventos ] - Todos os evento foram carregados.  [ ${file} ] `
      );

      if (module.once) {
        client.once(module.event, (...args) => module.run(client, ...args));
      } else {
        client.on(module.event, (...args) => module.run(client, ...args));
      }
    }
  }
};
