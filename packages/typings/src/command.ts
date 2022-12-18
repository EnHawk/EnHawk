import * as Discord from "discord.js";

export interface CommandOptions {
    scope: `Global` | `Local`,
    category?: `Economy` | `Fun` | `Moderation` | `Other`,
    data: Discord.SlashCommandBuilder,
    execute: (i: Discord.Interaction) => any,
}

export class CommandBuilder {
    constructor (options: CommandOptions) {
        const { scope, category, data, execute } = options;
        
        return {
            scope,
            category,
            data,
            execute
        };
    }
};