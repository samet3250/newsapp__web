'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "979efda499b0a8cf2b9b5fafaf15a1c4",
"assets/assets/asker.jpeg": "5ce8a652ddf95c4aa0606455927d9ddf",
"assets/assets/categories/books.jpg": "ebf48038e0bdf59b72180ef65ac472e2",
"assets/assets/categories/business.jpg": "5b672ea0880238e78e1344aeaced4737",
"assets/assets/categories/cinema.jpg": "27c48b3c6b5edd28b8044412db4743c4",
"assets/assets/categories/education.jpg": "5e6ffc1036979419b57397eaf0aebf8a",
"assets/assets/categories/entertainment.jpg": "6a5971d6912a88945f246439bb46fd80",
"assets/assets/categories/health.jpg": "9b7e8ee72b2940ba750181fa6149af88",
"assets/assets/categories/highlights.jpg": "a3446d65e253013d61879a1e07d44fd8",
"assets/assets/categories/lifestyle.jpg": "4e5d0159ca43c96241d3250f2265be42",
"assets/assets/categories/science.jpg": "70e145f32a82138ed13c3e0cb0307014",
"assets/assets/categories/sports.jpg": "a149ca4d2c81a54d62698e57861a2bcc",
"assets/assets/categories/turkey.jpg": "35a1257db256f27ace5fb9076495be1c",
"assets/assets/categories/world.jpg": "41c0d196dff3ad9988d8363e83dbb48a",
"assets/assets/france.jpeg": "478a74ea372fba447293d6f575e75256",
"assets/assets/icons/back.png": "4074b336864c3cbd75b828ed1543c844",
"assets/assets/icons/back2.png": "d8a95d3b707251e069465f1937458910",
"assets/assets/icons/back3.png": "eaf6a4fbc90bb56b8910a61a9388979c",
"assets/assets/icons/bookmark.png": "1a77b82fa5cf6252cb3169e29c613d85",
"assets/assets/icons/cancel.png": "4a43bf7ca4df3a5a72113bbb5baf11cf",
"assets/assets/icons/drawer.jpg": "35bc3f0687ff49a64d5d2479aa031332",
"assets/assets/icons/drawer.png": "dfa900aca8411c58d0fb74b682236328",
"assets/assets/icons/facebook1.png": "8b181561f71df705b96b70da81802ba2",
"assets/assets/icons/google.png": "ff629c02385f2f3a199b7e0b3065d077",
"assets/assets/icons/home.png": "ba87e2e75b8647d05dbd20a0e43cdff3",
"assets/assets/icons/search.png": "3b32f997928a58ab7af7c883ca0b4f03",
"assets/assets/icons/send.png": "64d360dc6de7f93095ffe32e3f53c804",
"assets/assets/icons/share.png": "9bfb55ad3d67a119e7d6c59d0f2e65d4",
"assets/assets/icons/twitter.png": "400dc88500c0bc5e11f6c953dedcc7ab",
"assets/assets/news.png": "fc17bddf8fffba69d3e5867b932dac21",
"assets/assets/togg.jpg": "41a9165ff56eaa6c986c9be0772f62f4",
"assets/assets/trump.jpeg": "7245423557eca5ae04953c4b5001946a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "96cfa045a44d54b4bde32c3632aa5035",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "ac552ffce10bdaed3d7264777b7c87a5",
"/": "ac552ffce10bdaed3d7264777b7c87a5",
"main.dart.js": "c78e81eb89a79394e7727b888dba4a13",
"manifest.json": "4bd5bd3060e89a5b84e42be946d77494",
"version.json": "2191889cdc40274bb08f6357b1739325"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
