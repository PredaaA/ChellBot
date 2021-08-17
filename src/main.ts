import { Client as RevoltClient } from 'revolt.js';
import { developers, prefix, token } from './config.json';
import { BotFramework } from './core/framework';

class ChellBot extends RevoltClient {
    framework: BotFramework;

    constructor(...args: undefined[]) {
        super(...args);
        this.framework = new BotFramework(this, developers, prefix);
    }

}
let client = new ChellBot();

client.loginBot(token);
