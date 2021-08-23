const cacheAssets = [
  "/index.html",
  "/support.html",

  "/src/css/style.css",
  "/src/css/font.css",
  "/index.js",

  "/assets/images/logo-144px.png",

  "/assets/images/mtn.png",
  "/assets/images/glo.jfif",
  "/assets/images/airtel.png",
  "/assets/images/9mobile.png",
  "/assets/images/Layer 1.png",

  "/assets/src/fonts/poppins-v15-latin-100.eot",
  "/assets/src/fonts/poppins-v15-latin-100.svg",
  "/assets/src/fonts/poppins-v15-latin-100.ttf",
  "/assets/src/fonts/poppins-v15-latin-100.woff",
  "/assets/src/fonts/poppins-v15-latin-100.woff2",
  "/assets/src/fonts/poppins-v15-latin-500.eot",
  "/assets/src/fonts/poppins-v15-latin-500.svg",
  "/assets/src/fonts/poppins-v15-latin-500.ttf",
  "/assets/src/fonts/poppins-v15-latin-500.woff",
  "/assets/src/fonts/poppins-v15-latin-500.woff2",
  "/assets/src/fonts/poppins-v15-latin-700.eot",
  "/assets/src/fonts/poppins-v15-latin-700.svg",
  "/assets/src/fonts/poppins-v15-latin-700.ttf",
  "/assets/src/fonts/poppins-v15-latin-700.woff",
  "/assets/src/fonts/poppins-v15-latin-700.woff2",
  "/assets/src/fonts/poppins-v15-latin-900.eot",
  "/assets/src/fonts/poppins-v15-latin-900.svg",
  "/assets/src/fonts/poppins-v15-latin-900.ttf",
  "/assets/src/fonts/poppins-v15-latin-900.woff",
  "/assets/src/fonts/poppins-v15-latin-900.woff2",
  "/assets/src/fonts/poppins-v15-latin-regular.eot",
  "/assets/src/fonts/poppins-v15-latin-regular.svg",
  "/assets/src/fonts/poppins-v15-latin-regular.ttf",
  "/assets/src/fonts/poppins-v15-latin-regular.woff",
  "/assets/src/fonts/poppins-v15-latin-regular.woff2",
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
