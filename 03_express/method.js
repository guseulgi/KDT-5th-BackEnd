// @ts-check
const express = require('express');

const PORT = 4000;
const app = express();

app.get('/', (req, res) => {
  res.send('GET');
});

app.post('/', (req, res) => {
  res.send('POST');
});

app.put('/', (req, res) => {
  res.send('PUT');
});

app.delete('/', (req, res) => {
  res.send('DELETE');
});

// app.use('/:id', (req, res) => {

// });

app.listen(PORT, () => {});
