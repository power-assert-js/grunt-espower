'use strict';

var grunt = require('grunt'),
    fs = require('fs');

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
    jsInstrumentationTest: function(test) {
        test.expect(3);

        var outputPath = 'tmp/mocha_node.js';
        test.ok(grunt.file.exists(outputPath));
        test.ok(grunt.file.isFile(outputPath));
        test.equal(fs.readFileSync(outputPath, 'utf8'),
            fs.readFileSync('test/expected/mocha_node.js', 'utf8'));

        test.done();
    },
    coffeeInstrumentationTest: function(test) {
        test.expect(3);

        var outputPath = 'tmp/coffee_mocha_node.js';
        test.ok(grunt.file.exists(outputPath));
        test.ok(grunt.file.isFile(outputPath));
        test.equal(fs.readFileSync(outputPath, 'utf8'),
            fs.readFileSync('test/expected/coffee_mocha_node.js', 'utf8'));

        test.done();
    },
    typescriptInstrumentationTest: function(test) {
        test.expect(3);

        var outputPath = 'tmp/typescript_mocha_node.js';
        test.ok(grunt.file.exists(outputPath));
        test.ok(grunt.file.isFile(outputPath));
        test.equal(fs.readFileSync(outputPath, 'utf8'),
            fs.readFileSync('test/expected/typescript_mocha_node.js', 'utf8'));

        test.done();
    },
    subdirTest: function(test) {
        test.expect(3);

        var outputPath = 'tmp/subdir/test_in_subdir.js';
        test.ok(grunt.file.exists(outputPath));
        test.ok(grunt.file.isFile(outputPath));
        test.equal(fs.readFileSync(outputPath, 'utf8'),
                   fs.readFileSync('test/expected/subdir/test_in_subdir.js', 'utf8'));

        test.done();
    }
};
