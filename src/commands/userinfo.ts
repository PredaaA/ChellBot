import { Message } from "revolt.js/dist/maps/Messages";

module.exports = {
    name: 'userinfo',
    aliases: ['ui'],
    description: 'Shows information about an user.',
    developer: false,

    run: async (msg: Message, args: string[]) => {
        msg.channel?.sendMessage(String(msg.author?.username));
    }
}
