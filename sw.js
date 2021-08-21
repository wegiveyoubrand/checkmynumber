const cacheAssets = [
  "index.html",
  "support.html",
  "style.css",
  "index.js",
  "/images/touch/logo-144px.png",
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("static").then((cache) => {
      return cache.addAll(cacheAssets);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
