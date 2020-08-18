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
    "revision": "3fdce5d6ba9590621dd57670fa38dac7"
  },
  {
    "url": "about/index.html",
    "revision": "d06a812a8af32d0e47f61153659a8dc3"
  },
  {
    "url": "assets/css/0.styles.0c45255d.css",
    "revision": "c05793d1cc8e0ed1b0e2ced25ed15fc6"
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
    "url": "assets/js/28.bcfed682.js",
    "revision": "c349e0bda4db7410e729e4aabc3f8052"
  },
  {
    "url": "assets/js/29.90c32237.js",
    "revision": "7f7f6b23a58e154f997c34f968a22027"
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
    "url": "assets/js/app.627e45b6.js",
    "revision": "884b904f946363fd7574c028c9dd2360"
  },
  {
    "url": "assets/js/vendors~flowchart.fd6b36b8.js",
    "revision": "90ecb5249d65fa4f0aaaf11883a5d58e"
  },
  {
    "url": "categories/index.html",
    "revision": "337ef737fbf2b32b96d0e54b766d2b4c"
  },
  {
    "url": "colorui/docs/button.html",
    "revision": "14688d4a8c6e95dd6eb0cd93c29ed937"
  },
  {
    "url": "colorui/docs/index.html",
    "revision": "a6fe622914ea1a60b564039274bf8e85"
  },
  {
    "url": "colorui/docs/text.html",
    "revision": "7b4d67d46c9006e94ba6c1c42c5d7f3a"
  },
  {
    "url": "dotnetcore/examples/console-hello-world.html",
    "revision": "4e82e01872f41e40cb691150440fd1f0"
  },
  {
    "url": "dotnetcore/examples/Console-Hello-World.html",
    "revision": "18b35d1fed686e1c4dec260b78c4a4bd"
  },
  {
    "url": "dotnetcore/examples/console-news-types.html",
    "revision": "1a19a7f8d0d4145c787657aba8aea38d"
  },
  {
    "url": "dotnetcore/examples/Console-News-Types.html",
    "revision": "f60b9b4a68e90642fa7cdc5e7548e775"
  },
  {
    "url": "dotnetcore/examples/freesql-in-aspnetcore-webapi-how-to-use.html",
    "revision": "9900da389541743ed76a3a2c7627ecbb"
  },
  {
    "url": "dotnetcore/examples/freesql-sample-blog-restful-use-automapper.html",
    "revision": "fade77eedc64e21374f9bd0045af5220"
  },
  {
    "url": "dotnetcore/examples/FreeSql-sample-blog-RESTful-use-automapper.html",
    "revision": "bef3188d57aa2f039ba62c6335a8381c"
  },
  {
    "url": "dotnetcore/examples/identityserver4.html",
    "revision": "9199c348e81efeb946c7d7e5dbfb2a34"
  },
  {
    "url": "dotnetcore/examples/IdentityServer4.html",
    "revision": "aad6072f5ee21632d5b7f454e17ba7bf"
  },
  {
    "url": "dotnetcore/examples/imcore-chat.html",
    "revision": "d041539191f1c1d037356efb3bdbec3c"
  },
  {
    "url": "dotnetcore/examples/ImCore-Chat.html",
    "revision": "a849ac56221e2b0cee240fc6e4eaa0af"
  },
  {
    "url": "dotnetcore/examples/index.html",
    "revision": "6495c91e0b735d4bf87a0592f2f66ad8"
  },
  {
    "url": "dotnetcore/examples/qiniu-object-storage.html",
    "revision": "53a82b49b31f0b47031a7f52f64af723"
  },
  {
    "url": "dotnetcore/examples/Qiniu-Object-Storage.html",
    "revision": "e2871f2c108fb6d888ea817115441910"
  },
  {
    "url": "dotnetcore/lin-cms/authorize.html",
    "revision": "edffce2e5e788c7e554feb7d73e199da"
  },
  {
    "url": "dotnetcore/lin-cms/cms-start.html",
    "revision": "76acad924a9ad8e023371b570af68c8a"
  },
  {
    "url": "dotnetcore/lin-cms/dependency-injection-scrutor.html",
    "revision": "965ad93910e185242d230e5d519ff964"
  },
  {
    "url": "dotnetcore/lin-cms/dev-start.html",
    "revision": "a07a846c856bd9fd9095ab4ba6526dbd"
  },
  {
    "url": "dotnetcore/lin-cms/dotnetcore-start.html",
    "revision": "1ec09999d32791f6e7b7c96f369d8863"
  },
  {
    "url": "dotnetcore/lin-cms/dynamic-authorization-in-aspnetcore.html",
    "revision": "6171dac388c246ee2fa711156889e5db"
  },
  {
    "url": "dotnetcore/lin-cms/error-code.html",
    "revision": "e362d0f2cf3494a7057e20d31f9fba5a"
  },
  {
    "url": "dotnetcore/lin-cms/file-upload.html",
    "revision": "78c9ed826ca2bbf5c426c9057a1d14b8"
  },
  {
    "url": "dotnetcore/lin-cms/github-actions.html",
    "revision": "d26d5f4a49a7d2241894fef2882eff0a"
  },
  {
    "url": "dotnetcore/lin-cms/identityserver4-jwt.html",
    "revision": "2cfa51805b447996a4456b809a785e41"
  },
  {
    "url": "dotnetcore/lin-cms/IdentityServer4-JWT.html",
    "revision": "375d55149257b80f0ff50ccebd8ecd45"
  },
  {
    "url": "dotnetcore/lin-cms/index.html",
    "revision": "17d1ae84b946aab45ee18e8eb9f4dc4a"
  },
  {
    "url": "dotnetcore/lin-cms/lincms-scaffolding.html",
    "revision": "63a9a08bf34804f7b49b97eb55104c8b"
  },
  {
    "url": "dotnetcore/lin-cms/logger.html",
    "revision": "b6511bc8d800ef0d9743111b56b62d13"
  },
  {
    "url": "dotnetcore/lin-cms/newtonsoft-json-question.html",
    "revision": "d159d02489a695a27b03a98f61876c50"
  },
  {
    "url": "dotnetcore/lin-cms/open-source-road.html",
    "revision": "0028669e461a58996c84325de658e06e"
  },
  {
    "url": "dotnetcore/lin-cms/pm-design-modules.html",
    "revision": "35cee52297a435674d81de45ab41fe58"
  },
  {
    "url": "dotnetcore/lin-cms/production-design.html",
    "revision": "3e7b7b9019fdf9b7921cc6e3c8d5aa75"
  },
  {
    "url": "dotnetcore/lin-cms/Production-Design.html",
    "revision": "3b4301c99205dc34308d62e75b352549"
  },
  {
    "url": "dotnetcore/lin-cms/qq-login.html",
    "revision": "e326c5ec19ee26ab288b602723d439cc"
  },
  {
    "url": "dotnetcore/lin-cms/rabbitmq.html",
    "revision": "50e959b2bc26e246c02dbe01f391c0ad"
  },
  {
    "url": "dotnetcore/lin-cms/reflex-assembly-get-controller-methods-attribute.html",
    "revision": "6f43f322aa266a515cdae0f30d929b8e"
  },
  {
    "url": "dotnetcore/lin-cms/Reflex-Assembly-Get-Controller-Methods-Attribute.html",
    "revision": "1f59fadbb74d1c1c5f99745f90be4b5c"
  },
  {
    "url": "dotnetcore/lin-cms/scribanREADME.html",
    "revision": "2566eb8ec0cb4faefd6f7e8592cdb755"
  },
  {
    "url": "dotnetcore/lin-cms/spa-github-login.html",
    "revision": "af859ff401946d1712c8c8e01c1e769a"
  },
  {
    "url": "dotnetcore/lin-cms/stopwords.html",
    "revision": "d3d4b308cde0e72618ba0b2e3f4537bb"
  },
  {
    "url": "dotnetcore/lin-cms/StopWords.html",
    "revision": "53fa59a34cdf5921681217612c7bf356"
  },
  {
    "url": "dotnetcore/lin-cms/table.html",
    "revision": "61face2a3011be125fa4f8c2f914660d"
  },
  {
    "url": "dotnetcore/lin-cms/technology.html",
    "revision": "35b3ceb6a9835e6c324993c3e973a5ee"
  },
  {
    "url": "dotnetcore/lin-cms/vue-start.html",
    "revision": "b1cf03393a9b183370e63ed6159894ee"
  },
  {
    "url": "head.jpg",
    "revision": "ea5b39ec1dc7d2bbdbf7921aa274caf0"
  },
  {
    "url": "index.html",
    "revision": "b09697a4ea0f6c10fdfaee5dd51c4a73"
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
    "revision": "421c3ab5e821034704924c29cdc08335"
  },
  {
    "url": "tag/index.html",
    "revision": "ef61c37efb6331ec033729043a9fc839"
  },
  {
    "url": "tag/lin-cms/index.html",
    "revision": "be4d32a8f0d58c775ff9f8130d7e75fa"
  },
  {
    "url": "tag/开源/index.html",
    "revision": "df77ace5e6d597a1220b6c979d529e99"
  },
  {
    "url": "timeline/index.html",
    "revision": "7ef64c1ef4dd2e5ac6ab82738af46997"
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
