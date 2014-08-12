## 0.8.0 (2014-08-12)


#### Features

* **grunt-espower:** update espower-source to 0.8.0 ([55110fa4](https://github.com/twada/grunt-espower/commit/55110fa4bffab62045d207d0460eaa864cc9fa8e))


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
