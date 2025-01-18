import { Bot } from "grammy";
import { getRequiredEnvVar } from './utils/getRequiredEnvVar.ts';

const bot = new Bot(getRequiredEnvVar('TG_BOT_TOKEN'));

// Handle the /start command.
bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));
// Handle other messages.
bot.on("message", (ctx) => ctx.reply("Got another message!"));

// Start the bot.
bot.start();
