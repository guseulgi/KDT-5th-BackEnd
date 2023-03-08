const lucky = false;

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (lucky) {
      const profit = 3000;
      resolve(profit);
    } else {
      reject('망했어요');
    }
  }, 1000);
});

async function howMuch() {
  try {
    const result = await promise;
    if (result) console.log(result);
  } catch (err) {
    console.log(err);
  }
}
howMuch();
