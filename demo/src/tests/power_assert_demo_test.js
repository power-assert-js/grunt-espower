'use strict';

var empower = require('empower');

exports.demo = {
    setUp: function(done) {
        done();
    },
    instrumentation_demo: function(test) {
        test = empower(test, {destructive: false});

        test.expect(1);

        var three = 3,
            five = 5;
        test.ok(three == five, 'MESSAGE');

        test.done();
    }
};
