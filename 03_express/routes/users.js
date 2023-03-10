const express = require('express');

const router = express.Router();
const modify = express.Router();
const delet = express.Router();

router.use('/modify', modify);
router.use('/delete', delet);

// TEMP DATA
const USER = [
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

// 회원 목록을 render()
router.get('/', (req, res) => {
  res.render('users.ejs', {
    USER,
    userCounts: USER.length,
  });
});

// id로 회원 찾기 /id/id
router.get('/id/:id', (req, res) => {
  const userData = USER.find((user) => user.id === req.params.id);

  if (userData) {
    res.send(userData);
  } else {
    const err = new Error('ID가 존재하지 않습니다.');
    err.statusCode = 404;
    throw err;
  }
});

// 회원 추가 /add?쿼리문
router.post('/add', (req, res) => {
  // 쿼리로 들어왔을 때
  if (Object.keys(req.query).length >= 1) {
    if (req.query.id || req.query.name || req.query.email) {
      const newUser = {
        id: req.query.id,
        name: req.query.name,
        email: req.query.email,
      };
      USER.push(newUser);

      res.redirect('/users');
    } else {
      const err = new Error('폼 태그 입력을 확인하세요');
      err.statusCode = 400;
      throw err;
    }
    // req.body 로 들어왔을 때
  } else if (req.body) {
    if (req.body.id || req.body.name || req.body.email) {
      const newUser = {
        id: req.body.id,
        name: req.body.name,
        email: req.body.email,
      };
      USER.push(newUser);

      res.redirect('/users');
    } else {
      const err = new Error('폼 태그 입력을 확인하세요');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('데이터가 입력되지 않았습니다.');
    err.statusCode = 400;
    throw err;
  }
});

// 회원 수정 /modify/id?쿼리문
modify.put('/:id', (req, res) => {
  if (req.query.name && req.query.email) {
    const userIndex = USER.findIndex((user) => user.id === req.params.id);
    if (userIndex !== -1) {
      USER[userIndex] = {
        id: req.params.id,
        name: req.query.name,
        email: req.query.email,
      };
      res.send('회원 정보 수정 완료');
    } else {
      const err = new Error('회원 정보 없음.');
      err.statusCode = 404;
      throw err;
    }
  } else {
    const err = new Error('입력이 잘못 되었씁니다.');
    err.statusCode = 400;
    throw err;
  }
});

// 회원 삭제 /delete/id
delet.delete('/:id', (req, res) => {
  const userIndex = USER.findIndex((user) => user.id === req.params.id);
  if (userIndex !== -1) {
    USER.splice(userIndex, 1);
    res.send('회원 정보 삭제 완료');
  } else {
    const err = new Error('ID가 존재하지 않습니다.');
    err.statusCode = 404;
    throw err;
  }
});

// 서버로 받은 데이터를 '직접' 그리는 법
// router.get('/show', (req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
//   res.write('<h1>Hello Dynamic Web PAge</h1>');

//   for (let i = 0; i < USER.length; i++) {
//     res.write(`<h2>USER ID is ${USER[i].id}</h2>`);
//     res.write(`<h2>USER NAME is ${USER[i].name}</h2>`);
//   }
//   res.end();
// });

// ejs 파일로 작성해놓고 서버랑 연동하고 그리는 법
// router.get('/ejs', (req, res) => {
//   res.render('users.ejs', { USER_ARR, userCounts: USER_ARR.length });
// });

module.exports = router;
