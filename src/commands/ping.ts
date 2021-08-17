import { Client } from "revolt.js";
import { Message } from "revolt.js/dist/maps/Messages";

module.exports = {
    name: 'ping',
    aliases: ['pong'],
    description: 'Pong.',

    run: async (message: Message, client: Client) => {
        message.channel?.sendMessage('Pong!');
    }
}
