import { createPinia } from 'pinia';
import { createApp } from "vue";
import axios from "axios";

import App from './App.vue';
import router from './router';

import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);

app.use(createPinia());
app.use(Toast);
app.use(router);
// TODO: Setup axios on backend ~Daniel
//baseURL for deployment. Uncomment before committing.
axios.defaults.baseURL = import.meta.env.PROD == false ? import.meta.env.VITE_REMOTE_API : "https://bug-wars-server-fhs0.onrender.com"

app.mount('#app');
