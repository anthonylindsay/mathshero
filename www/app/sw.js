self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('offlineCache').then(function(cache) {
      console.log('add to cache');
      return cache.addAll(
        [
          '/apps/maths/www/css/styles.css',
          '/apps/maths/www/app/main.js',
          '/apps/maths/www/app/messages.js',
          '/apps/maths/www/app/numberpad.js',
          '/apps/maths/www/app/question.js',
          '/apps/maths/www/app/settings.js',
          '/apps/maths/www/app/setup.js',
          '/apps/maths/www/lib/answer.js',
          '/apps/maths/www/lib/json2.js',
          '/apps/maths/www/lib/plugins.js',
          '/apps/maths/www/lib/print.js',
          '/apps/maths/www/lib/render.js',
          '/apps/maths/www/lib/require.js',
          '/apps/maths/www/app.js',
          '/apps/maths/www/index.html',
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
