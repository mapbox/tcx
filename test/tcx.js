var parse = require('../'),
    expect = require('expect.js'),
    xmldom = new (require('xmldom').DOMParser)(),
    fs = require('fs');

describe('tcx', function() {
    it('parses tcx', function() {
        expect(parse(xmldom.parseFromString(
            fs.readFileSync('./test/run.tcx', 'utf8')))).to.eql(
            JSON.parse(fs.readFileSync('./test/run.geojson')));
    });
});
