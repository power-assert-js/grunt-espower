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
            var two, zero;
            zero = 0;
            two = 2;
            return assert(assert._expr(assert._capt(assert._capt(assert._capt(this.ary, 'arguments/0/left/callee/object').indexOf(assert._capt(zero, 'arguments/0/left/arguments/0')), 'arguments/0/left') === assert._capt(two, 'arguments/0/right'), 'arguments/0'), {
                content: 'assert(this.ary.indexOf(zero) === two)',
                filepath: 'coffee_mocha_node.coffee',
                line: 11
            }));
        });
        return it('should return index when the value is present', function () {
            var minusOne, two;
            minusOne = -1;
            two = 2;
            return assert.ok(assert._expr(assert._capt(assert._capt(assert._capt(this.ary, 'arguments/0/left/callee/object').indexOf(assert._capt(two, 'arguments/0/left/arguments/0')), 'arguments/0/left') === assert._capt(minusOne, 'arguments/0/right'), 'arguments/0'), {
                content: 'assert.ok(this.ary.indexOf(two) === minusOne, \'THIS IS AN ASSERTION MESSAGE\')',
                filepath: 'coffee_mocha_node.coffee',
                line: 16
            }), 'THIS IS AN ASSERTION MESSAGE');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvZmZlZV9tb2NoYV9ub2RlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLE1BQUE7QUFBQSxNQUFBLEdBQVMsT0FBQSxDQUFRLGNBQVIsQ0FBVCxDQUFBO0FBQUEsUUFBQSxDQUVTLE9BRlQsRUFFa0IsWUFBQTtBQUFBLElBQ2hCLFVBQUEsQ0FBVyxZQUFBO0FBQUEsZUFDVCxLQUFDLEdBQUQsR0FBTztBQUFBLFlBQUMsQ0FBRDtBQUFBLFlBQUcsQ0FBSDtBQUFBLFlBQUssQ0FBTDtBQUFBLFVBREU7QUFBQSxLQUFYLEVBRGdCO0FBQUEsV0FJaEIsUUFBQSxDQUFTLFlBQVQsRUFBdUIsWUFBQTtBQUFBLFFBQ3JCLEVBQUEsQ0FBRyxnREFBSCxFQUFxRCxZQUFBO0FBQUEsWUFDbkQsSUFBQSxHQUFBLEVBQUEsSUFBQSxDQURtRDtBQUFBLFlBQ25ELElBQUEsR0FBTyxDQUFQLENBRG1EO0FBQUEsWUFFbkQsR0FBQSxHQUFNLENBQU4sQ0FGbUQ7QUFBQSxtQkFHbkQsTUFBQSxDQUFPLE1BQUEsQ0FBQSxLQUFBLENBQUEsTUFBQSxDQUFBLEtBQUEsQ0FBQSxNQUFBLENBQUEsS0FBQSxDQUFBLE1BQUEsQ0FBQSxLQUFBLE1BQUMsR0FBRCxvQ0FBSyxPQUFMLENBQWEsTUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLGlDQUFiLDJCQUFzQixNQUFBLENBQUEsS0FBQSxDQUFBLEdBQUEsc0JBQXRCO0FBQUEsZ0JBQUEsT0FBQTtBQUFBLGdCQUFBLFFBQUE7QUFBQSxnQkFBQSxJQUFBO0FBQUEsY0FBUCxFQUhtRDtBQUFBLFNBQXJELEVBRHFCO0FBQUEsZUFNckIsRUFBQSxDQUFHLCtDQUFILEVBQW9ELFlBQUE7QUFBQSxZQUNsRCxJQUFBLFFBQUEsRUFBQSxHQUFBLENBRGtEO0FBQUEsWUFDbEQsUUFBQSxHQUFXLENBQUEsQ0FBWCxDQURrRDtBQUFBLFlBRWxELEdBQUEsR0FBTSxDQUFOLENBRmtEO0FBQUEsbUJBR2xELE1BQUEsQ0FBTyxFQUFQLENBQVUsTUFBQSxDQUFBLEtBQUEsQ0FBQSxNQUFBLENBQUEsS0FBQSxDQUFBLE1BQUEsQ0FBQSxLQUFBLENBQUEsTUFBQSxDQUFBLEtBQUEsTUFBQyxHQUFELG9DQUFLLE9BQUwsQ0FBYSxNQUFBLENBQUEsS0FBQSxDQUFBLEdBQUEsaUNBQWIsMkJBQXFCLE1BQUEsQ0FBQSxLQUFBLENBQUEsUUFBQSxzQkFBckI7QUFBQSxnQkFBQSxPQUFBO0FBQUEsZ0JBQUEsUUFBQTtBQUFBLGdCQUFBLElBQUE7QUFBQSxjQUFWLEVBQXlDLDhCQUF6QyxFQUhrRDtBQUFBLFNBQXBELEVBTnFCO0FBQUEsS0FBdkIsRUFKZ0I7QUFBQSxDQUZsQiIsImZpbGUiOiJjb2ZmZWVfbW9jaGFfbm9kZS5qcyIsInNvdXJjZVJvb3QiOiIuLi90ZXN0L2ZpeHR1cmVzIiwic291cmNlc0NvbnRlbnQiOlsiYXNzZXJ0ID0gcmVxdWlyZSAncG93ZXItYXNzZXJ0J1xuXG5kZXNjcmliZSAnQXJyYXknLCAoKSAtPlxuICBiZWZvcmVFYWNoICgpIC0+XG4gICAgQGFyeSA9IFsxLDIsM107XG5cbiAgZGVzY3JpYmUgJyNpbmRleE9mKCknLCAoKSAtPlxuICAgIGl0ICdzaG91bGQgcmV0dXJuIC0xIHdoZW4gdGhlIHZhbHVlIGlzIG5vdCBwcmVzZW50JywgKCkgLT5cbiAgICAgIHplcm8gPSAwXG4gICAgICB0d28gPSAyXG4gICAgICBhc3NlcnQgQGFyeS5pbmRleE9mKHplcm8pID09IHR3b1xuXG4gICAgaXQgJ3Nob3VsZCByZXR1cm4gaW5kZXggd2hlbiB0aGUgdmFsdWUgaXMgcHJlc2VudCcsICgpIC0+XG4gICAgICBtaW51c09uZSA9IC0xXG4gICAgICB0d28gPSAyXG4gICAgICBhc3NlcnQub2sgQGFyeS5pbmRleE9mKHR3bykgPT0gbWludXNPbmUsICdUSElTIElTIEFOIEFTU0VSVElPTiBNRVNTQUdFJ1xuIl19
