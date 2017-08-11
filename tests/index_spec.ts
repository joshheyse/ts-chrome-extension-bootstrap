import {expect} from 'chai';

console.error('WTF');

describe('tests', () => {

  it('should fail', () => {
    expect(0).to.eql(1);
  });

  it('should pass', () => {
    expect(0).to.eql(0);
  });

});
