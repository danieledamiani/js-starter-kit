import  { expect } from 'chai';
import sinon from 'sinon';
import fs from 'fs';
import { JSDOM } from 'jsdom';

describe('Check test env', () => {
  it('should pass', () => {
    const mock = sinon.stub().returns(3);

    expect(true).to.equal(true);
    expect(mock()).to.eql(3);
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
