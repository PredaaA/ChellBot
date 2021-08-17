import { Message } from "revolt.js/dist/maps/Messages";

module.exports = {
    name: 'help',
    aliases: ['h'],
    description: 'Get all available commands.',
    developer: false,

    run: async (msg: Message, args: string[]) => {
        let content = `# ${msg.client.user?.username} help\n---\n`;
        // @ts-ignore
        for (const cmd of msg.client.framework.commands) {
            content += `- **${cmd.name}:** ${cmd.description || 'No description.'}\n`
        }
        msg.channel?.sendMessage(content);
    }
}
