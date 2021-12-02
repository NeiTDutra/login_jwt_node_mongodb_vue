import Vue from 'vue';
// import Sweetalert from 'sweetalert';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '..node-modules/nprogress/nprogress.css';
import Vuelidate from 'vuelidate';

// Vue.use(Sweetalert);
Vue.use(Vuelidate);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
