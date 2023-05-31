import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';
import { useVuelidate } from '@vuelidate/core';

createApp(App)
    .use(useVuelidate)
    .use(router)
    .mount('#app')
