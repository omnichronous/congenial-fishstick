importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/5acf0174cf65609e7f37.js",
    "revision": "bfbc358727aec4d161c3fd0495f19600"
  },
  {
    "url": "/_nuxt/6fbf298a2db3ed732499.js",
    "revision": "ff8e532b29cda8202fb1cb8f04250684"
  },
  {
    "url": "/_nuxt/a3b2113c7efa57722736.js",
    "revision": "78e198ad6d201a61468dd3fbf187b0eb"
  },
  {
    "url": "/_nuxt/b99d9552cfad9e52b18f.js",
    "revision": "f344d3b2f7f96d792e89abac74f34bd0"
  },
  {
    "url": "/_nuxt/d5a27b3083590ca885e8.js",
    "revision": "6444d48bf630c70c72b558bee367c124"
  },
  {
    "url": "/_nuxt/ea54f017137322aa9c9e.js",
    "revision": "22e168a8737b644fbe1bb8a64fce89ec"
  }
], {
  "cacheId": "wuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
