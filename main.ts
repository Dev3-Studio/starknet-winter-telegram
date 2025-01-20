import { Bot } from "https://deno.land/x/grammy@v1.34.0/mod.ts";
import { getRequiredEnvVar } from './utils/getRequiredEnvVar.ts';
import { InlineKeyboard } from 'npm:grammy@1.34.0';

const bot = new Bot(getRequiredEnvVar('TG_BOT_TOKEN'), {
    client: {
        environment: getRequiredEnvVar('TG_ENVIRONMENT') as 'test' | 'prod',
    }
});

const APP_URL = getRequiredEnvVar('APP_URL');
const matchAll = /.*/;
const keyboard = new InlineKeyboard().game("Start TeleSwap");

// Handle messages.
bot.hears(matchAll, (ctx) => ctx.replyWithGame("dex", { reply_markup: keyboard }));
bot.on("callback_query:game_short_name", async (ctx) => {
    await ctx.answerCallbackQuery({ url: APP_URL });
});

// Start the bot.
bot.start();
