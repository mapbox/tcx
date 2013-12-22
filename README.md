# tcx

Convert [TCX](https://en.wikipedia.org/wiki/Training_Center_XML) files to
[GeoJSON](http://geojson.org/) in JavaScript.

## installation

    npm install tcx

## usage

```js
var parse = require('tcx');

// a tcx file dom, via xmldom
parse(tcxDom);
```
