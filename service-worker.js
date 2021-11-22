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
    "revision": "c27817deb3a872ae5ed253e534ae9bdd"
  },
  {
    "url": "api/cli/cli1.html",
    "revision": "7239f1824e9f69ab594131682d311dc4"
  },
  {
    "url": "api/index.html",
    "revision": "1cccf6f3defd624d393bae59957e2bca"
  },
  {
    "url": "api/node/index.html",
    "revision": "3b151517d36fcff3e698ee6f7deb3af1"
  },
  {
    "url": "api/node/node1.html",
    "revision": "7735be91d579c4136ed70ce59b457851"
  },
  {
    "url": "assets/css/0.styles.b059df1d.css",
    "revision": "6e25b3afaea52c36205f4933440d40dd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d50941e5.js",
    "revision": "d721291c3a3902cece7de66a5733ce8b"
  },
  {
    "url": "assets/js/11.14f11050.js",
    "revision": "4d26fa7d1f18b4f1685af60e4ea8c607"
  },
  {
    "url": "assets/js/12.bc171b07.js",
    "revision": "99ddac3e6a601fbe6230d0919eb1d033"
  },
  {
    "url": "assets/js/13.6f8b94c5.js",
    "revision": "5fa1abf67ab0a9d9e14ce65538845341"
  },
  {
    "url": "assets/js/14.491a88f5.js",
    "revision": "29816ea1f527c788281fb2cc5219d396"
  },
  {
    "url": "assets/js/15.56fcd2db.js",
    "revision": "1ec02b2973f5646c61c97a4a613e323b"
  },
  {
    "url": "assets/js/16.11ca6c07.js",
    "revision": "9c8024eb407cb5746a3855137a26791a"
  },
  {
    "url": "assets/js/17.f608b378.js",
    "revision": "8c9d7b101a76cfd9407c52348cea7ab6"
  },
  {
    "url": "assets/js/18.7fa14ca2.js",
    "revision": "5cead3ea47ccef21b5c36999bc179414"
  },
  {
    "url": "assets/js/19.9a2ff44c.js",
    "revision": "96387c36594a089d460bdea9e348a6b5"
  },
  {
    "url": "assets/js/2.534c20fe.js",
    "revision": "1b2ae60a2b1afc7ee93d883e1cd641e3"
  },
  {
    "url": "assets/js/20.369a395d.js",
    "revision": "3157347873191c66bce4ddd02817841b"
  },
  {
    "url": "assets/js/21.ecd9a09e.js",
    "revision": "ba9d476ea9f4793eb953bae5ca071d18"
  },
  {
    "url": "assets/js/22.06fd0aa1.js",
    "revision": "43d27979b1e4d76acef4a01cd73fc884"
  },
  {
    "url": "assets/js/23.5e2ecfeb.js",
    "revision": "77a60bcaf2f03917d21caac0f2324614"
  },
  {
    "url": "assets/js/24.857f4157.js",
    "revision": "76e86e125d72fca2b1130c81dce7e496"
  },
  {
    "url": "assets/js/25.bc578fe2.js",
    "revision": "4b5524972e5ddec1534ed543d5d492bf"
  },
  {
    "url": "assets/js/26.5dd0a810.js",
    "revision": "55c367816c3eeece30e1f515a0b850c0"
  },
  {
    "url": "assets/js/3.e3fdc09f.js",
    "revision": "4bcd3c3e14ecf01b982097b7d3360cb4"
  },
  {
    "url": "assets/js/4.7ace27f9.js",
    "revision": "53d30bd8e2da87bad0d4815bbb2e76a8"
  },
  {
    "url": "assets/js/5.898cdbef.js",
    "revision": "c3df296de4e414b68a07b99c7ac6f94b"
  },
  {
    "url": "assets/js/6.ba439898.js",
    "revision": "43c1b47ab78efc7f100ae3395dff4ed4"
  },
  {
    "url": "assets/js/7.84d6d962.js",
    "revision": "588daa3e3a4a4ee4eaae15118c9a13bd"
  },
  {
    "url": "assets/js/8.980ee5af.js",
    "revision": "fe7f660305e39904e3fc66ada0f74482"
  },
  {
    "url": "assets/js/9.2561202a.js",
    "revision": "5d42edbf479731c377b4fb54dcc1e519"
  },
  {
    "url": "assets/js/app.ca51d04f.js",
    "revision": "549f3853e75b40bcd215b02f718e51b9"
  },
  {
    "url": "guide/css.html",
    "revision": "8d173ee0e12f5809603925a9fc771f3b"
  },
  {
    "url": "guide/css2.html",
    "revision": "9b7d13e403d3be84c0cf6608533d03a0"
  },
  {
    "url": "guide/index.html",
    "revision": "5de6f3bbdce7ea52f228227d86aea30f"
  },
  {
    "url": "guide/java/index.html",
    "revision": "4aa6489f7fbb319078eb608cd0b31f8d"
  },
  {
    "url": "guide/start.html",
    "revision": "e42e64aa30251cbb9b4e9e84a19cfcd5"
  },
  {
    "url": "icons/icon-128x128.png",
    "revision": "135c2aba490db14f8200cd772995f35d"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "a4271dfcd229369a16522b36b4241afa"
  },
  {
    "url": "icons/icon-152x152.png",
    "revision": "dc7ac2de31649de6f88df341b87d744f"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "6171be93b691ce4f9546def624bcadc3"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "f5ff44fc10f11d717056f8108e7f4a9d"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "cee47d4601b5a5c4dada3693ffd3ef94"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "61eb9ebb22b0c68b6e236b859094a865"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "c430ea29655773327896f7d65fe94c46"
  },
  {
    "url": "img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "1fd362db462c3c280c8b282b43dfab4f"
  },
  {
    "url": "plug/index.html",
    "revision": "6d48b04460b1b9a605cbb333dcb93231"
  },
  {
    "url": "start/countUp.html",
    "revision": "f146ccde31d0076e5b1412934d5e3440"
  },
  {
    "url": "start/ES6.html",
    "revision": "3c42cc28db2f23e082458131dbabc8ae"
  },
  {
    "url": "start/index.html",
    "revision": "9de765fbcc4c2d2d79849c3c524ee2bd"
  },
  {
    "url": "start/quanxue.html",
    "revision": "8b6f1e2666ac5ece710321cbf95c4a2d"
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
