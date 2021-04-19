import { createApp } from 'vue';
//import adapter from 'webrtc-adapter'

import App from './App.vue';
import { store } from './store';
import { i18n } from './i18n';
import { setupRouter } from './router';

import './assets/styles/index.css';

const router = setupRouter(i18n);

const app = createApp(App);
app.use(store);
app.use(i18n);
app.use(router);
app.mount('#app');
