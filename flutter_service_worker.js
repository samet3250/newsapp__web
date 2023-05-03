'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a3623f91f57d0530e870df83e19d0949",
".git/config": "d186063f6e611ff480b4080e2557a40c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "4676d5faeef5142ce7b296d048ed9e76",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "22df8048fff137ceae918eb9a639bc6f",
".git/logs/refs/heads/main": "cd0d49d1420ee5085350a7935808d90d",
".git/logs/refs/remotes/origin/main": "70e5bd669ea86022095bab8e22af19c7",
".git/objects/04/0b33d7208e5bffee961bac3e552a128fa7254d": "96b877ac9c0207022deda6e7268509a5",
".git/objects/08/77ea49e78a40f1fd5acd2e3853aa0884a6ad99": "80da6a7403f056aaacdf0922507aebca",
".git/objects/11/04293c403780d198de80945e3aab33838ed36a": "4bdfe937debe349d0591ed79bdf49688",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/13/61bb5f0ccfe54dbbaa514743ae1bbbbfb744ac": "0a01c9baf940dc70564dfde15cef1e86",
".git/objects/1c/22e0e8c1d03dc949c8dce2fa1fe4387a1dfcad": "b85826fe4b7fa96a8e9be6aacdb86d44",
".git/objects/1d/1c9166fffaba6dc81913bf3742bc36b8488766": "3d75952fcba3dde2380d71b955807d50",
".git/objects/21/8ba7701bf28528a6517a76774c10241c5e7e75": "a53f6269e53c87a0b6714f0f5f278567",
".git/objects/30/6e076e8642c982833d6f8d9c6bdeafcdb57261": "9437b0c698d10a2e35ef3dacb490818d",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/8b42ad433235a85bb65d620d82496c040b429c": "c0a282bb47eb80a9f61fbcb168a3cf9a",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/b542d444522acee2da2ea8218abe3eaffece9c": "67f5e4a4c2e51f54d118d8a28fea7b27",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4c/24d8d977207044866e5afdf2d90081f82504da": "44c12d63c9040edccf6e9998dfdc2cb1",
".git/objects/4d/06d93687d5571062cd5f09582f8b96452b4e71": "8715da1e2a442e3fde9879431d152c09",
".git/objects/52/7bfcd9535de1e18a1f41c271f4631598234ed8": "3165c6ef05c06e3d5fa842f56693233d",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/286036a123e014d9e7794281fbd23ece6567fa": "9f1a15e966bd782721ac64941135cacf",
".git/objects/5d/4364ccffa54b64e71ca257354751a174bc3ccb": "9dab59cd067a85dcf21caa2e293b80ae",
".git/objects/5f/55d860d0b08fd305a096b7369f48fe2566857f": "9142ddf59b0177a452a8f4c9a6ae967d",
".git/objects/62/8007f52cd42f52c31ae89d1018b8cad601a94a": "0a00cb74a794c710a2a33d176775875b",
".git/objects/65/ede6efd7290266a0383a2d3b8621d6a4371b5f": "12660cacd6221e56205e36b1abdf29f9",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/77/01fd98eeb88d1da8d54670e9ebb4db57dc9c2c": "052791b2145017e13a7f23c5143987cb",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7f/6701b5b94a6d87be24237c433e942fbd809df2": "66edbf40cdb2432d39f1c88a052e914c",
".git/objects/80/02602a9008402b9fc4982b44834c516d262789": "bf11f4cffccde2149c15b4e0e417bdab",
".git/objects/83/aba850f0bdcf7b473c4d800dc5b38f4c69b0da": "ae8c2a0a79db859c5d8dccc074b0583c",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/e6681fd0be5f45a52a558a20578be3ec930e60": "cc1547001a7640ec35b8e2f0ce1aec79",
".git/objects/8c/0aac19ce355d31bd01e00845d78a5ad5d89454": "52f1d418abcff9706fa601cc70c12d89",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/4e2b7c25e4426fa06dfb887d844d999b46e72e": "57a0e7f9274caa377df8272983a3cbbb",
".git/objects/8f/214b51ee9e5577e420d81f8f30bc9b4ad5db7c": "ff603f5d3438d0db90f0376f6d693aaa",
".git/objects/95/558d64d44485d1d670ebba0114441810c9980c": "a86fdc15bd6f192985b75e8ef80833d9",
".git/objects/9a/5110658c5dea54a9b5dc3b40b39ed66c165f53": "69985dc7c04ae64e71fa06209111e2e3",
".git/objects/9b/49c527022cb7b62f2d6013983fdc6c8c0e81ac": "d0e42a24e6b35012622bcba7196d7983",
".git/objects/9d/7ec3a1e54eab6aeb78f69a472a13ca9216bbcd": "4858f8e6d82c7a71107aa7934f14b6e1",
".git/objects/9f/ff093cfd64207fea91c1711cf46ff53d648a70": "0b57ea068e3fbf6846b5d59ba2f7a00f",
".git/objects/a0/8dc5e267fddf832fe3e97e60454efa808e7345": "bab094380c7860b35289cfea349f2d31",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a8/6a2870b7fb5fee2fb809035f8161a76ec032fa": "08aa27e00f87093e1b7f3919bae1a13d",
".git/objects/a8/b0cc71da019861ea6b12f465232d977bb1c61e": "3e4b41b038a24c9e76f308e5d30a57fa",
".git/objects/aa/8343a2a08d6f8302ee1f79877b9f902128f3d1": "681a9c08b7912d80c679d790268f2dea",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/e8fe0d7516126bfe6c1962e7806bd9f32eb865": "91acc43fd0e52e041209a9e8caae8029",
".git/objects/b3/04eaf08ea20d7c31e4c3de0fae5eca0621b531": "1b27d04872ac15d291c66323b9e96b0e",
".git/objects/b5/f80b54ddda5b78c6272b67f08aa7b2e445f28b": "bbaf300c759283343449e2f70b961031",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c5/103c54244550767ebb9e3b28eb3660a1845a93": "c7d6fff1372a61766952b7cdc789d440",
".git/objects/c5/7679e413f32ac8849bdeca06c5233c364b31fc": "ee1ea9671983499a1a348a673baefdca",
".git/objects/d3/5928b5c681518564a7a62b423c10124cdbca7c": "5ceb03c75aff76007551025714af2007",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dd/332dffa5e5f395c1415a0ae0f83282843075b1": "6304f7bdc81cfff43b94acfe580fc04b",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/0c95047eaa5336b48a03f846271ef1ffd08003": "c1bfe52b7ae6d479c953516add502b59",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/29e0c17ff485b16d0dc636ff94b7873199f94e": "6796d68156de1df6ea80608da340ed49",
".git/objects/fe/554fd700efa12274a133435114c78b8f7dec0e": "8aad70379ffa3681a321b5fafe9fecfd",
".git/refs/heads/main": "c1b74bd37667cf7f5d8f7c36e60838f5",
".git/refs/remotes/origin/main": "c1b74bd37667cf7f5d8f7c36e60838f5",
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
"assets/NOTICES": "06d00d09975d1495dbe9cda7a9958662",
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
"index.html": "c98d5293746b91a0cf932a4136864e4d",
"/": "c98d5293746b91a0cf932a4136864e4d",
"main.dart.js": "150a7ac6ff43edd84e2c3cee969b18de",
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
