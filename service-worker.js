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
    "revision": "9bec7db743b0e77288a33929209f0ae7"
  },
  {
    "url": "about/index.html",
    "revision": "2214251b25d746be4d3a637a424134b5"
  },
  {
    "url": "assets/css/0.styles.bb7efdfd.css",
    "revision": "d760d94044eef84212f009b8437c02d9"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.80453995.js",
    "revision": "6e015571f679aa87d3e15460420ff5f3"
  },
  {
    "url": "assets/js/10.b508222a.js",
    "revision": "562d1a02ee4b81ffe54fb7c86a5497dc"
  },
  {
    "url": "assets/js/11.0dd6963a.js",
    "revision": "203286f6b1d2167a0019faea3a2636b3"
  },
  {
    "url": "assets/js/12.1569077f.js",
    "revision": "99aefbfeefd8fb4f23bca6785e8fb1c1"
  },
  {
    "url": "assets/js/13.6531769c.js",
    "revision": "33ab426da72402067f82dff1f498c972"
  },
  {
    "url": "assets/js/14.fcd2bb60.js",
    "revision": "a6377397f98abb091dc7e3dbcb3b6157"
  },
  {
    "url": "assets/js/15.6fff85a5.js",
    "revision": "848a2553e0e82f7e3b25004ad015c1f4"
  },
  {
    "url": "assets/js/16.0d7367ff.js",
    "revision": "16f7f2783cf802b04df8c5a33006ac7b"
  },
  {
    "url": "assets/js/17.fb88ad19.js",
    "revision": "98bb74a3c0bafbcbdd67d99bab9665a7"
  },
  {
    "url": "assets/js/18.b4c92e3c.js",
    "revision": "9aa683f3cc9ce3815f02e3cfa04204a5"
  },
  {
    "url": "assets/js/19.e95c7755.js",
    "revision": "53cb56dfd2e072860c00601edaed85eb"
  },
  {
    "url": "assets/js/20.7b67a861.js",
    "revision": "0e333781e03e31898d50fee4ad99fcb0"
  },
  {
    "url": "assets/js/21.1eea63d9.js",
    "revision": "429d2e2a134af7f3f7e330639e0c1a57"
  },
  {
    "url": "assets/js/22.0ea2c4dd.js",
    "revision": "09eaed8b26c890885ea9e72be5d63922"
  },
  {
    "url": "assets/js/23.7d8ff012.js",
    "revision": "0b138ac366220e8b296a2b6c6a45ef68"
  },
  {
    "url": "assets/js/24.e0b3f5c9.js",
    "revision": "26ab6b7812ae97b0d6817f7a9aced521"
  },
  {
    "url": "assets/js/25.154e005f.js",
    "revision": "a310e2324fffb461d53c66fcbfa7aaeb"
  },
  {
    "url": "assets/js/26.7d6f7e22.js",
    "revision": "1c06371d84923cf425f8be012aabce2e"
  },
  {
    "url": "assets/js/27.3ecb7a9e.js",
    "revision": "e45142d63760a6128206db8aac17fdd9"
  },
  {
    "url": "assets/js/28.a2dcf688.js",
    "revision": "5a1db7287626c1bfa132f54f1c083bff"
  },
  {
    "url": "assets/js/29.326955ed.js",
    "revision": "ea8b234f6935cc1ccf1346e4411565af"
  },
  {
    "url": "assets/js/30.a876f5dd.js",
    "revision": "1904feffd16b64e7bdfafd5e7093d24d"
  },
  {
    "url": "assets/js/31.1afc7aef.js",
    "revision": "6475458b1f8ab98ce7c8a751520490c6"
  },
  {
    "url": "assets/js/32.93d46c50.js",
    "revision": "7ee5027b44742d16559ab79d7007d25e"
  },
  {
    "url": "assets/js/33.530f8292.js",
    "revision": "9cc35b4f9cdde84341b54602f5777b4b"
  },
  {
    "url": "assets/js/34.ab467f40.js",
    "revision": "5d23f750db62d20c5dfb16d00bfd8168"
  },
  {
    "url": "assets/js/35.bd3ae829.js",
    "revision": "77954ca048c8f73d75572c6aa748a214"
  },
  {
    "url": "assets/js/36.a8bb465f.js",
    "revision": "039e7971f30e4540f60982f4102efc84"
  },
  {
    "url": "assets/js/37.064de0bb.js",
    "revision": "ae573bd21a118edcd87ed8003e341758"
  },
  {
    "url": "assets/js/38.f9a63bba.js",
    "revision": "c3e2d10687be560f68efcce664ad2229"
  },
  {
    "url": "assets/js/39.bbc242b3.js",
    "revision": "7e0535b7b7f3897234811f8dde7df5ee"
  },
  {
    "url": "assets/js/4.e3a40a07.js",
    "revision": "77de56f11b73479d5554ee95a7ef66ea"
  },
  {
    "url": "assets/js/40.acc5f8cb.js",
    "revision": "a069c26ddbbe845de6c699a5542f753c"
  },
  {
    "url": "assets/js/41.0234a6cb.js",
    "revision": "bb852b3dbed66fd4f6597f260e0bb51d"
  },
  {
    "url": "assets/js/42.4ff579d4.js",
    "revision": "0617c256d2dabc523ead7e71fd8a8c1b"
  },
  {
    "url": "assets/js/43.a4376685.js",
    "revision": "1cafcf18d21f7b017a8f59cf57d06b08"
  },
  {
    "url": "assets/js/44.6377fda0.js",
    "revision": "270631cbf19cc201865dfc7464a5009e"
  },
  {
    "url": "assets/js/45.392cf972.js",
    "revision": "d723cfbd5b3c5754109983c8675dcdd2"
  },
  {
    "url": "assets/js/46.6718e35d.js",
    "revision": "4f506a942b93eb7f69b354e213b1dae6"
  },
  {
    "url": "assets/js/47.0929151b.js",
    "revision": "5cfb5a8b796cd2dfe3d6e5249ffcd337"
  },
  {
    "url": "assets/js/48.eac02bd8.js",
    "revision": "d255837ffcc15ec03019cc73d829ce46"
  },
  {
    "url": "assets/js/49.01b8ce53.js",
    "revision": "225b2095b7f1fc493fc4fc355a92d566"
  },
  {
    "url": "assets/js/5.7fedd0a6.js",
    "revision": "e17369759cbdea6c47810439b3351c82"
  },
  {
    "url": "assets/js/50.838153e5.js",
    "revision": "50d237b677b67d1f18afa89c7b1de10b"
  },
  {
    "url": "assets/js/51.4f09ee7f.js",
    "revision": "dccdbc1cca2a5e6bf2b55146e518f773"
  },
  {
    "url": "assets/js/52.a641d9ce.js",
    "revision": "b0610d1f1896a2e05319831284d21b1f"
  },
  {
    "url": "assets/js/53.f23ed562.js",
    "revision": "c2db7c1a616cb2a778899c99b9733bcb"
  },
  {
    "url": "assets/js/54.85382b80.js",
    "revision": "3968842498356e6630d12c1a248e161a"
  },
  {
    "url": "assets/js/55.868cd7b6.js",
    "revision": "6f14413e10a9a2dffb093c070d11a2a4"
  },
  {
    "url": "assets/js/56.cc928566.js",
    "revision": "6780c4c077e16e65de098e89143f0770"
  },
  {
    "url": "assets/js/57.7d182a2f.js",
    "revision": "b503b3a9f068b5b869bfcd6e75a78ae1"
  },
  {
    "url": "assets/js/58.1cb78ab6.js",
    "revision": "776f689b7ffb0ffa250d194fb999db3e"
  },
  {
    "url": "assets/js/59.867eead0.js",
    "revision": "6806fdaab1b48ee09d3a566fcc1bf853"
  },
  {
    "url": "assets/js/6.a6fe7b38.js",
    "revision": "3ef314541920caedc23e6ba51facdd72"
  },
  {
    "url": "assets/js/60.74227b09.js",
    "revision": "8d26db9da7e58499e095d58296fbe40a"
  },
  {
    "url": "assets/js/61.811f33fe.js",
    "revision": "1888c8e540b81d829d03aebc9437dedf"
  },
  {
    "url": "assets/js/7.30676bdf.js",
    "revision": "3d73cfba9e92baa97ee81cd971caf808"
  },
  {
    "url": "assets/js/8.a67fa499.js",
    "revision": "47e604b72073a81919f25b80600a0b19"
  },
  {
    "url": "assets/js/9.d73ee3e6.js",
    "revision": "184881360a82168e8e09563d624022df"
  },
  {
    "url": "assets/js/app.93ba400b.js",
    "revision": "36c0e5250faae84f7fb0000fc786d3ce"
  },
  {
    "url": "assets/js/vendors~flowchart.676b44e6.js",
    "revision": "5682be647259d9633d3eab54e8c4b234"
  },
  {
    "url": "categories/index.html",
    "revision": "6346b7210562e16454a993b82304b458"
  },
  {
    "url": "colorui/docs/button.html",
    "revision": "d4701fb9c993d6b2e613b9533e0c36c5"
  },
  {
    "url": "colorui/docs/index.html",
    "revision": "68fd4a389203a950d9f5854c86d24069"
  },
  {
    "url": "colorui/docs/text.html",
    "revision": "03e36b75e474ecf0c61321e3ea4d5998"
  },
  {
    "url": "dotnetcore/examples/console-hello-world.html",
    "revision": "0ed623e2a6b3e0dccfdc45d5c4162bf2"
  },
  {
    "url": "dotnetcore/examples/Console-Hello-World.html",
    "revision": "111cf15a0b89314124f39a134bae2a6e"
  },
  {
    "url": "dotnetcore/examples/console-news-types.html",
    "revision": "67fdd2341dfd4c65d6d5ee3d7c3c3208"
  },
  {
    "url": "dotnetcore/examples/Console-News-Types.html",
    "revision": "f6ccedfa18a21c6f38361bfc0168c8e9"
  },
  {
    "url": "dotnetcore/examples/freesql-in-aspnetcore-webapi-how-to-use.html",
    "revision": "81412bfa87f989af3e79a2d5e5b1cd30"
  },
  {
    "url": "dotnetcore/examples/freesql-sample-blog-restful-use-automapper.html",
    "revision": "3e8e5bd1896f2d806eafe2d7a76f50b0"
  },
  {
    "url": "dotnetcore/examples/FreeSql-sample-blog-RESTful-use-automapper.html",
    "revision": "7df06379177b163c70dea9b63f84abb0"
  },
  {
    "url": "dotnetcore/examples/identityserver4.html",
    "revision": "cb2567d5e81c274806389deb1bd0178d"
  },
  {
    "url": "dotnetcore/examples/IdentityServer4.html",
    "revision": "734eb5d5f3feef4b5359f8caebbf01c4"
  },
  {
    "url": "dotnetcore/examples/imcore-chat.html",
    "revision": "585e71faf5d1ea3fa99ea87b60e90bda"
  },
  {
    "url": "dotnetcore/examples/ImCore-Chat.html",
    "revision": "b21f03eb518e51328affd55dbcb375bb"
  },
  {
    "url": "dotnetcore/examples/index.html",
    "revision": "5a0c20a85bbc61a69a10c5e39e58b490"
  },
  {
    "url": "dotnetcore/examples/qiniu-object-storage.html",
    "revision": "adefbf00027c43e777eee06d0eee4985"
  },
  {
    "url": "dotnetcore/examples/Qiniu-Object-Storage.html",
    "revision": "5feea1d9bd6c4ebdc6a0804b12a1d347"
  },
  {
    "url": "dotnetcore/lin-cms/authorize.html",
    "revision": "64878dbef8c08d8bd5c195b67588d4ed"
  },
  {
    "url": "dotnetcore/lin-cms/cms-start.html",
    "revision": "c3ca9aa4e204a70d2704b3825121f437"
  },
  {
    "url": "dotnetcore/lin-cms/dependency-injection-scrutor.html",
    "revision": "1ba78fc97afdccd548be7f7f1d72a102"
  },
  {
    "url": "dotnetcore/lin-cms/dev-start.html",
    "revision": "830983747cd786f6a74751e70261a877"
  },
  {
    "url": "dotnetcore/lin-cms/dotnetcore-start.html",
    "revision": "6f724dd10fe7027af279aad55a96c635"
  },
  {
    "url": "dotnetcore/lin-cms/dynamic-authorization-in-aspnetcore.html",
    "revision": "f3dbc819f53b5eda9bfde86afde6b44e"
  },
  {
    "url": "dotnetcore/lin-cms/error-code.html",
    "revision": "5610879891957a008a3cdc930d7dbca7"
  },
  {
    "url": "dotnetcore/lin-cms/file-upload.html",
    "revision": "c7152519c377e6f026fbf94660bd8773"
  },
  {
    "url": "dotnetcore/lin-cms/github-actions.html",
    "revision": "4114495d586a431692cf4a92ca6789ce"
  },
  {
    "url": "dotnetcore/lin-cms/identityserver4-jwt.html",
    "revision": "c552b8418db99d579946f9536baf85ba"
  },
  {
    "url": "dotnetcore/lin-cms/IdentityServer4-JWT.html",
    "revision": "13bfbf6da508b0bce335dfbcc7926d46"
  },
  {
    "url": "dotnetcore/lin-cms/index.html",
    "revision": "8a2e2d10b564e5c77b13546d32c0089b"
  },
  {
    "url": "dotnetcore/lin-cms/lincms-scaffolding.html",
    "revision": "8fe2c1a945eabb9b7d092d9d5cff2de6"
  },
  {
    "url": "dotnetcore/lin-cms/logger.html",
    "revision": "4b9fd4a8e6ab04caf81610cd27f9cd2e"
  },
  {
    "url": "dotnetcore/lin-cms/newtonsoft-json-question.html",
    "revision": "b2ce3e31f9247e7da57f6d2e67a7b319"
  },
  {
    "url": "dotnetcore/lin-cms/open-source-road.html",
    "revision": "3231ce88e38128680845678d0edaa1bf"
  },
  {
    "url": "dotnetcore/lin-cms/pm-design-modules.html",
    "revision": "5091cb6339e588aa171ad823a794966c"
  },
  {
    "url": "dotnetcore/lin-cms/production-design.html",
    "revision": "d5e1a2636bf3d3a8045bd4664ba03887"
  },
  {
    "url": "dotnetcore/lin-cms/Production-Design.html",
    "revision": "c45bf43df05c53ab167e24d4d819f51f"
  },
  {
    "url": "dotnetcore/lin-cms/qq-login.html",
    "revision": "4fa816a0ee4a9a0e4b3e93e27c42f122"
  },
  {
    "url": "dotnetcore/lin-cms/rabbitmq.html",
    "revision": "bc882468d6185bf35ce7c36debab9e92"
  },
  {
    "url": "dotnetcore/lin-cms/reflex-assembly-get-controller-methods-attribute.html",
    "revision": "0b54b5afc7e59e4e4a077adf67554a0d"
  },
  {
    "url": "dotnetcore/lin-cms/Reflex-Assembly-Get-Controller-Methods-Attribute.html",
    "revision": "e1600c0a0112863cc6770fab68bfced3"
  },
  {
    "url": "dotnetcore/lin-cms/scribanREADME.html",
    "revision": "60ee94e1c9aa7cec66a5c9ea1dd9e1ed"
  },
  {
    "url": "dotnetcore/lin-cms/spa-github-login.html",
    "revision": "cca1005e001fac25a556dc1f9d5f2e6f"
  },
  {
    "url": "dotnetcore/lin-cms/stopwords.html",
    "revision": "ae7a4101ac0e58512b7aa70675b7a109"
  },
  {
    "url": "dotnetcore/lin-cms/StopWords.html",
    "revision": "421162565b43243ff34d09d1e6de87f0"
  },
  {
    "url": "dotnetcore/lin-cms/table.html",
    "revision": "210cd606c1e537abcb5ed8bc9a95ff28"
  },
  {
    "url": "dotnetcore/lin-cms/technology.html",
    "revision": "a5769bf3bbdd2820758b1d5e510378d0"
  },
  {
    "url": "dotnetcore/lin-cms/vue-start.html",
    "revision": "01faf450259336171e654b8faa4b3cd6"
  },
  {
    "url": "head.jpg",
    "revision": "ea5b39ec1dc7d2bbdbf7921aa274caf0"
  },
  {
    "url": "index.html",
    "revision": "4c93424ff34468614e7406992871d5e5"
  },
  {
    "url": "left-logo.png",
    "revision": "bd7a4bd7b69a4500329df1b4196ab1cb"
  },
  {
    "url": "logo.png",
    "revision": "1987e15f6867ab461bbbca84687a1322"
  },
  {
    "url": "tag/GitHub/index.html",
    "revision": "8b918164eafd49ffc506112493cf08ab"
  },
  {
    "url": "tag/index.html",
    "revision": "27509af33c36175956a420c5103a56f3"
  },
  {
    "url": "tag/lin-cms/index.html",
    "revision": "5d47b9049f0caddd2ded703c46cd71a3"
  },
  {
    "url": "tag/开源/index.html",
    "revision": "b1ae54e2c4cb9bb1229bc974bfe0d8b1"
  },
  {
    "url": "timeline/index.html",
    "revision": "8fec2542d0611570c29b861ae4eaf617"
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
