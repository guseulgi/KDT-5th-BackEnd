const people = ['철수', '영희'];

function showName() {
  people.map((el) => console.log(el));
}

module.exports = {
  people,
  showName,
};
