import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '../src/index.html'));
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
