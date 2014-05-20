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
                filepath: 'test/fixtures/subdir/test_in_subdir.js',
                line: 10
            }));
        });
        it('should return index when the value is present', function () {
            var minusOne = -1, two = 2;
            assert.ok(assert._expr(assert._capt(assert._capt(assert._capt(this.ary, 'arguments/0/left/callee/object').indexOf(assert._capt(two, 'arguments/0/left/arguments/0')), 'arguments/0/left') === assert._capt(minusOne, 'arguments/0/right'), 'arguments/0'), {
                content: 'assert.ok(this.ary.indexOf(two) === minusOne, \'THIS IS AN ASSERTION MESSAGE\')',
                filepath: 'test/fixtures/subdir/test_in_subdir.js',
                line: 14
            }), 'THIS IS AN ASSERTION MESSAGE');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QvZml4dHVyZXMvc3ViZGlyL3Rlc3RfaW5fc3ViZGlyLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJkZXNjcmliZSIsImJlZm9yZUVhY2giLCJhcnkiLCJpdCIsInplcm8iLCJ0d28iLCJfZXhwciIsIl9jYXB0IiwiaW5kZXhPZiIsImNvbnRlbnQiLCJmaWxlcGF0aCIsImxpbmUiLCJtaW51c09uZSIsIm9rIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFJQSxNQUFBLEdBQVNDLE9BQUEsQ0FBUSxjQUFSLENBQWI7QUFFQUMsUUFBQSxDQUFTLE9BQVQsRUFBa0IsWUFBVTtBQUFBLElBQ3hCQyxVQUFBLENBQVcsWUFBVTtBQUFBLFFBQ2pCLEtBQUtDLEdBQUwsR0FBVztBQUFBLFlBQUMsQ0FBRDtBQUFBLFlBQUcsQ0FBSDtBQUFBLFlBQUssQ0FBTDtBQUFBLFNBQVgsQ0FEaUI7QUFBQSxLQUFyQixFQUR3QjtBQUFBLElBSXhCRixRQUFBLENBQVMsWUFBVCxFQUF1QixZQUFVO0FBQUEsUUFDN0JHLEVBQUEsQ0FBRyxnREFBSCxFQUFxRCxZQUFVO0FBQUEsWUFDM0QsSUFBSUMsSUFBQSxHQUFPLENBQVgsRUFBY0MsR0FBQSxHQUFNLENBQXBCLENBRDJEO0FBQUEsWUFFM0RQLE1BQUEsQ0FBT0EsTUFBQSxDQUFBUSxLQUFBLENBQUFSLE1BQUEsQ0FBQVMsS0FBQSxDQUFBVCxNQUFBLENBQUFTLEtBQUEsQ0FBQVQsTUFBQSxDQUFBUyxLQUFBLE1BQUtMLEdBQUwsb0NBQVNNLE9BQVQsQ0FBaUJWLE1BQUEsQ0FBQVMsS0FBQSxDQUFBSCxJQUFBLGlDQUFqQiwyQkFBMkJOLE1BQUEsQ0FBQVMsS0FBQSxDQUFBRixHQUFBLHNCQUEzQjtBQUFBLGdCQUFBSSxPQUFBO0FBQUEsZ0JBQUFDLFFBQUE7QUFBQSxnQkFBQUMsSUFBQTtBQUFBLGNBQVAsRUFGMkQ7QUFBQSxTQUEvRCxFQUQ2QjtBQUFBLFFBSzdCUixFQUFBLENBQUcsK0NBQUgsRUFBb0QsWUFBVTtBQUFBLFlBQzFELElBQUlTLFFBQUEsR0FBVyxDQUFDLENBQWhCLEVBQW1CUCxHQUFBLEdBQU0sQ0FBekIsQ0FEMEQ7QUFBQSxZQUUxRFAsTUFBQSxDQUFPZSxFQUFQLENBQVVmLE1BQUEsQ0FBQVEsS0FBQSxDQUFBUixNQUFBLENBQUFTLEtBQUEsQ0FBQVQsTUFBQSxDQUFBUyxLQUFBLENBQUFULE1BQUEsQ0FBQVMsS0FBQSxNQUFLTCxHQUFMLG9DQUFTTSxPQUFULENBQWlCVixNQUFBLENBQUFTLEtBQUEsQ0FBQUYsR0FBQSxpQ0FBakIsMkJBQTBCUCxNQUFBLENBQUFTLEtBQUEsQ0FBQUssUUFBQSxzQkFBMUI7QUFBQSxnQkFBQUgsT0FBQTtBQUFBLGdCQUFBQyxRQUFBO0FBQUEsZ0JBQUFDLElBQUE7QUFBQSxjQUFWLEVBQThDLDhCQUE5QyxFQUYwRDtBQUFBLFNBQTlELEVBTDZCO0FBQUEsS0FBakMsRUFKd0I7QUFBQSxDQUE1QiIsInNvdXJjZXNDb250ZW50IjpbInZhciBhc3NlcnQgPSByZXF1aXJlKCdwb3dlci1hc3NlcnQnKTtcblxuZGVzY3JpYmUoJ0FycmF5JywgZnVuY3Rpb24oKXtcbiAgICBiZWZvcmVFYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuYXJ5ID0gWzEsMiwzXTtcbiAgICB9KTtcbiAgICBkZXNjcmliZSgnI2luZGV4T2YoKScsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGl0KCdzaG91bGQgcmV0dXJuIC0xIHdoZW4gdGhlIHZhbHVlIGlzIG5vdCBwcmVzZW50JywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciB6ZXJvID0gMCwgdHdvID0gMjtcbiAgICAgICAgICAgIGFzc2VydCh0aGlzLmFyeS5pbmRleE9mKHplcm8pID09PSB0d28pO1xuICAgICAgICB9KTtcbiAgICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gaW5kZXggd2hlbiB0aGUgdmFsdWUgaXMgcHJlc2VudCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgbWludXNPbmUgPSAtMSwgdHdvID0gMjtcbiAgICAgICAgICAgIGFzc2VydC5vayh0aGlzLmFyeS5pbmRleE9mKHR3bykgPT09IG1pbnVzT25lLCAnVEhJUyBJUyBBTiBBU1NFUlRJT04gTUVTU0FHRScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl19
