import { CommandInteraction, SlashCommandBuilder } from "discord.js";

export const pingCommand = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Reply with pong");

export async function pingCommandExecute(interaction: CommandInteraction) {
    await interaction.reply("Pong!");
}