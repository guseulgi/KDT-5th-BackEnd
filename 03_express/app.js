const express = require('express');
const bodyParser = require('body-parser');
const mainRouter = require('./routes/index');
// const mainRouter = require('./routes'); 처럼 index 는 생략가능!
const userRouter = require('./routes/users');
const postRouter = require('./routes/posts');

const app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/posts', postRouter);

const PORT = 4000;

// 에러 핸들링
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(err.statusCode);
  res.send(err.message + ` <a href='/'>홈으로</a>`);
});

// 서버 오픈
app.listen(PORT, () => {
  console.log(`서버가 ${PORT} 에서 구동 중`);
});
