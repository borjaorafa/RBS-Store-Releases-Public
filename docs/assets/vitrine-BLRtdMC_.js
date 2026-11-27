import{d as s,v as n}from"./index-D711nfec.js";/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d=s("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),i=["nine2five","evolut-kronus","midgard-browser","dolphin-pdf","worksuite","rastro"];function u(r){const t=i.flatMap(e=>r.filter(a=>a.id===e)),o=r.filter(e=>!t.some(a=>a.id===e.id)).sort((e,a)=>e.nome.localeCompare(a.nome,"pt-BR"));return[...t,...o].slice(0,4)}function m(r){return r.flatMap(t=>{const o=n(t);if(!o)return[];const e=Date.parse(o.criado_em);return Number.isFinite(e)&&e<=Date.now()?[{produto:t,versao:o,data:e}]:[]}).sort((t,o)=>o.data-t.data||t.produto.nome.localeCompare(o.produto.nome,"pt-BR"))}export{d as A,m as a,u as o};
