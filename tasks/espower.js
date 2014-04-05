/**
 * grunt-espower - A grunt task for power-assert.
 * 
 * https://github.com/twada/grunt-espower
 *
 * Copyright (c) 2013-2014 Takuto Wada
 * Licensed under the MIT license.
 *   https://raw.github.com/twada/grunt-espower/master/LICENSE-MIT
 */
var fs = require('fs'),
    espowerSourceToSource = require('espower-source');

module.exports = function(grunt) {
    'use strict';

    grunt.registerMultiTask('espower', 'instrument power assert feature into code.', function() {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options();

        // Iterate over all specified file groups.
        this.files.forEach(function(f) {
            f.src.filter(function(filepath) {
                // Warn on and remove invalid source files (if nonull was set).
                if (!grunt.file.exists(filepath)) {
                    grunt.log.warn('Source file "' + filepath + '" not found.');
                    return false;
                }
                return true;
            }).forEach(function(filepath) {
                var modifiedSource,
                    absPath = fs.realpathSync(filepath),
                    jsCode = fs.readFileSync(filepath, 'utf-8');
                grunt.verbose.writeln('espower src: ' + f.src);
                modifiedSource = espowerSourceToSource(jsCode, absPath, options);
                grunt.file.write(f.dest, modifiedSource);
                grunt.verbose.writeln('espower dest: ' + f.dest);
            });
        });
    });

};
