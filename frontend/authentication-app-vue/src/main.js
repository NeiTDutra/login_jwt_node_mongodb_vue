import Vue from 'vue';
// import Sweetalert from 'sweetalert';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'nprogress/nprogress.css';

// Vue.use(Sweetalert);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
