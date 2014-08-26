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
            var zero = 0, two = 2;
            assert(assert._expr(assert._capt(assert._capt(assert._capt(ary, 'arguments/0/left/callee/object').indexOf(assert._capt(zero, 'arguments/0/left/arguments/0')), 'arguments/0/left') === assert._capt(two, 'arguments/0/right'), 'arguments/0'), {
                content: 'assert(ary.indexOf(zero) === two)',
                filepath: 'typescript_mocha_node.ts',
                line: 18
            }));
        });
        it('should return index when the value is present', function () {
            var minusOne = -1, two = 2;
            assert.ok(assert._expr(assert._capt(assert._capt(assert._capt(ary, 'arguments/0/left/callee/object').indexOf(assert._capt(two, 'arguments/0/left/arguments/0')), 'arguments/0/left') === assert._capt(minusOne, 'arguments/0/right'), 'arguments/0'), {
                content: 'assert.ok(ary.indexOf(two) === minusOne, \'THIS IS AN ASSERTION MESSAGE\')',
                filepath: 'typescript_mocha_node.ts',
                line: 22
            }), 'THIS IS AN ASSERTION MESSAGE');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInR5cGVzY3JpcHRfbW9jaGFfbm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQSxJQUFJLE1BQUEsR0FBUyxPQUFBLENBQVEsY0FBUixDQUFiO0FBRUEsUUFBQSxDQUFTLE9BQVQsRUFBa0IsWUFBQTtBQUFBLElBQ2QsSUFBSSxHQUFKLENBRGM7QUFBQSxJQUdkLFVBQUEsQ0FBVyxZQUFBO0FBQUEsUUFDUCxHQUFBLEdBQU07QUFBQSxZQUFDLENBQUQ7QUFBQSxZQUFJLENBQUo7QUFBQSxZQUFPLENBQVA7QUFBQSxTQUFOLENBRE87QUFBQSxLQUFYLEVBSGM7QUFBQSxJQU9kLFFBQUEsQ0FBUyxZQUFULEVBQXVCLFlBQUE7QUFBQSxRQUNuQixFQUFBLENBQUcsZ0RBQUgsRUFBcUQsWUFBQTtBQUFBLFlBQ2pELElBQUksSUFBQSxHQUFPLENBQVgsRUFBYyxHQUFBLEdBQU0sQ0FBcEIsQ0FEaUQ7QUFBQSxZQUVqRCxNQUFBLENBQU8sTUFBQSxDQUFBLEtBQUEsQ0FBQSxNQUFBLENBQUEsS0FBQSxDQUFBLE1BQUEsQ0FBQSxLQUFBLENBQUEsTUFBQSxDQUFBLEtBQUEsQ0FBQSxHQUFBLG9DQUFJLE9BQUosQ0FBWSxNQUFBLENBQUEsS0FBQSxDQUFBLElBQUEsaUNBQVosMkJBQXNCLE1BQUEsQ0FBQSxLQUFBLENBQUEsR0FBQSxzQkFBdEI7QUFBQSxnQkFBQSxPQUFBO0FBQUEsZ0JBQUEsUUFBQTtBQUFBLGdCQUFBLElBQUE7QUFBQSxjQUFQLEVBRmlEO0FBQUEsU0FBckQsRUFEbUI7QUFBQSxRQUtuQixFQUFBLENBQUcsK0NBQUgsRUFBb0QsWUFBQTtBQUFBLFlBQ2hELElBQUksUUFBQSxHQUFXLENBQUMsQ0FBaEIsRUFBbUIsR0FBQSxHQUFNLENBQXpCLENBRGdEO0FBQUEsWUFFaEQsTUFBQSxDQUFPLEVBQVAsQ0FBVSxNQUFBLENBQUEsS0FBQSxDQUFBLE1BQUEsQ0FBQSxLQUFBLENBQUEsTUFBQSxDQUFBLEtBQUEsQ0FBQSxNQUFBLENBQUEsS0FBQSxDQUFBLEdBQUEsb0NBQUksT0FBSixDQUFZLE1BQUEsQ0FBQSxLQUFBLENBQUEsR0FBQSxpQ0FBWiwyQkFBcUIsTUFBQSxDQUFBLEtBQUEsQ0FBQSxRQUFBLHNCQUFyQjtBQUFBLGdCQUFBLE9BQUE7QUFBQSxnQkFBQSxRQUFBO0FBQUEsZ0JBQUEsSUFBQTtBQUFBLGNBQVYsRUFBeUMsOEJBQXpDLEVBRmdEO0FBQUEsU0FBcEQsRUFMbUI7QUFBQSxLQUF2QixFQVBjO0FBQUEsQ0FBbEIiLCJmaWxlIjoidHlwZXNjcmlwdF9tb2NoYV9ub2RlLmpzIiwic291cmNlUm9vdCI6Ii4uL3Rlc3QvZml4dHVyZXMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciByZXF1aXJlOmFueTtcbmRlY2xhcmUgdmFyIGRlc2NyaWJlOmFueTtcbmRlY2xhcmUgdmFyIGl0OmFueTtcbmRlY2xhcmUgdmFyIGJlZm9yZUVhY2g6YW55O1xuXG52YXIgYXNzZXJ0ID0gcmVxdWlyZSgncG93ZXItYXNzZXJ0Jyk7XG5cbmRlc2NyaWJlKCdBcnJheScsICgpID0+IHtcbiAgICB2YXIgYXJ5OiBudW1iZXJbXTtcblxuICAgIGJlZm9yZUVhY2goKCkgPT4ge1xuICAgICAgICBhcnkgPSBbMSwgMiwgM107XG4gICAgfSk7XG5cbiAgICBkZXNjcmliZSgnI2luZGV4T2YoKScsICgpID0+IHtcbiAgICAgICAgaXQoJ3Nob3VsZCByZXR1cm4gLTEgd2hlbiB0aGUgdmFsdWUgaXMgbm90IHByZXNlbnQnLCAoKSA9PiB7XG4gICAgICAgICAgICB2YXIgemVybyA9IDAsIHR3byA9IDI7XG4gICAgICAgICAgICBhc3NlcnQoYXJ5LmluZGV4T2YoemVybykgPT09IHR3byk7XG4gICAgICAgIH0pO1xuICAgICAgICBpdCgnc2hvdWxkIHJldHVybiBpbmRleCB3aGVuIHRoZSB2YWx1ZSBpcyBwcmVzZW50JywgKCkgPT4ge1xuICAgICAgICAgICAgdmFyIG1pbnVzT25lID0gLTEsIHR3byA9IDI7XG4gICAgICAgICAgICBhc3NlcnQub2soYXJ5LmluZGV4T2YodHdvKSA9PT0gbWludXNPbmUsICdUSElTIElTIEFOIEFTU0VSVElPTiBNRVNTQUdFJyk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG4iXX0=
