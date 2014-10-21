#!/usr/bin/env node

var flat = require('./')
var ndjson = require('ndjson')
var opts = require('minimist')(process.argv.slice(2))

opts.safe = opts.safe || opts.s
opts.object = opts.object || opts.o

process.stdin
  .pipe(ndjson.parse())
  .pipe(flat(opts))
  .pipe(ndjson.stringify())
  .pipe(process.stdout)