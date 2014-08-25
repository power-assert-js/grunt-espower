'use strict'

empower = require 'empower'
formatter = require('power-assert-formatter')()
empowerOptions = {destructive: false, modifyMessageOnRethrow: false, saveContextOnRethrow: false}
require('source-map-support').install()

exports.coffee =
    setUp: (done) ->
        done()

    demo1: (test) ->
        test = empower test, formatter, empowerOptions

        test.expect 1

        three = 3
        five = 5
        test.ok three == five, 'MESSAGE'

        test.done()

    demo2: (test) ->
        test = empower test, formatter, empowerOptions

        test.expect 1

        one = 1
        two = 2
        three = 3
        seven = 7
        ten = 10
        test.ok (three * (seven * ten)) == three

        test.done()

    demo3: (test) ->
        test = empower test, formatter, empowerOptions

        test.expect 1

        one = 1
        two = 2
        three = 3
        seven = 7
        ten = 10
        test.equal three * (seven * ten), three

        test.done()
