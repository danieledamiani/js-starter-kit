import  { expect } from 'chai';
import fs from 'fs';
import { JSDOM } from 'jsdom';

describe('My first test', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should have h1 that says Users', () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8');
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName('h1')[0];
    const expected = 'Users';
    expect(h1.innerHTML).to.equal(expected);
  });
});
