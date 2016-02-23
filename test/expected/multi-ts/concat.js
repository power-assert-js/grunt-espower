var Util;
(function (Util) {
    function hello(target) {
        if (target === void 0) {
            target = 'world';
        }
        assert(assert._expr(assert._capt(assert._capt(target, 'arguments/0/left') != null, 'arguments/0'), {
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
        if (target === void 0) {
            target = 'world';
        }
        assert(assert._expr(assert._capt(assert._capt(target, 'arguments/0/left') != null, 'arguments/0'), {
            content: 'assert(target != null)',
            filepath: 'subdir/util2.ts',
            line: 3
        }));
        return 'Good bye, ' + target + '!';
    }
    Util.bye = bye;
}(Util || (Util = {})));
assert(assert._expr(assert._capt(assert._capt(assert._capt(Util, 'arguments/0/left/callee/object').hello('grunt-espower'), 'arguments/0/left') === 'Hello, grunt-espower!', 'arguments/0'), {
    content: 'assert(Util.hello("grunt-espower") === "Hello, grunt-espower!")',
    filepath: 'main.ts',
    line: 6
}));
assert(assert._expr(assert._capt(assert._capt(assert._capt(Util, 'arguments/0/left/callee/object').bye('grunt-espower'), 'arguments/0/left') === 'Good bye, grunt-espower!', 'arguments/0'), {
    content: 'assert(Util.bye("grunt-espower") === "Good bye, grunt-espower!")',
    filepath: 'main.ts',
    line: 7
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWwxLnRzIiwic3ViZGlyL3V0aWwyLnRzIiwibWFpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFPLElBQVA7QUFBQSxDQUFBLFVBQU8sSUFBUCxFQUFZO0FBQUEsSUFDUixTQUFBLEtBQUEsQ0FBc0IsTUFBdEIsRUFBc0M7QUFBQSxRQUFoQixJQUFBLE1BQUEsS0FBQSxLQUFBLENBQUEsRUFBZ0I7QUFBQSxZQUFoQixNQUFBLEdBQUEsT0FBQSxDQUFnQjtBQUFBLFNBQUE7QUFBQSxRQUNsQyxNQUFBLENBQU8sTUFBQSxDQUFBLEtBQUEsQ0FBQSxNQUFBLENBQUEsS0FBQSxDQUFBLE1BQUEsQ0FBQSxLQUFBLENBQUEsTUFBQSx5QkFBVSxJQUFWO0FBQUEsWUFBQSxPQUFBO0FBQUEsWUFBQSxRQUFBO0FBQUEsWUFBQSxJQUFBO0FBQUEsVUFBUCxFQURrQztBQUFBLFFBRWxDLE9BQU8sWUFBWSxNQUFaLEdBQXFCLEdBQTVCLENBRmtDO0FBQUEsS0FEOUI7QUFBQSxJQUNRLElBQUEsQ0FBQSxLQUFBLEdBQUssS0FBTCxDQURSO0FBQUEsQ0FBWixDQUFPLElBQUEsSUFBQSxDQUFBLElBQUEsR0FBSSxFQUFKLENBQVAsR0FBQTtBQ0FBLElBQU8sSUFBUCxDREFBO0FDQUEsQ0FBQSxVQUFPLElBQVAsRUFBWTtBQUFBLElBQ1IsU0FBQSxHQUFBLENBQW9CLE1BQXBCLEVBQW9DO0FBQUEsUUFBaEIsSUFBQSxNQUFBLEtBQUEsS0FBQSxDQUFBLEVBQWdCO0FBQUEsWUFBaEIsTUFBQSxHQUFBLE9BQUEsQ0FBZ0I7QUFBQSxTQUFBO0FBQUEsUUFDaEMsTUFBQSxDQUFPLE1BQUEsQ0FBQSxLQUFBLENBQUEsTUFBQSxDQUFBLEtBQUEsQ0FBQSxNQUFBLENBQUEsS0FBQSxDQUFBLE1BQUEseUJBQVUsSUFBVjtBQUFBLFlBQUEsT0FBQTtBQUFBLFlBQUEsUUFBQTtBQUFBLFlBQUEsSUFBQTtBQUFBLFVBQVAsRUFEZ0M7QUFBQSxRQUVoQyxPQUFPLGVBQWUsTUFBZixHQUF3QixHQUEvQixDQUZnQztBQUFBLEtBRDVCO0FBQUEsSUFDUSxJQUFBLENBQUEsR0FBQSxHQUFHLEdBQUgsQ0FEUjtBQUFBLENBQVosQ0FBTyxJQUFBLElBQUEsQ0FBQSxJQUFBLEdBQUksRUFBSixDQUFQLEdEQUE7QUVLQSxNQUFBLENBQU8sTUFBQSxDQUFBLEtBQUEsQ0FBQSxNQUFBLENBQUEsS0FBQSxDQUFBLE1BQUEsQ0FBQSxLQUFBLENBQUEsTUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLG9DQUFLLEtBQUwsQ0FBVyxlQUFYLDJCQUFnQyx1QkFBaEM7QUFBQSxJQUFBLE9BQUE7QUFBQSxJQUFBLFFBQUE7QUFBQSxJQUFBLElBQUE7QUFBQSxFQUFQLEVGTEE7QUVNQSxNQUFBLENBQU8sTUFBQSxDQUFBLEtBQUEsQ0FBQSxNQUFBLENBQUEsS0FBQSxDQUFBLE1BQUEsQ0FBQSxLQUFBLENBQUEsTUFBQSxDQUFBLEtBQUEsQ0FBQSxJQUFBLG9DQUFLLEdBQUwsQ0FBUyxlQUFULDJCQUE4QiwwQkFBOUI7QUFBQSxJQUFBLE9BQUE7QUFBQSxJQUFBLFFBQUE7QUFBQSxJQUFBLElBQUE7QUFBQSxFQUFQIiwiZmlsZSI6ImNvbmNhdC5qcyIsInNvdXJjZVJvb3QiOiIuLi8uLi90ZXN0L2ZpeHR1cmVzL211bHRpLXRzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlIFV0aWwge1xuICAgIGV4cG9ydCBmdW5jdGlvbiBoZWxsbyh0YXJnZXQgPSBcIndvcmxkXCIpIHtcbiAgICAgICAgYXNzZXJ0KHRhcmdldCAhPSBudWxsKTtcbiAgICAgICAgcmV0dXJuIFwiSGVsbG8sIFwiICsgdGFyZ2V0ICsgXCIhXCI7XG4gICAgfVxufVxuIiwibW9kdWxlIFV0aWwge1xuICAgIGV4cG9ydCBmdW5jdGlvbiBieWUodGFyZ2V0ID0gXCJ3b3JsZFwiKSB7XG4gICAgICAgIGFzc2VydCh0YXJnZXQgIT0gbnVsbCk7XG4gICAgICAgIHJldHVybiBcIkdvb2QgYnllLCBcIiArIHRhcmdldCArIFwiIVwiO1xuICAgIH1cbn1cbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3V0aWwxLnRzXCIgLz5cbi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuL3N1YmRpci91dGlsMi50c1wiIC8+XG5cbmRlY2xhcmUgdmFyIGFzc2VydDogYW55O1xuXG5hc3NlcnQoVXRpbC5oZWxsbyhcImdydW50LWVzcG93ZXJcIikgPT09IFwiSGVsbG8sIGdydW50LWVzcG93ZXIhXCIpO1xuYXNzZXJ0KFV0aWwuYnllKFwiZ3J1bnQtZXNwb3dlclwiKSA9PT0gXCJHb29kIGJ5ZSwgZ3J1bnQtZXNwb3dlciFcIik7XG4iXX0=
