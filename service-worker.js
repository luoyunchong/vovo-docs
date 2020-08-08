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
    "revision": "0ae56c89293900a135d9920a7016f9dc"
  },
  {
    "url": "about/index.html",
    "revision": "ab95ea3ccf2f7cfa19bcbc83a988d1fb"
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
    "url": "assets/js/1.894517c1.js",
    "revision": "2fd3af81e584614c989c95292da7610f"
  },
  {
    "url": "assets/js/10.266b86a2.js",
    "revision": "2311938792bd1549fd32a51748a0e728"
  },
  {
    "url": "assets/js/11.054d546d.js",
    "revision": "24ea6a948aca4f08042d633362d5f4d8"
  },
  {
    "url": "assets/js/12.794b6203.js",
    "revision": "05e99a74077b15dc6fda01d2174f05ea"
  },
  {
    "url": "assets/js/13.e149cbe8.js",
    "revision": "880983bfed304cb6003f975c12ae547c"
  },
  {
    "url": "assets/js/14.fc66055f.js",
    "revision": "4bf2fc761b35cd46fbdb7cb4f7777b5d"
  },
  {
    "url": "assets/js/15.bb715130.js",
    "revision": "26b016783eb0ac3f43fb92931fa3de52"
  },
  {
    "url": "assets/js/16.9da8d522.js",
    "revision": "9d42d4d78d053335ca811a368aadc965"
  },
  {
    "url": "assets/js/17.7a7bcfb9.js",
    "revision": "385408b34b14b4205ce2934a9e1dee45"
  },
  {
    "url": "assets/js/18.561449fe.js",
    "revision": "167c98510f34d64e51f3fbeac6617176"
  },
  {
    "url": "assets/js/19.d846015d.js",
    "revision": "b668ac2b3526b51e0f27667fb0325da5"
  },
  {
    "url": "assets/js/20.da128a53.js",
    "revision": "256396f8c4005f462b59f5843bb2c308"
  },
  {
    "url": "assets/js/21.af120b9b.js",
    "revision": "e6d2f497c3ca24f26c987a5b4fcdac06"
  },
  {
    "url": "assets/js/22.d33fcc02.js",
    "revision": "c444c63a14a88000526100c226029f16"
  },
  {
    "url": "assets/js/23.d0a502a2.js",
    "revision": "9d9c392a8e38aca8ecc397befc3fb405"
  },
  {
    "url": "assets/js/24.03e22eb8.js",
    "revision": "a95f92a426ec851b3a1c69f431082952"
  },
  {
    "url": "assets/js/25.906e71b0.js",
    "revision": "7b5da9f4cb7839d634dadacf1aeb1635"
  },
  {
    "url": "assets/js/26.93da2e86.js",
    "revision": "917db86af374b23bdf799815ab2d1979"
  },
  {
    "url": "assets/js/27.b39236ac.js",
    "revision": "28ec7b9af8fed2b205dcfdfde7de0f1e"
  },
  {
    "url": "assets/js/28.55d9907a.js",
    "revision": "dd15e7ca1d3e97336e2ca6c6fdc05922"
  },
  {
    "url": "assets/js/29.9d4c06f1.js",
    "revision": "76e7d5ea680dd2bd0d3d897fe9e4785d"
  },
  {
    "url": "assets/js/30.307cbbc7.js",
    "revision": "3f628cce99045b48cfeafeed0931d42b"
  },
  {
    "url": "assets/js/31.f18d84a7.js",
    "revision": "db3c4ca2d5d0e5ee88863ff1aff00712"
  },
  {
    "url": "assets/js/32.56eb229a.js",
    "revision": "98ffa08a3e58f70bd9fbf360e7deb257"
  },
  {
    "url": "assets/js/33.c1d18ee6.js",
    "revision": "5c6298d5bd786f45ea005a2bde79f16e"
  },
  {
    "url": "assets/js/34.7336683a.js",
    "revision": "cb54433e84e34f3958fc05f5addc086f"
  },
  {
    "url": "assets/js/35.364f8e7c.js",
    "revision": "236048747fff86af94308b4a1738c109"
  },
  {
    "url": "assets/js/36.a7243f2b.js",
    "revision": "a6117a2b2a896aacff0299d43cdb61f7"
  },
  {
    "url": "assets/js/37.b522a00a.js",
    "revision": "78fe90f617873bf81c4c37b2b85b1f82"
  },
  {
    "url": "assets/js/38.05b3ffef.js",
    "revision": "556204208c32cd1554cc5d2d473af2b5"
  },
  {
    "url": "assets/js/39.20952e06.js",
    "revision": "6ffaf993f5a41c71f878a673eb7b8454"
  },
  {
    "url": "assets/js/4.ab413025.js",
    "revision": "ce602f96dbbcb7b18a703f7b0d31929f"
  },
  {
    "url": "assets/js/40.3090132e.js",
    "revision": "b8f40252d4ce113de1af2dd22d76956e"
  },
  {
    "url": "assets/js/41.4bb92f88.js",
    "revision": "fe53c2ea873a343921c6c039c1af2a56"
  },
  {
    "url": "assets/js/42.11b80f3e.js",
    "revision": "00a2ac85fd8f54684978fd1c1fc138e9"
  },
  {
    "url": "assets/js/43.0425fcc2.js",
    "revision": "3d61ad1a31dc6b3389e5445143b32bf0"
  },
  {
    "url": "assets/js/44.eebaea7a.js",
    "revision": "a5661887158323bebed86f91c0825734"
  },
  {
    "url": "assets/js/45.2e1cb64d.js",
    "revision": "3e2495657c176e97cb5a714479809e70"
  },
  {
    "url": "assets/js/46.894dcbe1.js",
    "revision": "11bcd48860f4efe8f6d53c5d91518dcd"
  },
  {
    "url": "assets/js/47.ca819556.js",
    "revision": "094a0d5aedeb75cfe27cf219a91ba4a0"
  },
  {
    "url": "assets/js/48.68e1a560.js",
    "revision": "38e0c2828a1b553f9db6c219900d44fd"
  },
  {
    "url": "assets/js/49.49961103.js",
    "revision": "5e0b074e8f3dbc5df76d2027b7cb184f"
  },
  {
    "url": "assets/js/5.998e60ef.js",
    "revision": "81e7b6918c7e844fb1cfddfc98a2d7d3"
  },
  {
    "url": "assets/js/50.baff3180.js",
    "revision": "abed4bd7fd81112e1e7e40dea933436d"
  },
  {
    "url": "assets/js/51.79ad56b3.js",
    "revision": "040c328053f4b4b6b52966eedf260406"
  },
  {
    "url": "assets/js/52.37abe49c.js",
    "revision": "38ef2123336590612d3f8389c51e94f3"
  },
  {
    "url": "assets/js/53.6f895645.js",
    "revision": "b163abed3cb093a6d6fe0fbe0a791ef4"
  },
  {
    "url": "assets/js/54.a625c313.js",
    "revision": "518e87fba5a4480e6fda2485e1202d92"
  },
  {
    "url": "assets/js/55.0011129e.js",
    "revision": "25c9b06289a9adecca40a5bf1542a53a"
  },
  {
    "url": "assets/js/56.042f2b14.js",
    "revision": "2fb072a7aa1f567dc42f2640d1dc34bf"
  },
  {
    "url": "assets/js/57.f106b4bb.js",
    "revision": "cc24181cd7de2b70b24cad7eff311b2d"
  },
  {
    "url": "assets/js/58.78b408b1.js",
    "revision": "6a8d49a1b0c21768ad82229ce5991719"
  },
  {
    "url": "assets/js/59.72a46a51.js",
    "revision": "b734377dc360c5628afb03428ff525e4"
  },
  {
    "url": "assets/js/6.39852e8b.js",
    "revision": "4bfb94fd6f845225bde08580ba75859e"
  },
  {
    "url": "assets/js/60.3fcee800.js",
    "revision": "73e7a5c48579050037dee6bb8fc7ba7a"
  },
  {
    "url": "assets/js/7.2f334b6b.js",
    "revision": "9f8eff690f46edb281841bb6427fb972"
  },
  {
    "url": "assets/js/8.4ffdab32.js",
    "revision": "63815c4cfa923a8962916110449e5982"
  },
  {
    "url": "assets/js/9.7d163902.js",
    "revision": "79d21437fe76bdff22f8096cb626484e"
  },
  {
    "url": "assets/js/app.31554749.js",
    "revision": "6a8386cc1163f963dc283d32f5156a4b"
  },
  {
    "url": "assets/js/vendors~flowchart.e2fe1631.js",
    "revision": "310dda495c1f05dead80393a9f76c50b"
  },
  {
    "url": "categories/index.html",
    "revision": "8c32a8578275e0097956ec8b0f55be06"
  },
  {
    "url": "colorui/docs/button.html",
    "revision": "8da536110729fc87b81919db3f371694"
  },
  {
    "url": "colorui/docs/index.html",
    "revision": "1e0b5363616125b10d9c83a0f5570472"
  },
  {
    "url": "colorui/docs/text.html",
    "revision": "37a8ed1dbc61601c8ccd94075309e7a6"
  },
  {
    "url": "dotnetcore/examples/console-hello-world.html",
    "revision": "85784f700ec6e9b48a8a81750ba8dc4a"
  },
  {
    "url": "dotnetcore/examples/Console-Hello-World.html",
    "revision": "398216b65808ab2b7a1f844c51bfefad"
  },
  {
    "url": "dotnetcore/examples/console-news-types.html",
    "revision": "5ab71fa6eb6bc64ec8684ec670e8fe9d"
  },
  {
    "url": "dotnetcore/examples/Console-News-Types.html",
    "revision": "83640ddad9bc3104047472f5f5f1f34c"
  },
  {
    "url": "dotnetcore/examples/freesql-in-aspnetcore-webapi-how-to-use.html",
    "revision": "5dcad941552043a73ee0d5752a0e65a7"
  },
  {
    "url": "dotnetcore/examples/freesql-sample-blog-restful-use-automapper.html",
    "revision": "80da2f6dbb75a2483b10d6352b3470d5"
  },
  {
    "url": "dotnetcore/examples/FreeSql-sample-blog-RESTful-use-automapper.html",
    "revision": "408878865b16bfbe70bfcc9942266f79"
  },
  {
    "url": "dotnetcore/examples/identityserver4.html",
    "revision": "8eb34c8057aa2324ad79b2fd558c67cf"
  },
  {
    "url": "dotnetcore/examples/IdentityServer4.html",
    "revision": "29973ad8da6c20e7e67aa239d090d72f"
  },
  {
    "url": "dotnetcore/examples/imcore-chat.html",
    "revision": "2c26ab3380576975e159152c47045fb5"
  },
  {
    "url": "dotnetcore/examples/ImCore-Chat.html",
    "revision": "8c9919915fe5798783f4fcf739ba3c5d"
  },
  {
    "url": "dotnetcore/examples/index.html",
    "revision": "41e42c3e5620f7090df07cb8621aa5d5"
  },
  {
    "url": "dotnetcore/examples/qiniu-object-storage.html",
    "revision": "a9f9c106271e9d2968812034056b746f"
  },
  {
    "url": "dotnetcore/examples/Qiniu-Object-Storage.html",
    "revision": "facdc015543d39a245d44393999ec88e"
  },
  {
    "url": "dotnetcore/lin-cms/authorize.html",
    "revision": "8a51910a470c28314ed5409dd537db21"
  },
  {
    "url": "dotnetcore/lin-cms/cms-start.html",
    "revision": "c01c5ddb963993b76bdea61e30fb7cec"
  },
  {
    "url": "dotnetcore/lin-cms/dependency-injection-scrutor.html",
    "revision": "2347d2eff2cb7fc095a18fae9cb56a33"
  },
  {
    "url": "dotnetcore/lin-cms/dev-start.html",
    "revision": "2dce9313561ed0b90772c523c9e717aa"
  },
  {
    "url": "dotnetcore/lin-cms/dotnetcore-start.html",
    "revision": "1296af787aa619825ac4e13f53138074"
  },
  {
    "url": "dotnetcore/lin-cms/dynamic-authorization-in-aspnetcore.html",
    "revision": "58a5616c9b4cbf31f983ef4b9f7cba4a"
  },
  {
    "url": "dotnetcore/lin-cms/error-code.html",
    "revision": "3cebed91b51c0715840a756b69be1c56"
  },
  {
    "url": "dotnetcore/lin-cms/file-upload.html",
    "revision": "b893b8cf7acc3136659abcebb0a02129"
  },
  {
    "url": "dotnetcore/lin-cms/github-actions.html",
    "revision": "b59faeb490c23b4adbe534d3847c0afe"
  },
  {
    "url": "dotnetcore/lin-cms/identityserver4-jwt.html",
    "revision": "05a925ee6eea5be325bbe800106fccf4"
  },
  {
    "url": "dotnetcore/lin-cms/IdentityServer4-JWT.html",
    "revision": "36fcead436fd9e71029e4ecb9c119440"
  },
  {
    "url": "dotnetcore/lin-cms/index.html",
    "revision": "e8e28dadaa18b53407d0ea89436c0774"
  },
  {
    "url": "dotnetcore/lin-cms/lincms-scaffolding.html",
    "revision": "2535c05d521459a2953801d5eb40e53c"
  },
  {
    "url": "dotnetcore/lin-cms/logger.html",
    "revision": "737fb66f6ee14b7c9b65db0f553d0c48"
  },
  {
    "url": "dotnetcore/lin-cms/newtonsoft-json-question.html",
    "revision": "92dede5b1aea5081c152d3223d36bbf6"
  },
  {
    "url": "dotnetcore/lin-cms/open-source-road.html",
    "revision": "04bbf0f99c30cbb7cdc4ca307cc4bc49"
  },
  {
    "url": "dotnetcore/lin-cms/pm-design-modules.html",
    "revision": "9940712166f5bff3000bf6d40f3dc1ac"
  },
  {
    "url": "dotnetcore/lin-cms/production-design.html",
    "revision": "b763ba56d11a00e1b8d1068961e675d1"
  },
  {
    "url": "dotnetcore/lin-cms/Production-Design.html",
    "revision": "7fdfb2a6ae2249bd987a6a99c9f423b1"
  },
  {
    "url": "dotnetcore/lin-cms/qq-login.html",
    "revision": "e34271ac10f12f5a2df4ef6cfab07613"
  },
  {
    "url": "dotnetcore/lin-cms/rabbitmq.html",
    "revision": "94ecea956f3c68aa66f36fc9a474cbc5"
  },
  {
    "url": "dotnetcore/lin-cms/reflex-assembly-get-controller-methods-attribute.html",
    "revision": "eae2de1623723aeccbcc8eaf4dcd3b6e"
  },
  {
    "url": "dotnetcore/lin-cms/Reflex-Assembly-Get-Controller-Methods-Attribute.html",
    "revision": "1b6a103a049120a76aa289ba224e6365"
  },
  {
    "url": "dotnetcore/lin-cms/scribanREADME.html",
    "revision": "9bea1e5aa692ac1c4971c8a2203e72ca"
  },
  {
    "url": "dotnetcore/lin-cms/spa-github-login.html",
    "revision": "021b8343dc973047ba02b767058367c1"
  },
  {
    "url": "dotnetcore/lin-cms/stopwords.html",
    "revision": "a16bb70b0c09da3dd0c888f69968a721"
  },
  {
    "url": "dotnetcore/lin-cms/StopWords.html",
    "revision": "74cc91f627a76601e6733e225b1bee91"
  },
  {
    "url": "dotnetcore/lin-cms/table.html",
    "revision": "ad2993c7b1144bef5ba12ad94db50db2"
  },
  {
    "url": "dotnetcore/lin-cms/technology.html",
    "revision": "8ae84898491191821dce6deb85eabb74"
  },
  {
    "url": "dotnetcore/lin-cms/vue-start.html",
    "revision": "2d0e6644cb44aec41eb170cbcaaa5e30"
  },
  {
    "url": "head.jpg",
    "revision": "ea5b39ec1dc7d2bbdbf7921aa274caf0"
  },
  {
    "url": "index.html",
    "revision": "6b880f06ecb6552ef45e3a1d5480396e"
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
    "revision": "646953b48fe610d963c871af81dbc021"
  },
  {
    "url": "tag/index.html",
    "revision": "1f6be3c71cbcfdb1986a8bb1f827e0b5"
  },
  {
    "url": "tag/lin-cms/index.html",
    "revision": "2a5df2e0b4d38ac9e7705a9b6b499f29"
  },
  {
    "url": "tag/开源/index.html",
    "revision": "83f3e2dc8af989592f12856c7f4ba709"
  },
  {
    "url": "timeline/index.html",
    "revision": "71f50eb911c9f52d5f1d3fe3e1e2f092"
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
