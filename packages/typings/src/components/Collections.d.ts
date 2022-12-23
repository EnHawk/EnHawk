import * as Discord from "discord.js";
import { CommandOptions } from "./Command";
import { EventOptions } from "./Event";

/**
 * Collection typings for ``client.commands``.
 */
export declare class ClientCommands extends Discord.Collection<string, CommandOptions> {}

/**
 * Collection typings for ``client.events``.
 */
export declare class ClientEvents extends Discord.Collection<string, EventOptions> {}