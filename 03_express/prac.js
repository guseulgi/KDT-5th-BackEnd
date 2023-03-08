const express = require('express');
const app = express();

const PORT = 4000;

app.get(
  '/email/:email/password/:password/name/:name/gender/:gender',
  (req, res) => {
    console.log(req.params);
    res.send(
      `Email : ${req.params.email} \n Password : ${req.params.password} \n Name : ${req.params.name} \n Gender : ${req.params.gender}`
    );
  }
);

app.get('/', (req, res) => {
  res.send(req.query);
});

app.listen(PORT, () => {
  console.log('서버 요청 완');
});
