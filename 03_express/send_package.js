// @ts-check
const express = require('express');
const fs = require('fs').promises;

const PORT = 4000;

const app = express();

app.use('/', async (req, res, next) => {
  console.log('미들웨어 1');
  req.reqTime = new Date();
  req.fileContent = await fs.readFile('../package.json', 'utf-8');
  next();
});

app.use((req, res, next) => {
  console.log('미들웨어 2');
  console.log(`데이터 요청 시각은 ${req.reqTime}`);
  console.log(`package.json 파일의 내용은 \n ${req.fileContent}`);
  res.send('연동 완료');
});

app.listen(PORT, () => {});
