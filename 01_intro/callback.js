// @ts-check
function buySync(item, price, quantity, callback) {
  console.log(`${item}의 가격은 ${price}이고, 수량은 ${quantity}개 입니다.`);
  setTimeout(() => {
    console.log('계산 필요');
    const total = price * quantity;
    callback(total);
  }, 1000);
}

function pay(total) {
  console.log(`${total}원 지불함.`);
}

/* const totolMoney = */ buySync('포켓몬빵', 1000, 5, pay);
// pay(totolMoney);
