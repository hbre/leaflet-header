# leaflet-header

Custom headers on Leaflet TileLayer.
It's a simple plugin that allow to set custom header for tile interface.

It works with javascript and typescript without any dependencies!

Based on https://github.com/Leaflet/Leaflet/issues/2091#issuecomment-302706529.

Based on https://github.com/jaq316/leaflet-header but finished making package

### Javascript

```sh
$ npm install leaflet leaflet-header --save
```

```html
<!-- Assuming your project root is "../" -->
<script src="../node_modules/leaflet/dist/leaflet.js"></script>
<script src="../node_modules/leaflet-header/index.js"></script>
```

```js
// YOUR LEAFLET CODE
var POSSIBLE_MAP_TYPES = ["maptile-base", "maptile-aerial", "maptile-traffic"];
var POSSIBLE_MAP_SCHEMES = [
  "normal.day",
  "normal.night",
  "normal.traffic.day",
  "normal.traffic.night",
  "satellite.day",
  "terrain.day",
  "hybrid.day",
  "normal.day.transit",
  "normal.night.transit",
];

var wmsLayer = L.TileLayer.wmsHeader(
  "https://GEOSERVER_PATH/here-maps/{mapType}/maptile/newest/{mapScheme}/{z}/{x}/{y}/512/png8",
  {
    tileSize: 512,
    zoomOffset: -1,
    mapType: POSSIBLE_MAP_TYPES[0],
    mapScheme: POSSIBLE_MAP_SCHEMES[7],
    attribution: 'Powered by ... - Map data&copy; <a href="...">...</a>',
  },
  [
    {
      header: "key",
      value: MYAUTHTOKEN,
    },
  ],
  null
).addTo(map);
```

### Typescript

```sh
$ npm install leaflet @types/leaflet leaflet-header --save
```

```ts
import * as L from "leaflet";
import "leaflet-header";
// YOUR LEAFLET CODE
const POSSIBLE_MAP_TYPES = [
  "maptile-base",
  "maptile-aerial",
  "maptile-traffic",
];
const POSSIBLE_MAP_SCHEMES = [
  "normal.day",
  "normal.night",
  "normal.traffic.day",
  "normal.traffic.night",
  "satellite.day",
  "terrain.day",
  "hybrid.day",
  "normal.day.transit",
  "normal.night.transit",
];

var wmsLayer = L.TileLayer.wmsHeader(
  "https://GEOSERVER_PATH/here-maps/{mapType}/maptile/newest/{mapScheme}/{z}/{x}/{y}/512/png8",
  {
    tileSize: 512,
    zoomOffset: -1,
    mapType: POSSIBLE_MAP_TYPES[0],
    mapScheme: POSSIBLE_MAP_SCHEMES[7],
    attribution: 'Powered by ... - Map data&copy; <a href="...">...</a>',
  },
  [
    {
      header: "key",
      value: MYAUTHTOKEN,
    },
  ],
  null
).addTo(map);
```

### Abort parameter

Abort parameter allow to abort the http request through an Observable. This optimization function might be usefull to stop the http request when it is not necessary anymore, mostly if many requests are pending. An example is provided on /tests/system-tests.html .

See below an example using an Observable as "abort" parameter.

```ts
// CAUTION: OUTDATED CAUTION: OUTDATED
let tileLayer: L.TileLayer.WMSHeader = L.TileLayer.wmsHeader(
  "https://GEOSERVER_PATH/geoserver/wms?",
  {
    layers: layers,
    format: "image/png",
    transparent: true,
  },
  [
    { header: "Authorization", value: "JWT " + MYAUTHTOKEN },
    { header: "content-type", value: "text/plain" },
  ],
  this.abortWMSObservable$.pipe(take(1))
);
```
