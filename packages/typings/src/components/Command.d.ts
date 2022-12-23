import * as Discord from "discord.js";

export interface CommandOptions {
    scope: `Global` | `Local`,
    category?: `Economy` | `Fun` | `Moderation` | `Other`,
    data: Discord.SlashCommandBuilder,
    execute: (interaction: Discord.Interaction) => any;
}

/**
 * Typings for Slash Command files.
 */
export declare class CommandBuilder {
    /**
     * The scope of this command.
     */
    public readonly scope: CommandOptions[`scope`]

    /**
     * The category of this command. (Optional)
     */
    public readonly category?: CommandOptions[`category`];

    /**
     * The data of this command
     */
    public readonly data: CommandOptions[`data`];

    /**
     * The function of this command whenever the command is being executed.
     */
    public readonly execute: CommandOptions[`execute`];

    /**
     * Returns final data in JSON form.
     */
    public toJSON(): CommandOptions;

    /**
     * Set the scope of this command.
     */
    public setScope(scope: CommandOptions[`scope`]): this;

    /**
     * Set the category of this command. (Optional)
     */
    public setCategory(category: CommandOptions[`category`]): this;

    /**
     * Set the data of this command.
     */
    public setData(data: CommandOptions[`data`]): this;

    /**
     * Set the execute function of this command.
     */
    public onExecute(func: CommandOptions[`execute`]): this;
}