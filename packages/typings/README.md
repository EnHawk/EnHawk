<div align="center">
  <div>
    <img src="https://github.com/EnHawk/EnHawk/blob/master/packages/typings/icon.png"
          alt="pack icon"
          width="50%" 
          height="50%" />
  </div>
  <h1>Hawk JS/Typings</h1>
  <div>
    <a href="https://www.npmjs.com/package/@hawkdotjs/typings">
      <img src="https://img.shields.io/npm/v/@hawkdotjs/typings?style=for-the-badge" alt="npm version" />
    </a>
    <a href="https://www.npmjs.com/package/@hawkdotjs/typings">
      <img src="https://img.shields.io/npm/dt/@hawkdotjs/typings?style=for-the-badge" alt="npm downloads" />
    </a>
  </div>
</div>

# About
Advanced DJS Bot Typings with [TypeScript](https://www.typescriptlang.org).
# Installation
[Node.js](https://nodejs.org) 19.0.0 or newer is required.
```bash
$ npm install @hawkdotjs/typings
```
# Example Usage
## CommonJS
```js
const { SlashCommandBuilder } = require("discord.js");
// discord.js included as a dependency

const { CommandBuilder } = require("@hawkdotjs/typings");

const greetCommand = new CommandBuilder()
    .setScope("Global") // "Global" | "Local"
    .setCategory("Other") // "Economy" | "Moderation" | "Fun" | "Other"
    .setData(
        new SlashCommandBuilder()
        .setName("greet")
        .setDescription("Greet yourself.")
    )
    .onExecute(async interaction => {
        await interaction.reply(`Hello ${interaction.user.username}!`)
    });

module.exports = greetCommand;
```
## ESM Module
```js
import { SlashCommandBuilder } from "discord.js";
// discord.js included as a dependency

import { CommandBuilder } from "@hawkdotjs/typings";

const greetCommand = new CommandBuilder()
  .setScope("Global") // "Global" | "Local"
  .setCategory("Other") // "Economy" | "Moderation" | "Fun" | "Other"
  .setData(
    data => data
    .setName("greet")
    .setDescription("Greet yourself.")
  )
  .onExecute(async interaction => {
    await interaction.reply(`Hello ${interaction.user.username}!`)
  });

export default greetCommand;
```
# Links
<a href="https://github.com/EnHawk">
  <img src="https://cdn.discordapp.com/attachments/819019531438522369/1054717851862323211/github-mark.png" alt="github profile" width="10%" height="10%" />
</a>
<a href="https://www.npmjs.com/~enlight_hawk">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png" alt="npm profile" width="20%" height="20%" />
</a>