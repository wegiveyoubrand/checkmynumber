// const cacheName = "v1";

// const cacheAssets = [
//   "./index.html",
//   "./about.html",
//   "./style.css",
//   "./index.js",
// ];

// Call Install Event
self.addEventListener("install", (e) => {
  console.log("Service Worker: Installed");
});

// Call Activate Events
self.addEventListener("activate", (e) => {
  console.log("Service Worker: Activated");
});

// Fetch Event
self.addEventListener("fetch", (evt) => {
  console.log("fetch event", evt);
});
