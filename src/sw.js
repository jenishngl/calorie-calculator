if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let s={};const d=e=>n(e,r),f={module:{uri:r},exports:s,require:d};i[r]=Promise.all(c.map((e=>f[e]||d(e)))).then((e=>(o(...e),s)))}}define(["./workbox-460519b3"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"icons/icon-128x128.png",revision:"713f50213e93b07a5312d8d5ff359add"},{url:"icons/icon-144x144.png",revision:"d7e7ff9d3e22d12bc5f817be8801e214"},{url:"icons/icon-152x152.png",revision:"446c5b4a4f7ed1297be6c3962cf3aad6"},{url:"icons/icon-192x192.png",revision:"a5662656f289a8e0dcb3b5fa1cb9dfe7"},{url:"icons/icon-384x384.png",revision:"72f0c5a169264a1b39956302a3c59fec"},{url:"icons/icon-48x48.png",revision:"77481c3132b2de72ab5d2b09e96d2412"},{url:"icons/icon-512x512.png",revision:"b391a25e6793bb0e17e4286110cd2ec1"},{url:"icons/icon-72x72.png",revision:"a2ca4188689ee06345af436200828999"},{url:"icons/icon-96x96.png",revision:"74b874be2a15c04a81acd2a498f2f3ea"},{url:"images/calories.png",revision:"991671dcc0073cf9e981a465b8d7e333"},{url:"images/carbs.png",revision:"6bc9cccd617fb893330cd4951d1e6e6e"},{url:"images/fat.png",revision:"52f0b37d71453473fbd77b11662d7e86"},{url:"images/protein.png",revision:"90c15da0555b90ddc5d85a5bc4f78d33"},{url:"index.html",revision:"7b8630d93c2aeaff492c52622b18c34e"},{url:"manifest.webmanifest",revision:"b4e214208bdc090f0b610f5228e1d03a"},{url:"script.js",revision:"81b15950fa0f300c035bd9d9c5d3fd61"},{url:"style.css",revision:"e1b89f66b2c8a6752dc8e95c90afbae5"}],{})}));
//# sourceMappingURL=sw.js.map
