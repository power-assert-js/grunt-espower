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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2hhX25vZGUuanMiXSwibmFtZXMiOlsiYXNzZXJ0IiwicmVxdWlyZSIsImRlc2NyaWJlIiwiYmVmb3JlRWFjaCIsImFyeSIsIml0IiwiemVybyIsInR3byIsIl9leHByIiwiX2NhcHQiLCJpbmRleE9mIiwiY29udGVudCIsImZpbGVwYXRoIiwibGluZSIsIm1pbnVzT25lIiwib2siXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLE1BQUEsR0FBU0MsT0FBQSxDQUFRLGNBQVIsQ0FBYjtBQUVBQyxRQUFBLENBQVMsT0FBVCxFQUFrQixZQUFVO0FBQUEsSUFDeEJDLFVBQUEsQ0FBVyxZQUFVO0FBQUEsUUFDakIsS0FBS0MsR0FBTCxHQUFXO0FBQUEsWUFBQyxDQUFEO0FBQUEsWUFBRyxDQUFIO0FBQUEsWUFBSyxDQUFMO0FBQUEsU0FBWCxDQURpQjtBQUFBLEtBQXJCLEVBRHdCO0FBQUEsSUFJeEJGLFFBQUEsQ0FBUyxZQUFULEVBQXVCLFlBQVU7QUFBQSxRQUM3QkcsRUFBQSxDQUFHLGdEQUFILEVBQXFELFlBQVU7QUFBQSxZQUMzRCxJQUFJQyxJQUFBLEdBQU8sQ0FBWCxFQUFjQyxHQUFBLEdBQU0sQ0FBcEIsQ0FEMkQ7QUFBQSxZQUUzRFAsTUFBQSxDQUFPQSxNQUFBLENBQUFRLEtBQUEsQ0FBQVIsTUFBQSxDQUFBUyxLQUFBLENBQUFULE1BQUEsQ0FBQVMsS0FBQSxDQUFBVCxNQUFBLENBQUFTLEtBQUEsTUFBS0wsR0FBTCxvQ0FBU00sT0FBVCxDQUFpQlYsTUFBQSxDQUFBUyxLQUFBLENBQUFILElBQUEsaUNBQWpCLDJCQUEyQk4sTUFBQSxDQUFBUyxLQUFBLENBQUFGLEdBQUEsc0JBQTNCO0FBQUEsZ0JBQUFJLE9BQUE7QUFBQSxnQkFBQUMsUUFBQTtBQUFBLGdCQUFBQyxJQUFBO0FBQUEsY0FBUCxFQUYyRDtBQUFBLFNBQS9ELEVBRDZCO0FBQUEsUUFLN0JSLEVBQUEsQ0FBRywrQ0FBSCxFQUFvRCxZQUFVO0FBQUEsWUFDMUQsSUFBSVMsUUFBQSxHQUFXLENBQUMsQ0FBaEIsRUFBbUJQLEdBQUEsR0FBTSxDQUF6QixDQUQwRDtBQUFBLFlBRTFEUCxNQUFBLENBQU9lLEVBQVAsQ0FBVWYsTUFBQSxDQUFBUSxLQUFBLENBQUFSLE1BQUEsQ0FBQVMsS0FBQSxDQUFBVCxNQUFBLENBQUFTLEtBQUEsQ0FBQVQsTUFBQSxDQUFBUyxLQUFBLE1BQUtMLEdBQUwsb0NBQVNNLE9BQVQsQ0FBaUJWLE1BQUEsQ0FBQVMsS0FBQSxDQUFBRixHQUFBLGlDQUFqQiwyQkFBMEJQLE1BQUEsQ0FBQVMsS0FBQSxDQUFBSyxRQUFBLHNCQUExQjtBQUFBLGdCQUFBSCxPQUFBO0FBQUEsZ0JBQUFDLFFBQUE7QUFBQSxnQkFBQUMsSUFBQTtBQUFBLGNBQVYsRUFBOEMsOEJBQTlDLEVBRjBEO0FBQUEsU0FBOUQsRUFMNkI7QUFBQSxLQUFqQyxFQUp3QjtBQUFBLENBQTVCIiwiZmlsZSI6Im1vY2hhX25vZGUuanMiLCJzb3VyY2VSb290IjoiLi4vdGVzdC9maXh0dXJlcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhc3NlcnQgPSByZXF1aXJlKCdwb3dlci1hc3NlcnQnKTtcblxuZGVzY3JpYmUoJ0FycmF5JywgZnVuY3Rpb24oKXtcbiAgICBiZWZvcmVFYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHRoaXMuYXJ5ID0gWzEsMiwzXTtcbiAgICB9KTtcbiAgICBkZXNjcmliZSgnI2luZGV4T2YoKScsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGl0KCdzaG91bGQgcmV0dXJuIC0xIHdoZW4gdGhlIHZhbHVlIGlzIG5vdCBwcmVzZW50JywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciB6ZXJvID0gMCwgdHdvID0gMjtcbiAgICAgICAgICAgIGFzc2VydCh0aGlzLmFyeS5pbmRleE9mKHplcm8pID09PSB0d28pO1xuICAgICAgICB9KTtcbiAgICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gaW5kZXggd2hlbiB0aGUgdmFsdWUgaXMgcHJlc2VudCcsIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICB2YXIgbWludXNPbmUgPSAtMSwgdHdvID0gMjtcbiAgICAgICAgICAgIGFzc2VydC5vayh0aGlzLmFyeS5pbmRleE9mKHR3bykgPT09IG1pbnVzT25lLCAnVEhJUyBJUyBBTiBBU1NFUlRJT04gTUVTU0FHRScpO1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0pO1xuIl19
