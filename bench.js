'use strict';

var dobbyscan = require('./');
var geojsonCoords = require('@mapbox/geojson-coords');
var points = require('./igloofest_0218C.json');

var coords = geojsonCoords(points)

var radius = 10;


console.log(`Running DBSCAN on ${coords.length} points`);
console.time('Clustered in');

console.log(`Cluster radius: ${radius} km`);

var clusters = dobbyscan(coords, radius);

console.log(`${clusters.length} clusters found`);
console.timeEnd('Clustered in');
