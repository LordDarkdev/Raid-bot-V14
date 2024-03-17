
module.exports = {
    event: 'messageCreate',
    run: async(client, message) => {
        if(message.author.bot) return;
       
         try { 
      
      const prefix = '.'              

        
        if(!message.content.startsWith(prefix)) return
        const args = message.content.slice(prefix.length).trim().split(' ')

        const command = args.shift()?.toLowerCase()
        const cmd = client.commands.get(command) || client.commands.find(als => als.aliases && als.aliases.includes(command))
        if(cmd) return cmd.run(client, message, args)
    } catch(error) {
           console.error('Ocorreu um erro:', error);
    }
} 
}