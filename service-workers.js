"use strict";

var CACHE_VERSION = 1;
const CACHE_NAME = "cache-v" + CACHE_VERSION;
// The files we want to cache
var PATH = "";
var resourceList = [
  PATH + "./",
  PATH + "./index.html",
  PATH + "./halaman1.css",
  PATH + "./img/Homie.ico",
  PATH + "./img/fontHomie.pn",
  PATH + "./img/karpet.png",
  PATH + "./img/sofa.png",
  PATH + "./img/pel.png",
  PATH + "./img/kasur.jpg",
  PATH + "./img/data 1.png",
  PATH + "./img/atria-hotel-gading-serpong-disinfektan 1.png",
  PATH + "./img/location.png",
  PATH + "./img/clock.png",
  PATH + "./img/whatsapp.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(resourceList);
    })
  );
});

function addToCache(cacheName, resourceList) {
  caches.open(cacheName).then((cache) => {
    return cache.addAll(resourceList);
  });
}

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
