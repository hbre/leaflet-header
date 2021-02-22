<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <l-map class="fill" ref="myMap" @ready="doSomethingOnReady()"></l-map>
  </div>
</template>

<script lang="ts">
import { LMap, LTileLayer } from "vue2-leaflet";
import { Component, Prop, Vue } from "vue-property-decorator";
import { Icon, LatLng } from "leaflet";
import * as L from "leaflet";

import "leaflet/dist/leaflet.css";
Vue.component("l-map", LMap);
Vue.component("l-tile-layer", LTileLayer);

type D = Icon.Default & {
  _getIconUrl?: string;
};

delete (Icon.Default.prototype as D)._getIconUrl;

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;

  doSomethingOnReady() {
    const MAPTILE_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";
    const API_KEY = "MY_DEMO_API_KEY";

    const layer = L.TileLayer(
      MAPTILE_URL,
      {
        attribution:
          'Kartendaten &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> Mitwirkende',
      },
      [{ header: "key", value: API_KEY }],
      null
    );

    layer.addTo(this.$refs.myMap.mapObject);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
