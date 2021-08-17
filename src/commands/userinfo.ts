import { Client } from "revolt.js";
import { Message } from "revolt.js/dist/maps/Messages";

module.exports = {
    name: 'userinfo',
    aliases: ['ui'],
    description: 'Shows information about an user.',

    run: async (message: Message, client: Client) => {
        message.channel?.sendMessage(String(message.author?.username));
    }
}