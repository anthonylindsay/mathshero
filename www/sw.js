self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('offlineCache').then(function(cache) {
      console.log('add to cache');
      return cache.addAll(
        [
          '/mathshero/www/css/styles.css',
          '/mathshero/www/app/main.js',
          '/mathshero/www/app/messages.js',
          '/mathshero/www/app/numberpad.js',
          '/mathshero/www/app/question.js',
          '/mathshero/www/app/settings.js',
          '/mathshero/www/app/setup.js',
          '/mathshero/www/app/score.js',
          '/mathshero/www/lib/answer.js',
          '/mathshero/www/lib/json2.js',
          '/mathshero/www/lib/plugins.js',
          '/mathshero/www/lib/print.js',
          '/mathshero/www/lib/render.js',
          '/mathshero/www/lib/require.js',
          '/mathshero/www/app.js',
          '/mathshero/www/index.html',
          '/mathshero/www/favicon.ico',
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
