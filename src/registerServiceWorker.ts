export const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator && import.meta.env.PROD) {
    try {
      const registration = await navigator.serviceWorker.register("/serviceWorker.js");
      registration.addEventListener("updatefound", (event) => {
        const newServiceWorker = registration.installing;
        if (newServiceWorker) {
          newServiceWorker.addEventListener("statechange", (event) => {
            if (newServiceWorker.state === "installed") {
              console.log("New service worker is installed");
            }
          });
        }
      });
    } catch (error) {
      console.error(`Registration failed`, error);
    }
  }

  if (navigator.storage && navigator.storage.estimate) {
    const quota: any = await navigator.storage.estimate();
    const percentageUsed = Math.ceil((quota.usage / quota.quota) * 100);
    console.log(`You've used ${quota.usage}/${quota.quota} bytes (~${percentageUsed}%) of the available storage.`);
  }

  window.addEventListener("beforeinstallprompt", (e) => {
    console.log("Prepare to show install PWA prompt");
  });

  window.addEventListener("appinstalled", () => {
    // Log install to analytics
    console.log("PWA installed");
  });

  window.addEventListener("DOMContentLoaded", () => {
    let displayMode = "browser";
    if (window.matchMedia("(display-mode: standalone)").matches) {
      displayMode = "standalone";
    }
    console.log("Display mode:", displayMode);
  });
};
