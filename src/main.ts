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
axios.defaults.baseURL = import.meta.env.VITE_REMOTE_API || "https://bug-wars-server-fhs0.onrender.com"

app.mount('#app');
// Dynamically set the viewport height
window.addEventListener('resize', () => {
    const vh = window.innerHeight *  0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Call the resize event on page load
window.dispatchEvent(new Event('resize'));
