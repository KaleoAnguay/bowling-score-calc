const chai = require('chai');
const expect = chai.expect;

const bowling = require('../bowl.js');

describe('bowling',() => {
  it('should be a function', function() {
    expect(bowling).to.be.a('function');
  });
  it('For a frame', () => {
    expect(bowling([{ball1: 0 ,ball2: 0}])).to.equal(0);
  });
});