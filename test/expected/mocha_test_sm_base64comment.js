var _PowerAssertRecorder1 = function () {
    function PowerAssertRecorder() {
        this.captured = [];
    }
    PowerAssertRecorder.prototype._capt = function _capt(value, espath) {
        this.captured.push({
            value: value,
            espath: espath
        });
        return value;
    };
    PowerAssertRecorder.prototype._expr = function _expr(value, source) {
        return {
            powerAssertContext: {
                value: value,
                events: this.captured
            },
            source: source
        };
    };
    return PowerAssertRecorder;
}();
var assert = require('power-assert');
describe('Array', function () {
    var ary;
    beforeEach(function () {
        ary = [
            1,
            2,
            3
        ];
    });
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            var _rec1 = new _PowerAssertRecorder1();
            var zero = 0, two = 2;
            assert(_rec1._expr(_rec1._capt(_rec1._capt(_rec1._capt(ary, 'arguments/0/left/callee/object').indexOf(_rec1._capt(zero, 'arguments/0/left/arguments/0')), 'arguments/0/left') === _rec1._capt(two, 'arguments/0/right'), 'arguments/0'), {
                content: 'assert(ary.indexOf(zero) === two)',
                filepath: 'typescript_mocha_node.ts',
                line: 18
            }));
        });
        it('should return index when the value is present', function () {
            var _rec2 = new _PowerAssertRecorder1();
            var minusOne = -1, two = 2;
            assert.ok(_rec2._expr(_rec2._capt(_rec2._capt(_rec2._capt(ary, 'arguments/0/left/callee/object').indexOf(_rec2._capt(two, 'arguments/0/left/arguments/0')), 'arguments/0/left') === _rec2._capt(minusOne, 'arguments/0/right'), 'arguments/0'), {
                content: 'assert.ok(ary.indexOf(two) === minusOne, \'THIS IS AN ASSERTION MESSAGE\')',
                filepath: 'typescript_mocha_node.ts',
                line: 22
            }), 'THIS IS AN ASSERTION MESSAGE');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGVzY3JpcHRfbW9jaGFfbm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxJQUFBLHFCQUFBO0FBQUEsYUFBQSxtQkFBQTtBQUFBLGFBQUEsUUFBQTtBQUFBO0FBQUEsSUFBQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSxLQUFBLFlBQUEsS0FBQSxDQUFBLEtBQUEsRUFBQSxNQUFBO0FBQUEsYUFBQSxRQUFBLENBQUEsSUFBQTtBQUFBLFlBQUEsS0FBQSxFQUFBLEtBQUE7QUFBQSxZQUFBLE1BQUEsRUFBQSxNQUFBO0FBQUE7QUFBQSxlQUFBLEtBQUE7QUFBQTtBQUFBLElBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEsS0FBQSxZQUFBLEtBQUEsQ0FBQSxLQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUEsWUFBQSxrQkFBQTtBQUFBLGdCQUFBLEtBQUEsRUFBQSxLQUFBO0FBQUEsZ0JBQUEsTUFBQSxPQUFBLFFBQUE7QUFBQTtBQUFBLFlBQUEsTUFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBO0FBQUEsV0FBQSxtQkFBQTtBQUFBO0FBQUEsSUFBSSxNQUFBLEdBQVMsT0FBQSxDQUFRLGNBQVIsQ0FBYjtBQUVBLFFBQUEsQ0FBUyxPQUFULEVBQWtCLFlBQUE7QUFBQSxJQUNkLElBQUksR0FBSixDQURjO0FBQUEsSUFHZCxVQUFBLENBQVcsWUFBQTtBQUFBLFFBQ1AsR0FBQSxHQUFNO0FBQUEsWUFBQyxDQUFEO0FBQUEsWUFBSSxDQUFKO0FBQUEsWUFBTyxDQUFQO0FBQUEsU0FBTixDQURPO0FBQUEsS0FBWCxFQUhjO0FBQUEsSUFPZCxRQUFBLENBQVMsWUFBVCxFQUF1QixZQUFBO0FBQUEsUUFDbkIsRUFBQSxDQUFHLGdEQUFILEVBQXFELFlBQUE7QUFBQSxZQUUxQyxJQUFBLEtBQUEsT0FBQSxxQkFBQSxHQUYwQztBQUFBLFlBQ2pELElBQUksSUFBQSxHQUFPLENBQVgsRUFBYyxHQUFBLEdBQU0sQ0FBcEIsQ0FEaUQ7QUFBQSxZQUVqRCxNQUFBLENBQU8sS0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxHQUFBLG9DQUFJLE9BQUosQ0FBQSxLQUFZLENBQUEsS0FBQSxDQUFBLElBQUEsaUNBQVosMkJBQUEsS0FBc0IsQ0FBQSxLQUFBLENBQUEsR0FBQSxzQkFBdEI7QUFBQSxnQkFBQSxPQUFBO0FBQUEsZ0JBQUEsUUFBQTtBQUFBLGdCQUFBLElBQUE7QUFBQSxjQUFQLEVBRmlEO0FBQUEsU0FBckQsRUFEbUI7QUFBQSxRQUtuQixFQUFBLENBQUcsK0NBQUgsRUFBb0QsWUFBQTtBQUFBLFlBRXRDLElBQUEsS0FBQSxPQUFBLHFCQUFBLEdBRnNDO0FBQUEsWUFDaEQsSUFBSSxRQUFBLEdBQVcsQ0FBQyxDQUFoQixFQUFtQixHQUFBLEdBQU0sQ0FBekIsQ0FEZ0Q7QUFBQSxZQUVoRCxNQUFBLENBQU8sRUFBUCxDQUFVLEtBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsR0FBQSxvQ0FBSSxPQUFKLENBQUEsS0FBWSxDQUFBLEtBQUEsQ0FBQSxHQUFBLGlDQUFaLDJCQUFBLEtBQXFCLENBQUEsS0FBQSxDQUFBLFFBQUEsc0JBQXJCO0FBQUEsZ0JBQUEsT0FBQTtBQUFBLGdCQUFBLFFBQUE7QUFBQSxnQkFBQSxJQUFBO0FBQUEsY0FBVixFQUF5Qyw4QkFBekMsRUFGZ0Q7QUFBQSxTQUFwRCxFQUxtQjtBQUFBLEtBQXZCLEVBUGM7QUFBQSxDQUFsQiIsImZpbGUiOiJtb2NoYV90ZXN0X3NtX2Jhc2U2NGNvbW1lbnQuanMiLCJzb3VyY2VSb290IjoiLi4vdGVzdC9maXh0dXJlcyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIHJlcXVpcmU6YW55O1xuZGVjbGFyZSB2YXIgZGVzY3JpYmU6YW55O1xuZGVjbGFyZSB2YXIgaXQ6YW55O1xuZGVjbGFyZSB2YXIgYmVmb3JlRWFjaDphbnk7XG5cbnZhciBhc3NlcnQgPSByZXF1aXJlKCdwb3dlci1hc3NlcnQnKTtcblxuZGVzY3JpYmUoJ0FycmF5JywgKCkgPT4ge1xuICAgIHZhciBhcnk6IG51bWJlcltdO1xuXG4gICAgYmVmb3JlRWFjaCgoKSA9PiB7XG4gICAgICAgIGFyeSA9IFsxLCAyLCAzXTtcbiAgICB9KTtcblxuICAgIGRlc2NyaWJlKCcjaW5kZXhPZigpJywgKCkgPT4ge1xuICAgICAgICBpdCgnc2hvdWxkIHJldHVybiAtMSB3aGVuIHRoZSB2YWx1ZSBpcyBub3QgcHJlc2VudCcsICgpID0+IHtcbiAgICAgICAgICAgIHZhciB6ZXJvID0gMCwgdHdvID0gMjtcbiAgICAgICAgICAgIGFzc2VydChhcnkuaW5kZXhPZih6ZXJvKSA9PT0gdHdvKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGl0KCdzaG91bGQgcmV0dXJuIGluZGV4IHdoZW4gdGhlIHZhbHVlIGlzIHByZXNlbnQnLCAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgbWludXNPbmUgPSAtMSwgdHdvID0gMjtcbiAgICAgICAgICAgIGFzc2VydC5vayhhcnkuaW5kZXhPZih0d28pID09PSBtaW51c09uZSwgJ1RISVMgSVMgQU4gQVNTRVJUSU9OIE1FU1NBR0UnKTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG59KTtcbiJdfQ==
