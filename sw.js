const cacheAssets = [
  "/index.html",
  "/support.html",

  "/src/css/style.css",
  "/src/js/index.js",

  "/assets/images/logo-144px.png",

  "/assets/images/mtn.png",
  "/assets/images/glo.jfif",
  "/assets/images/airtel.png",
  "/assets/images/9mobile.png",
  "/assets/images/Layer 1.png"
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
