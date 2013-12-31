/*
 * grunt-espower
 * https://github.com/twada/grunt-espower
 *
 * Copyright (c) 2013 Takuto Wada
 * Licensed under the MIT license.
 */

var espower = require('espower'),
    esprima = require('esprima'),
    escodegen = require('escodegen'),
    merge = require('lodash.merge'),
    fs = require('fs');

module.exports = function(grunt) {
    'use strict';

    grunt.registerMultiTask('espower', 'instrument power assert feature into code.', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options(espower.defaultOptions());

        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                } else {
                    return true;
                }
            }).forEach(function(filepath) {
                grunt.verbose.writeln('espower src: ' + f.src);
                var absPath = fs.realpathSync(filepath),
                    jsCode = fs.readFileSync(filepath, 'utf-8'),
                    jsAst = esprima.parse(jsCode, {tolerant: true, loc: true, range: true}),
                    espowerOptions = merge(options, {
                        path: absPath,
                        source: jsCode
                    }),
                    modifiedAst = espower(jsAst, espowerOptions);
                grunt.file.write(f.dest, escodegen.generate(modifiedAst));
                grunt.verbose.writeln('espower dest: ' + f.dest);
            });
        });
    });

};
