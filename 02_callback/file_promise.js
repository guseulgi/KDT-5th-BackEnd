const fs = require('fs').promises;

fs.readFile('./test.txt', 'utf-8')
  .then((data) => {
    console.log('1번', data);
    return fs.readFile('./test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('2번', data);
    return fs.readFile('./test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('3번', data);
    return fs.readFile('./test.txt', 'utf-8');
  })
  .then((data) => {
    console.log('4번', data);
    return fs.readFile('./test.txt', 'utf-8');
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });
