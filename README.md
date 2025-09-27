# PingAll Telegram Bot 🤖

A Telegram bot that mentions all chat members when triggered with `@pingall_bot all`. Perfect for group announcements and getting everyone's attention!

## Features ✨

- Mentions all chat members with a single command
- Works in groups and supergroups
- Excludes the bot itself from mentions
- Simple and easy to use
- Supports users with and without usernames

## Installation 🚀

### Prerequisites

- Node.js (v14 or higher)
- Telegram Bot Token from [@BotFather](https://t.me/BotFather)

### Step-by-Step Setup

1. **Clone the repository**
```bash
git clone https://github.com/zvankat/BotAll-Telegram.git
cd BotAll-Telegram
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
   
Create a `.env` file in the root directory:
```env
BOT_TOKEN=your_telegram_bot_token_here
```

4. **Start the bot**
```bash
npm start
```

For development with auto-restart:
```bash
npm run dev
```

## Usage 💬

1. Add the bot to your Telegram group
2. Make the bot an administrator in the group
3. Use the command: `@your_bot_username all`

The bot will mention all group members in a spoiler format.
