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
    "revision": "f64fcdcef41617c83c4c51bfec48ffcb"
  },
  {
    "url": "about/index.html",
    "revision": "5b7c1ab31611145b2f228cafc8de7232"
  },
  {
    "url": "assets/css/0.styles.6d4de24f.css",
    "revision": "3f84ddb60825d7027c4a02682b84ead3"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.52226242.js",
    "revision": "1f63f23b28790a7d81f48c4a34b4df00"
  },
  {
    "url": "assets/js/10.50223fe6.js",
    "revision": "e42eb59f95a15aa4fa4a0576302be235"
  },
  {
    "url": "assets/js/11.26e6cd97.js",
    "revision": "75b69643c13a70ab12111470957d29b9"
  },
  {
    "url": "assets/js/12.7552f70d.js",
    "revision": "2894c370fe1904fef967acf6eed85e0d"
  },
  {
    "url": "assets/js/13.a223986f.js",
    "revision": "783eafd994bb2f4aefa7a2ece22ed630"
  },
  {
    "url": "assets/js/14.48ca427f.js",
    "revision": "a8ff7d690c431bde86e50a40b92060e5"
  },
  {
    "url": "assets/js/15.33197e52.js",
    "revision": "f761a2f82974673d795dc93c4bf04af7"
  },
  {
    "url": "assets/js/16.b8d21c28.js",
    "revision": "5a88ae2243a5fad6aa49471b785e555f"
  },
  {
    "url": "assets/js/17.2419b364.js",
    "revision": "a0f09de5d32fa9f1cf33078aee54ef22"
  },
  {
    "url": "assets/js/18.88cdb597.js",
    "revision": "4a29946f44d531b76fc76044271674db"
  },
  {
    "url": "assets/js/19.527fbf4d.js",
    "revision": "487d9b49935fa6cc9504165836d20057"
  },
  {
    "url": "assets/js/20.129011f9.js",
    "revision": "cafcd97e3dc1bbf9f697040baf8f3ba0"
  },
  {
    "url": "assets/js/21.d3ae4ca8.js",
    "revision": "10a24fb80b8faa687dcc88b1927af911"
  },
  {
    "url": "assets/js/22.fe3ad31b.js",
    "revision": "3698d257148191d4ebaa77846a1b23f4"
  },
  {
    "url": "assets/js/23.54a512c2.js",
    "revision": "1a77a3765b2ce9874d0e77d7ee1a697e"
  },
  {
    "url": "assets/js/24.afbf59e7.js",
    "revision": "66576bbcaa9d6be3077b4e80f43280e2"
  },
  {
    "url": "assets/js/25.903c99b4.js",
    "revision": "ec0fbffe87648b00a426bdbf2d84ddc7"
  },
  {
    "url": "assets/js/26.0555fae1.js",
    "revision": "550e3d1b4ab4f6509caa729feac0c0d5"
  },
  {
    "url": "assets/js/27.4e7046a6.js",
    "revision": "b942304c71e0c90d74ad3d5be5d249f3"
  },
  {
    "url": "assets/js/28.80eef537.js",
    "revision": "af1250c14a4a42772de100292cbcd925"
  },
  {
    "url": "assets/js/29.24433767.js",
    "revision": "44b503f525a5f004dcd2afe0c25aa3b9"
  },
  {
    "url": "assets/js/30.20f690c9.js",
    "revision": "05204e6a26f4a87117bd93d4a90d55f8"
  },
  {
    "url": "assets/js/31.c66fba02.js",
    "revision": "bca06308c9bf1ec232eba2ddbef4ef4d"
  },
  {
    "url": "assets/js/32.dce2227e.js",
    "revision": "6762812f0ae617d7f4f11b385f34c283"
  },
  {
    "url": "assets/js/33.547d9ee3.js",
    "revision": "b725b83a3edc5542ec45278d86e803cd"
  },
  {
    "url": "assets/js/34.dd54b407.js",
    "revision": "543bb5394b16295bcebffd56c38d1977"
  },
  {
    "url": "assets/js/35.04e2f5c6.js",
    "revision": "20297345c167eb8b1c0f56b4781a6000"
  },
  {
    "url": "assets/js/36.472eb750.js",
    "revision": "c82f1a8d83e503d9a29cbf2afe1a2567"
  },
  {
    "url": "assets/js/37.a5f8487b.js",
    "revision": "3e0c0c7c532dc0e5c06eef1862001f4e"
  },
  {
    "url": "assets/js/38.ebb6e718.js",
    "revision": "53e48076a1e0ce8da96b072d2beb72d4"
  },
  {
    "url": "assets/js/39.ed2affb4.js",
    "revision": "497cf8c6318e9ed24fb972c4466f8fa1"
  },
  {
    "url": "assets/js/4.e861fa24.js",
    "revision": "2b44bfdc837cfc575a29b06d36bc48a2"
  },
  {
    "url": "assets/js/40.26d8e8f0.js",
    "revision": "e0af6af0fb25a3ecdc794b423807f08c"
  },
  {
    "url": "assets/js/41.074ca9ca.js",
    "revision": "fdd3250e5d73059b3cb45612b02148c7"
  },
  {
    "url": "assets/js/42.0245abc8.js",
    "revision": "61f1d8bfbf7d8d1f32d7a1e28c932fc8"
  },
  {
    "url": "assets/js/43.2f39f4d9.js",
    "revision": "adc0dedfb8afd40a9548e9de96d71d9b"
  },
  {
    "url": "assets/js/44.a5f31625.js",
    "revision": "096b42b4248166c83c6c72ea4115611b"
  },
  {
    "url": "assets/js/45.d6b1603c.js",
    "revision": "8a04cf2217f9604c751730c2011518a8"
  },
  {
    "url": "assets/js/46.f03adf12.js",
    "revision": "07eff452addead0404723717b74a558b"
  },
  {
    "url": "assets/js/47.fcd760dd.js",
    "revision": "a5a861a01475ba8bcac361844e00bc03"
  },
  {
    "url": "assets/js/48.b1c59ae7.js",
    "revision": "b2333694ed223f5271b1cf41c63dbda4"
  },
  {
    "url": "assets/js/49.b65b822d.js",
    "revision": "b9a81cf834c31738696fb46490f461e4"
  },
  {
    "url": "assets/js/5.35f3effd.js",
    "revision": "d459e37dc52b6c1209a79cd62475a471"
  },
  {
    "url": "assets/js/50.de878645.js",
    "revision": "816b047f91c73a29cb652eee9903c907"
  },
  {
    "url": "assets/js/51.e701f28f.js",
    "revision": "2978ef68bfac4116a0f9fd025ac1b453"
  },
  {
    "url": "assets/js/52.efee49c5.js",
    "revision": "3f7319bbb922dbc2631ec11af4fddde5"
  },
  {
    "url": "assets/js/53.1da012d2.js",
    "revision": "05ab17103d7fceb82c4ccaf5fb76b26e"
  },
  {
    "url": "assets/js/54.49b5aec0.js",
    "revision": "804f01037b72e1f9845ca91373d16bd1"
  },
  {
    "url": "assets/js/55.2d1f9f20.js",
    "revision": "1e546a54104ea816d5cd328b245a86a1"
  },
  {
    "url": "assets/js/56.a2272a93.js",
    "revision": "d4c5a2f23fe79c940f3957bdb613a98c"
  },
  {
    "url": "assets/js/57.0ee98539.js",
    "revision": "7682328695881e0fa22d2083ddd0b471"
  },
  {
    "url": "assets/js/58.52a4c711.js",
    "revision": "1cc6890dca183add78bdc441ddfbf70f"
  },
  {
    "url": "assets/js/59.72f0a5a4.js",
    "revision": "f10518395adad2cda9afb9444093c6e6"
  },
  {
    "url": "assets/js/6.15ea7b10.js",
    "revision": "dae005d603461c793ec13b81d94d0a16"
  },
  {
    "url": "assets/js/60.d0887c56.js",
    "revision": "83d6213fa63889f1840e65b792117482"
  },
  {
    "url": "assets/js/61.a38bce54.js",
    "revision": "46872589df0ead6ebb56e6d244ce09cb"
  },
  {
    "url": "assets/js/7.db52a4c0.js",
    "revision": "fa12e30fe88cc5b7e3de75f61aeb37d5"
  },
  {
    "url": "assets/js/8.84d788a1.js",
    "revision": "7e16dd0e9afe36c331041198fd2a20f2"
  },
  {
    "url": "assets/js/9.15d1b0de.js",
    "revision": "a8887c9572a1c6b86a3be69c588545a9"
  },
  {
    "url": "assets/js/app.57e1b4c3.js",
    "revision": "442da7534712269d0c35354202bde960"
  },
  {
    "url": "assets/js/vendors~flowchart.5aedf3fa.js",
    "revision": "f90a1cf2821ae9ab729bcf1a42195d4e"
  },
  {
    "url": "categories/index.html",
    "revision": "823abcf1c37e68ee024b4f0c8a6b41ce"
  },
  {
    "url": "colorui/docs/button.html",
    "revision": "b278016e8b2ef01071492e5d94fb9336"
  },
  {
    "url": "colorui/docs/index.html",
    "revision": "1d3687e2daab1ca6b0992cc95e833f36"
  },
  {
    "url": "colorui/docs/text.html",
    "revision": "2d6588cc368627992008c90bab19cdce"
  },
  {
    "url": "dotnetcore/examples/console-hello-world.html",
    "revision": "1215cfe6d91758e99777ca986f909181"
  },
  {
    "url": "dotnetcore/examples/Console-Hello-World.html",
    "revision": "f2dcb2b40bb300c161c7705dc275e5f9"
  },
  {
    "url": "dotnetcore/examples/console-news-types.html",
    "revision": "3a3348f70cca30672a5457a279b142c4"
  },
  {
    "url": "dotnetcore/examples/Console-News-Types.html",
    "revision": "0bc3c91f68872136ea4cf87906d7d31f"
  },
  {
    "url": "dotnetcore/examples/freesql-in-aspnetcore-webapi-how-to-use.html",
    "revision": "b2ebb9232beaec426d069189a24f95d9"
  },
  {
    "url": "dotnetcore/examples/freesql-sample-blog-restful-use-automapper.html",
    "revision": "08cd2a06053a9263b26181a3e11a2d3e"
  },
  {
    "url": "dotnetcore/examples/FreeSql-sample-blog-RESTful-use-automapper.html",
    "revision": "630dfbef56a61f4e0d5c0483c75a1798"
  },
  {
    "url": "dotnetcore/examples/identityserver4.html",
    "revision": "a310ee01fcd06381cd1fb1a481c0fc54"
  },
  {
    "url": "dotnetcore/examples/IdentityServer4.html",
    "revision": "3371628abcfde46d79d1fb341c59e655"
  },
  {
    "url": "dotnetcore/examples/imcore-chat.html",
    "revision": "4476de0a51f718dc0d059d2c9b4fce80"
  },
  {
    "url": "dotnetcore/examples/ImCore-Chat.html",
    "revision": "fe160e066f8692745a541b196907971a"
  },
  {
    "url": "dotnetcore/examples/index.html",
    "revision": "05dd8c817112e7bdcd9e0ba447d2925a"
  },
  {
    "url": "dotnetcore/examples/qiniu-object-storage.html",
    "revision": "f045a9b05110e721576a44f25aeabb76"
  },
  {
    "url": "dotnetcore/examples/Qiniu-Object-Storage.html",
    "revision": "3ceb691ad1da089f606c577f5ff1fd31"
  },
  {
    "url": "dotnetcore/lin-cms/authorize.html",
    "revision": "3165525a4cbab63ab98c481e2a448673"
  },
  {
    "url": "dotnetcore/lin-cms/cms-start.html",
    "revision": "fb7f122215a14dc3805d88f272b45b85"
  },
  {
    "url": "dotnetcore/lin-cms/dependency-injection-scrutor.html",
    "revision": "91aa511ef32223282b7e09946b14a2ad"
  },
  {
    "url": "dotnetcore/lin-cms/dev-start.html",
    "revision": "db76af5e123f1a2cc26c8730c4bdd1c0"
  },
  {
    "url": "dotnetcore/lin-cms/dotnetcore-start.html",
    "revision": "7b2141497f85a511b662035bc98ec534"
  },
  {
    "url": "dotnetcore/lin-cms/dynamic-authorization-in-aspnetcore.html",
    "revision": "53ba801c3290ea84b18a36093b1b3cb8"
  },
  {
    "url": "dotnetcore/lin-cms/error-code.html",
    "revision": "015104162689b1e88cc60466a92aa4a0"
  },
  {
    "url": "dotnetcore/lin-cms/file-upload.html",
    "revision": "7114778027be07a66c8f0cd9db172b3b"
  },
  {
    "url": "dotnetcore/lin-cms/github-actions.html",
    "revision": "8ce05a6d740b18eee83ea0fcdde4822d"
  },
  {
    "url": "dotnetcore/lin-cms/identityserver4-jwt.html",
    "revision": "2caf1e05ad097b90e9f977321c19bc9e"
  },
  {
    "url": "dotnetcore/lin-cms/IdentityServer4-JWT.html",
    "revision": "31a753df0da2cf3f8f7b0939b9d0f32c"
  },
  {
    "url": "dotnetcore/lin-cms/index.html",
    "revision": "782155df495fc6d4a2f0d9f2269f544d"
  },
  {
    "url": "dotnetcore/lin-cms/lincms-scaffolding.html",
    "revision": "430509c74f6b359cc38ea2e9f5046786"
  },
  {
    "url": "dotnetcore/lin-cms/logger.html",
    "revision": "ad56b862e3ba2ea478747bfe78ca71dd"
  },
  {
    "url": "dotnetcore/lin-cms/newtonsoft-json-question.html",
    "revision": "4e7b717bce8706db6a804ba77b2fa2c0"
  },
  {
    "url": "dotnetcore/lin-cms/open-source-road.html",
    "revision": "7a9e4f31f8743baa3497ad5c3d81774c"
  },
  {
    "url": "dotnetcore/lin-cms/pm-design-modules.html",
    "revision": "b6da2e232dbf74a683cafce5d589ea8b"
  },
  {
    "url": "dotnetcore/lin-cms/production-design.html",
    "revision": "274cfe28e3786d3203ac15bfe624cb99"
  },
  {
    "url": "dotnetcore/lin-cms/Production-Design.html",
    "revision": "a5ca0e4a80018d232e89c6a424eea9f5"
  },
  {
    "url": "dotnetcore/lin-cms/qq-login.html",
    "revision": "d27fb8210034281a6024f53c3d450b55"
  },
  {
    "url": "dotnetcore/lin-cms/rabbitmq.html",
    "revision": "9e7b24b8531eca600f24539b3b2dead4"
  },
  {
    "url": "dotnetcore/lin-cms/reflex-assembly-get-controller-methods-attribute.html",
    "revision": "9d2cd3128f35134d36c14ba6c5b78f9c"
  },
  {
    "url": "dotnetcore/lin-cms/Reflex-Assembly-Get-Controller-Methods-Attribute.html",
    "revision": "aa7528be575c84c829acb83b75615cec"
  },
  {
    "url": "dotnetcore/lin-cms/scribanREADME.html",
    "revision": "0b1db1eb28dcf826f008057264846639"
  },
  {
    "url": "dotnetcore/lin-cms/spa-github-login.html",
    "revision": "17f5434dfd8853ee86a2f661f30bbf41"
  },
  {
    "url": "dotnetcore/lin-cms/stopwords.html",
    "revision": "20757fb22ef0d0a34528fe7d8d5dcfe3"
  },
  {
    "url": "dotnetcore/lin-cms/StopWords.html",
    "revision": "a70abbc034407bb69743c9446f44074f"
  },
  {
    "url": "dotnetcore/lin-cms/table.html",
    "revision": "fcb3ab742db3bc61f11abf67d33c1b63"
  },
  {
    "url": "dotnetcore/lin-cms/technology.html",
    "revision": "72e81aa2360ec326712acb5e90390848"
  },
  {
    "url": "dotnetcore/lin-cms/vue-start.html",
    "revision": "63927b0bd57d69cf9ac93751949559cd"
  },
  {
    "url": "head.jpg",
    "revision": "ea5b39ec1dc7d2bbdbf7921aa274caf0"
  },
  {
    "url": "index.html",
    "revision": "63da1f06cf4c989229540805f097a7e7"
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
    "revision": "a41eb3494ca2a90b2fe2cf82fb7461ed"
  },
  {
    "url": "tag/index.html",
    "revision": "d097233e718e2fb959c05ee70e5c6c23"
  },
  {
    "url": "tag/lin-cms/index.html",
    "revision": "016d7aa6fb7214f6552f23d70fe1c0c6"
  },
  {
    "url": "tag/开源/index.html",
    "revision": "f94bcba6cd5086c65a94e75065d51510"
  },
  {
    "url": "timeline/index.html",
    "revision": "991acdf750f594544c7a309cc5fd76d2"
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
