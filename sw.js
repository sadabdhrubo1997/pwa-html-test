self.addEventListener('install', (e) => {
  e.waitUntil(
    caches
      .open('fox-store')
      .then((cache) =>
        cache.addAll([
          '/pwa-html-test/',
          '/pwa-html-test/index.html',
          '/pwa-html-test/index.js',
          '/pwa-html-test/style.css',
          '/pwa-html-test/images/fox1.jpg',
          '/pwa-html-test/images/fox2.jpg',
          '/pwa-html-test/images/fox3.jpg',
          '/pwa-html-test/images/fox4.jpg',
        ])
      )
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
