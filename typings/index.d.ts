import { EventEmitter } from "events";

export interface BaseOption {
    execute(args: any): any;
}

export interface CommandOptions extends BaseOption {
    scope: `Global` | `Local`;
    category: `Economy` | `Fun` | `Moderation` | `Other`;
    data: `Discord.SlashCommandBuilder`;
}

export interface EventOptions extends BaseOption {
    name: `Discord.ClientEvents`;
}