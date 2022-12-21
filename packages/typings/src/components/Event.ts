import * as Discord from "discord.js";

export interface EventOptions {
    name: keyof Discord.ClientEvents,
    execute: (args: any) => any;
};

export class EventBuilder {
    constructor(options: EventOptions) {
        const { name, execute } = options;
        return { name, execute };
    }
};