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
    "revision": "7132539a056106bc9b987b84dc10e706"
  },
  {
    "url": "about/index.html",
    "revision": "921eebb10f3c6a07d7489afcfb750215"
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
    "url": "assets/js/app.6015b830.js",
    "revision": "ac9cb601c39547007e8ece92e2b03183"
  },
  {
    "url": "assets/js/vendors~flowchart.676b44e6.js",
    "revision": "5682be647259d9633d3eab54e8c4b234"
  },
  {
    "url": "categories/index.html",
    "revision": "4a3fa8b0aae0d765cd20d4817e39d3d1"
  },
  {
    "url": "colorui/docs/button.html",
    "revision": "f9d16694ce4befcdeac1612bd2ce2dd5"
  },
  {
    "url": "colorui/docs/index.html",
    "revision": "46299aad22dda1b37b98e00b01d01875"
  },
  {
    "url": "colorui/docs/text.html",
    "revision": "db91daf8e9f36438c09db4da0bdc1e01"
  },
  {
    "url": "dotnetcore/examples/console-hello-world.html",
    "revision": "af8b2b3b96eb1f6fb95c849f4bff72ac"
  },
  {
    "url": "dotnetcore/examples/Console-Hello-World.html",
    "revision": "d265056efee9afcbea725a9fd5ba0ed5"
  },
  {
    "url": "dotnetcore/examples/console-news-types.html",
    "revision": "d5bb6ad5daefa95371b67e572292df84"
  },
  {
    "url": "dotnetcore/examples/Console-News-Types.html",
    "revision": "144ddcccf3adb5672e6886e46fc9e63e"
  },
  {
    "url": "dotnetcore/examples/freesql-in-aspnetcore-webapi-how-to-use.html",
    "revision": "a692f4360b4a41b9c92abd57946fe9cc"
  },
  {
    "url": "dotnetcore/examples/freesql-sample-blog-restful-use-automapper.html",
    "revision": "75a0908fbb24eb982229404f10e72368"
  },
  {
    "url": "dotnetcore/examples/FreeSql-sample-blog-RESTful-use-automapper.html",
    "revision": "3b3e195b2f6865a6a838dbdd9d44dd76"
  },
  {
    "url": "dotnetcore/examples/identityserver4.html",
    "revision": "c9f5988ee462d434cd00fff67d4d1040"
  },
  {
    "url": "dotnetcore/examples/IdentityServer4.html",
    "revision": "28c294c9ac28454d6c448ea0baa2a36e"
  },
  {
    "url": "dotnetcore/examples/imcore-chat.html",
    "revision": "31c9234b8b8269dd117918d686fa2f2c"
  },
  {
    "url": "dotnetcore/examples/ImCore-Chat.html",
    "revision": "ae93b7464d0bc80ceb4ca983434e58ec"
  },
  {
    "url": "dotnetcore/examples/index.html",
    "revision": "e2d8a608e4337a7449db4506983328b9"
  },
  {
    "url": "dotnetcore/examples/qiniu-object-storage.html",
    "revision": "5b43a0a9d387623062d2d29521884308"
  },
  {
    "url": "dotnetcore/examples/Qiniu-Object-Storage.html",
    "revision": "6ff5312f7b16bb7226bdc4cbed83e6bf"
  },
  {
    "url": "dotnetcore/lin-cms/authorize.html",
    "revision": "92caa212ef07c32be467f74bca2fdcd1"
  },
  {
    "url": "dotnetcore/lin-cms/cms-start.html",
    "revision": "77104bb69bd194b271299ab2b54c9159"
  },
  {
    "url": "dotnetcore/lin-cms/dependency-injection-scrutor.html",
    "revision": "9f533311a89f79af1b3b6fd17f3e9656"
  },
  {
    "url": "dotnetcore/lin-cms/dev-start.html",
    "revision": "2a9ac26b7f59d8d18cac1f0c5be0bab9"
  },
  {
    "url": "dotnetcore/lin-cms/dotnetcore-start.html",
    "revision": "01013da247ecb7fd1b1dca9790b7e58b"
  },
  {
    "url": "dotnetcore/lin-cms/dynamic-authorization-in-aspnetcore.html",
    "revision": "050881da745e6d73c25d1f86ff78090a"
  },
  {
    "url": "dotnetcore/lin-cms/error-code.html",
    "revision": "d4e26db72f39617f5d78c780e17f5cbe"
  },
  {
    "url": "dotnetcore/lin-cms/file-upload.html",
    "revision": "c551089517083dc2215f89a065f3cfdb"
  },
  {
    "url": "dotnetcore/lin-cms/github-actions.html",
    "revision": "8abc52c7d47951423a16cf38af312b93"
  },
  {
    "url": "dotnetcore/lin-cms/identityserver4-jwt.html",
    "revision": "ec6cf189572d8f3033f449aef934991a"
  },
  {
    "url": "dotnetcore/lin-cms/IdentityServer4-JWT.html",
    "revision": "480699a3f89ccf9597f669d763d87dd6"
  },
  {
    "url": "dotnetcore/lin-cms/index.html",
    "revision": "2e68b9fee83873eb5f1d1d84ee41ea02"
  },
  {
    "url": "dotnetcore/lin-cms/lincms-scaffolding.html",
    "revision": "5a9d33eb17b8b1ce62c636bf1d5661ce"
  },
  {
    "url": "dotnetcore/lin-cms/logger.html",
    "revision": "6ab9e1272fa6cff412df63c6e25f752a"
  },
  {
    "url": "dotnetcore/lin-cms/newtonsoft-json-question.html",
    "revision": "784b6ab098fa7233dc62b42e846fefcb"
  },
  {
    "url": "dotnetcore/lin-cms/open-source-road.html",
    "revision": "8cdcf2fea91b361b6ee28c423cb92e39"
  },
  {
    "url": "dotnetcore/lin-cms/pm-design-modules.html",
    "revision": "4ab127508ce73a82a423f51b6ca30385"
  },
  {
    "url": "dotnetcore/lin-cms/production-design.html",
    "revision": "7ea260712721a545ee3dd33a1afb6868"
  },
  {
    "url": "dotnetcore/lin-cms/Production-Design.html",
    "revision": "f7b97201cab8e308c2cb6ca42fe9267a"
  },
  {
    "url": "dotnetcore/lin-cms/qq-login.html",
    "revision": "801f8c26952c378f1e1d28af815290ec"
  },
  {
    "url": "dotnetcore/lin-cms/rabbitmq.html",
    "revision": "123fafafd64e1e8f337f96ce47194575"
  },
  {
    "url": "dotnetcore/lin-cms/reflex-assembly-get-controller-methods-attribute.html",
    "revision": "23e506b9822a905ce3f39d5aaf31fe5a"
  },
  {
    "url": "dotnetcore/lin-cms/Reflex-Assembly-Get-Controller-Methods-Attribute.html",
    "revision": "efbfcc23e1630efa76ffb8b62b8edc91"
  },
  {
    "url": "dotnetcore/lin-cms/scribanREADME.html",
    "revision": "f604bc7822340c2c400cd1892dad3f07"
  },
  {
    "url": "dotnetcore/lin-cms/spa-github-login.html",
    "revision": "a07bdd15235f61078e98f02d4537956a"
  },
  {
    "url": "dotnetcore/lin-cms/stopwords.html",
    "revision": "8260fc0aad81eaec1146ce7fdf5ca810"
  },
  {
    "url": "dotnetcore/lin-cms/StopWords.html",
    "revision": "9d40084464437c10bd9cbc441a42c2a4"
  },
  {
    "url": "dotnetcore/lin-cms/table.html",
    "revision": "a58d7f45fa052ac30290a6b479ad1b45"
  },
  {
    "url": "dotnetcore/lin-cms/technology.html",
    "revision": "f7f8ffb1d866b08757918c50b6d26b24"
  },
  {
    "url": "dotnetcore/lin-cms/vue-start.html",
    "revision": "e41cd62025c1ae7a7ca4a20560923cf0"
  },
  {
    "url": "head.jpg",
    "revision": "ea5b39ec1dc7d2bbdbf7921aa274caf0"
  },
  {
    "url": "index.html",
    "revision": "347bd8542412d4a88723794f160f6e04"
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
    "revision": "d109f8a45392bc02ea09ca9da2960ac3"
  },
  {
    "url": "tag/index.html",
    "revision": "c9f93092b3dfd71b720337bd4a8103ad"
  },
  {
    "url": "tag/lin-cms/index.html",
    "revision": "c85394ddca312c7c5293df3ffa2a9be6"
  },
  {
    "url": "tag/开源/index.html",
    "revision": "d83bc6042022ad4da28e0cf382f1f8a5"
  },
  {
    "url": "timeline/index.html",
    "revision": "711039387e053ce537d98668d6faff19"
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
