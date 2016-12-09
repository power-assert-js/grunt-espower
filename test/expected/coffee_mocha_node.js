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
var assert;
assert = require('power-assert');
describe('Array', function () {
    beforeEach(function () {
        return this.ary = [
            1,
            2,
            3
        ];
    });
    return describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            var _rec1 = new _PowerAssertRecorder1();
            var two, zero;
            zero = 0;
            two = 2;
            return assert(_rec1._expr(_rec1._capt(_rec1._capt(_rec1._capt(this.ary, 'arguments/0/left/callee/object').indexOf(_rec1._capt(zero, 'arguments/0/left/arguments/0')), 'arguments/0/left') === _rec1._capt(two, 'arguments/0/right'), 'arguments/0'), {
                content: 'assert(this.ary.indexOf(zero) === two)',
                filepath: 'coffee_mocha_node.coffee',
                line: 11
            }));
        });
        return it('should return index when the value is present', function () {
            var _rec2 = new _PowerAssertRecorder1();
            var minusOne, two;
            minusOne = -1;
            two = 2;
            return assert.ok(_rec2._expr(_rec2._capt(_rec2._capt(_rec2._capt(this.ary, 'arguments/0/left/callee/object').indexOf(_rec2._capt(two, 'arguments/0/left/arguments/0')), 'arguments/0/left') === _rec2._capt(minusOne, 'arguments/0/right'), 'arguments/0'), {
                content: 'assert.ok(this.ary.indexOf(two) === minusOne, \'THIS IS AN ASSERTION MESSAGE\')',
                filepath: 'coffee_mocha_node.coffee',
                line: 16
            }), 'THIS IS AN ASSERTION MESSAGE');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZmZlZV9tb2NoYV9ub2RlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLHFCQUFBO0FBQUEsYUFBQSxtQkFBQTtBQUFBLGFBQUEsUUFBQTtBQUFBO0FBQUEsSUFBQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSxLQUFBLFlBQUEsS0FBQSxDQUFBLEtBQUEsRUFBQSxNQUFBO0FBQUEsYUFBQSxRQUFBLENBQUEsSUFBQTtBQUFBLFlBQUEsS0FBQSxFQUFBLEtBQUE7QUFBQSxZQUFBLE1BQUEsRUFBQSxNQUFBO0FBQUE7QUFBQSxlQUFBLEtBQUE7QUFBQTtBQUFBLElBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEsS0FBQSxZQUFBLEtBQUEsQ0FBQSxLQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUEsWUFBQSxrQkFBQTtBQUFBLGdCQUFBLEtBQUEsRUFBQSxLQUFBO0FBQUEsZ0JBQUEsTUFBQSxPQUFBLFFBQUE7QUFBQTtBQUFBLFlBQUEsTUFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBO0FBQUEsV0FBQSxtQkFBQTtBQUFBO0FBQUEsSUFBQSxNQUFBO0FBQUEsTUFBQSxHQUFTLE9BQUEsQ0FBUSxjQUFSLENBQVQsQ0FBQTtBQUVBLFFBQUEsQ0FBUyxPQUFULEVBQWtCLFlBQUE7QUFBQSxJQUNoQixVQUFBLENBQVcsWUFBQTtBQUFBLGVBQ1QsS0FBQyxHQUFELEdBQU87QUFBQSxZQUFDLENBQUQ7QUFBQSxZQUFHLENBQUg7QUFBQSxZQUFLLENBQUw7QUFBQSxVQURFO0FBQUEsS0FBWCxFQURnQjtBQUFBLFdBSWhCLFFBQUEsQ0FBUyxZQUFULEVBQXVCLFlBQUE7QUFBQSxRQUNyQixFQUFBLENBQUcsZ0RBQUgsRUFBcUQsWUFBQTtBQUFBLFlBRzVDLElBQUEsS0FBQSxPQUFBLHFCQUFBLEdBSDRDO0FBQUEsWUFDbkQsSUFBQSxHQUFBLEVBQUEsSUFBQSxDQURtRDtBQUFBLFlBQ25ELElBQUEsR0FBTyxDQUFQLENBRG1EO0FBQUEsWUFFbkQsR0FBQSxHQUFNLENBQU4sQ0FGbUQ7QUFBQSxtQkFHbkQsTUFBQSxDQUFPLEtBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLE1BQUMsR0FBRCxvQ0FBSyxPQUFMLENBQUEsS0FBYSxDQUFBLEtBQUEsQ0FBQSxJQUFBLGlDQUFiLDJCQUFBLEtBQXNCLENBQUEsS0FBQSxDQUFBLEdBQUEsc0JBQXRCO0FBQUEsZ0JBQUEsT0FBQTtBQUFBLGdCQUFBLFFBQUE7QUFBQSxnQkFBQSxJQUFBO0FBQUEsY0FBUCxFQUhtRDtBQUFBLFNBQXJELEVBRHFCO0FBQUEsZUFNckIsRUFBQSxDQUFHLCtDQUFILEVBQW9ELFlBQUE7QUFBQSxZQUd4QyxJQUFBLEtBQUEsT0FBQSxxQkFBQSxHQUh3QztBQUFBLFlBQ2xELElBQUEsUUFBQSxFQUFBLEdBQUEsQ0FEa0Q7QUFBQSxZQUNsRCxRQUFBLEdBQVcsQ0FBQyxDQUFaLENBRGtEO0FBQUEsWUFFbEQsR0FBQSxHQUFNLENBQU4sQ0FGa0Q7QUFBQSxtQkFHbEQsTUFBQSxDQUFPLEVBQVAsQ0FBVSxLQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxNQUFDLEdBQUQsb0NBQUssT0FBTCxDQUFBLEtBQWEsQ0FBQSxLQUFBLENBQUEsR0FBQSxpQ0FBYiwyQkFBQSxLQUFxQixDQUFBLEtBQUEsQ0FBQSxRQUFBLHNCQUFyQjtBQUFBLGdCQUFBLE9BQUE7QUFBQSxnQkFBQSxRQUFBO0FBQUEsZ0JBQUEsSUFBQTtBQUFBLGNBQVYsRUFBeUMsOEJBQXpDLEVBSGtEO0FBQUEsU0FBcEQsRUFOcUI7QUFBQSxLQUF2QixFQUpnQjtBQUFBLENBQWxCIiwiZmlsZSI6ImNvZmZlZV9tb2NoYV9ub2RlLmpzIiwic291cmNlUm9vdCI6Ii4uL3Rlc3QvZml4dHVyZXMiLCJzb3VyY2VzQ29udGVudCI6WyJhc3NlcnQgPSByZXF1aXJlICdwb3dlci1hc3NlcnQnXG5cbmRlc2NyaWJlICdBcnJheScsICgpIC0+XG4gIGJlZm9yZUVhY2ggKCkgLT5cbiAgICBAYXJ5ID0gWzEsMiwzXTtcblxuICBkZXNjcmliZSAnI2luZGV4T2YoKScsICgpIC0+XG4gICAgaXQgJ3Nob3VsZCByZXR1cm4gLTEgd2hlbiB0aGUgdmFsdWUgaXMgbm90IHByZXNlbnQnLCAoKSAtPlxuICAgICAgemVybyA9IDBcbiAgICAgIHR3byA9IDJcbiAgICAgIGFzc2VydCBAYXJ5LmluZGV4T2YoemVybykgPT0gdHdvXG5cbiAgICBpdCAnc2hvdWxkIHJldHVybiBpbmRleCB3aGVuIHRoZSB2YWx1ZSBpcyBwcmVzZW50JywgKCkgLT5cbiAgICAgIG1pbnVzT25lID0gLTFcbiAgICAgIHR3byA9IDJcbiAgICAgIGFzc2VydC5vayBAYXJ5LmluZGV4T2YodHdvKSA9PSBtaW51c09uZSwgJ1RISVMgSVMgQU4gQVNTRVJUSU9OIE1FU1NBR0UnXG4iXX0=
