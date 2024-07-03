const TelegramBot = require('node-telegram-bot-api');

// Замените 'YOUR_TOKEN' на ваш токен бота, полученный у @BotFather
const token = '7060578457:AAE2CaqxbI4TZ8fHTvYoHnxfUYoRqaXJVe0';

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;
    const opts = {
      reply_markup: {
        inline_keyboard: [
          [
            {
              text: 'нажми первым',
              callback_data: 'button1'
            }
          ],
          [
            {
              text: 'а потом меня',
              callback_data: 'button2'
            }
          ]
        ]
      }
    };
    bot.sendMessage(chatId, 'Выберите одну из кнопок:', opts);
  });
  
  bot.on('callback_query', (query) => {
    const chatId = query.message.chat.id;
    let response;
    if (query.data === 'button1') {
      response = 'C днем рождение любимая моя вонючка люблю тебя тебя очень очень';
    } else if (query.data === 'button2') {
      response = 'люблю тебя сильно';
    }
    bot.sendMessage(chatId, response);
  });
  

// bot.onText(/\/start/, (msg) => {
//     bot.sendMessage(msg.chat.id, '!');
// });


// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     const text = msg.text.toLowerCase();

//     if (text === '') {
//         bot.sendMessage(chatId, '!');
//     }
// });
