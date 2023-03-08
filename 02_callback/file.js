// @ts-check

const fs = require('fs');

const path = './test.txt';
fs.readFile(path, 'utf-8', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

const str = '파일 쓰기 테스트';
fs.writeFile('./test2.txt', str, 'utf-8', (err) => {
  if (err) console.log(err);
});
