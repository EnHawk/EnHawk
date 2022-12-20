<div align="center">
  <div>
    <img src="https://github.com/EnHawk/EnHawk/blob/master/packages/typings/icon.png"
          alt="pack icon"
          width="50%" 
          height="50%" />
  </div>
  <h1>Hawk.js Typings</h1>
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
```js
import { SlashCommandBuilder } from "discord.js";
// discord.js included as a dependency

import { CommandBuilder } from "@hawkdotjs/typings";

const pingCommand = new CommandBuilder({
    scope: `Global`, // | `Local`
    category: `Other`, // | `Economy` | `Moderation` | `Fun`
    data: new SlashCommandBuilder()
        .setName(`ping`)
        .setDescription(`Websocket ping status`),
    execute: async (interaction) => {
        await interaction.reply(`${client.ws.ping} ms`)
    }
});
```

# Links
- [GitHub Profile](https://github.com/EnHawk)
- [GitHub Repository][def]
- [Package Developer](https://www.npmjs.com/~enlight_hawk)

[def]: https://github.com/EnHawk/EnHawk