import { Message } from "revolt.js/dist/maps/Messages";

module.exports = {
    name: 'serverinfo',
    aliases: ['si'],
    description: 'Shows information about the server.',
    developer: false,

    run: async (msg: Message, args: string[]) => {
        const server = msg.channel?.server;
        const content = (
            `**${server?.name}**\n${server?._id}\n`
            + `${server?.description}\n\n`
            + `**Owner:** ${server?.owner}\n`
            + `**Roles:** ${Object.keys(server?.roles || []).length}`
        )
        msg.channel?.sendMessage(content);
    }
}