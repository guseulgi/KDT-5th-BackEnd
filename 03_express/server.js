// @ts-check

const express = require('express');
const cors = require('cors');

const PORT = 4000;

const app = express();
app.use(cors());
app.use('/', (req, res, next) => {
  // console.log(next);
  // res.send('Hello, Express');
  console.log('미들웨어 1');
  req.reqTime = new Date();
  next();
});

app.use((req, res, next) => {
  console.log('미들웨어 2');
  res.send(`현재 시각은 ${req.reqTime}`);
  next();
});

app.use((req, res, next) => {
  console.log('미들웨어 3');
});

app.listen(PORT, () => {
  console.log(`PORT NUMBER : ${PORT}`);
});
