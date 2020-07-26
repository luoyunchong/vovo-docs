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
    "revision": "dcf963b69ed1eb2addfebd3ac6e313c1"
  },
  {
    "url": "about/index.html",
    "revision": "8fb845fe80cc14123e3680d19345461b"
  },
  {
    "url": "assets/css/0.styles.aaf7c7f8.css",
    "revision": "b8d3e7578994f69785b1ae91fbf69c2c"
  },
  {
    "url": "assets/img/home-bg.8e509a21.jpg",
    "revision": "8e509a21c7af5d61f2ff4895ef09c727"
  },
  {
    "url": "assets/js/1.9d6eafaf.js",
    "revision": "187f75da4de9cbe7387d050bc437bd18"
  },
  {
    "url": "assets/js/10.43d297c6.js",
    "revision": "1f1132fa81b678c40e4c85afe69f15a2"
  },
  {
    "url": "assets/js/11.e6678296.js",
    "revision": "c7b6ef2dfe1ca9885fdd6a94bb43b78e"
  },
  {
    "url": "assets/js/12.e00b2e94.js",
    "revision": "bb33d97dc0f6d8ebd7e0ab6465ee7cb3"
  },
  {
    "url": "assets/js/13.ef217cae.js",
    "revision": "f85bf98573cd7aa8477f263a0bf8c918"
  },
  {
    "url": "assets/js/14.9e5a2151.js",
    "revision": "f4b9a293f3bb1121b104ffe8d0525a3e"
  },
  {
    "url": "assets/js/15.757ee205.js",
    "revision": "80b9acd19143c66d5b1fca41502c5833"
  },
  {
    "url": "assets/js/16.0a1976d2.js",
    "revision": "ce8643ae1ecbbfaf74b8777284af9431"
  },
  {
    "url": "assets/js/17.5b8b8721.js",
    "revision": "bf394525e0dfdf038b8439cc3a656951"
  },
  {
    "url": "assets/js/18.f752675b.js",
    "revision": "74bb9e729312c15bc28653ca8385b417"
  },
  {
    "url": "assets/js/19.60d744a8.js",
    "revision": "3969264e90ffd437687848d3e9cf4f6b"
  },
  {
    "url": "assets/js/20.34f84062.js",
    "revision": "f81dee897c94a3dd8531e90e2d37dfb4"
  },
  {
    "url": "assets/js/21.f811e18c.js",
    "revision": "078101d5e83b7ea655c7f70ebfca4819"
  },
  {
    "url": "assets/js/22.1d7b60ff.js",
    "revision": "457847967bc8d60234e6eb6d2b69d702"
  },
  {
    "url": "assets/js/23.8c1e6476.js",
    "revision": "4d06bac66d3b255a9f97cefc401c6691"
  },
  {
    "url": "assets/js/24.dc2b6b65.js",
    "revision": "1933f423802b893f7da66fd25498bb02"
  },
  {
    "url": "assets/js/25.48ba03f2.js",
    "revision": "1f2e6c4d95adf466519bc8591fbf27d6"
  },
  {
    "url": "assets/js/26.c22663c7.js",
    "revision": "6b5d2aafb7cbd43d1ddd01c692dccd5a"
  },
  {
    "url": "assets/js/27.9f6dfd10.js",
    "revision": "f7e7a69a13e573d8c871bace52a69b08"
  },
  {
    "url": "assets/js/28.f4531e60.js",
    "revision": "dd15e7ca1d3e97336e2ca6c6fdc05922"
  },
  {
    "url": "assets/js/29.a2ea58b3.js",
    "revision": "76e7d5ea680dd2bd0d3d897fe9e4785d"
  },
  {
    "url": "assets/js/30.f97e3e9b.js",
    "revision": "3f628cce99045b48cfeafeed0931d42b"
  },
  {
    "url": "assets/js/31.e300e3d8.js",
    "revision": "9f77801d09c559b472957f841cd3cbbc"
  },
  {
    "url": "assets/js/32.82814c7f.js",
    "revision": "a14e01eb4c929a620d19b2672bb9fb47"
  },
  {
    "url": "assets/js/33.94ba2ac5.js",
    "revision": "3e389c932988fde04d4ca2353c39dc96"
  },
  {
    "url": "assets/js/34.a4edb6fa.js",
    "revision": "cb54433e84e34f3958fc05f5addc086f"
  },
  {
    "url": "assets/js/35.5d153e7a.js",
    "revision": "236048747fff86af94308b4a1738c109"
  },
  {
    "url": "assets/js/36.87b5116d.js",
    "revision": "a6117a2b2a896aacff0299d43cdb61f7"
  },
  {
    "url": "assets/js/37.06eaedbf.js",
    "revision": "78fe90f617873bf81c4c37b2b85b1f82"
  },
  {
    "url": "assets/js/38.62107cc2.js",
    "revision": "556204208c32cd1554cc5d2d473af2b5"
  },
  {
    "url": "assets/js/39.94470a9f.js",
    "revision": "6ffaf993f5a41c71f878a673eb7b8454"
  },
  {
    "url": "assets/js/4.74be6892.js",
    "revision": "29562a2ec0b0355ed9d5d43af1250215"
  },
  {
    "url": "assets/js/40.808f4eff.js",
    "revision": "fa643d44f208afb23faf18a2285754a3"
  },
  {
    "url": "assets/js/41.6ddb06d4.js",
    "revision": "b06dcfdbbd7ded8ffff2f46da7292f04"
  },
  {
    "url": "assets/js/42.24127f88.js",
    "revision": "31433012fe29c5ea4f1e34473edae206"
  },
  {
    "url": "assets/js/43.91955c60.js",
    "revision": "96c48f3a636895e20e18f96e012e329f"
  },
  {
    "url": "assets/js/44.0a8c1a8f.js",
    "revision": "01b79f0f701f456957eb727c3f07d87f"
  },
  {
    "url": "assets/js/45.78721d3c.js",
    "revision": "b4d603369113c5b1eca1d5750748ea6b"
  },
  {
    "url": "assets/js/46.77c6e354.js",
    "revision": "e00046c588e1db494a663f3462ff944a"
  },
  {
    "url": "assets/js/47.cb62ed1a.js",
    "revision": "b189190b0f0e9940bb5b7ef4db8ab248"
  },
  {
    "url": "assets/js/48.0bb7bf53.js",
    "revision": "29e8bdca626132df8b24ac04f5da6aad"
  },
  {
    "url": "assets/js/49.d4f8b205.js",
    "revision": "5c1cb3a6be1758ef424c214655179daa"
  },
  {
    "url": "assets/js/5.7f934ba5.js",
    "revision": "9535dab89db4b459f05f0cb5ee1bee09"
  },
  {
    "url": "assets/js/50.aa5ac4fd.js",
    "revision": "85ca14fbc8b442e1234f472b5564a90c"
  },
  {
    "url": "assets/js/51.3c252743.js",
    "revision": "3dad5e722548c5befa86605661a1a433"
  },
  {
    "url": "assets/js/52.f5348a12.js",
    "revision": "6ea6a2dca4b7635f94fb1abcf03bcdf6"
  },
  {
    "url": "assets/js/53.4a93ddea.js",
    "revision": "fb62ba3ac97eddfa4c2f651116176d92"
  },
  {
    "url": "assets/js/54.b3e93e9a.js",
    "revision": "96aded7cd7c3cfb09b8682023b6c2f52"
  },
  {
    "url": "assets/js/55.b5ec9a10.js",
    "revision": "94ca8450091caafa25043aa075075656"
  },
  {
    "url": "assets/js/56.853148c9.js",
    "revision": "33a30e18d497f34818e3a800755b6be9"
  },
  {
    "url": "assets/js/57.4fe9eb60.js",
    "revision": "39c6f17c139e625d0faf512d307c302e"
  },
  {
    "url": "assets/js/58.37130741.js",
    "revision": "e8a513eb573c6345628a2fbe13ada5df"
  },
  {
    "url": "assets/js/59.d729872a.js",
    "revision": "56da66b5d1d9add44806d0cc99e12df5"
  },
  {
    "url": "assets/js/6.b028a513.js",
    "revision": "22d6547b543c87c2a8f88a87f8a98536"
  },
  {
    "url": "assets/js/60.b5970a99.js",
    "revision": "feee12f0772a44d6e5a48836f3eb35a6"
  },
  {
    "url": "assets/js/7.b378032f.js",
    "revision": "11d78764d63a3d89200b673886621f93"
  },
  {
    "url": "assets/js/8.6c7d13a3.js",
    "revision": "442dd89cb453e96c3f12eef63e63695f"
  },
  {
    "url": "assets/js/9.908f0a74.js",
    "revision": "a8489aa474584b8b3bd22f024cab8186"
  },
  {
    "url": "assets/js/app.9715bf7d.js",
    "revision": "c7f9b3d1aee27973079cc77e7ce0dfee"
  },
  {
    "url": "assets/js/vendors~flowchart.36881d3b.js",
    "revision": "14031fc59b408a194645060293f61381"
  },
  {
    "url": "categories/index.html",
    "revision": "4d20e482f9893c5e6089504aeb7901ed"
  },
  {
    "url": "colorui/docs/button.html",
    "revision": "8cc980aa71654137dd42215c8ecd09aa"
  },
  {
    "url": "colorui/docs/index.html",
    "revision": "3359c4e6bf2a574729d67f5d28ba8d32"
  },
  {
    "url": "colorui/docs/text.html",
    "revision": "89f7aa9dbd870859686ab787f94d2deb"
  },
  {
    "url": "dotnetcore/examples/console-hello-world.html",
    "revision": "5ee157798d39598d24fe3e6ad8d41865"
  },
  {
    "url": "dotnetcore/examples/Console-Hello-World.html",
    "revision": "b22b1460e79d05dc8fc29b25f8af7d77"
  },
  {
    "url": "dotnetcore/examples/console-news-types.html",
    "revision": "b3dc4d80ac20c3eb4f7d976305c4c8e5"
  },
  {
    "url": "dotnetcore/examples/Console-News-Types.html",
    "revision": "80c3323f75ca893e289df232fd41d4ff"
  },
  {
    "url": "dotnetcore/examples/freesql-in-aspnetcore-webapi-how-to-use.html",
    "revision": "3067299e6e250b316e04c5bdfdf5b43d"
  },
  {
    "url": "dotnetcore/examples/freesql-sample-blog-restful-use-automapper.html",
    "revision": "82abf8812d167d7d74012f4f5a9d93df"
  },
  {
    "url": "dotnetcore/examples/FreeSql-sample-blog-RESTful-use-automapper.html",
    "revision": "0347e8f29912f0e912cb16120af24e78"
  },
  {
    "url": "dotnetcore/examples/identityserver4.html",
    "revision": "d3bf17e938f6d02efc3110a4cbea1dc6"
  },
  {
    "url": "dotnetcore/examples/IdentityServer4.html",
    "revision": "b6027fc78fbe0cdae200a26ba9eaedd6"
  },
  {
    "url": "dotnetcore/examples/imcore-chat.html",
    "revision": "ad49f3c236703a6aac32d39869e573e1"
  },
  {
    "url": "dotnetcore/examples/ImCore-Chat.html",
    "revision": "2ec8b7075a7d57fe67a2bc2338f66a6a"
  },
  {
    "url": "dotnetcore/examples/index.html",
    "revision": "c92ba2322f4c193d1062ac2c94beb83d"
  },
  {
    "url": "dotnetcore/examples/qiniu-object-storage.html",
    "revision": "772d4dd32c29257d9986c4ce3fde5905"
  },
  {
    "url": "dotnetcore/examples/Qiniu-Object-Storage.html",
    "revision": "cea09e931c23f47ce996772662bd055d"
  },
  {
    "url": "dotnetcore/lin-cms/authorize.html",
    "revision": "fe5a8c57a9f5c8c4e26343d8e8b9ab0a"
  },
  {
    "url": "dotnetcore/lin-cms/cms-start.html",
    "revision": "3781beb66ed2cb4cbe3cafb5d764a3e2"
  },
  {
    "url": "dotnetcore/lin-cms/dependency-injection-scrutor.html",
    "revision": "a04d5d7beb348ed17d9d8919f579684d"
  },
  {
    "url": "dotnetcore/lin-cms/dev-start.html",
    "revision": "ee0d256087ffe93c4a3bfc11d0b52bf0"
  },
  {
    "url": "dotnetcore/lin-cms/dotnetcore-start.html",
    "revision": "38aee8dfff5fcb3a255bd59a7fc3d47c"
  },
  {
    "url": "dotnetcore/lin-cms/dynamic-authorization-in-aspnetcore.html",
    "revision": "c15b5ad1bda4efa3eacfd4b68cf30fad"
  },
  {
    "url": "dotnetcore/lin-cms/error-code.html",
    "revision": "398c06ef3877de5a8f3a5870120dc31f"
  },
  {
    "url": "dotnetcore/lin-cms/file-upload.html",
    "revision": "409aca1e5c62b147971bc395e6c2ed41"
  },
  {
    "url": "dotnetcore/lin-cms/github-actions.html",
    "revision": "628cdf3fcdc3295e9b1e3a823057127b"
  },
  {
    "url": "dotnetcore/lin-cms/identityserver4-jwt.html",
    "revision": "9c97aab6c61df67da9fe2e2f02dfbdc1"
  },
  {
    "url": "dotnetcore/lin-cms/IdentityServer4-JWT.html",
    "revision": "3f68591f74916fe56e8d6ec16b50f950"
  },
  {
    "url": "dotnetcore/lin-cms/index.html",
    "revision": "6927e403c1f9e0e4f145e393d106ac6f"
  },
  {
    "url": "dotnetcore/lin-cms/lincms-scaffolding.html",
    "revision": "ea8c4d1642c4c5524dc43269c278e21f"
  },
  {
    "url": "dotnetcore/lin-cms/logger.html",
    "revision": "c877ffb4b3bef1f6d2b638a34d803cca"
  },
  {
    "url": "dotnetcore/lin-cms/newtonsoft-json-question.html",
    "revision": "b3f288d2c2bab73e3a938b4c611b80ac"
  },
  {
    "url": "dotnetcore/lin-cms/open-source-road.html",
    "revision": "e04fbc47c500d4d43916562c2d323341"
  },
  {
    "url": "dotnetcore/lin-cms/pm-design-modules.html",
    "revision": "7cc6a8d6278e35c5a699cedd19616f04"
  },
  {
    "url": "dotnetcore/lin-cms/production-design.html",
    "revision": "77ada41d5e3b1e72e665ecdfd28c755a"
  },
  {
    "url": "dotnetcore/lin-cms/Production-Design.html",
    "revision": "703fffd4f8cc22c72a549cada2d45feb"
  },
  {
    "url": "dotnetcore/lin-cms/qq-login.html",
    "revision": "9ca75052842faa128a67725146082538"
  },
  {
    "url": "dotnetcore/lin-cms/rabbitmq.html",
    "revision": "340d623c22d5a460997fc103a618963a"
  },
  {
    "url": "dotnetcore/lin-cms/reflex-assembly-get-controller-methods-attribute.html",
    "revision": "3aedf6f117d09048ba9b5ebf773182bc"
  },
  {
    "url": "dotnetcore/lin-cms/Reflex-Assembly-Get-Controller-Methods-Attribute.html",
    "revision": "d0e58b205827c0e5f079bcab4877b7c8"
  },
  {
    "url": "dotnetcore/lin-cms/scribanREADME.html",
    "revision": "ba53705ab913bad6e76bb3cb9bad947d"
  },
  {
    "url": "dotnetcore/lin-cms/spa-github-login.html",
    "revision": "4633bac700247e67aa3dff3ae9373139"
  },
  {
    "url": "dotnetcore/lin-cms/stopwords.html",
    "revision": "45a9cec5a4c2b67c9978abe90eb98d91"
  },
  {
    "url": "dotnetcore/lin-cms/StopWords.html",
    "revision": "1867467dbc921b04bf912c412b536efb"
  },
  {
    "url": "dotnetcore/lin-cms/table.html",
    "revision": "6b871e27d7310a96184675ade797531f"
  },
  {
    "url": "dotnetcore/lin-cms/technology.html",
    "revision": "96371bfb06b608d59bb4796fd8338a13"
  },
  {
    "url": "dotnetcore/lin-cms/vue-start.html",
    "revision": "04b4b3e372456bed79f1e453ec98810d"
  },
  {
    "url": "head.jpg",
    "revision": "ea5b39ec1dc7d2bbdbf7921aa274caf0"
  },
  {
    "url": "index.html",
    "revision": "87b09724112da212f2dc875cbfc9d56f"
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
    "revision": "e18971226a5450c82b8498b102d229f8"
  },
  {
    "url": "tag/index.html",
    "revision": "0d58873d306afff5e10a909d189c397b"
  },
  {
    "url": "tag/lin-cms/index.html",
    "revision": "adb22bd8d791a5ffacbb7e21062385b6"
  },
  {
    "url": "tag/开源/index.html",
    "revision": "13ec7f97767aea22f6099c0ed38099ee"
  },
  {
    "url": "timeline/index.html",
    "revision": "53d35e9f2bf7fbc5e031d84b7d47e6b4"
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
