var assert = require('power-assert');
describe('Array', function () {
    beforeEach(function () {
        this.ary = [
            1,
            2,
            3
        ];
    });
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            var zero = 0, two = 2;
            assert(assert._expr(assert._capt(assert._capt(assert._capt(this.ary, 'arguments/0/left/callee/object').indexOf(assert._capt(zero, 'arguments/0/left/arguments/0')), 'arguments/0/left') === assert._capt(two, 'arguments/0/right'), 'arguments/0'), {
                content: 'assert(this.ary.indexOf(zero) === two)',
                filepath: 'test/fixtures/mocha_node.js',
                line: 10
            }));
        });
        it('should return index when the value is present', function () {
            var minusOne = -1, two = 2;
            assert.ok(assert._expr(assert._capt(assert._capt(assert._capt(this.ary, 'arguments/0/left/callee/object').indexOf(assert._capt(two, 'arguments/0/left/arguments/0')), 'arguments/0/left') === assert._capt(minusOne, 'arguments/0/right'), 'arguments/0'), {
                content: 'assert.ok(this.ary.indexOf(two) === minusOne, \'THIS IS AN ASSERTION MESSAGE\')',
                filepath: 'test/fixtures/mocha_node.js',
                line: 14
            }), 'THIS IS AN ASSERTION MESSAGE');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZml4dHVyZXMvbW9jaGFfbm9kZS5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwiZGVzY3JpYmUiLCJiZWZvcmVFYWNoIiwiYXJ5IiwiaXQiLCJ6ZXJvIiwidHdvIiwiX2V4cHIiLCJfY2FwdCIsImluZGV4T2YiLCJjb250ZW50IiwiZmlsZXBhdGgiLCJsaW5lIiwibWludXNPbmUiLCJvayJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsTUFBQSxHQUFTQyxPQUFBLENBQVEsY0FBUixDQUFiO0FBRUFDLFFBQUEsQ0FBUyxPQUFULEVBQWtCLFlBQVU7QUFBQSxJQUN4QkMsVUFBQSxDQUFXLFlBQVU7QUFBQSxRQUNqQixLQUFLQyxHQUFMLEdBQVc7QUFBQSxZQUFDLENBQUQ7QUFBQSxZQUFHLENBQUg7QUFBQSxZQUFLLENBQUw7QUFBQSxTQUFYLENBRGlCO0FBQUEsS0FBckIsRUFEd0I7QUFBQSxJQUl4QkYsUUFBQSxDQUFTLFlBQVQsRUFBdUIsWUFBVTtBQUFBLFFBQzdCRyxFQUFBLENBQUcsZ0RBQUgsRUFBcUQsWUFBVTtBQUFBLFlBQzNELElBQUlDLElBQUEsR0FBTyxDQUFYLEVBQWNDLEdBQUEsR0FBTSxDQUFwQixDQUQyRDtBQUFBLFlBRTNEUCxNQUFBLENBQU9BLE1BQUEsQ0FBQVEsS0FBQSxDQUFBUixNQUFBLENBQUFTLEtBQUEsQ0FBQVQsTUFBQSxDQUFBUyxLQUFBLENBQUFULE1BQUEsQ0FBQVMsS0FBQSxNQUFLTCxHQUFMLG9DQUFTTSxPQUFULENBQWlCVixNQUFBLENBQUFTLEtBQUEsQ0FBQUgsSUFBQSxpQ0FBakIsMkJBQTJCTixNQUFBLENBQUFTLEtBQUEsQ0FBQUYsR0FBQSxzQkFBM0I7QUFBQSxnQkFBQUksT0FBQTtBQUFBLGdCQUFBQyxRQUFBO0FBQUEsZ0JBQUFDLElBQUE7QUFBQSxjQUFQLEVBRjJEO0FBQUEsU0FBL0QsRUFENkI7QUFBQSxRQUs3QlIsRUFBQSxDQUFHLCtDQUFILEVBQW9ELFlBQVU7QUFBQSxZQUMxRCxJQUFJUyxRQUFBLEdBQVcsQ0FBQyxDQUFoQixFQUFtQlAsR0FBQSxHQUFNLENBQXpCLENBRDBEO0FBQUEsWUFFMURQLE1BQUEsQ0FBT2UsRUFBUCxDQUFVZixNQUFBLENBQUFRLEtBQUEsQ0FBQVIsTUFBQSxDQUFBUyxLQUFBLENBQUFULE1BQUEsQ0FBQVMsS0FBQSxDQUFBVCxNQUFBLENBQUFTLEtBQUEsTUFBS0wsR0FBTCxvQ0FBU00sT0FBVCxDQUFpQlYsTUFBQSxDQUFBUyxLQUFBLENBQUFGLEdBQUEsaUNBQWpCLDJCQUEwQlAsTUFBQSxDQUFBUyxLQUFBLENBQUFLLFFBQUEsc0JBQTFCO0FBQUEsZ0JBQUFILE9BQUE7QUFBQSxnQkFBQUMsUUFBQTtBQUFBLGdCQUFBQyxJQUFBO0FBQUEsY0FBVixFQUE4Qyw4QkFBOUMsRUFGMEQ7QUFBQSxTQUE5RCxFQUw2QjtBQUFBLEtBQWpDLEVBSndCO0FBQUEsQ0FBNUIifQ==
