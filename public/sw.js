if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise(async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()})),r.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},r=(r,s)=>{Promise.all(r.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(r)};self.define=(r,i,o)=>{s[r]||(s[r]=Promise.resolve().then(()=>{let s={};const n={uri:location.origin+r.slice(1)};return Promise.all(i.map(r=>{switch(r){case"exports":return s;case"module":return n;default:return e(r)}})).then(e=>{const r=o(...e);return s.default||(s.default=r),s})}))}}define("./sw.js",["./workbox-e147cfff"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"favicon.ico",revision:"6f859571a8d57bbaf7909ba3e657c4b3"},{url:"index.html",revision:"a0381d60783bedc5a8af65a4e247c253"},{url:"logo192.png",revision:"eebc4783b4cbf6e9091686414f269a67"},{url:"logo512.png",revision:"2eb03a6f0bb4b6443d4c20588feb0e4f"},{url:"manifest.json",revision:"9890b358c4ebcf1db4413ee9079885d4"},{url:"robots.txt",revision:"fa1ded1ed7c11438a9b0385b1e112850"}],{})}));
//# sourceMappingURL=sw.js.map
