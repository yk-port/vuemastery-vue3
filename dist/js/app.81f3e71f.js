(function(e){function t(t){for(var c,o,u=t[0],i=t[1],s=t[2],l=0,v=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);b&&b(t);while(v.length)v.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],c=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(c=!1)}c&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var c={},r={app:0},a=[];function o(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=c,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)o.d(n,c,function(t){return e[t]}.bind(null,c));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var b=i;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var c=n("7a23"),r={id:"nav"},a=Object(c["f"])("Events"),o=Object(c["f"])(" | "),u=Object(c["f"])("About");function i(e,t){var n=Object(c["w"])("router-link"),i=Object(c["w"])("router-view");return Object(c["p"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",r,[Object(c["g"])(n,{to:{name:"event-list"}},{default:Object(c["B"])((function(){return[a]})),_:1}),o,Object(c["g"])(n,{to:{name:"about"}},{default:Object(c["B"])((function(){return[u]})),_:1})]),Object(c["g"])(i)],64)}n("a046");const s={};s.render=i;var b=s,l=n("6c02"),v=Object(c["C"])("data-v-40d3f7a6");Object(c["s"])("data-v-40d3f7a6");var d=Object(c["g"])("h1",null,"Events For Good",-1),p={class:"events"};Object(c["q"])();var f=v((function(e,t,n,r,a,o){var u=Object(c["w"])("EventCard");return Object(c["p"])(),Object(c["d"])(c["a"],null,[d,Object(c["g"])("div",p,[(Object(c["p"])(!0),Object(c["d"])(c["a"],null,Object(c["v"])(a.events,(function(e){return Object(c["p"])(),Object(c["d"])(u,{event:e,key:e.id},null,8,["event"])})),128))])],64)})),j=Object(c["C"])("data-v-4152f1cb");Object(c["s"])("data-v-4152f1cb");var O={class:"event-card"};Object(c["q"])();var h=j((function(e,t,n,r,a,o){var u=Object(c["w"])("router-link");return Object(c["p"])(),Object(c["d"])(u,{class:"event-link",to:{name:"event-details",params:{id:n.event.id}}},{default:j((function(){return[Object(c["g"])("div",O,[Object(c["g"])("span",null,"@"+Object(c["y"])(n.event.time)+" on "+Object(c["y"])(n.event.date),1),Object(c["g"])("h4",null,Object(c["y"])(n.event.title),1)])]})),_:1},8,["to"])})),y={name:"EventCard",props:{event:{type:Object,require:!0}}};n("f5de");y.render=h,y.__scopeId="data-v-4152f1cb";var g=y,m=n("bc3a"),w=n.n(m),_=w.a.create({baseURL:"https://my-json-server.typicode.com/yk-port/vuemastery-vue3",withCredentials:!1,headers:{Accept:"application/json","Content-Type":"app"}}),E={getEvents:function(){return _.get("/events")},getEvent:function(e){return _.get("/events/".concat(e))}},k={name:"EventList",components:{EventCard:g},data:function(){return{events:null}},created:function(){var e=this;E.getEvents().then((function(t){e.events=t.data})).catch((function(e){return console.log(e)}))}};n("b65c");k.render=f,k.__scopeId="data-v-40d3f7a6";var C=k,P=(n("a4d3"),n("e01a"),{key:0});function x(e,t,n,r,a,o){return a.event?(Object(c["p"])(),Object(c["d"])("div",P,[Object(c["g"])("h1",null,Object(c["y"])(a.event.title),1),Object(c["g"])("p",null,Object(c["y"])(a.event.time)+" on "+Object(c["y"])(a.event.date)+" @ "+Object(c["y"])(a.event.location),1),Object(c["g"])("p",null,Object(c["y"])(a.event.description),1)])):Object(c["e"])("",!0)}var S={name:"EventDetails",props:["id"],data:function(){return{event:null}},created:function(){var e=this;E.getEvent(this.id).then((function(t){e.event=t.data})).catch((function(e){return console.log(e)}))}};S.render=x;var M=S,T={class:"about"},q=Object(c["g"])("h1",null,"This is an about page",-1);function A(e,t){return Object(c["p"])(),Object(c["d"])("div",T,[q])}const B={};B.render=A;var I=B,J=[{path:"/",name:"event-list",component:C},{path:"/events/:id",name:"event-details",props:!0,component:M},{path:"/about",name:"about",component:I}],L=Object(l["a"])({history:Object(l["b"])("/"),routes:J}),D=L,F=n("5502"),G=Object(F["a"])({state:{},mutations:{},actions:{},modules:{}});Object(c["c"])(b).use(G).use(D).mount("#app")},"93c8":function(e,t,n){},"9d25":function(e,t,n){},a046:function(e,t,n){"use strict";n("93c8")},b65c:function(e,t,n){"use strict";n("9d25")},e1a3:function(e,t,n){},f5de:function(e,t,n){"use strict";n("e1a3")}});
//# sourceMappingURL=app.81f3e71f.js.map