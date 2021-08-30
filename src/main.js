import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase'

Vue.config.productionTip = false

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDyubM06RqhVuDjlA3TrgZHzuprBgPQRCY",
    authDomain: "ec-site-pj.firebaseapp.com",
    projectId: "ec-site-pj",
    storageBucket: "ec-site-pj.appspot.com",
    messagingSenderId: "863623537580",
    appId: "1:863623537580:web:f9b1a97229d724d8461009",
    measurementId: "G-9JXLQ5WRB6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

new Vue({
  router,
  store,
  vuetify,
  firebase,
  render: h => h(App)
}).$mount('#app')
