#!/usr/bin/env node

var flat = require('./')
var ndjson = require('ndjson')

process.stdin
  .pipe(ndjson.parse())
  .pipe(flat())
  .pipe(ndjson.stringify())
  .pipe(process.stdout)