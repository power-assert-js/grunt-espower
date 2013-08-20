'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.espower = {
    setUp: function(done) {
        done();
    },
    instrumentation_test: function(test) {
        test.expect(2);

        var expected = 'tmp/mocha_node.js';
        test.ok(grunt.file.exists(expected));
        test.ok(grunt.file.isFile(expected));

        test.done();
    },
    subdir_test: function(test) {
        test.expect(2);

        var expected = 'tmp/subdir/test_in_subdir.js';
        test.ok(grunt.file.exists(expected));
        test.ok(grunt.file.isFile(expected));

        test.done();
    }
};
