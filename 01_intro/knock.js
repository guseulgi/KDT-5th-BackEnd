// @ts-check

function knockDoor(delay, name, callback) {
  console.log('노크를 하고 기다립니다!');
  setTimeout(() => {
    callback(name, delay);
  }, delay * 1000);
}

function callName(name, delay) {
  console.log(`${name} 이가 ${delay}초 만에 문을 열고 나왔습니다..`);
}

knockDoor(3, '영식', callName);
