module Util {
    export function bye(target = "world") {
        assert(target != null);
        return "Good bye, " + target + "!";
    }
}
