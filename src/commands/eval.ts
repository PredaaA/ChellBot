import { Message } from "revolt.js/dist/maps/Messages";
import { inspect } from "util";
import { token } from '../config.json';

module.exports = {
    name: 'eval',
    aliases: ['ev'],
    description: 'Evaluate some JS code.',
    developer: true,

    run: async (msg: Message, args: string[]) => {
        const client = msg.client;
        const channel = msg.channel;
        const server = channel?.server;

        const toExec = args.join(' ');
        if (!toExec) return msg.channel?.sendMessage('Eval input missing.');

        const clean = (text: string) => {
            if (typeof (text) === "string")
                return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203)).replace(token, '[EXPUNGED]');
            else
                return text;
        }
        try {
            let res = eval(toExec);
            if (typeof res !== 'string')
                res = inspect(res);
            msg.channel?.sendMessage(`\`\`\`js\n${clean(res)}\n\`\`\``)
        } catch (err) {
            msg.channel?.sendMessage(`\`\`\`js\n${clean(err)}\n\`\`\``);
        }
    }
}
