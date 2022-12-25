import { createApp } from "vue";
import { createPinia } from "pinia";
import { Amplify } from 'aws-amplify';

import awsExports from './aws-exports';
import App from "./App.vue";
import router from "./router";

import "./assets/main.css";

const app = createApp(App);
Amplify.configure(awsExports);
app.use(createPinia());
app.use(router);

app.mount("#app");
