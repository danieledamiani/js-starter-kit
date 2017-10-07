import  { expect } from 'chai';
import jsdom from 'jsdom/lib/old-api.js';
import fs from 'fs';

describe('My first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should have h1 that says Users', (done) => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    jsdom.env(index, (err, window) => {
      const h1 = window.document.getElementsByTagName('h1')[0];
      const expected = 'Users';
      expect(h1.innerHTML).to.equal(expected);
      done();
      window.close();
    });
  });
});
