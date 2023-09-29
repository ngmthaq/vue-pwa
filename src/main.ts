import { createApp } from "vue";
import { router } from "./plugins/router.plugin";
import { pinia } from "./plugins/store.plugin";
import { i18n } from "./plugins/i18n.plugin";
import { registerServiceWorker } from "./registerServiceWorker";
import App from "./App.vue";
import "bootstrap/dist/js/bootstrap.min";
import "./assets/scss/main.scss";

const registerApp = () => {
  const app = createApp(App);
  app.use(pinia);
  app.use(router);
  app.use(i18n);
  app.mount("#app");
};

registerServiceWorker().then(registerApp);
