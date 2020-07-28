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
    "revision": "9951820283b9ecca092f42b1f394bd68"
  },
  {
    "url": "assets/css/0.styles.489181fb.css",
    "revision": "ad9bee2b7fa5875d805340c69cdd2155"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/1bjdXEarkgJvcQU.png",
    "revision": "9555a2d251cf0c06df24142974beaabb"
  },
  {
    "url": "assets/img/20200518181948.92fa4486.png",
    "revision": "92fa4486007cebef0964f7d44670ccba"
  },
  {
    "url": "assets/img/20200518182107.450755da.png",
    "revision": "450755da661fc7491ad221ab7c523d97"
  },
  {
    "url": "assets/img/20200518182220.071dfacb.png",
    "revision": "071dfacb044a239376408f9143e2bdff"
  },
  {
    "url": "assets/img/20200518190048.9b1c2ba1.png",
    "revision": "9b1c2ba173250a35a57ef5ef6c0c595a"
  },
  {
    "url": "assets/img/20200518192315.bdd8b570.png",
    "revision": "bdd8b5707c635c3692c3e85ddd11ea8e"
  },
  {
    "url": "assets/img/20200518193136.ff204ca4.png",
    "revision": "ff204ca4c1c0bd1e1edf597054554893"
  },
  {
    "url": "assets/img/20200518203526.83fceb88.png",
    "revision": "83fceb88e8114e7bb9cf1f81665d89b8"
  },
  {
    "url": "assets/img/20200518203635.296d0808.png",
    "revision": "296d0808756e28204357e704c26b1802"
  },
  {
    "url": "assets/img/20200629191625.903944a2.png",
    "revision": "903944a2de3302560e6a5b7c33c1f08c"
  },
  {
    "url": "assets/img/20200727003001.fd5fa6d7.png",
    "revision": "fd5fa6d714ab11448a8f1dd68806639b"
  },
  {
    "url": "assets/img/20200727003052.bf9e58c4.png",
    "revision": "bf9e58c4b44abb9b4da2897eb89092c8"
  },
  {
    "url": "assets/img/6cGE9MbCoefiKy5.jpg",
    "revision": "9a716c274ba7e7269e51502a708a88a1"
  },
  {
    "url": "assets/img/asZjvohWRBJIHyg.png",
    "revision": "0fcc3ba360e54f89297fe7b35f862c0a"
  },
  {
    "url": "assets/img/aXwpjgNA97z8LuS.png",
    "revision": "8cd3f2b18baf218432bbe44a50b99d3b"
  },
  {
    "url": "assets/img/AydI2o3pub4qOJm.jpg",
    "revision": "4a622ea5110fd115d14689a8b9ecd5c7"
  },
  {
    "url": "assets/img/bottom.95e5f061.png",
    "revision": "95e5f061d05e955301855c38d92de840"
  },
  {
    "url": "assets/img/CVvMpid8TjYH4oG.png",
    "revision": "8af18b2d8da6b0d74f8a519138b3a0c6"
  },
  {
    "url": "assets/img/cVXlM1iD2j3SL6q.jpg",
    "revision": "756c0ac0bdca532cf3aa6eb15381cdae"
  },
  {
    "url": "assets/img/E1rQwlesOC7VZvW.png",
    "revision": "0e85baba877b3bba1674a8a0f6ad1ca4"
  },
  {
    "url": "assets/img/g72jWzlRxGCIqEY.png",
    "revision": "a4aec2d7a9d21a76fc3c32df7279f33c"
  },
  {
    "url": "assets/img/HV5jrQcbWin2mUF.png",
    "revision": "f2ea62603e24b4c7a7334e65c8179019"
  },
  {
    "url": "assets/img/kRPThjFDVi6QB8N.jpg",
    "revision": "e94724a0d9ba6f40a16b268d9f38ecf2"
  },
  {
    "url": "assets/img/mRwvXZNS1gJHYVq.png",
    "revision": "c66df08e18e0500331b75fa5509cc7e5"
  },
  {
    "url": "assets/img/odnS98kAyKlGVxT.png",
    "revision": "36f6590ac0accfca11c58358a3748bc0"
  },
  {
    "url": "assets/img/OXIMf6wYjevxbmg.png",
    "revision": "aba0a0d3447bb42f34d4a8e51539f6a7"
  },
  {
    "url": "assets/img/P3dqu4HsKwcbg8r.png",
    "revision": "d2e48b3e856c54328979b81d7cbc43af"
  },
  {
    "url": "assets/img/pcbruler.png",
    "revision": "b020907e22abf24cb7e27a2c0370d8b2"
  },
  {
    "url": "assets/img/Q.jpg",
    "revision": "c502f270958073d8b732ad88890c0a34"
  },
  {
    "url": "assets/img/Reimu_thinking.jpg",
    "revision": "dc11ef58975c4f0ce59d45366e7d7873"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/tail-spin.bdc50dc9.svg",
    "revision": "bdc50dc9593770fc62d9965346a87772"
  },
  {
    "url": "assets/img/tgH1GWJEPcSV8Nr.png",
    "revision": "77156f0483a254d2e55bdf4b74f3ddfe"
  },
  {
    "url": "assets/img/tmH1zJbae2C7GsF.png",
    "revision": "e72ab7cb0244b54f50a77f5915ef14f9"
  },
  {
    "url": "assets/img/TMs1Ora2GeoDXQC.png",
    "revision": "aa286ed2e319ee9d3d2eb471f82aae60"
  },
  {
    "url": "assets/img/top.b435c144.png",
    "revision": "b435c14401b5c99a6c93c505b38b492f"
  },
  {
    "url": "assets/img/WGxhDrmf97RNzjP.jpg",
    "revision": "a46b80dff1d21db9ecce78a46b607695"
  },
  {
    "url": "assets/img/五茶.jpg",
    "revision": "99c3a8349fae7f49857cc3204eef8dbb"
  },
  {
    "url": "assets/img/词典.jpg",
    "revision": "e302b87847786cc9ab27c1dedd5c00f5"
  },
  {
    "url": "assets/js/1.98b9a2b2.js",
    "revision": "20c12e375c33cd65556f9f508d36b52a"
  },
  {
    "url": "assets/js/2.8d78e4de.js",
    "revision": "70dfc2778edba5ad2449465274d227d0"
  },
  {
    "url": "assets/js/38.5c6fd035.js",
    "revision": "fddb600ef3855b2c89f5b7fdf2f8b7f6"
  },
  {
    "url": "assets/js/39.3f51f4da.js",
    "revision": "5ebdf69bcf1df823d82932fa5f477837"
  },
  {
    "url": "assets/js/4.29880420.js",
    "revision": "125fdd94c8418bb6ce1676887fad0e5b"
  },
  {
    "url": "assets/js/40.789c92b1.js",
    "revision": "c9ad566d62e2c576493f0809984a2df9"
  },
  {
    "url": "assets/js/41.2ba38d74.js",
    "revision": "53de945f94ee8b186a48dc3129229c86"
  },
  {
    "url": "assets/js/42.8fb27037.js",
    "revision": "4d44ed03479cbfeb5f62b3c851635232"
  },
  {
    "url": "assets/js/43.9a2e577e.js",
    "revision": "f7ef6d7040eb895e0bfe2822896d1f69"
  },
  {
    "url": "assets/js/44.bc22f7d7.js",
    "revision": "c1d3796d4db906cebcef62c40ac29edb"
  },
  {
    "url": "assets/js/45.d5cdc3cd.js",
    "revision": "d8a12628469746b5962072994f98a049"
  },
  {
    "url": "assets/js/46.d0d91023.js",
    "revision": "befe714d2bde33e13afa7f2825c91d8b"
  },
  {
    "url": "assets/js/47.8b64a809.js",
    "revision": "1d43e06263537077eea0c77e83fc69d3"
  },
  {
    "url": "assets/js/48.6db6bb97.js",
    "revision": "4fbe759fab8c7295940d78d8e338e896"
  },
  {
    "url": "assets/js/49.d7e6c10e.js",
    "revision": "44c3cce4f80290f0b20af5cf421acf0b"
  },
  {
    "url": "assets/js/50.433aaa97.js",
    "revision": "e6753a1b7aa898ff9c3870df7091d565"
  },
  {
    "url": "assets/js/51.3c6b8429.js",
    "revision": "c8e4d4ba9c5c1bcfc28bc5f4193b300a"
  },
  {
    "url": "assets/js/52.a4f2cecc.js",
    "revision": "a63b4c78d45186d7ac1143af494ffc05"
  },
  {
    "url": "assets/js/app.b96381dd.js",
    "revision": "29b85134859dd1160283ed603689db5a"
  },
  {
    "url": "assets/js/layout-BlogLayout.fce6b0e4.js",
    "revision": "f1bb31c8e4113067e33a637a182cf7ee"
  },
  {
    "url": "assets/js/layout-Layout.40053c20.js",
    "revision": "0ffb0ec0dcc9e1a6d74109826002f416"
  },
  {
    "url": "assets/js/layout-NotFound.07467bff.js",
    "revision": "bd3faab79332cc33002ec124ff353460"
  },
  {
    "url": "assets/js/page-0577d216.3d949646.js",
    "revision": "17817ff20d4d43ae72a5b2aad663eadf"
  },
  {
    "url": "assets/js/page-1060d900.cc8c3874.js",
    "revision": "81db788123fdef40a5c70bb37355dc94"
  },
  {
    "url": "assets/js/page-144cc9af.f3df5554.js",
    "revision": "f0d7b64c13ec85392d84074ea7e95805"
  },
  {
    "url": "assets/js/page-1529d322.24005dc9.js",
    "revision": "21a03b44bf0042c78b42bbcf6d52f5e7"
  },
  {
    "url": "assets/js/page-191607df.468a5060.js",
    "revision": "6b10bdbae06dab593aab64896943bb9f"
  },
  {
    "url": "assets/js/page-1a4f1c8d.9056b200.js",
    "revision": "4338f27069d3ae2f41fcf7da8af9c537"
  },
  {
    "url": "assets/js/page-2365fec5.e5082460.js",
    "revision": "d61b52193249dbc6278483b890bb8114"
  },
  {
    "url": "assets/js/page-33bb370a.39e1ce95.js",
    "revision": "ee204cfabd234d522fce78a2a7f3ee82"
  },
  {
    "url": "assets/js/page-3ca0adb9.630bb573.js",
    "revision": "bcb48b83338c12c5e3ff79f5af98873b"
  },
  {
    "url": "assets/js/page-3df03909.a5b481ef.js",
    "revision": "c04a46710f3881ee6e03045909f20690"
  },
  {
    "url": "assets/js/page-3fbe065f.bc795ce7.js",
    "revision": "2c126c734a0a9f44bc38d80b44ebe771"
  },
  {
    "url": "assets/js/page-44a3bb07.34b19514.js",
    "revision": "32487119ef93f2c698b41a902335a704"
  },
  {
    "url": "assets/js/page-44be7669.8daaaab7.js",
    "revision": "d1c30eba4d8641918a88560f06ad22aa"
  },
  {
    "url": "assets/js/page-4657340f.625c3666.js",
    "revision": "90d3daf25e40beee05e41e690d690021"
  },
  {
    "url": "assets/js/page-4c1c756a.0bcfa63d.js",
    "revision": "4bee87a43a6663df524012b96333de4e"
  },
  {
    "url": "assets/js/page-7edc4636.23ef5e03.js",
    "revision": "58776a593856ab2326f8963674e1bebd"
  },
  {
    "url": "assets/js/page-821642f2.8379e6c3.js",
    "revision": "5e5cad5dbbed65726ca3dcd8e88f98fa"
  },
  {
    "url": "assets/js/page-84892b5a.887141e7.js",
    "revision": "c73126bb168e8b38e4bcbc2dbf6baafb"
  },
  {
    "url": "assets/js/page-8c279030.bcdb5181.js",
    "revision": "7d899be0d36908bbc5ccba6f0368e295"
  },
  {
    "url": "assets/js/page-979841b4.17fc3974.js",
    "revision": "df12e27514e326fe0d471a39ecf1b23d"
  },
  {
    "url": "assets/js/page-9cf3858e.0eec1b88.js",
    "revision": "38db4842585a3ab5f4f0db0abaeef58a"
  },
  {
    "url": "assets/js/page-a8e0d4ca.7c7671d6.js",
    "revision": "871d42d515eab6ba38dd04b26ede798d"
  },
  {
    "url": "assets/js/page-bdc1a630.1ef46e34.js",
    "revision": "c09054a70afb220bef57a9139faf5efd"
  },
  {
    "url": "assets/js/page-c2aab718.b0a1779a.js",
    "revision": "696d7f7b96a09676b574016bb258cae6"
  },
  {
    "url": "assets/js/page-cc47165c.74afac0c.js",
    "revision": "b6de70641af3688647b153d5d4932c89"
  },
  {
    "url": "assets/js/page-d7d99876.6511aede.js",
    "revision": "a76284c28e5ce4f722a1b871e8ec7a4a"
  },
  {
    "url": "assets/js/page-e3367b2c.524f82a3.js",
    "revision": "ad5dedb99b3b53b4c8e14c03999f8f24"
  },
  {
    "url": "assets/js/vendors~docsearch.979f4965.js",
    "revision": "9de873bb34be5ddfaa763fab41b6670f"
  },
  {
    "url": "assets/js/vendors~layout-BlogLayout~layout-Layout.3fcaa2af.js",
    "revision": "59b66a63a404474cf476d93a772f2a61"
  },
  {
    "url": "assets/js/vuejs-paginate.b353185f.js",
    "revision": "f5836ef801a1448d928c1cc3f11928e8"
  },
  {
    "url": "assets/svg/PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "assets/svg/PCBRuler.svg",
    "revision": "0210ace36bdd454de56380f92b8a39d3"
  },
  {
    "url": "assets/svg/构建.svg",
    "revision": "f07fada1a59245263a38e9a39ed329b4"
  },
  {
    "url": "b-tree-logo.svg",
    "revision": "8e1e1b4e31f53fd7a3f0a8f450f23e08"
  },
  {
    "url": "blog/index.html",
    "revision": "379946468faa3f33695380daa0113be7"
  },
  {
    "url": "blog/page/2/index.html",
    "revision": "afeb739f6f2d9f0ec69be593c69e5109"
  },
  {
    "url": "blog/post/ar眼镜/index.html",
    "revision": "a84d525bff258a1f9c9903414b393711"
  },
  {
    "url": "blog/post/js学习笔记/index.html",
    "revision": "cb157d64c424755d432e67d5a0cf2d88"
  },
  {
    "url": "blog/post/resume/index.html",
    "revision": "797304f33a0f5a03ff69a85d0e7c269d"
  },
  {
    "url": "blog/post/vscode源码研读/index.html",
    "revision": "8cf86e800c5c3816f9a82e91013d27e6"
  },
  {
    "url": "blog/post/乐理基础/index.html",
    "revision": "cf01e2d28128a8cc6a65353f6cc139ae"
  },
  {
    "url": "blog/post/人工智能的发展揭示了人类学习的原理/index.html",
    "revision": "be64fa8080cc9974b5701ed6cef6b8b2"
  },
  {
    "url": "blog/post/依赖注入/index.html",
    "revision": "bbd39a7e9f0551ccaf94649fc3ca7465"
  },
  {
    "url": "blog/post/和声法则/index.html",
    "revision": "f8c66330286c15e4ac9084de801e7ebd"
  },
  {
    "url": "blog/post/常用node库记录/index.html",
    "revision": "881726bb045fa6c4d3f50fd55d113b16"
  },
  {
    "url": "blog/post/教程来源/index.html",
    "revision": "f126061999ca510ab6987afde742e06a"
  },
  {
    "url": "blog/post/本网站构建流程/index.html",
    "revision": "818bb52e97f1738c10fd35defbc36e0b"
  },
  {
    "url": "blog/post/汇统花园议事规则/index.html",
    "revision": "c54c1a83b52ce13e55e3ef9214271e97"
  },
  {
    "url": "blog/post/流行和声理论/index.html",
    "revision": "57b98a930da6f35580acc515ebeee9de"
  },
  {
    "url": "blog/post/爵士理论/index.html",
    "revision": "4fe6b1df69987374f5f7e86c38bd24a9"
  },
  {
    "url": "blog/post/获取b站表情/index.html",
    "revision": "714afae9736521f532d0c4b5fa74359d"
  },
  {
    "url": "blog/post/调式解析/index.html",
    "revision": "90e4d898a70905a8ca21d93acfede124"
  },
  {
    "url": "blog/post/重构网站/index.html",
    "revision": "0b8334101a59a560c8ff525472d395df"
  },
  {
    "url": "blog/tag/bug/index.html",
    "revision": "bf0c1819f344c21f1c92efb8ccd348c1"
  },
  {
    "url": "blog/tag/electron/index.html",
    "revision": "2d38bbd6cf0895a445e3a859b9962568"
  },
  {
    "url": "blog/tag/index.html",
    "revision": "97d094839da0500caee86add9c28b347"
  },
  {
    "url": "blog/tag/javascript/index.html",
    "revision": "10d74ad7620a231125f4d0acf6386123"
  },
  {
    "url": "blog/tag/nodejs/index.html",
    "revision": "37aebd93569bb486c5528ac4a3e26eea"
  },
  {
    "url": "blog/tag/个人/index.html",
    "revision": "f289b1bc45eae33b550b321dbb873a93"
  },
  {
    "url": "blog/tag/前端/index.html",
    "revision": "bec79e86147ebc0e4fb3f840a5cb05df"
  },
  {
    "url": "blog/tag/演讲/index.html",
    "revision": "390d0e6be83e8710daa1a82739620d16"
  },
  {
    "url": "blog/tag/笔记/index.html",
    "revision": "4c34508cfe4abe1f95d6532a49110a00"
  },
  {
    "url": "blog/tag/编曲/index.html",
    "revision": "3fb9686d7216991d848b5bc5a34636d3"
  },
  {
    "url": "blog/tag/设计模式/index.html",
    "revision": "755ffea9d2f32079bb928cc2c4b0fc63"
  },
  {
    "url": "blog/tag/音乐/index.html",
    "revision": "db65119e2a63d26b97f50a2fc3c75d4a"
  },
  {
    "url": "doc/index.html",
    "revision": "096bb5ec157807d22e2b37e08d6a8fdd"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "47a105ef575d8f636599f89b34d54100"
  },
  {
    "url": "guide/index.html",
    "revision": "fd1db84a219070280b581eb6c5b477b9"
  },
  {
    "url": "guide/team/index.html",
    "revision": "dcf06355822989931c0265fa7ea79730"
  },
  {
    "url": "index.html",
    "revision": "754154ab684a81e65c406b9f12e5b7b8"
  },
  {
    "url": "js/jquery-3.5.1.min.js",
    "revision": "dc5e7f18c8d36ac1d3d4753a87c98d0a"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "ad859a25fc218155932184f7b65e13d6"
  },
  {
    "url": "py-list/index.html",
    "revision": "37c6abd0759d14e55f87cb49f74656e3"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "f7977d4e2961f20aa1a35bf869933dd7"
  },
  {
    "url": "resume/index.html",
    "revision": "f5991d173e48fb0bde84bca92cc68fb9"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "2b9aceff83e8ff0a93ad6773b773a6eb"
  },
  {
    "url": "support/wechat-pay.png",
    "revision": "396d5c8409c3f5498833e33e716797b8"
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
