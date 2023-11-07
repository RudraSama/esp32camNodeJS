const express = require('express');
const sharp = require('sharp');
const fs = require('fs');
// const net = require('net');
const TelegramBot = require('node-telegram-bot-api');
const app = express();


const bot = new TelegramBot('TELEGRAM-BOT TOKEN');

const bodyParser = require('body-parser');


// Middleware to parse incoming raw data as buffer
app.use(bodyParser.raw({ type: 'application/octet-stream' }));


// Route to handle buffer
app.post('/receiveBuffer', (req, res) => {
  const receivedBuffer = req.body;


  bot.sendPhoto('962382332', receivedBuffer);

  res.send('Buffer received successfully.');
});

app.get("/", (req, res)=>{
    return "working";
});



bot.startPolling();
app.listen(8080);