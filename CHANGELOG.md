## [1.1.0](https://github.com/power-assert-js/grunt-espower/releases/tag/v1.1.0) (2016-02-24)


#### Features

* [Update peerDependencies to support Grunt 1.0](https://github.com/power-assert-js/grunt-espower/pull/4)


#### Bug Fixes

* `main` field in package.json should point to task definition ([ce092dda](https://github.com/power-assert-js/grunt-espower/commit/ce092dda2666265ca39634b0fe308f1a203967a7))


## [1.0.0](https://github.com/power-assert-js/grunt-espower/releases/tag/v1.0.0) (2015-08-25)


#### Features

* **grunt-espower:**
  * transfer to power-assert-js organization ([23a1e098](https://github.com/power-assert-js/grunt-espower/commit/23a1e0983c944c7443119037a90a2946b1787a02))
  * update espower to 1.0.6 ([48368e5](https://github.com/power-assert-js/grunt-espower/commit/48368e5c48401835093c5f0d940638c67805421d))


## [0.10.0](https://github.com/power-assert-js/grunt-espower/releases/tag/v0.10.0) (2014-11-11)


* **grunt-espower:**
  * update escodegen and espower ([5d8bb3c8](https://github.com/power-assert-js/grunt-espower/commit/5d8bb3c89ba70dd34a95f5629c81f1737b8cf835))


### 0.9.1 (2014-09-17)


#### Features

* **grunt-espower:** update espower to 0.9.1 ([8c6761ae](https://github.com/power-assert-js/grunt-espower/commit/8c6761ae88f88070b132b0252185b64f03dd7299))


## 0.9.0 (2014-08-28)


#### Features


* **grunt-espower:** [support multistage sourcemap by @vvakame](https://github.com/power-assert-js/grunt-espower/pull/2)


## 0.8.0 (2014-08-12)


#### Features

* **grunt-espower:** update espower-source to 0.8.0 ([55110fa4](https://github.com/power-assert-js/grunt-espower/commit/55110fa4bffab62045d207d0460eaa864cc9fa8e))


#### Breaking Changes

If you already customize instrumentation pattern using `powerAssertVariableName` and `targetMethods`, you need to migarte. To migrate, change your code from the following:

```javascript
grunt.initConfig({
  espower: {
    demo: {
      options :{
        powerAssertVariableName: 'yourAssert',
        targetMethods: {
            oneArg: [
                'okay'
            ],
            twoArgs: [
                'equal',
                'customEqual'
            ]
        }
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

To:

```javascript
grunt.initConfig({
  espower: {
    demo: {
      options :{
        patterns: [
            'yourAssert(value, [message])',
            'yourAssert.okay(value, [message])',
            'yourAssert.equal(actual, expected, [message])',
            'yourAssert.customEqual(actual, expected, [message])'
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
