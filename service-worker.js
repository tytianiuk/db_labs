/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "1eaaca0527e60523bc07f7aaf22ed6bd"
  },
  {
    "url": "assets/css/0.styles.6ae935a1.css",
    "revision": "8f5e346f5835a4a3bf9e03d70e9cbac6"
  },
  {
    "url": "assets/img/addUser.527a28ae.jpg",
    "revision": "527a28aecde9b7fc8620ecb6cfa2d53b"
  },
  {
    "url": "assets/img/addUserWithoutGender.c24dad10.jpg",
    "revision": "c24dad103e9d1f4e2f8cf4b43a66cb9e"
  },
  {
    "url": "assets/img/deleteAllUsers.c7056426.jpg",
    "revision": "c705642666311d7848993598799e81fd"
  },
  {
    "url": "assets/img/deleteUser.74b692ec.jpg",
    "revision": "74b692ecaafa5ce76b1c8ffa2aef256f"
  },
  {
    "url": "assets/img/getAllUsers.7ef20f0c.jpg",
    "revision": "7ef20f0c2cafb140d9d658b1bbc3c0f0"
  },
  {
    "url": "assets/img/getRemainingUsers.b2e417ed.jpg",
    "revision": "b2e417edae3243dab25217b655129c8f"
  },
  {
    "url": "assets/img/getUser.8fd1cc76.jpg",
    "revision": "8fd1cc76a166336c852100b124147ee6"
  },
  {
    "url": "assets/img/getUserWithoutGender.1bb5f271.jpg",
    "revision": "1bb5f271e4c6160a8ced5494f00a0cd9"
  },
  {
    "url": "assets/img/logo.21fcc4f4.svg",
    "revision": "21fcc4f485f8d8cd95ab594fcdc39a0e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/start.fc52398e.png",
    "revision": "fc52398e6b1f08d9bfcd3eeec2eb6a4d"
  },
  {
    "url": "assets/img/updateFullyUser.704fc757.jpg",
    "revision": "704fc75783bae88271463402ca352058"
  },
  {
    "url": "assets/img/updatePartOfUser.427115ba.jpg",
    "revision": "427115bab80f8dea396291f7ed8a9edc"
  },
  {
    "url": "assets/js/10.eb16c742.js",
    "revision": "0462b08e2d13728ec9c2fb460bfc2ff7"
  },
  {
    "url": "assets/js/11.9f95bcea.js",
    "revision": "c75aad72b17e49d4b15996b43d37148f"
  },
  {
    "url": "assets/js/12.21fae77a.js",
    "revision": "141802a57741398351f7dafa27475b53"
  },
  {
    "url": "assets/js/13.8da4b927.js",
    "revision": "4b19660c76162f40cd92533fa07ddba9"
  },
  {
    "url": "assets/js/14.e8321ced.js",
    "revision": "6cc042f965ae3432eee14978696f5eef"
  },
  {
    "url": "assets/js/15.b9293569.js",
    "revision": "92e7f62cc4977a7e275c65c1e01977d4"
  },
  {
    "url": "assets/js/16.0eccf095.js",
    "revision": "03425cc06aa6cdbb21bc0b7afaa0a137"
  },
  {
    "url": "assets/js/17.4691932c.js",
    "revision": "cfa2deba354534bbf40fadd712c6c260"
  },
  {
    "url": "assets/js/18.622e0ec6.js",
    "revision": "3dfc44d8f758f8eba511f48945183ee1"
  },
  {
    "url": "assets/js/19.83fd6559.js",
    "revision": "df68f33662333196a1939eac2db996d6"
  },
  {
    "url": "assets/js/2.87f89326.js",
    "revision": "6e385980e1361a82053c75467019136d"
  },
  {
    "url": "assets/js/20.a721bf37.js",
    "revision": "c11874e141ecf7b35e6acda696f49ddf"
  },
  {
    "url": "assets/js/21.ff6c6433.js",
    "revision": "7d65a549869c4bfc11c45ec6e846e7f4"
  },
  {
    "url": "assets/js/22.32638f7b.js",
    "revision": "c65afef5239c1d5152f8907566f260a9"
  },
  {
    "url": "assets/js/23.0fd59977.js",
    "revision": "08ab1e94a2de6901806b95dd6abb8811"
  },
  {
    "url": "assets/js/24.b052b3c8.js",
    "revision": "b81e65bda09554c827bcff735fb2c877"
  },
  {
    "url": "assets/js/26.d055c4e2.js",
    "revision": "72ceaebfab60dab1c69530cf4a1c6117"
  },
  {
    "url": "assets/js/3.be9f9282.js",
    "revision": "528d1fa9e7e4b8c235562e1effb29234"
  },
  {
    "url": "assets/js/4.47bd8645.js",
    "revision": "1f5d106ae36de262c9dc9e3d06fd3da8"
  },
  {
    "url": "assets/js/5.bb25f919.js",
    "revision": "2e688bc88dc1351c9748b25b8258bf19"
  },
  {
    "url": "assets/js/6.bd61b622.js",
    "revision": "e46d1a15d85befb20515948df81dbce7"
  },
  {
    "url": "assets/js/7.6b463537.js",
    "revision": "258a39b8bdd92332ab098c4ed83d649d"
  },
  {
    "url": "assets/js/8.41a96ea7.js",
    "revision": "9e76e554525db01fa2088c8714e67270"
  },
  {
    "url": "assets/js/9.4ed8c080.js",
    "revision": "4119d9ce5fe2ca70e543b1e6e733a4fc"
  },
  {
    "url": "assets/js/app.6b51a8ca.js",
    "revision": "04b995c97fa038c4e5a7b7748eddb171"
  },
  {
    "url": "conclusion/index.html",
    "revision": "27f092539798ef87b327e60d3d4ec23f"
  },
  {
    "url": "design/index.html",
    "revision": "4581ba0bba3e602edc615ef51a0bf473"
  },
  {
    "url": "index.html",
    "revision": "d9f312b6080b326688887fe32cea2183"
  },
  {
    "url": "intro/index.html",
    "revision": "20c26d4b5fbff29e02b8782855ee3c2d"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "a2accfd7164f856d6e45b7b503387c89"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "898e5945c8cfed6085d9f750a9a59854"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "f60e4bfaa5b4b062a308b75c9162aabd"
  },
  {
    "url": "software/index.html",
    "revision": "c6b8c36aea5400aa66fb2326f090d8c8"
  },
  {
    "url": "test/index.html",
    "revision": "8924da40cc7d774190b8265e1f6badb4"
  },
  {
    "url": "use cases/index.html",
    "revision": "29e63668490efc432aab0f761cb14d50"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
