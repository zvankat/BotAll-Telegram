const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

console.log('Бот запущен!');

bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text && text.toLowerCase().includes('all')) {
        try {
            const botInfo = await bot.getMe();
            const botUsername = botInfo.username.toLowerCase();
            
            if (text.toLowerCase().includes(botUsername)) {
                if (msg.chat.type === 'group' || msg.chat.type === 'supergroup') {
                    const chatMembers = await bot.getChatAdministrators(chatId);
                    
                    let usernames = [];
                    
                    chatMembers.forEach(member => {
                        const user = member.user;
                        if (user.id !== botInfo.id && user.username) {
                            usernames.push(`@${user.username}`);
                        }
                    });
                    
                    let mentionText = '🔔 Общее упоминание всех пользователей этого чата:\n';
                    mentionText += `||${usernames.join(' ')}||`;
                    
                    await bot.sendMessage(chatId, mentionText, {
                        reply_to_message_id: msg.message_id,
                        parse_mode: 'MarkdownV2'
                    });
                    
                } else {
                    await bot.sendMessage(chatId, 'Эта команда работает только в групповых чатах!', {
                        reply_to_message_id: msg.message_id
                    });
                }
            }
        } catch (error) {
            console.error('Ошибка:', error);
            await bot.sendMessage(chatId, '🔔 Общее упоминание всех пользователей этого чата:\n||@everyone||', {
                reply_to_message_id: msg.message_id,
                parse_mode: 'MarkdownV2'
            });
        }
    }
});

console.log('Готов к работе! Упомяните бота и напишите "all" в чате');