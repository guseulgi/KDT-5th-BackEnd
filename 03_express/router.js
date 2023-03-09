// @ts-check

const express = require('express');

const app = express();
const userRouter = express.Router();

const PORT = 4000;

// DATA
const USER = {
  1: {
    id: 'tetz',
    name: '이효석',
  },
};

app.use('/users', userRouter);
// http://localhost:4000/users 가 됨

userRouter.get('/', (req, res) => {
  // res.send('회원 목록');
  res.send(USER);
});

userRouter.get('/id/:id', (req, res) => {
  // res.send('특정 회원');
  const userData = USER[req.params.id];
  if (userData) {
    res.send(userData);
  } else {
    res.send('ID 못 찾음');
  }
});

userRouter.post('/add', (req, res) => {
  // if (req.query.id && req.query.name) {
  //   const newUser = {
  //     id: req.query.id,
  //     name: req.query.name,
  //   };
  //   USER[Object.keys(USER).length + 1] = newUser;
  //   res.send('회원 등록 완료');
  // } else {
  //   res.send('입력 오류');
  // }

  if (!req.query.id || !req.query.name) return res.send('쿼리 입력 실패');

  const newUser = {
    id: req.query.id,
    name: req.query.name,
  };
  USER[Object.keys(USER).length + 1] = newUser;
  res.send('회원 등록 완료');
});

app.get('/', (req, res) => {
  res.send('Hello express world!');
});

app.listen(PORT, () => {});
