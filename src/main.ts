import { Client, REST, Routes } from "discord.js";
import { CONFIG } from "./config";

export const client = new Client({
    intents: [
        "Guilds",
        "GuildMessages"
    ]
});

const rest = new REST({ version: "10" }).setToken(CONFIG.token);

rest.put(Routes.applicationCommands(CONFIG.clientID), {
    body: 
        [

        ]
});

client.login(CONFIG.token);

client.once("ready", (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.username}`);
});