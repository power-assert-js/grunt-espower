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
                filepath: 'test/fixtures/subdir/test_in_subdir.js',
                line: 10
            }));
        });
        it('should return index when the value is present', function () {
            var _rec2 = new _PowerAssertRecorder1();
            var minusOne = -1, two = 2;
            assert.ok(_rec2._expr(_rec2._capt(_rec2._capt(_rec2._capt(this.ary, 'arguments/0/left/callee/object').indexOf(_rec2._capt(two, 'arguments/0/left/arguments/0')), 'arguments/0/left') === _rec2._capt(minusOne, 'arguments/0/right'), 'arguments/0'), {
                content: 'assert.ok(this.ary.indexOf(two) === minusOne, \'THIS IS AN ASSERTION MESSAGE\')',
                filepath: 'test/fixtures/subdir/test_in_subdir.js',
                line: 14
            }), 'THIS IS AN ASSERTION MESSAGE');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3RfaW5fc3ViZGlyLmpzIl0sIm5hbWVzIjpbIl9Qb3dlckFzc2VydFJlY29yZGVyMSIsIlBvd2VyQXNzZXJ0UmVjb3JkZXIiLCJjYXB0dXJlZCIsInByb3RvdHlwZSIsIl9jYXB0IiwidmFsdWUiLCJlc3BhdGgiLCJwdXNoIiwiX2V4cHIiLCJzb3VyY2UiLCJwb3dlckFzc2VydENvbnRleHQiLCJldmVudHMiLCJhc3NlcnQiLCJyZXF1aXJlIiwiZGVzY3JpYmUiLCJiZWZvcmVFYWNoIiwiYXJ5IiwiaXQiLCJfcmVjMSIsInplcm8iLCJ0d28iLCJpbmRleE9mIiwiY29udGVudCIsImZpbGVwYXRoIiwibGluZSIsIl9yZWMyIiwibWludXNPbmUiLCJvayJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBQUEscUJBQUE7QUFBQSxhQUFBQyxtQkFBQTtBQUFBLGFBQUFDLFFBQUE7QUFBQTtBQUFBLElBQUFELG1CQUFBLENBQUFFLFNBQUEsQ0FBQUMsS0FBQSxZQUFBQSxLQUFBLENBQUFDLEtBQUEsRUFBQUMsTUFBQTtBQUFBLGFBQUFKLFFBQUEsQ0FBQUssSUFBQTtBQUFBLFlBQUFGLEtBQUEsRUFBQUEsS0FBQTtBQUFBLFlBQUFDLE1BQUEsRUFBQUEsTUFBQTtBQUFBO0FBQUEsZUFBQUQsS0FBQTtBQUFBO0FBQUEsSUFBQUosbUJBQUEsQ0FBQUUsU0FBQSxDQUFBSyxLQUFBLFlBQUFBLEtBQUEsQ0FBQUgsS0FBQSxFQUFBSSxNQUFBO0FBQUE7QUFBQSxZQUFBQyxrQkFBQTtBQUFBLGdCQUFBTCxLQUFBLEVBQUFBLEtBQUE7QUFBQSxnQkFBQU0sTUFBQSxPQUFBVCxRQUFBO0FBQUE7QUFBQSxZQUFBTyxNQUFBLEVBQUFBLE1BQUE7QUFBQTtBQUFBO0FBQUEsV0FBQVIsbUJBQUE7QUFBQTtBQUFBLElBQUlXLE1BQUEsR0FBU0MsT0FBQSxDQUFRLGNBQVIsQ0FBYjtBQUVBQyxRQUFBLENBQVMsT0FBVCxFQUFrQixZQUFVO0FBQUEsSUFDeEJDLFVBQUEsQ0FBVyxZQUFVO0FBQUEsUUFDakIsS0FBS0MsR0FBTCxHQUFXO0FBQUEsWUFBQyxDQUFEO0FBQUEsWUFBRyxDQUFIO0FBQUEsWUFBSyxDQUFMO0FBQUEsU0FBWCxDQURpQjtBQUFBLEtBQXJCLEVBRHdCO0FBQUEsSUFJeEJGLFFBQUEsQ0FBUyxZQUFULEVBQXVCLFlBQVU7QUFBQSxRQUM3QkcsRUFBQSxDQUFHLGdEQUFILEVBQXFELFlBQVU7QUFBQSxZQUVwRCxJQUFBQyxLQUFBLE9BQUFsQixxQkFBQSxHQUZvRDtBQUFBLFlBQzNELElBQUltQixJQUFBLEdBQU8sQ0FBWCxFQUFjQyxHQUFBLEdBQU0sQ0FBcEIsQ0FEMkQ7QUFBQSxZQUUzRFIsTUFBQSxDQUFPTSxLQUFBLENBQUFWLEtBQUEsQ0FBQVUsS0FBQSxDQUFBZCxLQUFBLENBQUFjLEtBQUEsQ0FBQWQsS0FBQSxDQUFBYyxLQUFBLENBQUFkLEtBQUEsTUFBS1ksR0FBTCxvQ0FBU0ssT0FBVCxDQUFBSCxLQUFpQixDQUFBZCxLQUFBLENBQUFlLElBQUEsaUNBQWpCLDJCQUFBRCxLQUEyQixDQUFBZCxLQUFBLENBQUFnQixHQUFBLHNCQUEzQjtBQUFBLGdCQUFBRSxPQUFBO0FBQUEsZ0JBQUFDLFFBQUE7QUFBQSxnQkFBQUMsSUFBQTtBQUFBLGNBQVAsRUFGMkQ7QUFBQSxTQUEvRCxFQUQ2QjtBQUFBLFFBSzdCUCxFQUFBLENBQUcsK0NBQUgsRUFBb0QsWUFBVTtBQUFBLFlBRWhELElBQUFRLEtBQUEsT0FBQXpCLHFCQUFBLEdBRmdEO0FBQUEsWUFDMUQsSUFBSTBCLFFBQUEsR0FBVyxDQUFDLENBQWhCLEVBQW1CTixHQUFBLEdBQU0sQ0FBekIsQ0FEMEQ7QUFBQSxZQUUxRFIsTUFBQSxDQUFPZSxFQUFQLENBQVVGLEtBQUEsQ0FBQWpCLEtBQUEsQ0FBQWlCLEtBQUEsQ0FBQXJCLEtBQUEsQ0FBQXFCLEtBQUEsQ0FBQXJCLEtBQUEsQ0FBQXFCLEtBQUEsQ0FBQXJCLEtBQUEsTUFBS1ksR0FBTCxvQ0FBU0ssT0FBVCxDQUFBSSxLQUFpQixDQUFBckIsS0FBQSxDQUFBZ0IsR0FBQSxpQ0FBakIsMkJBQUFLLEtBQTBCLENBQUFyQixLQUFBLENBQUFzQixRQUFBLHNCQUExQjtBQUFBLGdCQUFBSixPQUFBO0FBQUEsZ0JBQUFDLFFBQUE7QUFBQSxnQkFBQUMsSUFBQTtBQUFBLGNBQVYsRUFBOEMsOEJBQTlDLEVBRjBEO0FBQUEsU0FBOUQsRUFMNkI7QUFBQSxLQUFqQyxFQUp3QjtBQUFBLENBQTVCIiwiZmlsZSI6InRlc3RfaW5fc3ViZGlyLmpzIiwic291cmNlUm9vdCI6Ii4uLy4uL3Rlc3QvZml4dHVyZXMvc3ViZGlyIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFzc2VydCA9IHJlcXVpcmUoJ3Bvd2VyLWFzc2VydCcpO1xuXG5kZXNjcmliZSgnQXJyYXknLCBmdW5jdGlvbigpe1xuICAgIGJlZm9yZUVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgdGhpcy5hcnkgPSBbMSwyLDNdO1xuICAgIH0pO1xuICAgIGRlc2NyaWJlKCcjaW5kZXhPZigpJywgZnVuY3Rpb24oKXtcbiAgICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gLTEgd2hlbiB0aGUgdmFsdWUgaXMgbm90IHByZXNlbnQnLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdmFyIHplcm8gPSAwLCB0d28gPSAyO1xuICAgICAgICAgICAgYXNzZXJ0KHRoaXMuYXJ5LmluZGV4T2YoemVybykgPT09IHR3byk7XG4gICAgICAgIH0pO1xuICAgICAgICBpdCgnc2hvdWxkIHJldHVybiBpbmRleCB3aGVuIHRoZSB2YWx1ZSBpcyBwcmVzZW50JywgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHZhciBtaW51c09uZSA9IC0xLCB0d28gPSAyO1xuICAgICAgICAgICAgYXNzZXJ0Lm9rKHRoaXMuYXJ5LmluZGV4T2YodHdvKSA9PT0gbWludXNPbmUsICdUSElTIElTIEFOIEFTU0VSVElPTiBNRVNTQUdFJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXX0=
