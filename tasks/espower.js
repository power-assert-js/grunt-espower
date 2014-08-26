/**
 * grunt-espower - A grunt task for power-assert.
 * 
 * https://github.com/twada/grunt-espower
 *
 * Copyright (c) 2013-2014 Takuto Wada
 * Licensed under the MIT license.
 *   https://github.com/twada/grunt-espower/blob/master/LICENSE-MIT
 */
'use strict';

var path = require('path'),
    espower = require('espower'),
    esprima = require('esprima'),
    escodegen = require('escodegen'),
    extend = require('xtend'),
    convert = require('convert-source-map'),
    transfer = require('multi-stage-sourcemap').transfer;

function mergeSourceMap(incomingSourceMap, outgoingSourceMap) {
    if (typeof outgoingSourceMap === 'string' || outgoingSourceMap instanceof String) {
        outgoingSourceMap = JSON.parse(outgoingSourceMap);
    }
    if (!incomingSourceMap) {
        return outgoingSourceMap;
    }
    return JSON.parse(transfer({fromSourceMap: outgoingSourceMap, toSourceMap: incomingSourceMap}));
}

function resolveOutgoingSourcesInfo(grunt, filepath, dest, inMap) {
    // NOTE https://gist.github.com/twada/103d34a3237cecd463a6#comment-1288208
    var incomingWorkingDir = path.relative(path.dirname(inMap.sourcemap.file), path.dirname(filepath));
    var destTo = path.resolve(process.cwd(), dest);

    var sourceRoot = path.relative(path.dirname(destTo), incomingWorkingDir);
    var sources = inMap.sourcemap.sources
        .map(function (src) {
            // to full path
            return path.resolve(incomingWorkingDir, inMap.sourcemap.sourceRoot || '', src);
        })
        .map(function (src) {
            var rootPath = path.resolve(path.dirname(destTo), sourceRoot);
            return path.relative(rootPath, src);
        });
    var sourcesContent = inMap.sourcemap.sourcesContent || inMap.sourcemap.sources
        .map(function (src) {
            var fullpath = path.resolve(incomingWorkingDir, inMap.sourcemap.sourceRoot || '', src);
            return grunt.file.read(fullpath);
        });

    return {
        sourceRoot: sourceRoot,
        sources: sources,
        sourcesContent: sourcesContent
    };
}

function espowerSource(grunt, jsCode, filepath, dest, options) {
    var jsAst, espowerOptions, modifiedAst, escodegenOutput;

    jsAst = esprima.parse(jsCode, {
        tolerant: true,
        loc: true,
        tokens: true,
        raw: true,
        source: filepath
    });
    var inMap = convert.fromSource(jsCode) || convert.fromMapFileSource(jsCode, path.dirname(filepath));
    espowerOptions = extend(espower.defaultOptions(), options, {
        destructive: true,
        path: filepath,
        sourceMap: inMap ? inMap.sourcemap : void 0
    });
    modifiedAst = espower(jsAst, espowerOptions);
    escodegenOutput = escodegen.generate(modifiedAst, {
        sourceMap: true,
        sourceMapWithCode: true
    });
    var outMap = convert.fromJSON(escodegenOutput.map.toString());
    if (inMap) {
        var mergedRawMap = mergeSourceMap(inMap.toObject(), outMap.toObject());
        var resolved = resolveOutgoingSourcesInfo(grunt, filepath, dest, inMap);

        outMap = convert.fromObject(mergedRawMap);
        outMap.sourcemap.file = path.basename(dest);
        outMap.sourcemap.sourceRoot = resolved.sourceRoot;
        outMap.sourcemap.sources = resolved.sources;
        outMap.sourcemap.sourcesContent = resolved.sourcesContent;
    } else {
        outMap.sourcemap.sourcesContent = [jsCode];
    }
    return escodegenOutput.code + '\n' + outMap.toComment() + '\n';
}

module.exports = function(grunt) {
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
                    jsCode = grunt.file.read(filepath);
                grunt.verbose.writeln('espower src: ' + f.src);
                modifiedSource = espowerSource(grunt, jsCode, filepath, f.dest, options);
                grunt.file.write(f.dest, modifiedSource);
                grunt.verbose.writeln('espower dest: ' + f.dest);
            });
        });
    });

};
