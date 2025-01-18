import { Bot } from "grammy";
import { getRequiredEnvVar } from './utils/getRequiredEnvVar.ts';

const bot = new Bot(getRequiredEnvVar('TG_BOT_TOKEN'));

const APP_URL = getRequiredEnvVar('APP_URL');

// Handle messages.
bot.on("message", (ctx) => ctx.reply(`To interact with our bot, use the mini app available at ${APP_URL} or click the "App" button on the left.`));

// Start the bot.
bot.start();
