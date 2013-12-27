var tcx = require('../'),
    dsv = require('dsv'),
    xmldom = new (require('xmldom').DOMParser)(),
    fs = require('fs');

var rows = [];

process.argv.slice(2).forEach(function(f) {
    var fc = tcx(xmldom.parseFromString(fs.readFileSync(f, 'utf8')));
    rows.push({
        totalseconds: fc.properties.totalSeconds,
        totalmeters: fc.properties.totalMeters,
        startime: fc.properties.startTime,
    });
});

process.stdout.write(dsv.csv.format(rows));
