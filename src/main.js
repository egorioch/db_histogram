import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';
import { useVuelidate } from '@vuelidate/core';
import Vuex from 'vuex'

createApp(App)
    .use(useVuelidate)
    .use(Vuex)
    .use(router)
    .mount('#app')
