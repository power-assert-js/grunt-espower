'use strict';

var empower = require('empower'),
    formatter = require('power-assert-formatter')(),
    empowerOptions = {destructive: false, modifyMessageOnRethrow: false, saveContextOnRethrow: false};

exports.demo = {
    setUp: function(done) {
        done();
    },
    demo1: function(test) {
        test = empower(test, formatter, empowerOptions);

        test.expect(1);

        var three = 3,
            five = 5;
        test.ok(three == five, 'MESSAGE');

        test.done();
    },
    demo2: function(test) {
        test = empower(test, formatter, empowerOptions);

        test.expect(1);

        var one = 1, two = 2, three = 3, seven = 7, ten = 10;
        test.ok((three * (seven * ten)) === three);

        test.done();
    },
    demo3: function(test) {
        test = empower(test, formatter, empowerOptions);

        test.expect(1);

        var one = 1, two = 2, three = 3, seven = 7, ten = 10;
        test.equal(three * (seven * ten), three);

        test.done();
    }
};
