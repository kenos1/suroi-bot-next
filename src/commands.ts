import { client } from "./main";

client.on("interactionCreate", (interaction) => {
    if (interaction.isCommand()) {
        // Command logic
    }
});