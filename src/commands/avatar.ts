import { Message } from "revolt.js/dist/maps/Messages";

module.exports = {
    name: 'avatar',
    aliases: ['av'],
    description: 'Shows avatar of a user.',
    developer: false,

    run: async (msg: Message, args: string[]) => {
        const user = msg.author;
        msg.channel?.sendMessage(`${user?.username} avatar:\nhttps://autumn.revolt.chat/avatars/${user?.avatar._id}`)
    }
}