const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
  it('checks the output', () => {
    assert.equal(calculateNumber(1.1, 2.5), 4);
    assert.equal(calculateNumber(0.0, 0), 0);
  });
  it('negative numbers', () => {
    assert.equal(calculateNumber(-1, 1), 0);
    assert.equal(calculateNumber(-1.5, 0), -1);
  });
  it('checks arguments', () => {
    assert.equal(isNaN(calculateNumber(2.2)), true);
    assert.equal(isNaN(calculateNumber()), true);
  });
});
