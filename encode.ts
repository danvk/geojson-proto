import * as protobuf from 'protobufjs';

import { geojson } from './proto/bundle';

const fcpb = geojson.FeatureCollection.fromObject({
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      // This is currently dropped. Will be fixed in next release.
      // See https://github.com/dcodeIO/protobuf.js/issues/764
      properties: {
        foo: 'bar',
        baz: 123
      },
      geometry: {
        type: 'Point',
        coordinates: [-73.5, 40.2]
      }
    }
  ]
});

// Introspection
console.log(fcpb.type);

// JSON serialization
console.log(JSON.stringify(fcpb.toJSON()));

// Binary serialization
const buffer = geojson.FeatureCollection.encode(fcpb).finish();
console.log('Serialized length: ', buffer.byteLength);
