import { createPinia } from 'pinia';
import { createApp } from "vue";
import axios from "axios";

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(router);
// TODO: Setup axios on backend ~Daniel
//baseURL for deployment. Uncomment before committing.
axios.defaults.baseURL = import.meta.env.VITE_REMOTE_API || "https://bug-wars-backend.onrender.com/api/v1"

app.mount('#app');
