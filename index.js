var Parser = require('htmlparser2').Parser,
    through2 = require('through2');

module.exports = makeParser;

function makeParser() {
    var parser = new Parser({
        onopentag: onopentag,
        ontext: ontext,
        onclosetag: onclosetag,
        onend: onend
    });

    var coords,
        coord = [,],
        feat = {
            type: 'Feature',
            geometry: {
                type: 'LineString',
                coordinates: []
            }
        },
        state;

    function onopentag(name, attribs) {
        state = '';
        switch (name) {
            case 'activity':
                coords = [];
                break;
            case 'latitudedegrees':
                state = 'lat';
                break;
            case 'longitudedegrees':
                state = 'lon';
                break;
        }
    }

    function ontext(text) {
        switch (state) {
            case 'lon': coord[0] = parseFloat(text); break;
            case 'lat': coord[1] = parseFloat(text); break;
        }
    }

    function onend() {
    }

    function onclosetag(name) {
        switch (name) {
            case 'trackpoint':
                coords.push(coord);
                break;
            case 'track':
                feat.coords = coords;
                t.emit('data', feat);
                coords = [];
                break;
        }
    }

    var t = through2(function(chunk) {
        parser.write(chunk);
    });

    return t;
}
