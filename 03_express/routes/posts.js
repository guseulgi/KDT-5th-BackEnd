const express = require('express');

const router = express.Router();

// Temp Data
const postList = [
  {
    id: 1,
    title: '첫글',
    content: '첫글의 내용입니다',
  },
];

// 첫 게시글 화면
router.get('/', (req, res) => {
  res.render('posts.ejs', {
    postList,
  });
});

// 글 추가
router.post('/add', (req, res) => {
  if (Object.keys(req.body).length >= 1) {
    if (req.body.title && req.body.content) {
      const newPost = {
        id: postList.length + 1,
        title: req.body.title,
        content: req.body.content,
      };
      postList.push(newPost);

      res.redirect('/posts');
    } else {
      const err = new Error('폼 태그를 채워주세요.');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('폼 태그를 채워주세요.');
    err.statusCode = 400;
    throw err;
  }
});

// 글 삭제
router.delete('/delete', (req, res) => {
  if (req.body) {
    if (req.body.id) {
      postList.find((value) => {
        if (value.id === req.body.id) {
          postList[req.body.id - 1].delete();
        }
      });
      res.redirect('/posts');
    } else {
      const err = new Error('선택을 안하셨습니다!');
      err.statusCode = 400;
      throw err;
    }
  } else {
    const err = new Error('선택을 안하셨습니다!');
    err.statusCode = 400;
    throw err;
  }
});

module.exports = router;
