/// <reference path="./util1.ts" />
/// <reference path="./subdir/util2.ts" />

declare var assert: any;

assert(Util.hello("grunt-espower") === "Hello, grunt-espower!");
assert(Util.bye("grunt-espower") === "Good bye, grunt-espower!");
