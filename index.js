require('dotenv').config();
require('module-alias/register');
const discord = require('discord.js');
const Router = require("./router.js");

const botPrefix = 'webbie';

const client = new discord.Client();
const messageRouter = new Router();

// matches everything starting with 'webbie'
const botMessageMatcher = new RegExp(`\\s*${botPrefix}(?!\\w)(\\s+(\\w.*)|\\s*)`);

client.on('ready', () => {
    console.log("=== We're in bois")
});

client.on('message', (msg) => {
    if (msg.author.id !== client.user.id) {
        msg.content = msg.content.toLowerCase(); // normalize

        if (msg.content.search(botMessageMatcher) !== -1) {
            msg.content = msg.content.replace(botMessageMatcher, "$2");
            messageRouter.route(msg)
        }
    }
});

client.login(process.env.TOKEN).then(r => {
    console.debug(`=== Logged In (${r})`)
});


