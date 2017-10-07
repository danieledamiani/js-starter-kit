import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

/* eslint-disable no-console */

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/users', (request, response) => {
  response.json([
    {id: 1, firstName: 'Alice', lastName: 'Smith', email: 'alice@gmail.com'},
    {id: 2, firstName: 'Bob', lastName: 'Johnson', email: 'bobe@gmail.com'},
    {id: 3, firstName: 'Carl', lastName: 'Anderson', email: 'carl@gmail.com'}
  ]);
});

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
