// @ts-check
const express = require('express');

const PORT = 4000;
const app = express();

app.listen(PORT, () => {
  console.log(`${PORT}... 서버 구동 중`);
});

app.get('/id/:id', (req, res) => {
  console.log(req.params);
  res.send(`id : ${req.params.id}`);
});

app.get('/', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

app.get('/api', (req, res) => {
  res.send(`api 요청이 접수 되었습니다.`);
});
