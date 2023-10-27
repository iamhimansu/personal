import {createApp} from "vue";
import router from "@/routes";
import App from "@/App.vue";
import {store} from "@/store";

import "@/assets/css/app.css";

//
const app = createApp(App); //server side rendering app
app.use(router)
app.use(store)
app.mount('#app');
