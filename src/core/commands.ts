import fs from 'fs';

const commandsFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.ts'));
let commandsLoad = [];
for (const file of commandsFiles) {
    commandsLoad.push(require(`../commands/${file}`))
    console.info(`[commands] Loaded command file ${file}!`)
}

export const commands = commandsLoad;
