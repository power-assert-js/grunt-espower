grunt-espower : a grunt task to apply espower to target files
================================


DESCRIPTION
---------------------------------------
`grunt-espower` is a grunt task to instrument "Power Assert" feature into your code.

Internally, `grunt-espower` task uses `espower` module that manipulates assertion expression (JavaScript Code) represented as [Mozilla JavaScript AST](https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API), to instrument power-assert feature into the code. The magic is done by using [Esprima](http://esprima.org/) and [Escodegen](https://github.com/Constellation/escodegen).

Please note that `grunt-espower` is an alpha version product. Pull-requests, issue reports and patches are always welcomed.

See [power-assert](http://github.com/twada/power-assert) project for more documentation.


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

#### options.destructive
Type: `Boolean`
Default value: `false`

Instrument target AST destructively or not.

#### options.powerAssertVariableName
Type: `String`
Default value: `'assert'`

Target variable name to instrument.

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
        destructive: true,
        powerAssertVariableName: 'test'
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

## Release History
_(Nothing yet)_
