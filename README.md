grunt-espower
================================

[![Build Status](https://travis-ci.org/power-assert-js/grunt-espower.svg?branch=master)](https://travis-ci.org/power-assert-js/grunt-espower)
[![NPM version](https://badge.fury.io/js/grunt-espower.svg)](http://badge.fury.io/js/grunt-espower)
[![Dependency Status](https://gemnasium.com/power-assert-js/grunt-espower.svg)](https://gemnasium.com/power-assert-js/grunt-espower)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

A grunt task for power-assert.


DESCRIPTION
---------------------------------------
`grunt-espower` is a grunt task to instrument "Power Assert" feature into your code.


Internally, `grunt-espower` task uses `espower` module that manipulates assertion expression (JavaScript Code) represented as [Mozilla JavaScript AST](https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API), to instrument power-assert feature into the code. The magic is done by using [Esprima](http://esprima.org/) and [Escodegen](https://github.com/Constellation/escodegen).

Since 0.9.0, grunt-espower supports sourcemaps by default.

Pull-requests, issue reports and patches are always welcomed. See [power-assert](http://github.com/power-assert-js/power-assert) project for more documentation.


## Getting Started
This plugin requires Grunt `~0.4.1`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-espower --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-espower');
```

## The "espower" task

### Overview
In your project's Gruntfile, add a section named `espower` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  espower: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.patterns

| type                | default value       |
|:--------------------|:--------------------|
| `Array` of `string` | objects shown below |

```javascript
[
    'assert(value, [message])',
    'assert.ok(value, [message])',
    'assert.equal(actual, expected, [message])',
    'assert.notEqual(actual, expected, [message])',
    'assert.strictEqual(actual, expected, [message])',
    'assert.notStrictEqual(actual, expected, [message])',
    'assert.deepEqual(actual, expected, [message])',
    'assert.notDeepEqual(actual, expected, [message])'
]
```

Target patterns for power assert feature instrumentation.

If callee name (for example, `assert.equal`) matches exactly and number of arguments is satisfied, then the assertion will be modified.
Detection is done by [escallmatch](http://github.com/twada/escallmatch). Any arguments enclosed in bracket (for example, `[message]`) means optional parameters. Without bracket means mandatory parameters.


### Usage Examples

#### Default Options

```js
grunt.initConfig({
  espower: {
    test: {
      files: [
        {
          expand: true,        // Enable dynamic expansion.
          cwd: 'test/',        // Src matches are relative to this path.
          src: ['**/*.js'],    // Actual pattern(s) to match.
          dest: 'espowered/',  // Destination path prefix.
          ext: '.js'           // Dest filepaths will have this extension.
        }
      ]
    },
  },
})
```

#### Custom Options

```js
grunt.initConfig({
  espower: {
    demo: {
      options :{
        patterns: [
            'assert(value, [message])',
            'assert.ok(value, [message])',
            'assert.equal(actual, expected, [message])',
            'assert.notEqual(actual, expected, [message])',
            'assert.strictEqual(actual, expected, [message])',
            'assert.notStrictEqual(actual, expected, [message])',
            'assert.deepEqual(actual, expected, [message])',
            'assert.notDeepEqual(actual, expected, [message])'
        ]
      },
      files: [
        {
          expand: true,        // Enable dynamic expansion.
          cwd: 'demo/',        // Src matches are relative to this path.
          src: ['**/*.js'],    // Actual pattern(s) to match.
          dest: 'espowered_demo/',  // Destination path prefix.
          ext: '.js'           // Dest filepaths will have this extension.
        }
      ]
    },
  },
})
```

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).


CHANGELOG
---------------------------------------
See [CHANGELOG](https://github.com/power-assert-js/grunt-espower/blob/master/CHANGELOG.md)


AUTHOR
---------------------------------------
* [Takuto Wada](http://github.com/twada)


CONTRIBUTORS
---------------------------------------
* [vvakame](https://github.com/vvakame)


LICENSE
---------------------------------------
Licensed under the [MIT](https://github.com/power-assert-js/grunt-espower/blob/master/LICENSE-MIT) license.
