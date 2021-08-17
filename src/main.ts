import { Client } from 'revolt.js';
import { developers, prefix, token } from './config.json';
import { BotFramework } from './core/framework';

let client = new Client();
new BotFramework(client, developers, prefix);

client.loginBot(token);
