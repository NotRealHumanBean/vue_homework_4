(function(){"use strict";var n={9700:function(n,t,e){var r=e(5130),o=e(6768);const i={class:"main-wrapper"},c={class:"second-wrapper"};function a(n,t,e,r,a,s){const u=(0,o.g2)("mobile-phones"),l=(0,o.g2)("last-items");return(0,o.uX)(),(0,o.CE)("div",i,[(0,o.Lk)("div",c,[t[0]||(t[0]=(0,o.Lk)("div",{class:"left"},[(0,o.Lk)("h1",null,"Списки порівнянь")],-1)),(0,o.bF)(u),t[1]||(t[1]=(0,o.Lk)("div",{class:"left"},[(0,o.Lk)("h2",null,"Останні переглянуті товари")],-1)),(0,o.bF)(l)])])}var s=e(4232);const u={class:"main-container"},l={class:"title-container"},p={class:"phone-container"};function d(n,t,e,r,i,c){const a=(0,o.g2)("phone-card");return(0,o.uX)(),(0,o.CE)("div",u,[(0,o.Lk)("div",l,[t[0]||(t[0]=(0,o.Lk)("h3",null,"Мобільні телефони",-1)),(0,o.Lk)("p",null,"Кількість товарів: "+(0,s.v_)(i.phonesArr.length),1)]),(0,o.Lk)("div",p,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.phonesArr,(n=>((0,o.uX)(),(0,o.Wv)(a,{key:n.id,phones:n},null,8,["phones"])))),128))])])}const f={class:"phone"},v=["src"];function k(n,t,e,r,i,c){return(0,o.uX)(),(0,o.CE)("div",f,[(0,o.Lk)("img",{src:e.phones.src,alt:"Smartphone"},null,8,v)])}var h={name:"PhoneCard",props:{phones:{type:Object,default:()=>({})}}},m=e(1241);const g=(0,m.A)(h,[["render",k],["__scopeId","data-v-1899ffac"]]);var b=g;const _=[{id:1,src:e(6717)},{id:2,src:e(7458)},{id:3,src:e(127)}],L=[{id:1,src:e(6288),title:"Телевізор Samsung OLED QE83S90DAEXUA",availability:!0,price:"189 999 ₴"},{id:2,src:e(639),title:'Ноутбук Apple MacBook Air 13" M1 8/256GB 2020 (MGN63) Space Gray',availability:!0,price:"36 999 ₴"},{id:3,src:e(8930),title:'Монітор 25" Samsung Odyssey G4 S25BG40 (LS25BG400EIXCI) IPS Full HD / 240Гц / 8-Bit / sRGB 99% / HDR10 / nVidia G-SYNC Compatible / AMD FreeSync Premium',availability:!1,price:"8 699 ₴"}];var y={name:"MobilePhones",components:{PhoneCard:b},data(){return{phonesArr:_}}};const C=(0,m.A)(y,[["render",d],["__scopeId","data-v-00b9f225"]]);var E=C;const O={class:"product-wrapper"};function j(n,t,e,r,i,c){const a=(0,o.g2)("product-item");return(0,o.uX)(),(0,o.CE)("div",O,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(i.products,(n=>((0,o.uX)(),(0,o.Wv)(a,{key:n.id,product:n},null,8,["product"])))),128))])}const A={class:"product"},I={class:"product__main"},X={class:"product__icon"},w={class:"product__image"},x=["src"],P={class:"product__title"},S={class:"product__available"},G={key:0,class:"green"},F={key:1},M={class:"product__price"};function B(n,t,e,r,i,c){return(0,o.uX)(),(0,o.CE)("div",A,[(0,o.Lk)("div",I,[(0,o.Lk)("div",X,[(0,o.Lk)("a",{class:(0,s.C4)(["icon-heart",c.likedHeart]),onClick:t[0]||(t[0]=(...n)=>c.like&&c.like(...n))},null,2)]),(0,o.Lk)("div",w,[(0,o.Lk)("img",{src:e.product.src,alt:"Image"},null,8,x)]),(0,o.Lk)("div",P,[(0,o.Lk)("h4",null,(0,s.v_)(e.product.title),1)])]),(0,o.Lk)("div",S,[e.product.availability?((0,o.uX)(),(0,o.CE)("p",G,"Є в наявності")):((0,o.uX)(),(0,o.CE)("p",F,"Немає в наявності"))]),(0,o.Lk)("div",M,[(0,o.Lk)("p",null,(0,s.v_)(e.product.price),1)]),t[1]||(t[1]=(0,o.Lk)("div",{class:"product__icon"},[(0,o.Lk)("a",{class:"icon-cart green"})],-1))])}var D={name:"ProductItem",props:{product:{type:Object,default:()=>({})}},data(){return{liked:!1}},methods:{like(){this.liked=!this.liked}},computed:{likedHeart(){let n;return this.liked&&(n="gold"),n}}};const H=(0,m.A)(D,[["render",B],["__scopeId","data-v-4ea90fef"]]);var K=H,N={name:"LastItems",components:{ProductItem:K},data(){return{products:L}}};const R=(0,m.A)(N,[["render",j],["__scopeId","data-v-d7663888"]]);var T=R,W={name:"App",components:{MobilePhones:E,LastItems:T}};const Q=(0,m.A)(W,[["render",a]]);var U=Q;(0,r.Ef)(U).mount("#app")},6717:function(n,t,e){n.exports=e.p+"../img/01.507fea74.jpg"},7458:function(n,t,e){n.exports=e.p+"../img/02.f470a31c.jpg"},127:function(n,t,e){n.exports=e.p+"../img/03.d4ff3900.jpg"},6288:function(n,t,e){n.exports=e.p+"../img/01.d7ac420f.jpg"},639:function(n,t,e){n.exports=e.p+"../img/02.19c1b7bb.jpg"},8930:function(n,t,e){n.exports=e.p+"../img/03.5024e100.jpg"}},t={};function e(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return n[r].call(i.exports,i,i.exports,e),i.exports}e.m=n,function(){var n=[];e.O=function(t,r,o,i){if(!r){var c=1/0;for(l=0;l<n.length;l++){r=n[l][0],o=n[l][1],i=n[l][2];for(var a=!0,s=0;s<r.length;s++)(!1&i||c>=i)&&Object.keys(e.O).every((function(n){return e.O[n](r[s])}))?r.splice(s--,1):(a=!1,i<c&&(c=i));if(a){n.splice(l--,1);var u=o();void 0!==u&&(t=u)}}return t}i=i||0;for(var l=n.length;l>0&&n[l-1][2]>i;l--)n[l]=n[l-1];n[l]=[r,o,i]}}(),function(){e.n=function(n){var t=n&&n.__esModule?function(){return n["default"]}:function(){return n};return e.d(t,{a:t}),t}}(),function(){e.d=function(n,t){for(var r in t)e.o(t,r)&&!e.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:t[r]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)}}(),function(){e.p="/"}(),function(){var n={524:0};e.O.j=function(t){return 0===n[t]};var t=function(t,r){var o,i,c=r[0],a=r[1],s=r[2],u=0;if(c.some((function(t){return 0!==n[t]}))){for(o in a)e.o(a,o)&&(e.m[o]=a[o]);if(s)var l=s(e)}for(t&&t(r);u<c.length;u++)i=c[u],e.o(n,i)&&n[i]&&n[i][0](),n[i]=0;return e.O(l)},r=self["webpackChunktask_2"]=self["webpackChunktask_2"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=e.O(void 0,[504],(function(){return e(9700)}));r=e.O(r)})();
//# sourceMappingURL=app.8c1cbc03.js.map
