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
var _rec3 = new _PowerAssertRecorder1();
var _rec4 = new _PowerAssertRecorder1();
var Util;
(function (Util) {
    function hello(target) {
        var _rec1 = new _PowerAssertRecorder1();
        if (target === void 0) {
            target = 'world';
        }
        assert(_rec1._expr(_rec1._capt(_rec1._capt(target, 'arguments/0/left') != null, 'arguments/0'), {
            content: 'assert(target != null)',
            filepath: 'util1.ts',
            line: 3
        }));
        return 'Hello, ' + target + '!';
    }
    Util.hello = hello;
}(Util || (Util = {})));
var Util;
(function (Util) {
    function bye(target) {
        var _rec2 = new _PowerAssertRecorder1();
        if (target === void 0) {
            target = 'world';
        }
        assert(_rec2._expr(_rec2._capt(_rec2._capt(target, 'arguments/0/left') != null, 'arguments/0'), {
            content: 'assert(target != null)',
            filepath: 'subdir/util2.ts',
            line: 3
        }));
        return 'Good bye, ' + target + '!';
    }
    Util.bye = bye;
}(Util || (Util = {})));
assert(_rec3._expr(_rec3._capt(_rec3._capt(_rec3._capt(Util, 'arguments/0/left/callee/object').hello('grunt-espower'), 'arguments/0/left') === 'Hello, grunt-espower!', 'arguments/0'), {
    content: 'assert(Util.hello("grunt-espower") === "Hello, grunt-espower!")',
    filepath: 'main.ts',
    line: 6
}));
assert(_rec4._expr(_rec4._capt(_rec4._capt(_rec4._capt(Util, 'arguments/0/left/callee/object').bye('grunt-espower'), 'arguments/0/left') === 'Good bye, grunt-espower!', 'arguments/0'), {
    content: 'assert(Util.bye("grunt-espower") === "Good bye, grunt-espower!")',
    filepath: 'main.ts',
    line: 7
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwxLnRzIiwic3ViZGlyL3V0aWwyLnRzIiwibWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFBLHFCQUFBO0FBQUEsYUFBQSxtQkFBQTtBQUFBLGFBQUEsUUFBQTtBQUFBO0FBQUEsSUFBQSxtQkFBQSxDQUFBLFNBQUEsQ0FBQSxLQUFBLFlBQUEsS0FBQSxDQUFBLEtBQUEsRUFBQSxNQUFBO0FBQUEsYUFBQSxRQUFBLENBQUEsSUFBQTtBQUFBLFlBQUEsS0FBQSxFQUFBLEtBQUE7QUFBQSxZQUFBLE1BQUEsRUFBQSxNQUFBO0FBQUE7QUFBQSxlQUFBLEtBQUE7QUFBQTtBQUFBLElBQUEsbUJBQUEsQ0FBQSxTQUFBLENBQUEsS0FBQSxZQUFBLEtBQUEsQ0FBQSxLQUFBLEVBQUEsTUFBQTtBQUFBO0FBQUEsWUFBQSxrQkFBQTtBQUFBLGdCQUFBLEtBQUEsRUFBQSxLQUFBO0FBQUEsZ0JBQUEsTUFBQSxPQUFBLFFBQUE7QUFBQTtBQUFBLFlBQUEsTUFBQSxFQUFBLE1BQUE7QUFBQTtBQUFBO0FBQUEsV0FBQSxtQkFBQTtBQUFBO0FDS08sSUFBQSxLQUFBLE9BQUEscUJBQUEsR0RMUDtBQ01PLElBQUEsS0FBQSxPQUFBLHFCQUFBLEdETlA7QUFBQSxJQUFPLElBQVA7QUFBQSxDQUFBLFVBQU8sSUFBUCxFQUFZO0FBQUEsSUFDUixTQUFBLEtBQUEsQ0FBc0IsTUFBdEIsRUFBc0M7QUFBQSxRQUMzQixJQUFBLEtBQUEsT0FBQSxxQkFBQSxHQUQyQjtBQUFBLFFBQWhCLElBQUEsTUFBQSxLQUFBLEtBQUEsQ0FBQSxFQUFnQjtBQUFBLFlBQWhCLE1BQUEsR0FBQSxPQUFBLENBQWdCO0FBQUEsU0FBQTtBQUFBLFFBQ2xDLE1BQUEsQ0FBTyxLQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxNQUFBLHlCQUFVLElBQVY7QUFBQSxZQUFBLE9BQUE7QUFBQSxZQUFBLFFBQUE7QUFBQSxZQUFBLElBQUE7QUFBQSxVQUFQLEVBRGtDO0FBQUEsUUFFbEMsT0FBTyxZQUFZLE1BQVosR0FBcUIsR0FBNUIsQ0FGa0M7QUFBQSxLQUQ5QjtBQUFBLElBQ1EsSUFBQSxDQUFBLEtBQUEsR0FBSyxLQUFMLENBRFI7QUFBQSxDQUFaLENBQU8sSUFBQSxJQUFBLENBQUEsSUFBQSxHQUFJLEVBQUosQ0FBUCxHQUFBO0FFQUEsSUFBTyxJQUFQLENGQUE7QUVBQSxDQUFBLFVBQU8sSUFBUCxFQUFZO0FBQUEsSUFDUixTQUFBLEdBQUEsQ0FBb0IsTUFBcEIsRUFBb0M7QUFBQSxRQUN6QixJQUFBLEtBQUEsT0FBQSxxQkFBQSxHQUR5QjtBQUFBLFFBQWhCLElBQUEsTUFBQSxLQUFBLEtBQUEsQ0FBQSxFQUFnQjtBQUFBLFlBQWhCLE1BQUEsR0FBQSxPQUFBLENBQWdCO0FBQUEsU0FBQTtBQUFBLFFBQ2hDLE1BQUEsQ0FBTyxLQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxNQUFBLHlCQUFVLElBQVY7QUFBQSxZQUFBLE9BQUE7QUFBQSxZQUFBLFFBQUE7QUFBQSxZQUFBLElBQUE7QUFBQSxVQUFQLEVBRGdDO0FBQUEsUUFFaEMsT0FBTyxlQUFlLE1BQWYsR0FBd0IsR0FBL0IsQ0FGZ0M7QUFBQSxLQUQ1QjtBQUFBLElBQ1EsSUFBQSxDQUFBLEdBQUEsR0FBRyxHQUFILENBRFI7QUFBQSxDQUFaLENBQU8sSUFBQSxJQUFBLENBQUEsSUFBQSxHQUFJLEVBQUosQ0FBUCxHRkFBO0FDS0EsTUFBQSxDQUFPLEtBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsSUFBQSxvQ0FBSyxLQUFMLENBQVcsZUFBWCwyQkFBZ0MsdUJBQWhDO0FBQUEsSUFBQSxPQUFBO0FBQUEsSUFBQSxRQUFBO0FBQUEsSUFBQSxJQUFBO0FBQUEsRUFBUCxFRExBO0FDTUEsTUFBQSxDQUFPLEtBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsS0FBQSxDQUFBLEtBQUEsQ0FBQSxLQUFBLENBQUEsSUFBQSxvQ0FBSyxHQUFMLENBQVMsZUFBVCwyQkFBOEIsMEJBQTlCO0FBQUEsSUFBQSxPQUFBO0FBQUEsSUFBQSxRQUFBO0FBQUEsSUFBQSxJQUFBO0FBQUEsRUFBUCIsImZpbGUiOiJjb25jYXQuanMiLCJzb3VyY2VSb290IjoiLi4vLi4vdGVzdC9maXh0dXJlcy9tdWx0aS10cyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZSBVdGlsIHtcbiAgICBleHBvcnQgZnVuY3Rpb24gaGVsbG8odGFyZ2V0ID0gXCJ3b3JsZFwiKSB7XG4gICAgICAgIGFzc2VydCh0YXJnZXQgIT0gbnVsbCk7XG4gICAgICAgIHJldHVybiBcIkhlbGxvLCBcIiArIHRhcmdldCArIFwiIVwiO1xuICAgIH1cbn1cbiIsIm1vZHVsZSBVdGlsIHtcbiAgICBleHBvcnQgZnVuY3Rpb24gYnllKHRhcmdldCA9IFwid29ybGRcIikge1xuICAgICAgICBhc3NlcnQodGFyZ2V0ICE9IG51bGwpO1xuICAgICAgICByZXR1cm4gXCJHb29kIGJ5ZSwgXCIgKyB0YXJnZXQgKyBcIiFcIjtcbiAgICB9XG59XG4iLCIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi91dGlsMS50c1wiIC8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9zdWJkaXIvdXRpbDIudHNcIiAvPlxuXG5kZWNsYXJlIHZhciBhc3NlcnQ6IGFueTtcblxuYXNzZXJ0KFV0aWwuaGVsbG8oXCJncnVudC1lc3Bvd2VyXCIpID09PSBcIkhlbGxvLCBncnVudC1lc3Bvd2VyIVwiKTtcbmFzc2VydChVdGlsLmJ5ZShcImdydW50LWVzcG93ZXJcIikgPT09IFwiR29vZCBieWUsIGdydW50LWVzcG93ZXIhXCIpO1xuIl19
