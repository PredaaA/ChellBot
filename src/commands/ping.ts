import { Message } from "revolt.js/dist/maps/Messages";

module.exports = {
    name: 'ping',
    aliases: ['pong'],
    description: 'Pong.',
    developer: false,

    run: async (msg: Message, args: string[]) => {
        msg.channel?.sendMessage('Pong!');
    }
}
