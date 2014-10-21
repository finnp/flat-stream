var flat = require('./')

var stream = flat({safe: true})
stream.write({a: 1, b: {c: 2, d: 3}, c: [1,2,3]})
stream.end()

stream.on('data', function (obj) {
  console.log(obj)
})