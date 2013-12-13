var makeParser = require('../'),
    expect = require('expect.js'),
    fs = require('fs');

describe('tcx', function() {
    it('parses tcx', function(done) {
        var p = makeParser().on('data', function(d) {
            expect(d.type).to.eql('Feature');
            done();
        });
        fs.createReadStream('./test/run.tcx')
            .pipe(p);
    });
});
