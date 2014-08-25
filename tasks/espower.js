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
    path = require('path'),
    espower = require('espower'),
    esprima = require('esprima'),
    escodegen = require('escodegen'),
    extend = require('xtend'),
    convert = require('convert-source-map'),
    transfer = require('multi-stage-sourcemap').transfer;

function mergeSourceMap(incomingSourceMap, outgoingSourceMap) {
    'use strict';

    if (typeof outgoingSourceMap === 'string' || outgoingSourceMap instanceof String) {
        outgoingSourceMap = JSON.parse(outgoingSourceMap);
    }
    if (!incomingSourceMap) {
        return outgoingSourceMap;
    }
    return JSON.parse(transfer({fromSourceMap: outgoingSourceMap, toSourceMap: incomingSourceMap}));
}

function espowerSource(jsCode, filepath, options, dest) {
    'use strict';

    var jsAst, espowerOptions, modifiedAst, escodegenOutput;

    jsAst = esprima.parse(jsCode, {
        tolerant: true,
        loc: true,
        tokens: true,
        raw: true,
        source: filepath
    });
    // TODO use options.mapRoot or anything
    var inMap = convert.fromSource(jsCode) || convert.fromMapFileSource(jsCode, path.dirname(filepath));
    // TODO fix breaking type mismatch inMap and outMap
    inMap = (inMap || {}).sourcemap;
    espowerOptions = extend(espower.defaultOptions(), options, {
        destructive: true,
        path: filepath,
        sourceMap: inMap
    });
    modifiedAst = espower(jsAst, espowerOptions);
    escodegenOutput = escodegen.generate(modifiedAst, {
        sourceMap: true,
        sourceMapWithCode: true
    });
    var outMap = convert.fromJSON(escodegenOutput.map.toString());
    if (inMap) {
        var inWorkingDir = path.relative(path.dirname(inMap.file), path.dirname(filepath));
        var outTo = path.resolve(process.cwd(), dest);
        var sourceRoot = path.relative(path.dirname(outTo), inWorkingDir);
        var sourcesContent = inMap.sourcesContent || inMap.sources
            .map(function (src) {
                var fullpath = path.resolve(inWorkingDir, inMap.sourceRoot || '', src);
                // TODO use grunt.file.read
                return fs.readFileSync(fullpath, {encoding: 'utf8'});
            });
        var inSources = inMap.sources
            .map(function (src) {
                // to full path
                return path.resolve(inWorkingDir, inMap.sourceRoot || '', src);
            })
            .map(function (src) {
                var rootPath = path.resolve(path.dirname(outTo), sourceRoot);
                return path.relative(rootPath, src);
            });
        var mergedRawMap = mergeSourceMap(inMap, outMap.toObject());
        outMap = convert.fromObject(mergedRawMap);
        outMap.sourcemap.file = path.basename(dest);
        outMap.sourcemap.sourceRoot = sourceRoot;
        outMap.sourcemap.sources = inSources;
        outMap.sourcemap.sourcesContent = sourcesContent;
    } else {
        outMap.sourcemap.sourcesContent = [jsCode];
    }
    return escodegenOutput.code + '\n' + outMap.toComment() + '\n';
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
                modifiedSource = espowerSource(jsCode, filepath, options, f.dest);
                grunt.file.write(f.dest, modifiedSource);
                grunt.verbose.writeln('espower dest: ' + f.dest);
            });
        });
    });

};
