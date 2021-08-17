import { Client } from 'revolt.js';
import { BotFramework } from './core/framework';
import { prefix, token } from './config.json';

let client = new Client();
new BotFramework(client, prefix);

client.loginBot(token);
