const cacheName = "v1";

const cacheAssets = [
  "./index.html",
  "./about.html",
  "./style.css",
  "./index.js",
];

// Call Install Event
self.addEventListener("install", (e) => {
  console.log("Service Worker: Installed");

  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("Service Worker: Caching Files");
        cache.addAll(cacheAssets);
      })
      .then(() => {
        self.skipWaiting();
      })
  );
});

// Call Activate Events
self.addEventListener("activate", (e) => {
  console.log("Service Worker: Activated");
});
