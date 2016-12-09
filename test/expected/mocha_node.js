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
    beforeEach(function () {
        this.ary = [
            1,
            2,
            3
        ];
    });
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', function () {
            var _rec1 = new _PowerAssertRecorder1();
            var zero = 0, two = 2;
            assert(_rec1._expr(_rec1._capt(_rec1._capt(_rec1._capt(this.ary, 'arguments/0/left/callee/object').indexOf(_rec1._capt(zero, 'arguments/0/left/arguments/0')), 'arguments/0/left') === _rec1._capt(two, 'arguments/0/right'), 'arguments/0'), {
                content: 'assert(this.ary.indexOf(zero) === two)',
                filepath: 'test/fixtures/mocha_node.js',
                line: 10
            }));
        });
        it('should return index when the value is present', function () {
            var _rec2 = new _PowerAssertRecorder1();
            var minusOne = -1, two = 2;
            assert.ok(_rec2._expr(_rec2._capt(_rec2._capt(_rec2._capt(this.ary, 'arguments/0/left/callee/object').indexOf(_rec2._capt(two, 'arguments/0/left/arguments/0')), 'arguments/0/left') === _rec2._capt(minusOne, 'arguments/0/right'), 'arguments/0'), {
                content: 'assert.ok(this.ary.indexOf(two) === minusOne, \'THIS IS AN ASSERTION MESSAGE\')',
                filepath: 'test/fixtures/mocha_node.js',
                line: 14
            }), 'THIS IS AN ASSERTION MESSAGE');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vY2hhX25vZGUuanMiXSwibmFtZXMiOlsiX1Bvd2VyQXNzZXJ0UmVjb3JkZXIxIiwiUG93ZXJBc3NlcnRSZWNvcmRlciIsImNhcHR1cmVkIiwicHJvdG90eXBlIiwiX2NhcHQiLCJ2YWx1ZSIsImVzcGF0aCIsInB1c2giLCJfZXhwciIsInNvdXJjZSIsInBvd2VyQXNzZXJ0Q29udGV4dCIsImV2ZW50cyIsImFzc2VydCIsInJlcXVpcmUiLCJkZXNjcmliZSIsImJlZm9yZUVhY2giLCJhcnkiLCJpdCIsIl9yZWMxIiwiemVybyIsInR3byIsImluZGV4T2YiLCJjb250ZW50IiwiZmlsZXBhdGgiLCJsaW5lIiwiX3JlYzIiLCJtaW51c09uZSIsIm9rIl0sIm1hcHBpbmdzIjoiQUFBQSxJQUFBQSxxQkFBQTtBQUFBLGFBQUFDLG1CQUFBO0FBQUEsYUFBQUMsUUFBQTtBQUFBO0FBQUEsSUFBQUQsbUJBQUEsQ0FBQUUsU0FBQSxDQUFBQyxLQUFBLFlBQUFBLEtBQUEsQ0FBQUMsS0FBQSxFQUFBQyxNQUFBO0FBQUEsYUFBQUosUUFBQSxDQUFBSyxJQUFBO0FBQUEsWUFBQUYsS0FBQSxFQUFBQSxLQUFBO0FBQUEsWUFBQUMsTUFBQSxFQUFBQSxNQUFBO0FBQUE7QUFBQSxlQUFBRCxLQUFBO0FBQUE7QUFBQSxJQUFBSixtQkFBQSxDQUFBRSxTQUFBLENBQUFLLEtBQUEsWUFBQUEsS0FBQSxDQUFBSCxLQUFBLEVBQUFJLE1BQUE7QUFBQTtBQUFBLFlBQUFDLGtCQUFBO0FBQUEsZ0JBQUFMLEtBQUEsRUFBQUEsS0FBQTtBQUFBLGdCQUFBTSxNQUFBLE9BQUFULFFBQUE7QUFBQTtBQUFBLFlBQUFPLE1BQUEsRUFBQUEsTUFBQTtBQUFBO0FBQUE7QUFBQSxXQUFBUixtQkFBQTtBQUFBO0FBQUEsSUFBSVcsTUFBQSxHQUFTQyxPQUFBLENBQVEsY0FBUixDQUFiO0FBRUFDLFFBQUEsQ0FBUyxPQUFULEVBQWtCLFlBQVU7QUFBQSxJQUN4QkMsVUFBQSxDQUFXLFlBQVU7QUFBQSxRQUNqQixLQUFLQyxHQUFMLEdBQVc7QUFBQSxZQUFDLENBQUQ7QUFBQSxZQUFHLENBQUg7QUFBQSxZQUFLLENBQUw7QUFBQSxTQUFYLENBRGlCO0FBQUEsS0FBckIsRUFEd0I7QUFBQSxJQUl4QkYsUUFBQSxDQUFTLFlBQVQsRUFBdUIsWUFBVTtBQUFBLFFBQzdCRyxFQUFBLENBQUcsZ0RBQUgsRUFBcUQsWUFBVTtBQUFBLFlBRXBELElBQUFDLEtBQUEsT0FBQWxCLHFCQUFBLEdBRm9EO0FBQUEsWUFDM0QsSUFBSW1CLElBQUEsR0FBTyxDQUFYLEVBQWNDLEdBQUEsR0FBTSxDQUFwQixDQUQyRDtBQUFBLFlBRTNEUixNQUFBLENBQU9NLEtBQUEsQ0FBQVYsS0FBQSxDQUFBVSxLQUFBLENBQUFkLEtBQUEsQ0FBQWMsS0FBQSxDQUFBZCxLQUFBLENBQUFjLEtBQUEsQ0FBQWQsS0FBQSxNQUFLWSxHQUFMLG9DQUFTSyxPQUFULENBQUFILEtBQWlCLENBQUFkLEtBQUEsQ0FBQWUsSUFBQSxpQ0FBakIsMkJBQUFELEtBQTJCLENBQUFkLEtBQUEsQ0FBQWdCLEdBQUEsc0JBQTNCO0FBQUEsZ0JBQUFFLE9BQUE7QUFBQSxnQkFBQUMsUUFBQTtBQUFBLGdCQUFBQyxJQUFBO0FBQUEsY0FBUCxFQUYyRDtBQUFBLFNBQS9ELEVBRDZCO0FBQUEsUUFLN0JQLEVBQUEsQ0FBRywrQ0FBSCxFQUFvRCxZQUFVO0FBQUEsWUFFaEQsSUFBQVEsS0FBQSxPQUFBekIscUJBQUEsR0FGZ0Q7QUFBQSxZQUMxRCxJQUFJMEIsUUFBQSxHQUFXLENBQUMsQ0FBaEIsRUFBbUJOLEdBQUEsR0FBTSxDQUF6QixDQUQwRDtBQUFBLFlBRTFEUixNQUFBLENBQU9lLEVBQVAsQ0FBVUYsS0FBQSxDQUFBakIsS0FBQSxDQUFBaUIsS0FBQSxDQUFBckIsS0FBQSxDQUFBcUIsS0FBQSxDQUFBckIsS0FBQSxDQUFBcUIsS0FBQSxDQUFBckIsS0FBQSxNQUFLWSxHQUFMLG9DQUFTSyxPQUFULENBQUFJLEtBQWlCLENBQUFyQixLQUFBLENBQUFnQixHQUFBLGlDQUFqQiwyQkFBQUssS0FBMEIsQ0FBQXJCLEtBQUEsQ0FBQXNCLFFBQUEsc0JBQTFCO0FBQUEsZ0JBQUFKLE9BQUE7QUFBQSxnQkFBQUMsUUFBQTtBQUFBLGdCQUFBQyxJQUFBO0FBQUEsY0FBVixFQUE4Qyw4QkFBOUMsRUFGMEQ7QUFBQSxTQUE5RCxFQUw2QjtBQUFBLEtBQWpDLEVBSndCO0FBQUEsQ0FBNUIiLCJmaWxlIjoibW9jaGFfbm9kZS5qcyIsInNvdXJjZVJvb3QiOiIuLi90ZXN0L2ZpeHR1cmVzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFzc2VydCA9IHJlcXVpcmUoJ3Bvd2VyLWFzc2VydCcpO1xuXG5kZXNjcmliZSgnQXJyYXknLCBmdW5jdGlvbigpe1xuICAgIGJlZm9yZUVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5hcnkgPSBbMSwyLDNdO1xuICAgIH0pO1xuICAgIGRlc2NyaWJlKCcjaW5kZXhPZigpJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gLTEgd2hlbiB0aGUgdmFsdWUgaXMgbm90IHByZXNlbnQnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIHplcm8gPSAwLCB0d28gPSAyO1xuICAgICAgICAgICAgYXNzZXJ0KHRoaXMuYXJ5LmluZGV4T2YoemVybykgPT09IHR3byk7XG4gICAgICAgIH0pO1xuICAgICAgICBpdCgnc2hvdWxkIHJldHVybiBpbmRleCB3aGVuIHRoZSB2YWx1ZSBpcyBwcmVzZW50JywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBtaW51c09uZSA9IC0xLCB0d28gPSAyO1xuICAgICAgICAgICAgYXNzZXJ0Lm9rKHRoaXMuYXJ5LmluZGV4T2YodHdvKSA9PT0gbWludXNPbmUsICdUSElTIElTIEFOIEFTU0VSVElPTiBNRVNTQUdFJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXX0=
