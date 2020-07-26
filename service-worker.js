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
    "revision": "e572cf747281ac8cfab47bf0aac3ea42"
  },
  {
    "url": "about/index.html",
    "revision": "04a67ea5172752bb44e8c5eb95207d5d"
  },
  {
    "url": "assets/css/0.styles.2acc7c4a.css",
    "revision": "522c7777e8f025e06437206fa3fef056"
  },
  {
    "url": "assets/img/home-bg.7b267d7c.jpg",
    "revision": "7b267d7ce30257a197aeeb29f365065b"
  },
  {
    "url": "assets/js/1.440122b1.js",
    "revision": "f43d1cd782c392e7fdfd59c3e716502b"
  },
  {
    "url": "assets/js/10.dc40835e.js",
    "revision": "295b3c84b72ca5b6d6e8efa15ce485eb"
  },
  {
    "url": "assets/js/11.faf4a8c5.js",
    "revision": "ab4f01250e25a0d8f130261e862f2581"
  },
  {
    "url": "assets/js/12.0ea3680a.js",
    "revision": "bd170d709cc1de649f6c57302692b915"
  },
  {
    "url": "assets/js/13.fe968f08.js",
    "revision": "7170f37d844b41179092c9b889265a14"
  },
  {
    "url": "assets/js/14.2c0c3a31.js",
    "revision": "042b685e0a4c191191ef0f4d1c306c78"
  },
  {
    "url": "assets/js/15.5e6e2641.js",
    "revision": "b27ac01f71f5f1816a66a717e2f155a7"
  },
  {
    "url": "assets/js/16.b7092f0d.js",
    "revision": "15290ae43279e1917aef7db659f02d12"
  },
  {
    "url": "assets/js/17.5957c2c6.js",
    "revision": "9cad35ca3b03776cea90f85940b97a05"
  },
  {
    "url": "assets/js/18.739e80da.js",
    "revision": "6419440f11ace02fdd3bc851198969dc"
  },
  {
    "url": "assets/js/19.fee6425e.js",
    "revision": "da0ed042160977364832c127b6009bb9"
  },
  {
    "url": "assets/js/20.2e0eca05.js",
    "revision": "56615203da28abb383c6e6cfdfb0d2db"
  },
  {
    "url": "assets/js/21.de7ee97f.js",
    "revision": "d49f2c555df3b8a39a6a204234ebb2f1"
  },
  {
    "url": "assets/js/22.9e25edd5.js",
    "revision": "7ca21e8ea571a1930d7ca40b4c9f662d"
  },
  {
    "url": "assets/js/23.4b071708.js",
    "revision": "db295475381546759dc6fecd6c059984"
  },
  {
    "url": "assets/js/24.9f08fc17.js",
    "revision": "4b37200871af5dbd15b68edb876d5177"
  },
  {
    "url": "assets/js/25.ba04245d.js",
    "revision": "abaa7e6e4c25aa27be8a25c0f1ae3867"
  },
  {
    "url": "assets/js/26.b188d17a.js",
    "revision": "c7449c8902587bd75fe15e14044d4163"
  },
  {
    "url": "assets/js/27.21c54c65.js",
    "revision": "16436543ba23f1a5cb677f6b1cc5fb2f"
  },
  {
    "url": "assets/js/28.11e9a461.js",
    "revision": "b60085a4e5be8a3c26de41f3bcfee03c"
  },
  {
    "url": "assets/js/29.bb8383e0.js",
    "revision": "0b86cc8060232203cadb6753f35668e3"
  },
  {
    "url": "assets/js/30.b85fee57.js",
    "revision": "34fafd44f435e71f8267bec684e47090"
  },
  {
    "url": "assets/js/31.7bc4c7fb.js",
    "revision": "6253e41967aeb26b7d7ba72b0b63d474"
  },
  {
    "url": "assets/js/32.36cf0e8d.js",
    "revision": "72cbaf9cd44c86638e57b4aa9623fcfd"
  },
  {
    "url": "assets/js/33.a87d5a87.js",
    "revision": "f0f61aa341569561e238e419f7b4933d"
  },
  {
    "url": "assets/js/34.71014420.js",
    "revision": "0f147d54e3f831e2d1f01cda0b14d676"
  },
  {
    "url": "assets/js/35.6927b950.js",
    "revision": "4f76ce02ed291e9381da76860ae896ba"
  },
  {
    "url": "assets/js/36.2e880bb3.js",
    "revision": "3d646de249dff6ae83c8ffdcde72b6ae"
  },
  {
    "url": "assets/js/37.5bbd5256.js",
    "revision": "ef26dd8cec47dd5a0e0bf9e7f71de6a0"
  },
  {
    "url": "assets/js/38.926802e0.js",
    "revision": "3060710e68f0d2f772cabc76c6f68e91"
  },
  {
    "url": "assets/js/39.6b402684.js",
    "revision": "07b7dd76b81b0991fbf291a799da9d32"
  },
  {
    "url": "assets/js/4.e3914f52.js",
    "revision": "c4c6cb38e421385ff4a496a32cc97af9"
  },
  {
    "url": "assets/js/40.a052e9f7.js",
    "revision": "57f05b39e171c2abccde1f3b69ded50a"
  },
  {
    "url": "assets/js/41.412c6e31.js",
    "revision": "0dd50a9897b618e265a43b5fb0d91117"
  },
  {
    "url": "assets/js/42.a4b6ae7e.js",
    "revision": "c89ceec4da210638c1ec411610add1dc"
  },
  {
    "url": "assets/js/43.42bd667b.js",
    "revision": "38987e9c7a305a8ed6519c837c670a9c"
  },
  {
    "url": "assets/js/44.95500bb4.js",
    "revision": "e09d4163ba34cd33097689f7548696d9"
  },
  {
    "url": "assets/js/45.753eec3a.js",
    "revision": "0a54327b0317f86a08fd75f53d4137ee"
  },
  {
    "url": "assets/js/46.02ff5cb9.js",
    "revision": "a9cb7303ee2d83eff6fb57edd5491afd"
  },
  {
    "url": "assets/js/47.ccd80c29.js",
    "revision": "3b70a3dea6c9133e34d1aa8d065462c1"
  },
  {
    "url": "assets/js/48.81643917.js",
    "revision": "43d83f9ed6b18e3f17a6a465bcb9f580"
  },
  {
    "url": "assets/js/49.fa5d26da.js",
    "revision": "aa3dc71b7b197141eef9c15126f66ad1"
  },
  {
    "url": "assets/js/5.86bfbb5b.js",
    "revision": "e9c98cf1efd5fcf456a82f17e399b8a7"
  },
  {
    "url": "assets/js/50.01ff94a1.js",
    "revision": "a577f86da595170b572fb7ce43986478"
  },
  {
    "url": "assets/js/51.6bf7d77a.js",
    "revision": "2e7334d00b4b3d7f35b4f40e980158ea"
  },
  {
    "url": "assets/js/6.f4c91e66.js",
    "revision": "2545f51d6384bc8192f1fa19a4e75811"
  },
  {
    "url": "assets/js/7.5bdc7a46.js",
    "revision": "c469a70849fc8052ab203c9370a95470"
  },
  {
    "url": "assets/js/8.363c6926.js",
    "revision": "535ff210cb1415fac7d97f89715e8548"
  },
  {
    "url": "assets/js/9.59b40c1a.js",
    "revision": "2dbeb157367ea8e928c15324874bb591"
  },
  {
    "url": "assets/js/app.bd571177.js",
    "revision": "fee0db93d8e89b4ed4fd6b126d8aa8ad"
  },
  {
    "url": "assets/js/vendors~flowchart.eede2435.js",
    "revision": "7dc6e916b31c4f4561d7fd4754b42983"
  },
  {
    "url": "categories/index.html",
    "revision": "b44e622a7fbadfc7a73ce577bd989979"
  },
  {
    "url": "colorui/docs/button.html",
    "revision": "d6d8e4f73f32b4a8a2f474f8f08da452"
  },
  {
    "url": "colorui/docs/index.html",
    "revision": "e106a645dbd269a7853e9dd21e8ad4d4"
  },
  {
    "url": "colorui/docs/text.html",
    "revision": "d840fe35ba4f6156d30a6621f9e723ed"
  },
  {
    "url": "dotnetcore/examples/console-hello-world.html",
    "revision": "5c732d1dae8ab3e5f5dfef77f8987a89"
  },
  {
    "url": "dotnetcore/examples/console-news-types.html",
    "revision": "ae7f12bbda9ea1a2df6cd0f3574639b3"
  },
  {
    "url": "dotnetcore/examples/freesql-in-aspnetcore-webapi-how-to-use.html",
    "revision": "78ea7669c675605add9c1570b1f37dfe"
  },
  {
    "url": "dotnetcore/examples/freesql-sample-blog-restful-use-automapper.html",
    "revision": "375dfaf1cd7dfff4b3a6678d898e96da"
  },
  {
    "url": "dotnetcore/examples/identityserver4.html",
    "revision": "7f3c5116ed0dcdb0b7d2adbe4218a483"
  },
  {
    "url": "dotnetcore/examples/imcore-chat.html",
    "revision": "7d1ee0601feb4360fb1b99843f67b73f"
  },
  {
    "url": "dotnetcore/examples/index.html",
    "revision": "14e853c9a74d82564763edc38567f7b3"
  },
  {
    "url": "dotnetcore/examples/qiniu-object-storage.html",
    "revision": "34aba4da31bc41c9ac66966619e9ed21"
  },
  {
    "url": "dotnetcore/lin-cms/authorize.html",
    "revision": "07f6860f505bef08e6689923dd04af41"
  },
  {
    "url": "dotnetcore/lin-cms/cms-start.html",
    "revision": "df210a6c58b398e51823b3ac55a54d6e"
  },
  {
    "url": "dotnetcore/lin-cms/dependency-injection-scrutor.html",
    "revision": "cc1374dff18fc839375cfdcbfa90c2e0"
  },
  {
    "url": "dotnetcore/lin-cms/dev-start.html",
    "revision": "de34d2217238ec9785df4a029af502fa"
  },
  {
    "url": "dotnetcore/lin-cms/dotnetcore-start.html",
    "revision": "16618c726c79813fc88ba9e7faab2fd7"
  },
  {
    "url": "dotnetcore/lin-cms/dynamic-authorization-in-aspnetcore.html",
    "revision": "6775b6e1164d11fc16f5a8cbc8dfe97f"
  },
  {
    "url": "dotnetcore/lin-cms/error-code.html",
    "revision": "80620dc75e982c308f96f77fd73abda4"
  },
  {
    "url": "dotnetcore/lin-cms/file-upload.html",
    "revision": "488f3340b64d79b36349dd3950687de1"
  },
  {
    "url": "dotnetcore/lin-cms/github-actions.html",
    "revision": "2c7f3fa7d1779afcdcbd12f5df641a2d"
  },
  {
    "url": "dotnetcore/lin-cms/identityserver4-jwt.html",
    "revision": "9f38cf40530c33f40305ead3b18fa6ab"
  },
  {
    "url": "dotnetcore/lin-cms/index.html",
    "revision": "df22ae54aa6323bfe91d8d350ecc6825"
  },
  {
    "url": "dotnetcore/lin-cms/lincms-scaffolding.html",
    "revision": "a412794c36e97b897b5f9a7732905e38"
  },
  {
    "url": "dotnetcore/lin-cms/logger.html",
    "revision": "49dae86b9e33911761700c5354b7730c"
  },
  {
    "url": "dotnetcore/lin-cms/newtonsoft-json-question.html",
    "revision": "d05dd08992f2069965be603e48692030"
  },
  {
    "url": "dotnetcore/lin-cms/open-source-road.html",
    "revision": "606933f84152c56f5489a314a4fec35e"
  },
  {
    "url": "dotnetcore/lin-cms/pm-design-modules.html",
    "revision": "3edfb284f62fba320bdec48e131086c3"
  },
  {
    "url": "dotnetcore/lin-cms/production-design.html",
    "revision": "d9150f293de635c55500f070483834b0"
  },
  {
    "url": "dotnetcore/lin-cms/qq-login.html",
    "revision": "b23d29d24b00bd3bd1c67ce801c662e4"
  },
  {
    "url": "dotnetcore/lin-cms/rabbitmq.html",
    "revision": "3c76acdbe4843e358a0505939269a85d"
  },
  {
    "url": "dotnetcore/lin-cms/reflex-assembly-get-controller-methods-attribute.html",
    "revision": "801704e636e1f37739059074977b23ad"
  },
  {
    "url": "dotnetcore/lin-cms/scribanREADME.html",
    "revision": "078c5f28f4eb83c3d64e9e3ac87d8d0f"
  },
  {
    "url": "dotnetcore/lin-cms/spa-github-login.html",
    "revision": "b997558ea08dbea40fd58857c75d6eff"
  },
  {
    "url": "dotnetcore/lin-cms/stopwords.html",
    "revision": "3e6e80be838ce35f4933561375220787"
  },
  {
    "url": "dotnetcore/lin-cms/table.html",
    "revision": "870f4782a5f391607a6f882eae976408"
  },
  {
    "url": "dotnetcore/lin-cms/technology.html",
    "revision": "3ba86849d7f7c87d7019e0af52f56fcf"
  },
  {
    "url": "dotnetcore/lin-cms/vue-start.html",
    "revision": "1084696edf0d2863990a223a58537945"
  },
  {
    "url": "head.jpg",
    "revision": "ea5b39ec1dc7d2bbdbf7921aa274caf0"
  },
  {
    "url": "index.html",
    "revision": "7e2ce5a4343b2f5f75efad466863255e"
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
    "url": "tag/index.html",
    "revision": "f4ca3c475fac014535fd1a29a58be51b"
  },
  {
    "url": "tags/GitHub/index.html",
    "revision": "a4e3b31838d304984c455d1d4d7ddd66"
  },
  {
    "url": "tags/lin-cms/index.html",
    "revision": "eab80ba5ad422079073350eaf442c129"
  },
  {
    "url": "tags/开源/index.html",
    "revision": "bd3c37e43fdd2c1adc3b0322de31b380"
  },
  {
    "url": "timeline/index.html",
    "revision": "65fb381d11343eec4e5b88c175c75ecf"
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
