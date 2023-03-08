const fs = require('fs').promises;

async function main() {
  let result = await fs.readFile('./test.txt', 'utf-8');
  console.log(result);
  result = await fs.readFile('./test1.txt', 'utf-8');
  console.log(result);
  result = await fs.readFile('./test2.txt', 'utf-8');
  console.log(result);
  result = await fs.readFile('./test3.txt', 'utf-8');
  console.log(result);
}

main();
