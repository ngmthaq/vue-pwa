import { createApp } from "vue";
import { router } from "./plugins/router.plugin";
import { pinia } from "./plugins/store.plugin";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap.min";
import "./assets/scss/main.scss";

const app = createApp(App);
app.use(pinia);
app.use(router);
app.mount("#app");
