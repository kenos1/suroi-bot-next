import { Client } from "discord.js";
import { CONFIG } from "./config";

const client = new Client({
    intents: [
        "Guilds"
    ]
});

client.login(CONFIG.token);

client.once("ready", (readyClient) => {
    console.log(`Ready! Logged in as ${readyClient.user.username}`);
});