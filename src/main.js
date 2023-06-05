import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';
import { useVuelidate } from '@vuelidate/core';
import Vuex from 'vuex'
// import store from '@/store/modules/noteStore'
// import store from "./store/store";
import axios from 'axios';


createApp(App)
  .use(useVuelidate)
  .use(Vuex)
  .use(router)
  // .use(store)
  .use(axios)
  .mount('#app')



