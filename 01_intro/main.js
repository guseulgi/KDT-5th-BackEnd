// @ts-check

// 서버 만들기
const http = require('http'); // node.js 의 모듈을 불러오기 위한 require()함수

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.end('Hello');
});

const PORT = 4000;
server.listen(PORT, () => {
  console.log(`The server is listening at port : ${PORT}`);
});
