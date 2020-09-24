importScripts("workbox-v5.1.3/workbox-sw.js");

workbox.setConfig({ modulePathPrefix: "workbox-v5.1.3/" });

const precacheManifest = [];
precacheAndRoute(self.__WB_MANIFEST);
workbox.precaching.supressWarnings();
workbox.precaching.precacheAndRoute(precacheManifest);
