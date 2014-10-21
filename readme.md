# flat-stream

Object stream that flattens every object pipe through it. It is based on the module
[flat](https://www.npmjs.org/package/flat).

It includes an [NDJSON](https://github.com/ndjson/ndjson-spec) CLI, which you can install with
`npm install flat-stream -g`.

## Usage
```js
var flat = require('flat-stream')
stream.write({a: 1, b: {c: 2, d: 3}})
stream.end()

stream.on('data', function (obj) {
  console.log(obj) // prints { a: 1, 'b.c': 2, 'b.d': 3 }
})
```

## CLI Usage

The CLI takes Newline Seperated JSON from Stdin and flattens them to Stdout.

Given a file `data.ndjson`
```
{"A":{"a":1}}
{"A":{"a":2}, "B": 3}
```
the command 

```
flat-stream < data.ndjson
```

will print

```
{"A.a":1}
{"A.a":2,"B":3}
```
