
Package.describe({
  summary: "Cordova server picker"
});

Package.on_use(function (api, where) {
  api.use([
    'templating'
  ], 'client');

  api.add_files([
    'cordova.html',
    'cordova.js'
  ], 'web.cordova');
  api.add_files([
    'browser.html'
  ], 'web.browser');
});
