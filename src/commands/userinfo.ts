import { Message } from "revolt.js/dist/maps/Messages";

module.exports = {
    name: 'userinfo',
    aliases: ['ui'],
    description: 'Shows information about an user.',
    developer: false,

    run: async (msg: Message, args: string[]) => {
        const user = msg.author;
        const content = (
            `**${user?.username} - ${user?._id}**\n${user?.status.text}\n\n`
        )
        msg.channel?.sendMessage(content);
    }
}
