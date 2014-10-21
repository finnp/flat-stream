var through = require('through2')
var flatten = require('flat')

module.exports = function (opts) {
  return through.obj(function (obj, enc, cb) {
    this.push(flatten(obj, opts))
    cb()
  })
}