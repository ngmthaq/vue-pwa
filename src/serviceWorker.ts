import * as localforage from "localforage";
import { APP_CONSTANTS } from "./constants/app.constant";
import { version } from "../.version";

const CURRENT_VERSION: string = version;

const CURRENT_CACHES: Record<string, string> = {
  requests: `cache-requests-v${CURRENT_VERSION}`,
};

const ALLOWABLE_ORIGINS: string[] = [self.location.origin];

const { skipWaiting, clients } = self as any;

self.addEventListener("install", (event) => {
  skipWaiting();
});

self.addEventListener("activate", (event: any) => {
  const cacheNameSet = new Set(Object.values(CURRENT_CACHES));
  event.waitUntil(
    (async () => {
      try {
        await clients.claim();
        const cacheNames = await caches.keys();
        return Promise.all(
          cacheNames.map((name) => {
            if (!cacheNameSet.has(name)) {
              console.log("Delete out of date cache version:", name);
              return caches.delete(name);
            }
          }),
        );
      } catch (error) {
        console.error("Error while activating service worker:", error);
        throw error;
      }
    })(),
  );
});

self.addEventListener("fetch", (event: any) => {
  event.respondWith(
    (async () => {
      try {
        const cache = await caches.open(CURRENT_CACHES.requests);
        const cachedResponse = await cache.match(event.request);
        if (cachedResponse) return cachedResponse.clone();
        const response = await fetch(event.request.clone());
        if (response.status < 400 && event.request.method.toUpperCase() === "GET") {
          const isValid: boolean = ALLOWABLE_ORIGINS.some((origin) => {
            return response.url.startsWith(origin);
          });
          if (isValid) {
            console.log("Caching the response of url:", event.request.url);
            cache.put(event.request, response.clone());
          }
        }
        return response.clone();
      } catch (error) {
        console.error("Error while caching request:", error);
        throw error;
      }
    })(),
  );
});
