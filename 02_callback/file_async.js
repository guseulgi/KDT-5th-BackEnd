const fs = require('fs');

fs.readFile('./test.txt', 'utf-8', (err, data) => {
  if (err) return console.log(err);
  return console.log('1번', data.toString());
});
fs.readFile('./test.txt', 'utf-8', (err, data) => {
  if (err) return console.log(err);
  return console.log('2번', data.toString());
});
fs.readFile('./test.txt', 'utf-8', (err, data) => {
  if (err) return console.log(err);
  return console.log('3번', data.toString());
});
fs.readFile('./test.txt', 'utf-8', (err, data) => {
  if (err) return console.log(err);
  return console.log('4번', data.toString());
});
