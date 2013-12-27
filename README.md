# tcx

Convert [TCX](https://en.wikipedia.org/wiki/Training_Center_XML) files to
[GeoJSON](http://geojson.org/) in JavaScript.

## installation

    npm install tcx

Standalone:

https://raw.github.com/mapbox/tcx/master/tcx.js

## usage

```js
var parse = require('tcx');

// a tcx file dom, via xmldom
parse(tcxDom);
```

## api

### `parse(xmlDom)`

Given a DOM of TCX data either as a browser DOM object or via `xmldom` or
`jsdom`, parse and return a GeoJSON FeatureCollection object.
