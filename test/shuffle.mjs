import { shuffle } from '../src/shuffle.js';
import { expect } from 'chai';

describe('shuffle', () => {
  it('should shuffle array', () => {
    const arr = [1, 2, 3, 4];
    const shuffled = shuffle(arr);
    expect(shuffled).to.have.members(arr);
    expect(shuffled.length).to.equal(arr.length);
  });
});
