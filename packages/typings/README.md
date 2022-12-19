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
- [GitHub Repository](https://github.com/EnHawk/EnHawk)
- [Package Developer](https://www.npmjs.com/~enlight_hawk)