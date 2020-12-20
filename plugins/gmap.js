import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps-withscopedautocomp'

Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDs4CxHA7EW7eHH2MQ9AQF5qGlYC4N362I',
    libraries: 'places'
  }
})
