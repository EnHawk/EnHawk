import * as Discord from "discord.js";
import { CommandOptions } from "./Command";
import { EventOptions } from "./Event";

export class ClientCommands extends Discord.Collection<string, CommandOptions> {};
export class ClientEvents extends Discord.Collection<string, EventOptions> {};