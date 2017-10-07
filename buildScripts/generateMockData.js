/* eslint-disable no-console */

import jsf from 'json-schema-faker';
import { schema } from './mockDataSchema';
import fs from 'fs';
import chalk from 'chalk';

jsf.extend('faker', () => require('faker'));

jsf.resolve(schema)
  .then(result => {
    fs.writeFile('./src/api/db.json', JSON.stringify(result), err => {
      if(err) {
        console.log(chalk.red(err));
      } else {
        console.log(chalk.green('Mock data generated'));
      }
    });
  });
