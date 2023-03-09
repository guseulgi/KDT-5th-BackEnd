const express = require('express');
const userRouter = require('./routes/users');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));
app.use('/users', userRouter);

const PORT = 4000;

// 초기 화면
app.get('/', (req, res) => {
  res.send('Express World');
});

// 서버 오픈
app.listen(PORT, () => {});
