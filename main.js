const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
})

client.on("message", msg => {
    if (msg.content === "ping") {
        msg.reply("pong");
    }
})

client.login("OTg4NDU0MjIwMTkxNjQ1NzA2.G38KzX.OBztNWDnFcRYoJAGwcHFwbfo5tyUuzeSTAJaEo")