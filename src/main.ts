import { createApp } from "vue";
import { APP_CONSTANTS } from "./constants/app.constant";
import { eventBus } from "./plugins/bus.plugin";
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

  app.config.errorHandler = (error: any) => {
    console.error(error);
    eventBus.emit(APP_CONSTANTS.eventBus.executeInternalError);
  };

  app.mount("#app");
};

registerServiceWorker(true).then(registerApp);
