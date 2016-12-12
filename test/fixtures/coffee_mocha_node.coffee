assert = require 'assert'

describe 'Array', () ->
  beforeEach () ->
    @ary = [1,2,3];

  describe '#indexOf()', () ->
    it 'should return -1 when the value is not present', () ->
      zero = 0
      two = 2
      assert @ary.indexOf(zero) == two

    it 'should return index when the value is present', () ->
      minusOne = -1
      two = 2
      assert.ok @ary.indexOf(two) == minusOne, 'THIS IS AN ASSERTION MESSAGE'
