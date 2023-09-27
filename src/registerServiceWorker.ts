export const registerServiceWorker = async () => {
  if ("serviceWorker" in navigator && import.meta.env.PROD) {
    try {
      const registration = await navigator.serviceWorker.register("/serviceWorker.js");
      if (registration.installing) {
        console.log("Service worker status: installing");
      } else if (registration.waiting) {
        console.log("Service worker status: installed");
      } else if (registration.active) {
        console.log("Service worker status: active");
      }
    } catch (error) {
      console.error(`Registration failed`, error);
    }
  }
};
