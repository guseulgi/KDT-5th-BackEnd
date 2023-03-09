// @ts-check
const express = require('express');

const router = express.Router();
const modify = express.Router();
const delet = express.Router();

router.use('/modify', modify);
router.use('/delete', delet);

// TEMP DATA
const USER = {
  1: {
    id: 'test',
    name: '홍길동',
  },
};

const USER_ARR = [
  {
    id: 'test',
    name: '이효석',
    email: '@naver.com',
  },
  {
    id: 'pororo',
    name: '뽀로로',
    email: '@gmail.com',
  },
];

// 회원 목록
router.get('/', (req, res) => {
  // res.send(USER);
  res.render('users.ejs', {
    USER_ARR,
    userCounts: USER_ARR.length,
  });
});

// 회원 추가
router.post('/add', (req, res) => {
  if (!req.query.id || !req.query.name) return res.send('쿼리 입력 오류');

  const newUser = {
    id: req.query.id,
    name: req.query.name,
  };
  USER[Object.keys(USER).length + 1] = newUser;

  res.send('회원 등록 완료');
});

// 회원 수정
modify.put('/:uid', (req, res) => {
  if (!req.params.uid || !req.query.id || !req.query.name)
    return res.send('쿼리 입력 오류');

  if (req.params.uid in USER) {
    // USER[req.params.uid].id = req.query.id;
    // USER[req.params.uid].name = req.query.name;
    USER[req.params.uid] = {
      id: req.query.id,
      name: req.query.name,
    };
    res.send('회원 수정 완료');
  } else {
    res.send('쿼리 입력 오류');
  }
});

// 회원 삭제
delet.delete('/:uid', (req, res) => {
  if (!req.params.uid) return res.send('쿼리 입력 오류');

  if (req.params.uid in USER) delete USER[req.params.uid];
  res.send('회원 삭제 완료');
});

// 서버로 받은 데이터 그리는 법 - 직접
router.get('/show', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  res.write('<h1>Hello Dynamic Web PAge</h1>');

  for (let i = 0; i < USER_ARR.length; i++) {
    res.write(`<h2>USER ID is ${USER_ARR[i].id}</h2>`);
    res.write(`<h2>USER NAME is ${USER_ARR[i].name}</h2>`);
  }
  res.end();
});

// ejs 파일로 작성해놓고 서버랑 연동하고 그리는 법
// router.get('/ejs', (req, res) => {
//   res.render('users.ejs', { USER_ARR, userCounts: USER_ARR.length });
// });

module.exports = router;
