import { createApp } from "vue";
import { createPinia } from "pinia";
import { Amplify } from 'aws-amplify';

import awsExports from './aws-exports';
import App from "./App.vue";
import router from "./router";
import { IonicVue } from '@ionic/vue';
/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';

const app = createApp(App);
Amplify.configure(awsExports);
app.use(createPinia());
app.use(router);
app.use(IonicVue);

router.isReady().then(() => {
  app.mount('#app');
});