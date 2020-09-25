if (!self.define) {
  const e = (e) => {
      "require" !== e && (e += ".js");
      let s = Promise.resolve();
      return (
        r[e] ||
          (s = new Promise(async (s) => {
            if ("document" in self) {
              const r = document.createElement("script");
              (r.src = e), document.head.appendChild(r), (r.onload = s);
            } else importScripts(e), s();
          })),
        s.then(() => {
          if (!r[e]) throw new Error(`Module ${e} didn’t register its module`);
          return r[e];
        })
      );
    },
    s = (s, r) => {
      Promise.all(s.map(e)).then((e) => r(1 === e.length ? e[0] : e));
    },
    r = { require: Promise.resolve(s) };
  self.define = (s, o, i) => {
    r[s] ||
      (r[s] = Promise.resolve().then(() => {
        let r = {};
        const n = { uri: location.origin + s.slice(1) };
        return Promise.all(
          o.map((s) => {
            switch (s) {
              case "exports":
                return r;
              case "module":
                return n;
              default:
                return e(s);
            }
          })
        ).then((e) => {
          const s = i(...e);
          return r.default || (r.default = s), r;
        });
      }));
  };
}
define("./sw.js", ["./workbox-e147cfff"], function (e) {
  "use strict";
  self.addEventListener("message", (e) => {
    e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting();
  }),
    e.precacheAndRoute(
      [
        { url: "App.css", revision: "7678c58dc99f29fd634bac3d55f08275" },
        { url: "App.js", revision: "48dff7eb0bce1e3bea82759acc96ba5f" },
        {
          url: "components/comments/Comments.js",
          revision: "9acf05a8bfc97e3ad04aa254a3884a0a",
        },
        {
          url: "components/comments/postComments.js",
          revision: "703b8dce967a763376c6e49016b5adb4",
        },
        {
          url: "components/likes/Likes.js",
          revision: "81755517091333be0534a2b164a2c4b3",
        },
        {
          url: "components/likes/postLikes.js",
          revision: "10f349cfe66a66a41da7aa8b6cd010c4",
        },
        {
          url: "components/ResourceList.js",
          revision: "c7183f375a7128927e2153da61a30b19",
        },
        {
          url: "components/useResources.js",
          revision: "bd0eef81f33f02dfef8f19c6f4021e95",
        },
        { url: "index.css", revision: "58bef534736bfa56e02f98ac4d12bd89" },
        { url: "index.js", revision: "066f8f1997035d8558ef53865f0d3a5d" },
        {
          url: "serviceWorker.js",
          revision: "ab474a31e739c512cbe6e5c9137df0fe",
        },
      ],
      {}
    );
});
//# sourceMappingURL=sw.js.map
