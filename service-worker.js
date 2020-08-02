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
    "revision": "39ed4d325d21f7bb5101854cbcb33e45"
  },
  {
    "url": "about/index.html",
    "revision": "45e2b749cc6192ed59bf9160a094e768"
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
    "url": "assets/js/1.e05d789b.js",
    "revision": "2fd3af81e584614c989c95292da7610f"
  },
  {
    "url": "assets/js/10.266b86a2.js",
    "revision": "2311938792bd1549fd32a51748a0e728"
  },
  {
    "url": "assets/js/11.8485a0c6.js",
    "revision": "24ea6a948aca4f08042d633362d5f4d8"
  },
  {
    "url": "assets/js/12.d0121dbc.js",
    "revision": "05e99a74077b15dc6fda01d2174f05ea"
  },
  {
    "url": "assets/js/13.b63b8133.js",
    "revision": "880983bfed304cb6003f975c12ae547c"
  },
  {
    "url": "assets/js/14.a29d4398.js",
    "revision": "4bf2fc761b35cd46fbdb7cb4f7777b5d"
  },
  {
    "url": "assets/js/15.969b91d5.js",
    "revision": "26b016783eb0ac3f43fb92931fa3de52"
  },
  {
    "url": "assets/js/16.cc7d8761.js",
    "revision": "d90482082dbac4685e51f060090d406e"
  },
  {
    "url": "assets/js/17.069b5339.js",
    "revision": "499a739ae681db4be9ab743cc1c053d5"
  },
  {
    "url": "assets/js/18.e71f3913.js",
    "revision": "167c98510f34d64e51f3fbeac6617176"
  },
  {
    "url": "assets/js/19.d5ddca1f.js",
    "revision": "b668ac2b3526b51e0f27667fb0325da5"
  },
  {
    "url": "assets/js/20.49295bb5.js",
    "revision": "256396f8c4005f462b59f5843bb2c308"
  },
  {
    "url": "assets/js/21.6c33772b.js",
    "revision": "e6d2f497c3ca24f26c987a5b4fcdac06"
  },
  {
    "url": "assets/js/22.d6bd6f41.js",
    "revision": "c444c63a14a88000526100c226029f16"
  },
  {
    "url": "assets/js/23.e15cd8de.js",
    "revision": "9d9c392a8e38aca8ecc397befc3fb405"
  },
  {
    "url": "assets/js/24.7f723f5a.js",
    "revision": "6d3734760b3b734aeb664f0b54f0a1a9"
  },
  {
    "url": "assets/js/25.4c0dd250.js",
    "revision": "7b5da9f4cb7839d634dadacf1aeb1635"
  },
  {
    "url": "assets/js/26.70938407.js",
    "revision": "917db86af374b23bdf799815ab2d1979"
  },
  {
    "url": "assets/js/27.058bec93.js",
    "revision": "969a6f15572f72ea7321530a4d47afd5"
  },
  {
    "url": "assets/js/28.2b928546.js",
    "revision": "9fd6d1a99a5b50e308620193be3df60d"
  },
  {
    "url": "assets/js/29.984e08b5.js",
    "revision": "7f7f6b23a58e154f997c34f968a22027"
  },
  {
    "url": "assets/js/30.1b73561a.js",
    "revision": "a9870a56308d6decf3ab87daec0bbee4"
  },
  {
    "url": "assets/js/31.2d34670f.js",
    "revision": "db3c4ca2d5d0e5ee88863ff1aff00712"
  },
  {
    "url": "assets/js/32.b7cfd61b.js",
    "revision": "98ffa08a3e58f70bd9fbf360e7deb257"
  },
  {
    "url": "assets/js/33.c94706e7.js",
    "revision": "003540f8d0b02443dbc9496c14c096df"
  },
  {
    "url": "assets/js/34.543c5853.js",
    "revision": "848e93b557841202738868c9126ff526"
  },
  {
    "url": "assets/js/35.897b2250.js",
    "revision": "6ea5a45140f46f2dcceea432a42f3cf0"
  },
  {
    "url": "assets/js/36.7cd1303c.js",
    "revision": "318ba32e721cd391b772aa58dc1e9422"
  },
  {
    "url": "assets/js/37.c94e4e89.js",
    "revision": "a3d2c0719759ca4bbf59f2c4895fe53a"
  },
  {
    "url": "assets/js/38.7a917681.js",
    "revision": "390fc8b216730d1268e5e2f09c3b51ea"
  },
  {
    "url": "assets/js/39.95d6d8e0.js",
    "revision": "11984cbd05f15db947c8b30b0a204b79"
  },
  {
    "url": "assets/js/4.6add350b.js",
    "revision": "ce602f96dbbcb7b18a703f7b0d31929f"
  },
  {
    "url": "assets/js/40.91a11271.js",
    "revision": "b8f40252d4ce113de1af2dd22d76956e"
  },
  {
    "url": "assets/js/41.e5134e5b.js",
    "revision": "fe53c2ea873a343921c6c039c1af2a56"
  },
  {
    "url": "assets/js/42.8e925049.js",
    "revision": "00a2ac85fd8f54684978fd1c1fc138e9"
  },
  {
    "url": "assets/js/43.90d6b340.js",
    "revision": "3d61ad1a31dc6b3389e5445143b32bf0"
  },
  {
    "url": "assets/js/44.88f8b5dc.js",
    "revision": "a5661887158323bebed86f91c0825734"
  },
  {
    "url": "assets/js/45.a2e2efd6.js",
    "revision": "3e2495657c176e97cb5a714479809e70"
  },
  {
    "url": "assets/js/46.1ad7c3c8.js",
    "revision": "11bcd48860f4efe8f6d53c5d91518dcd"
  },
  {
    "url": "assets/js/47.95067007.js",
    "revision": "094a0d5aedeb75cfe27cf219a91ba4a0"
  },
  {
    "url": "assets/js/48.bde6ff31.js",
    "revision": "38e0c2828a1b553f9db6c219900d44fd"
  },
  {
    "url": "assets/js/49.d8a94d18.js",
    "revision": "5e0b074e8f3dbc5df76d2027b7cb184f"
  },
  {
    "url": "assets/js/5.8d77b959.js",
    "revision": "81e7b6918c7e844fb1cfddfc98a2d7d3"
  },
  {
    "url": "assets/js/50.b665c711.js",
    "revision": "abed4bd7fd81112e1e7e40dea933436d"
  },
  {
    "url": "assets/js/51.a36a0ede.js",
    "revision": "040c328053f4b4b6b52966eedf260406"
  },
  {
    "url": "assets/js/52.48a561f3.js",
    "revision": "38ef2123336590612d3f8389c51e94f3"
  },
  {
    "url": "assets/js/53.9208683d.js",
    "revision": "b163abed3cb093a6d6fe0fbe0a791ef4"
  },
  {
    "url": "assets/js/54.28d58f41.js",
    "revision": "518e87fba5a4480e6fda2485e1202d92"
  },
  {
    "url": "assets/js/55.26bec7ce.js",
    "revision": "25c9b06289a9adecca40a5bf1542a53a"
  },
  {
    "url": "assets/js/56.38212d64.js",
    "revision": "2fb072a7aa1f567dc42f2640d1dc34bf"
  },
  {
    "url": "assets/js/57.09a0431d.js",
    "revision": "cc24181cd7de2b70b24cad7eff311b2d"
  },
  {
    "url": "assets/js/58.eee730c6.js",
    "revision": "6a8d49a1b0c21768ad82229ce5991719"
  },
  {
    "url": "assets/js/59.ed6af0d4.js",
    "revision": "b734377dc360c5628afb03428ff525e4"
  },
  {
    "url": "assets/js/6.24bfb818.js",
    "revision": "4bfb94fd6f845225bde08580ba75859e"
  },
  {
    "url": "assets/js/60.9b68c1bd.js",
    "revision": "73e7a5c48579050037dee6bb8fc7ba7a"
  },
  {
    "url": "assets/js/7.f44f2ea3.js",
    "revision": "9f8eff690f46edb281841bb6427fb972"
  },
  {
    "url": "assets/js/8.50092a0c.js",
    "revision": "63815c4cfa923a8962916110449e5982"
  },
  {
    "url": "assets/js/9.67ff7e4c.js",
    "revision": "79d21437fe76bdff22f8096cb626484e"
  },
  {
    "url": "assets/js/app.f217eedd.js",
    "revision": "8d53d505b2f379c94435adc24ea3c9cb"
  },
  {
    "url": "assets/js/vendors~flowchart.e2fe1631.js",
    "revision": "310dda495c1f05dead80393a9f76c50b"
  },
  {
    "url": "categories/index.html",
    "revision": "4e4a4325af59d624b1c4239ea89bc69e"
  },
  {
    "url": "colorui/docs/button.html",
    "revision": "9d84e47f62fa6ba8396b49df7a2deb8d"
  },
  {
    "url": "colorui/docs/index.html",
    "revision": "c809d0be3162d6dc7c451004e6cc996f"
  },
  {
    "url": "colorui/docs/text.html",
    "revision": "659ead75ab4c9a4bffe6e1a1083206e8"
  },
  {
    "url": "dotnetcore/examples/console-hello-world.html",
    "revision": "559c522d86dd7d1dc4c07001f662967e"
  },
  {
    "url": "dotnetcore/examples/Console-Hello-World.html",
    "revision": "ee486a75932f5f3aa9ffe7de12efaabb"
  },
  {
    "url": "dotnetcore/examples/console-news-types.html",
    "revision": "887d647bd5c08c63f473271e7137c9f5"
  },
  {
    "url": "dotnetcore/examples/Console-News-Types.html",
    "revision": "76466c4c52260823e53e5dce65b3efa9"
  },
  {
    "url": "dotnetcore/examples/freesql-in-aspnetcore-webapi-how-to-use.html",
    "revision": "7816656e3099e74aece5c1432f62d405"
  },
  {
    "url": "dotnetcore/examples/freesql-sample-blog-restful-use-automapper.html",
    "revision": "35690d197fd609b1078719334d94948b"
  },
  {
    "url": "dotnetcore/examples/FreeSql-sample-blog-RESTful-use-automapper.html",
    "revision": "31daf76f2887c5d6f8ec38283109753e"
  },
  {
    "url": "dotnetcore/examples/identityserver4.html",
    "revision": "076d3734e7c628f0c3e75084952c2352"
  },
  {
    "url": "dotnetcore/examples/IdentityServer4.html",
    "revision": "0bce23aac0c880dbcb364a0b90c5a5e2"
  },
  {
    "url": "dotnetcore/examples/imcore-chat.html",
    "revision": "45e36a4b1ac935cf9e7391baaadcc2e2"
  },
  {
    "url": "dotnetcore/examples/ImCore-Chat.html",
    "revision": "efacae24637c277cb8015b0f90c0194f"
  },
  {
    "url": "dotnetcore/examples/index.html",
    "revision": "c46a82b2244aef16611f1d91609b1710"
  },
  {
    "url": "dotnetcore/examples/qiniu-object-storage.html",
    "revision": "c350715635b77b907cce32a8e6be85b6"
  },
  {
    "url": "dotnetcore/examples/Qiniu-Object-Storage.html",
    "revision": "1f5ab699b4a92a52d4a439923dc14808"
  },
  {
    "url": "dotnetcore/lin-cms/authorize.html",
    "revision": "228859d916673f21888ad089c81761ff"
  },
  {
    "url": "dotnetcore/lin-cms/cms-start.html",
    "revision": "7b2d38c0075775c2480f763276bd18c7"
  },
  {
    "url": "dotnetcore/lin-cms/dependency-injection-scrutor.html",
    "revision": "5454f915cf24a228bc08f62692201131"
  },
  {
    "url": "dotnetcore/lin-cms/dev-start.html",
    "revision": "9fc0ad97b296075922bb6c542aef312d"
  },
  {
    "url": "dotnetcore/lin-cms/dotnetcore-start.html",
    "revision": "c0f6387c2dca1653e0f6785c15368a03"
  },
  {
    "url": "dotnetcore/lin-cms/dynamic-authorization-in-aspnetcore.html",
    "revision": "7ab02b9179de4e1046bc93cb2ec872a4"
  },
  {
    "url": "dotnetcore/lin-cms/error-code.html",
    "revision": "3b071c3c10e5af2ef45144b493f6fada"
  },
  {
    "url": "dotnetcore/lin-cms/file-upload.html",
    "revision": "f718536ac29eb0d2e20173e7a5f77f8f"
  },
  {
    "url": "dotnetcore/lin-cms/github-actions.html",
    "revision": "f1baea349c990a877de795a2af575a7a"
  },
  {
    "url": "dotnetcore/lin-cms/identityserver4-jwt.html",
    "revision": "4bf9db82db3d76de2f929f0be3c85cd8"
  },
  {
    "url": "dotnetcore/lin-cms/IdentityServer4-JWT.html",
    "revision": "e28af5db26af4ca7b1b4093c8f641c94"
  },
  {
    "url": "dotnetcore/lin-cms/index.html",
    "revision": "e0f592082c874c8d927c7623187faeab"
  },
  {
    "url": "dotnetcore/lin-cms/lincms-scaffolding.html",
    "revision": "f80c93f6d99505b9953a2857e1dcfac9"
  },
  {
    "url": "dotnetcore/lin-cms/logger.html",
    "revision": "8166d1016f5bb92c10c604c4895e8b45"
  },
  {
    "url": "dotnetcore/lin-cms/newtonsoft-json-question.html",
    "revision": "c5afbbd2ae2edd4871aaf185e160ba22"
  },
  {
    "url": "dotnetcore/lin-cms/open-source-road.html",
    "revision": "1dccc4f6ddf75eb965cea20ee33d6090"
  },
  {
    "url": "dotnetcore/lin-cms/pm-design-modules.html",
    "revision": "5ee62bb505ddaeada3e7b97d75ab05b7"
  },
  {
    "url": "dotnetcore/lin-cms/production-design.html",
    "revision": "94688d1684594d92e59731921e2dc1b5"
  },
  {
    "url": "dotnetcore/lin-cms/Production-Design.html",
    "revision": "e576df5b6626144b9027c8c351958083"
  },
  {
    "url": "dotnetcore/lin-cms/qq-login.html",
    "revision": "898912c4b903b78decd12e3bb1005055"
  },
  {
    "url": "dotnetcore/lin-cms/rabbitmq.html",
    "revision": "118979cdaedfd82d50fbf8c2c0493231"
  },
  {
    "url": "dotnetcore/lin-cms/reflex-assembly-get-controller-methods-attribute.html",
    "revision": "bc17d55217ae05dcc51e1b4960efc719"
  },
  {
    "url": "dotnetcore/lin-cms/Reflex-Assembly-Get-Controller-Methods-Attribute.html",
    "revision": "90ef63fb9f1d2e1f30faeb3bfc67aaa3"
  },
  {
    "url": "dotnetcore/lin-cms/scribanREADME.html",
    "revision": "2a00c4661fae700757ed0cd76f27efdf"
  },
  {
    "url": "dotnetcore/lin-cms/spa-github-login.html",
    "revision": "273aef6192808cb03b34256f846150ad"
  },
  {
    "url": "dotnetcore/lin-cms/stopwords.html",
    "revision": "f7e975bf1fe8c57ade4822908db37672"
  },
  {
    "url": "dotnetcore/lin-cms/StopWords.html",
    "revision": "02290587d609844f96259b6689973830"
  },
  {
    "url": "dotnetcore/lin-cms/table.html",
    "revision": "df8aa18c893ab351605761a2b7d0bd25"
  },
  {
    "url": "dotnetcore/lin-cms/technology.html",
    "revision": "c536acdb5ab48e8e35ccb2189a41d234"
  },
  {
    "url": "dotnetcore/lin-cms/vue-start.html",
    "revision": "e3b46d3db6d3d44774d8f054945b5a97"
  },
  {
    "url": "head.jpg",
    "revision": "ea5b39ec1dc7d2bbdbf7921aa274caf0"
  },
  {
    "url": "index.html",
    "revision": "5bdd871746482e865d6266d691272c05"
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
    "revision": "fc617134a17cdfc4fcd53670cbe365ae"
  },
  {
    "url": "tag/index.html",
    "revision": "f527d3bf555834d26e71debf115de8e6"
  },
  {
    "url": "tag/lin-cms/index.html",
    "revision": "21d192ec29e6fd416a5751cd4c6da793"
  },
  {
    "url": "tag/开源/index.html",
    "revision": "8df51774f69735a4e5eeb7f028bd0498"
  },
  {
    "url": "timeline/index.html",
    "revision": "dd89bf2fce2aaaa5ec7f5a4b10055b88"
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
