declare var require:any;
declare var describe:any;
declare var it:any;
declare var beforeEach:any;

var assert = require('assert');

describe('Array', () => {
    var ary: number[];

    beforeEach(() => {
        ary = [1, 2, 3];
    });

    describe('#indexOf()', () => {
        it('should return -1 when the value is not present', () => {
            var zero = 0, two = 2;
            assert(ary.indexOf(zero) === two);
        });
        it('should return index when the value is present', () => {
            var minusOne = -1, two = 2;
            assert.ok(ary.indexOf(two) === minusOne, 'THIS IS AN ASSERTION MESSAGE');
        });
    });
});
