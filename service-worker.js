// service-worker.js

// set names for both precache & runtime cache
workbox.core.setCacheNameDetails({
    prefix: 'less-style-please',
    suffix: 'v0.1',
    precache: 'precache',
    runtime: 'runtime-cache'
});

// let Service Worker take control of pages ASAP
workbox.core.skipWaiting();
workbox.core.clientsClaim();

// let Workbox handle our precache list
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// use `NetworkFirst` strategy for html, css and js
workbox.routing.registerRoute(
    /\.(?:html|js|css)$/,
    new workbox.strategies.NetworkFirst()
);

// use `CacheFirst` strategy for webfonts
workbox.routing.registerRoute(
    /\.(?:woff2|woff|ttf|eot)$/,
    new workbox.strategies.CacheFirst()
);

// use `CacheFirst` strategy for images
workbox.routing.registerRoute(
    /assets\/(img|background)/,
    new workbox.strategies.CacheFirst()
);

// use `StaleWhileRevalidate` third party files
// workbox.routing.registerRoute(
//     /^https?:\/\/cdn.staticfile.org/,
//     new workbox.strategies.StaleWhileRevalidate()
// );