import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import 'chartjs-adapter-dayjs-4/dist/chartjs-adapter-dayjs-4.esm';

createApp(App)
    .use(router)
    .mount('#app')
