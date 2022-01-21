import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';
import naive from 'naive-ui';

import 'vfonts/Lato.css';
import 'vfonts/FiraCode.css';

createApp(App).use(store, key).use(router).use(naive).mount('#app');
