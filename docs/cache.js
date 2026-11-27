/* Cache exclusivamente de ativos estáticos do próprio portal. */
const prefixo='rbs-store-estaticos-',cacheNome=prefixo+'1.4.1';
const escopo=new URL(self.registration.scope);
self.addEventListener('install',e=>e.waitUntil(self.skipWaiting()));
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const chave of await caches.keys())if(chave.startsWith(prefixo)&&chave!==cacheNome)await caches.delete(chave);await self.clients.claim();})()));
function elegivel(r){if(r.method!=='GET'||r.mode==='navigate'||r.headers.has('range'))return false;const u=new URL(r.url);if(u.origin!==escopo.origin||!u.pathname.startsWith(escopo.pathname)||u.search)return false;const p=u.pathname.slice(escopo.pathname.length);return /^assets\/[^/]+-[a-zA-Z0-9_-]{6,}\.(js|css|woff2|webp|png|svg)$/.test(p);}
self.addEventListener('fetch',e=>{if(!elegivel(e.request))return;e.respondWith((async()=>{let c;try{c=await caches.open(cacheNome);const salvo=await c.match(e.request);if(salvo)return salvo;}catch{}const r=await fetch(e.request);if(c&&r.ok&&r.type==='basic'){try{await c.put(e.request,r.clone());const chaves=await c.keys();for(const k of chaves.slice(0,Math.max(0,chaves.length-100)))await c.delete(k);}catch{}}return r;})());});
