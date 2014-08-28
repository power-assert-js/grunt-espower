module Util {
    export function hello(target = "world") {
        assert(target != null);
        return "Hello, " + target + "!";
    }
}
