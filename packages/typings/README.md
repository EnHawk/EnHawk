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

[**@hawkdotjs/typings**](https://www.npmjs.com/package/@hawkdotjs/typings) Is An Advanced [DJS](https://www.npmjs.com/package/discord.js) Bot Typings with [TypeScript](https://www.typescriptlang.org).

# Installation

> **Note: [Node.js](https://nodejs.org) 19.0.0 or newer is required.**
```sh-session
npm install @hawkdotjs/typings
```

# Example Usage

## CommonJS

```js
const { CommandBuilder, EventBuilder } = require("@hawkdotjs/typings");

// Command
const HelloWorldCommand = new CommandBuilder()
  .setScope("Global")
  .setCategory("Fun")
  .setData(
    data => data
    .setName("helloworld")
    .setDescription('Replies with "Hello World!"')
  )
  .onExecute(async interaction => {
    await interaction.reply("Hello World!")
  });

// Event
const ReadyEvent = new EventBuilder()
  .setName("ready")
  .onExecute(() => {
    return console.log("Bot is online.")
  });
```

## ESM Module

```js
import { CommandBuilder, EventBuilder } from "@hawkdotjs/typings";

// Command
const HelloWorldCommand = new CommandBuilder()
  .setScope("Global")
  .setCategory("Fun")
  .setData(
    data => data
    .setName("helloworld")
    .setDescription('Replies with "Hello World!"')
  )
  .onExecute(async interaction => {
    await interaction.reply("Hello World!")
  });

// Event
const ReadyEvent = new EventBuilder()
  .setName("ready")
  .onExecute(() => {
    return console.log("Bot is online.")
  });
```

# Links

<a href="https://github.com/EnHawk">
  <img src="https://cdn.discordapp.com/attachments/819019531438522369/1054717851862323211/github-mark.png" alt="github profile" width="10%" height="10%" />
</a>
<a href="https://www.npmjs.com/~enlight_hawk">
  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png" alt="npm profile" width="20%" height="20%" />
</a>