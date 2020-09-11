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
    "revision": "e9af0b48aa0b11c5b4d150796f13d2c2"
  },
  {
    "url": "about/index.html",
    "revision": "c9a31e0060cd03522039a99f654ae51a"
  },
  {
    "url": "assets/css/0.styles.ccb02f24.css",
    "revision": "db456526310866d69b5312c03607aeb6"
  },
  {
    "url": "assets/img/bg.2cfdbb33.svg",
    "revision": "2cfdbb338a1d44d700b493d7ecbe65d3"
  },
  {
    "url": "assets/js/1.a4dc39aa.js",
    "revision": "c73b7b70ab9cd72c8a7ed950e0122efa"
  },
  {
    "url": "assets/js/10.58207314.js",
    "revision": "fe83d6af6ef263f513e6942e1eebcac6"
  },
  {
    "url": "assets/js/11.d35569a2.js",
    "revision": "21b9b9e23e7cdf7c17d4411d234abd66"
  },
  {
    "url": "assets/js/12.9dede748.js",
    "revision": "c7d2a5223bd59d48f1cce2161f723f90"
  },
  {
    "url": "assets/js/13.b675a130.js",
    "revision": "7600363c154a73e23921d431800b97cb"
  },
  {
    "url": "assets/js/14.87e2de5b.js",
    "revision": "c64de388cb7e06cc67d3df53b0843c56"
  },
  {
    "url": "assets/js/15.f6045c94.js",
    "revision": "2f689898973d84949b1b8aeac3f3f2a7"
  },
  {
    "url": "assets/js/16.ec02a7d1.js",
    "revision": "9d42d4d78d053335ca811a368aadc965"
  },
  {
    "url": "assets/js/17.a7d233af.js",
    "revision": "a931895892f1cdded35ba7d0d656111e"
  },
  {
    "url": "assets/js/18.0f86f55d.js",
    "revision": "140b8d9e78bdc68740845344e9055f71"
  },
  {
    "url": "assets/js/19.31ace75c.js",
    "revision": "43c3c9ee904d50bb3b7712175b503fb1"
  },
  {
    "url": "assets/js/20.ff4a056a.js",
    "revision": "aea3f40412cb146674e3327962a3a501"
  },
  {
    "url": "assets/js/21.05bc65a0.js",
    "revision": "f3f15bbaeecc037368e3f04d0ed8b330"
  },
  {
    "url": "assets/js/22.571a21cb.js",
    "revision": "e400884e13d9bf0900ffc4617681e649"
  },
  {
    "url": "assets/js/23.6e53739c.js",
    "revision": "2dc9fdabe994e318bb9442d0c5c89fae"
  },
  {
    "url": "assets/js/24.a544ce8b.js",
    "revision": "f2d28e658f5188b47526b342f55a8aa6"
  },
  {
    "url": "assets/js/25.f50e3c69.js",
    "revision": "d71c8cedf616803bc73a289dcb274398"
  },
  {
    "url": "assets/js/26.65665370.js",
    "revision": "ee21664d1e6810201892824a5ef4c5f3"
  },
  {
    "url": "assets/js/27.42ba8155.js",
    "revision": "99931a7f8072d2259da7107a573717e8"
  },
  {
    "url": "assets/js/28.4f91ec91.js",
    "revision": "706963321d48dbf197c6adc9a357d5d1"
  },
  {
    "url": "assets/js/29.3c9c18f9.js",
    "revision": "a0813a7e3bd536b92872a4f89626cc37"
  },
  {
    "url": "assets/js/30.73064aa8.js",
    "revision": "9050bf0698edf9d40c091bb43b883f03"
  },
  {
    "url": "assets/js/31.e3c5631c.js",
    "revision": "6037ee6b4892eba6900d5b1151d609c0"
  },
  {
    "url": "assets/js/32.1034aa80.js",
    "revision": "6b7c1b25c45e6d5ee83e8fab2cafee84"
  },
  {
    "url": "assets/js/33.3781e1bb.js",
    "revision": "97f7126f0072fb64685bf1d49b54b58a"
  },
  {
    "url": "assets/js/34.565fc31b.js",
    "revision": "a1add3bbfd00fc823ef88313ee28333d"
  },
  {
    "url": "assets/js/35.34477254.js",
    "revision": "fe522a20a1158b06501569edb9f280ea"
  },
  {
    "url": "assets/js/36.8b138fdb.js",
    "revision": "12c461ac64dbe5604eae4ff9dc843731"
  },
  {
    "url": "assets/js/37.64f88657.js",
    "revision": "dedb8f88a6538bfc194dd3cde4d4fb65"
  },
  {
    "url": "assets/js/38.1b437d92.js",
    "revision": "1c386d603a06fd25e63d588661669549"
  },
  {
    "url": "assets/js/39.8f5dceac.js",
    "revision": "888d9e4858192c0acb52b26eb8c475d7"
  },
  {
    "url": "assets/js/4.731794ac.js",
    "revision": "ae2d45871c7c6e0f217cf71a6768ee81"
  },
  {
    "url": "assets/js/40.dcf6561e.js",
    "revision": "c3143a7e4212b5c8da0fe8b23764db3b"
  },
  {
    "url": "assets/js/41.0e7ac4cd.js",
    "revision": "4f6a1578a2e7d6662bf6a17fabbd38d7"
  },
  {
    "url": "assets/js/42.3c65be75.js",
    "revision": "9002aaaecddf9951861ab1e882ba5b2c"
  },
  {
    "url": "assets/js/43.29251fd0.js",
    "revision": "685d4608f6ba63f8ed8559bbcbf6e6ff"
  },
  {
    "url": "assets/js/44.5275b2d5.js",
    "revision": "ac9178019beb68c43bf78ec288cb4ee4"
  },
  {
    "url": "assets/js/45.320db387.js",
    "revision": "4bc9b66b459d2ed9700e96b141fce783"
  },
  {
    "url": "assets/js/46.7922c08d.js",
    "revision": "e380f8b9c7472f8b7e8c4a30cf404f96"
  },
  {
    "url": "assets/js/47.8d637252.js",
    "revision": "a64a47585bcca0cbc20aa539ed01dcb2"
  },
  {
    "url": "assets/js/48.4eee6f12.js",
    "revision": "8e5314fd25090b9667128a5882f81fca"
  },
  {
    "url": "assets/js/49.fca6f083.js",
    "revision": "df96dd2dc301b06c0f6a0e29102c16c2"
  },
  {
    "url": "assets/js/5.cf2cd90c.js",
    "revision": "9d70c7e0e1b2a826836e7acbc58b844c"
  },
  {
    "url": "assets/js/50.ab75dfeb.js",
    "revision": "25d8cea8197a0964bd08cb609ddae901"
  },
  {
    "url": "assets/js/51.3c57c67f.js",
    "revision": "0925b03b2305ca3782f27f975bead48f"
  },
  {
    "url": "assets/js/52.55966802.js",
    "revision": "6c88e2a05a191ccbdf34cdc272c961a6"
  },
  {
    "url": "assets/js/53.6a3bbecc.js",
    "revision": "bdcbb1b0aea3ba95d1a6e70bac99238b"
  },
  {
    "url": "assets/js/54.55bfa4a5.js",
    "revision": "0ddba85a637fbb40d2d4cfda16aefed6"
  },
  {
    "url": "assets/js/55.29de5326.js",
    "revision": "1959ae5c993e36520bbda9ea35f8b1b9"
  },
  {
    "url": "assets/js/56.e97d45b4.js",
    "revision": "29d0f55647aa6c7c546c655773dcff07"
  },
  {
    "url": "assets/js/57.3a56dd28.js",
    "revision": "31058c9d9b0cae7142a53834c97283b3"
  },
  {
    "url": "assets/js/58.f0d7e1f6.js",
    "revision": "3868a5acfa2031f7cf617a1c8082370b"
  },
  {
    "url": "assets/js/59.2386a417.js",
    "revision": "80a6e37e4fedc2e6dfacfed6b0145769"
  },
  {
    "url": "assets/js/6.ee86a7ec.js",
    "revision": "fc213aa1e0976dd8df52d0a561069931"
  },
  {
    "url": "assets/js/60.083002ed.js",
    "revision": "410f10bd973739366bbde94acaa7bed3"
  },
  {
    "url": "assets/js/61.0a0dbf80.js",
    "revision": "eac1af298198f10cabc2cbdef37a58b4"
  },
  {
    "url": "assets/js/7.874c6b8c.js",
    "revision": "58be0abd98e404d3d06e188dad8d2c2d"
  },
  {
    "url": "assets/js/8.a910d313.js",
    "revision": "0dfac45ff4a4be99ddace5614ccd620a"
  },
  {
    "url": "assets/js/9.12c5ad70.js",
    "revision": "001eee2784b6e5f3ec928f3527dd5d2a"
  },
  {
    "url": "assets/js/app.99c20fb9.js",
    "revision": "09f54f886e618b05a3e3ad9bf94f1a65"
  },
  {
    "url": "assets/js/vendors~flowchart.36cbfea8.js",
    "revision": "5b95de1412ffb94c5aaaeddc3fcb380f"
  },
  {
    "url": "categories/index.html",
    "revision": "40c9468dfc04eb9753b9300ce7b734b2"
  },
  {
    "url": "colorui/docs/button.html",
    "revision": "b0def024c2c5a058755c6325d25d675d"
  },
  {
    "url": "colorui/docs/index.html",
    "revision": "ea671f85695a7c0ab092a5c0c4a6d517"
  },
  {
    "url": "colorui/docs/text.html",
    "revision": "86e02ed2f7ca30c874ad10c0e75112c7"
  },
  {
    "url": "dotnetcore/examples/console-hello-world.html",
    "revision": "29bdc65a77d575ae98f52be28ea5d6f2"
  },
  {
    "url": "dotnetcore/examples/Console-Hello-World.html",
    "revision": "762cc9a995b25d43f01b71cc1fe76641"
  },
  {
    "url": "dotnetcore/examples/console-news-types.html",
    "revision": "49f1b8207877cf88898879d0fa06242d"
  },
  {
    "url": "dotnetcore/examples/Console-News-Types.html",
    "revision": "c30c4d43e4928423ce501cd680c25af2"
  },
  {
    "url": "dotnetcore/examples/freesql-in-aspnetcore-webapi-how-to-use.html",
    "revision": "e1fdce68007ee60013e9672d6696b89f"
  },
  {
    "url": "dotnetcore/examples/freesql-sample-blog-restful-use-automapper.html",
    "revision": "927133dfa110b7d4f180afab34359317"
  },
  {
    "url": "dotnetcore/examples/FreeSql-sample-blog-RESTful-use-automapper.html",
    "revision": "a4922e631abbfc60e7e585642e1f64cb"
  },
  {
    "url": "dotnetcore/examples/identityserver4.html",
    "revision": "4fb87f7255298e78c29c7764e3b9e7bb"
  },
  {
    "url": "dotnetcore/examples/IdentityServer4.html",
    "revision": "bdf441de22ac9172d5d864e3f3c5303f"
  },
  {
    "url": "dotnetcore/examples/imcore-chat.html",
    "revision": "8a104633366d28874c98ae44ad1a81eb"
  },
  {
    "url": "dotnetcore/examples/ImCore-Chat.html",
    "revision": "08780f7cf77ab6d2579912ccc84a7bd9"
  },
  {
    "url": "dotnetcore/examples/index.html",
    "revision": "1ded746b095a77dce6dbd1b90c83449f"
  },
  {
    "url": "dotnetcore/examples/qiniu-object-storage.html",
    "revision": "cf1eaaa5dacf02c5e6dc44ad32ec40b9"
  },
  {
    "url": "dotnetcore/examples/Qiniu-Object-Storage.html",
    "revision": "62bc099ac4d790bade267971b571d340"
  },
  {
    "url": "dotnetcore/lin-cms/authorize.html",
    "revision": "68943258069a297fa55ee3c81043644b"
  },
  {
    "url": "dotnetcore/lin-cms/cms-start.html",
    "revision": "0e027c6106c66586d490c2abb4eaf5a3"
  },
  {
    "url": "dotnetcore/lin-cms/dependency-injection-scrutor.html",
    "revision": "d5662dd4987c4058edf25bc13591b5ac"
  },
  {
    "url": "dotnetcore/lin-cms/dev-start.html",
    "revision": "cf56577234b13a316a77e00513a53429"
  },
  {
    "url": "dotnetcore/lin-cms/dotnetcore-start.html",
    "revision": "752d8897874e81c38f10e00494c6b2e0"
  },
  {
    "url": "dotnetcore/lin-cms/dynamic-authorization-in-aspnetcore.html",
    "revision": "14111e1bd74e026fc22d369b1b1ff153"
  },
  {
    "url": "dotnetcore/lin-cms/error-code.html",
    "revision": "ca8f337e6289889ab53ce8607028ed04"
  },
  {
    "url": "dotnetcore/lin-cms/file-upload.html",
    "revision": "a53c8674311d1a5e1998da8bcd2825d4"
  },
  {
    "url": "dotnetcore/lin-cms/github-actions.html",
    "revision": "cda6c5a1c542e05caa2dd3162bdf4c42"
  },
  {
    "url": "dotnetcore/lin-cms/identityserver4-jwt.html",
    "revision": "4a005df5d9f993a317dfa3ab15e445e8"
  },
  {
    "url": "dotnetcore/lin-cms/IdentityServer4-JWT.html",
    "revision": "426805d423819e6d9f67c8a95cac59bd"
  },
  {
    "url": "dotnetcore/lin-cms/index.html",
    "revision": "5357dfb0e75cfb2d4a8a4f8aaa8299b6"
  },
  {
    "url": "dotnetcore/lin-cms/lincms-scaffolding.html",
    "revision": "a58fd3d426de604a07e2aded6342ef5d"
  },
  {
    "url": "dotnetcore/lin-cms/logger.html",
    "revision": "b9844d805e32c376f2972f3793de3efa"
  },
  {
    "url": "dotnetcore/lin-cms/newtonsoft-json-question.html",
    "revision": "551c8da571c44d897498bae9c361771c"
  },
  {
    "url": "dotnetcore/lin-cms/open-source-road.html",
    "revision": "98837ae3f1ed28ea2d72fc6eb3d7da62"
  },
  {
    "url": "dotnetcore/lin-cms/pm-design-modules.html",
    "revision": "55a638c444c320cb0bff6e5ff3737fb1"
  },
  {
    "url": "dotnetcore/lin-cms/production-design.html",
    "revision": "f01c37a0162c0a9b26d234225e88ee44"
  },
  {
    "url": "dotnetcore/lin-cms/Production-Design.html",
    "revision": "63b4fedaefae8fd890e83398c8b59801"
  },
  {
    "url": "dotnetcore/lin-cms/qq-login.html",
    "revision": "0e00bc76a95587452bf252011aacc844"
  },
  {
    "url": "dotnetcore/lin-cms/rabbitmq.html",
    "revision": "779514579f2321366a5932cdcad52f13"
  },
  {
    "url": "dotnetcore/lin-cms/reflex-assembly-get-controller-methods-attribute.html",
    "revision": "5117ec932be3ffc3196e9cb4d76bfdf9"
  },
  {
    "url": "dotnetcore/lin-cms/Reflex-Assembly-Get-Controller-Methods-Attribute.html",
    "revision": "2d6c77f71581b5aea6b8b2f4d4218014"
  },
  {
    "url": "dotnetcore/lin-cms/scribanREADME.html",
    "revision": "d746ee741b024341a5f3878bb53241da"
  },
  {
    "url": "dotnetcore/lin-cms/spa-github-login.html",
    "revision": "70410da3d632770dc758b7c48d142aec"
  },
  {
    "url": "dotnetcore/lin-cms/stopwords.html",
    "revision": "731465aea10d2c5ae418d731b24cc2df"
  },
  {
    "url": "dotnetcore/lin-cms/StopWords.html",
    "revision": "a0b039c063000beb9364bb8fea77faa2"
  },
  {
    "url": "dotnetcore/lin-cms/table.html",
    "revision": "986210ce0fa980d00cdddb727fe00fce"
  },
  {
    "url": "dotnetcore/lin-cms/technology.html",
    "revision": "aa450cdfe0253d19898fcdfb5f4f08f7"
  },
  {
    "url": "dotnetcore/lin-cms/vue-start.html",
    "revision": "c0b8e4afcffaad79b612a3c0729c6529"
  },
  {
    "url": "head.jpg",
    "revision": "ea5b39ec1dc7d2bbdbf7921aa274caf0"
  },
  {
    "url": "index.html",
    "revision": "49d419c30b881ae2d5c101a48f3a1616"
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
    "revision": "9d28132f996ff50f9f7940d5b9b9eff7"
  },
  {
    "url": "tag/index.html",
    "revision": "3ae6e8607ef82886c35006aaab534d8a"
  },
  {
    "url": "tag/lin-cms/index.html",
    "revision": "d2691e2e0e75b59a0086f4b2ddaaf299"
  },
  {
    "url": "tag/开源/index.html",
    "revision": "ccef6f7bb44cd92d047b3fdd7a323dd6"
  },
  {
    "url": "timeline/index.html",
    "revision": "8be66cde9ec78d3ef0e7ca09ea42d7ba"
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
