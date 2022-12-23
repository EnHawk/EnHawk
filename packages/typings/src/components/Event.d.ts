import * as Discord from "discord.js";

export interface EventOptions {
    name: keyof Discord.ClientEvents,
    execute: (args: any) => any;
}

/**
 * Typings for event files.
 */
export declare class EventBuilder {
    /**
     * The name of this event
     */
    public readonly name: EventOptions[`name`];
    
    /**
     * The function() of this event to execute.
     */
    public readonly execute: EventOptions[`execute`];

    /**
     * Returns final data in JSON form.
     */
    public toJSON(): EventOptions;

    /**
     * Set the name of this event.
     */
    public setName(name: EventOptions[`name`]): this;

    /**
     * Set the execute function of this event.
     */
    public onExecute(func: EventOptions[`execute`]): this;
}