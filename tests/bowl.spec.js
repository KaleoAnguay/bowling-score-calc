const chai = require('chai');
const expect = chai.expect;

const bowling = require('../bowl.js');

describe('bowling',() => {
  it('should be a function', function() {
    expect(bowling).to.be.a('function');
  });
  it('should return total', () => {
    expect(bowling([{ball1: 0 ,ball2: 0},{ball1: 0 ,ball2: 0},{ball1: 0 ,ball2: 0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0}])).to.equal(0);
    expect(bowling([{ball1: 3 ,ball2:  3 },{ball1: 2 ,ball2: 2},{ball1: 0 ,ball2: 0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0}])).to.equal(10);
    expect(bowling([{ball1: 10 ,ball2:  0 },{ball1: 1 ,ball2: 1},{ball1: 1 ,ball2: 1},{ball1: 1 ,ball2:1},{ball1: 1 ,ball2:1},{ball1: 1 ,ball2:1},{ball1: 1 ,ball2:1},{ball1: 1 ,ball2:1},{ball1: 1 ,ball2:1},{ball1: 1 ,ball2:1}])).to.equal(30);

  });
  it('should return a next bonus points from next ball rolled', () => {
    expect(bowling([{ball1: 5 ,ball2: 5},{ball1: 5 ,ball2: 0},{ball1: 0 ,ball2: 0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0}])).to.equal(20);
  });
  it('should return next bonus points from the next two balls rolled', () => {
    expect(bowling([{ball1: 10 ,ball2: 0},{ball1: 1 ,ball2: 2},{ball1: 0 ,ball2: 0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0}])).to.equal(16);
  });
  it('should return a extra ball if rolled a strike on ball1 and ball 2 or a spare on ball2', () => {
    expect(bowling([{ball1: 0 ,ball2: 0},{ball1: 0 ,ball2: 0},{ball1: 0 ,ball2: 0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 0 ,ball2:0},{ball1: 10 ,ball2:10 ,ball3:5}])).to.equal(25);
  });

});