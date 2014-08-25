/**
 * grunt-espower - A grunt task for power-assert.
 * 
 * https://github.com/twada/grunt-espower
 *
 * Copyright (c) 2013-2014 Takuto Wada
 * Licensed under the MIT license.
 *   https://github.com/twada/grunt-espower/blob/master/LICENSE-MIT
 */
var fs = require('fs'),
    espower = require('espower'),
    esprima = require('esprima'),
    escodegen = require('escodegen'),
    extend = require('xtend'),
    convert = require('convert-source-map');

function espowerSource(jsCode, filepath, options) {
    'use strict';

    var jsAst, espowerOptions, modifiedAst, escodegenOutput, code, map;

    jsAst = esprima.parse(jsCode, {
        tolerant: true,
        loc: true,
        tokens: true,
        raw: true,
        source: filepath
    });
    espowerOptions = extend(espower.defaultOptions(), options, {
        destructive: true,
        path: filepath
    });
    modifiedAst = espower(jsAst, espowerOptions);
    escodegenOutput = escodegen.generate(modifiedAst, {
        sourceMap: true,
        sourceMapWithCode: true
    });
    code = escodegenOutput.code; // Generated source code
    map = convert.fromJSON(escodegenOutput.map.toString());
    map.sourcemap.sourcesContent = [jsCode];
    return code + '\n' + map.toComment() + '\n';
}

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
                    jsCode = fs.readFileSync(filepath, 'utf-8');
                grunt.verbose.writeln('espower src: ' + f.src);
                modifiedSource = espowerSource(jsCode, filepath, options);
                grunt.file.write(f.dest, modifiedSource);
                grunt.verbose.writeln('espower dest: ' + f.dest);
            });
        });
    });

};
