const TelegramBot = require('node-telegram-bot-api')
const token = 'token'
const bot = new TelegramBot(token, {polling: true})

console.log('Bot is running...')

bot.onText(/\/photo/, function onPhotoText (msg) {
  // From file path
  const photo = `${__dirname}/rem.jpg`
  bot.sendPhoto(msg.chat.id, photo, {
    caption: "I'm working..."
  })
})

bot.on('message', (msg) => {
  const chatId = msg.chat.id
  console.log('User said: ' + msg.text)
  bot.sendMessage(chatId, 'Hello. you said: ' + msg.text)
})
