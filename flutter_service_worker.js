'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "652d4cfddd402c34111edfcaf5b05cc5",
"index.html": "c3ef3e38b207a3db92fedd5e0591a3b7",
"/": "c3ef3e38b207a3db92fedd5e0591a3b7",
"main.dart.js": "a6872bb5f4bd8d45aa3bfe19ba082abc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "a9cc67fcb7ce01be3c8a589cebc9e656",
"assets/AssetManifest.json": "9855486b50a53ce691ceed37c98f7a01",
"assets/NOTICES": "42c221b67598735b7b9153ec4b5f2463",
"assets/FontManifest.json": "d903af7e3a1a06744dae07f641edbda4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/images/btn_remote_plus_on.png": "604cb28e9b26f94d90cef57a7baa6479",
"assets/assets/images/img_intro_v3.png": "e94ae6df5c866208542a732e26502f5c",
"assets/assets/images/ic_menu_settings.png": "2c386fc3340d003ae7cebafcc965dcc3",
"assets/assets/images/ic_mode_home.png": "5902124a0dda06af0c5910a762c04ee0",
"assets/assets/images/img_intro_v2.png": "b98b6bb125d614e95df1181f7082775e",
"assets/assets/images/ic_connection_wired.png": "29300d170fe5128cc8ec4e3038327ad2",
"assets/assets/images/img_intro_v1.png": "644265dd8eccfe37607ecb1dc2d0340f",
"assets/assets/images/btn_remote_disarmed_on.png": "5cd017bdf963cfeb02e22581c9af5e06",
"assets/assets/images/era_access_sensor.png": "d54a224cda1289d8b9b950106ba8d7b7",
"assets/assets/images/ic_menu_account.png": "ba0f0483438bd719c46d6ddc8c606253",
"assets/assets/images/btn_remote_armed_on.png": "979dd9d68988375d0f9d889760292ccd",
"assets/assets/images/era_remote.png": "d3c32df98b9a17354b7bb22a4c627bfe",
"assets/assets/images/era_siren.png": "7c85ca1102e12f36853cb1a103fe2ca8",
"assets/assets/images/ic_connection_sim.png": "7503b9c5c8271f80386508dd6dcb4e56",
"assets/assets/images/era_pet_friendly.png": "c77dd0245d0a1d53a2fdaa879cefc369",
"assets/assets/images/ic_menu_support.png": "619bd8bcc32d7281d1a9c1e9c2ad5c85",
"assets/assets/images/btn_remote_home_on.png": "06e3f0cf390b3057db561f5f5c5b80a1",
"assets/assets/images/btn_remote_disarmed_off.png": "d2cdf207f0d2e0094e7093b999b236f1",
"assets/assets/images/era_doorbell.png": "2ae21b8aa99e5ffabc50d825ed98ecd9",
"assets/assets/images/ic_lock.png": "7d521ce7fadd423a12ee2e8538444ac5",
"assets/assets/images/era_outdoor.png": "70fcdacb42ea5750074f3fb4ec47c3bf",
"assets/assets/images/btn_remote_plus_off.png": "548ed361656dac293d9e2434be20b2a5",
"assets/assets/images/hub_products.png": "5801b9dbf3f91dc1651ebceeb05033f3",
"assets/assets/images/ic_menu_cameras.png": "c0a7f726fc4535defab3d85cf12c7eab",
"assets/assets/images/btn_remote_home_off.png": "4c13474bde49b5dda14463a0c1b44aed",
"assets/assets/images/img_era_logo.png": "0896df5e86192c64846eed418521bd94",
"assets/assets/images/era_window_sensor.png": "7ea865e3d12e539035ec897f01e05870",
"assets/assets/images/ic_source_mains.png": "3e1399c72a59c81238402c75f7b846bf",
"assets/assets/images/ic_menu_protect.png": "0e5ba77305783e534a57999c49bee5b8",
"assets/assets/images/ic_nav_doorcam.png": "3badcbae4d15ed160635ae8f3e4b80b6",
"assets/assets/images/ic_menu_activity.png": "77002ab35b932c59d953a5ede7657776",
"assets/assets/images/ic_setup_turnonhub.png": "0dec74248a10b7c492e523c1e3a73394",
"assets/assets/images/ic_source_battery.png": "3407678b885eef658e94c2ca4f594314",
"assets/assets/images/era_flood_light.png": "cda37bc8a701a147af080c92b7000635",
"assets/assets/images/ic_offline.png": "cd11c147e134a37042d44bcf653e9345",
"assets/assets/images/ic_menu_logout.png": "da4a887ed01cca8ef7374ca612bce3e1",
"assets/assets/images/era_hub.png": "cdde4cdc7c23c2ccbb0cb89f88de862c",
"assets/assets/images/ic_mode_unarmed.png": "afc72ad2d1c3f6789cd2ab99b37f6cb7",
"assets/assets/images/btn_remote_armed_off.png": "67c035c83b5496a82506ea433523e31f",
"assets/assets/images/ic_menu_about.png": "57bc15e2dcf977f9a9a7ecf50150a1fe",
"assets/assets/images/ic_mode_armed.png": "f4bf198bb00b89b13350ae53594e02bf",
"assets/assets/images/era_touch_keypad.png": "14485246764e6b61c5a5e59666da0e45",
"assets/assets/images/era_indoor.png": "18cf379ec263472a2a348e50e829bc2c",
"assets/assets/fonts/Lato-Bold.ttf": "85d339d916479f729938d2911b85bf1f",
"assets/assets/fonts/Lato-Regular.ttf": "2d36b1a925432bae7f3c53a340868c6e",
"assets/assets/fonts/Lato-Light.ttf": "2fe27d9d10cdfccb1baef28a45d5ba90"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
