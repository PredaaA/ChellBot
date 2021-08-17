import { Client } from 'revolt.js';
import { Message } from 'revolt.js/dist/maps/Messages';
import { commands } from './commands';

export class BotFramework {
    client: Client;
    prefix: string;
    commands = commands;

    constructor(client: Client, prefix: string) {
        this.client = client;
        this.prefix = prefix;

        this.client.on('connecting', async () => {
            console.info('Connecting...');
        })
        this.client.on('connected', async () => {
            console.info('Connected!');
        })
        this.client.on('ready', async () => {
            console.info(`Logged in as ${client.user!.username} (${client.user!._id})!`)
        });
        this.client.on('dropped', async () => {
            console.log('Dropped!');
        })

        this.client.on('message', async msg => {
            const command = this.isValidContext(msg);
            if (!command) return

            try {
                command.run(msg, this.client)
            } catch (exc) {
                await msg.channel?.sendMessage(`Oops! Something went wrong!\n\`\`\`js\n${exc}\`\`\``)
            }
        });
    }

    isValidContext(msg: Message) {
        if (!msg.content.startsWith(this.prefix)) return false;

        const words = msg.content.substr(this.prefix.length).split(' ');
        const commandName = words.shift();
        return this.commands.find(cmd => cmd.name === commandName || cmd.aliases.includes(commandName));
    }
}
