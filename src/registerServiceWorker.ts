export const registerServiceWorker = async () => {
  if (import.meta.env.PROD) {
    window.addEventListener("DOMContentLoaded", () => {
      let displayMode = "browser";
      if (window.matchMedia("(display-mode: standalone)").matches) {
        displayMode = "standalone";
      }
      console.log("Display mode:", displayMode);
    });

    if (navigator.storage && navigator.storage.estimate) {
      const quota: any = await navigator.storage.estimate();
      const percentageUsed = Math.ceil((quota.usage / quota.quota) * 100);
      console.log(`You've used ${quota.usage}/${quota.quota} bytes (~${percentageUsed}%) of the available storage.`);
    }

    if ("serviceWorker" in navigator) {
      try {
        const registration = await navigator.serviceWorker.register("/serviceWorker.js");
        registration.addEventListener("updatefound", (event) => {
          console.log("A new version has just been released");
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
        console.error("Registration failed");
        console.error(error);
      }
    }
  }
};
