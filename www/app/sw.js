self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('offlineCache').then(function(cache) {
      console.log('add to cache');
      return cache.addAll(
        [
          '/www/css/styles.css',
          '/www/app/main.js',
          '/www/app/messages.js',
          '/www/app/numberpad.js',
          '/www/app/question.js',
          '/www/app/settings.js',
          '/www/app/setup.js',
          '/www/lib/answer.js',
          '/www/lib/json2.js',
          '/www/lib/plugins.js',
          '/www/lib/print.js',
          '/www/lib/render.js',
          '/www/lib/require.js',
          '/www/app.js',
          '/www/index.html',
        ]
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
