// src/main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { db } from './Firebase'; // Import the db object

const app = createApp(App);

app.use(router);

// Make Firebase Firestore globally available (optional, but convenient)
app.config.globalProperties.$db = db;

app.mount('#app');