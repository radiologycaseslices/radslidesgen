const CACHE = 'radslidesgen-v2';

// Only cache same-origin assets — external CDN URLs cached on first fetch instead
const ASSETS = [
  '/radslidesgen/',
  '/radslidesgen/index.html',
  '/radslidesgen/manifest.json',
  '/radslidesgen/icon-192-1.png',
  '/radslidesgen/icon-512-1.png'
];

// Install: cache local assets only
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: delete old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: cache-first for same-origin, network-first for external
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (url.origin === location.origin) {
    // Same-origin: cache first
    e.respondWith(
      caches.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(res => {
          const copy = res.clone();
          caches.open(CACHE).then(cache => cache.put(e.request, copy));
          return res;
        });
      })
    );
  } else {
    // External (CDN, fonts): network first, cache fallback
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
  }
});
