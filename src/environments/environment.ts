export const environment = {
  production: false,
  CRYPTO_KEY: 'asdfghjkl',
  mapbox: {
    accessToken:
      'pk.eyJ1IjoidHJhaWxjaGFsbGVuZ2VyIiwiYSI6ImNreTJsdjAydzBtNHUydHNjNmtocmdqcGYifQ.v06of90oGaTgBLUd8tORtQ',
    searchURL: 'https://api.mapbox.com/search/searchbox/v1/suggest',
    retrieveURL: 'https://api.mapbox.com/search/searchbox/v1/retrieve/',
    directionURL:
      'https://api.mapbox.com/directions/v5/mapbox/walking/77.327107%2C28.570784%3B77.2203935%2C28.642162?alternatives=true&continue_straight=true&geometries=geojson&language=en&overview=full&steps=true&access_token=YOUR_MAPBOX_ACCESS_TOKEN',
  },
  firebaseConfig: {
    apiKey: 'AIzaSyCbd0gj9g8995UjyoHkrOuVVMepQmcLl-I',
    authDomain: 'ebaazar-19839.firebaseapp.com',
    projectId: 'ebaazar-19839',
    storageBucket: 'ebaazar-19839.appspot.com',
    messagingSenderId: '370930849756',
    appId: '1:370930849756:web:e852b66bb6b8863a34e119',
    measurementId: 'G-0JL4S2LRL1',
  },
};
