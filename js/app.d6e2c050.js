(function(t){function e(e){for(var n,s,c=e[0],o=e[1],l=e[2],p=0,f=[];p<c.length;p++)s=c[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&f.push(a[s][0]),a[s]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);u&&u(e);while(f.length)f.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],n=!0,c=1;c<r.length;c++){var o=r[c];0!==a[o]&&(n=!1)}n&&(i.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},a={app:0},i=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/car-vin-number/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"2aeb":function(t,e,r){},"475d":function(t,e,r){"use strict";r("d84f")},"4b1e":function(t,e,r){},"4b58":function(t,e,r){"use strict";r("4b1e")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("div",{staticClass:"ilustration"},[r("Ilustration")],1),r("div",[r("Frames"),r("Slider")],1),t._m(0)])},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"signature"},[r("p",[t._v("Made with ")]),r("p",{staticClass:"heart"},[t._v(" ❤ ")]),t._v(" "),r("p",[t._v(" by "),r("a",{attrs:{href:"https://brzeczkowskaw.netlify.app/#/"}},[t._v("Weronika")])])])}],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"ilustration"})},c=[],o={name:"Ilustration"},l=o,u=(r("efbf"),r("2877")),p=Object(u["a"])(l,s,c,!1,null,"234fc90d",null),f=p.exports,d=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"slider"},[r("CarPic",{attrs:{picSrc:t.picSrc1,picAlt:t.picAlt1}}),r("CarPic",{attrs:{picSrc:t.picSrc2,picAlt:t.picAlt2}}),r("CarPic",{attrs:{picSrc:t.picSrc3,picAlt:t.picAlt3}})],1)},m=[],h=r("1da1"),b=(r("96cf"),r("d3b7"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"picture-area"},[r("img",{staticClass:"picture",attrs:{src:t.picSrc,alt:t.picAlt}})])}),v=[],x={name:"CarPic",props:{picSrc:String,picAlt:String}},g=x,_=(r("a4ee"),Object(u["a"])(g,b,v,!1,null,"231bb012",null)),S=_.exports,C={name:"Slider",components:{CarPic:S},data:function(){return{picSrc1:"",picSrc2:"",picSrc3:"",picAlt1:"",picAlt2:"",picAlt3:""}},methods:{getRandomPic:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){var r,n,a,i,s,c,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.pexels.com/v1/search?query=car&orientation=square&per_page=1000",{method:"GET",headers:{Authorization:"563492ad6f9170000100000191b38a10a6cf40c4b9fedcc52d133caf"}});case 2:return r=e.sent,e.next=5,r.json();case 5:n=e.sent,a=JSON.stringify(n),i=JSON.parse(a),s=Math.floor(10*Math.random()+1),c=Math.floor(10*Math.random()+2),o=Math.floor(10*Math.random()+3),t.picSrc1=i.photos[s].src.original,t.picAlt1=i.photos[s].photographer,t.picSrc2=i.photos[c].src.original,t.picAlt2=i.photos[c].photographer,t.picSrc3=i.photos[o].src.original,t.picAlt3=i.photos[o].photographer;case 17:case"end":return e.stop()}}),e)})))()}},beforeMount:function(){this.getRandomPic()}},y=C,O=(r("475d"),Object(u["a"])(y,d,m,!1,null,"7ef8e6ce",null)),j=O.exports,w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"frames"},[r("div",{staticClass:"frame"},[r("form",{staticClass:"search-area",on:{submit:t.submitForm}},[r("Title",{staticClass:"title",attrs:{text:"Please enter your plate number"}}),r("input",{directives:[{name:"model",rawName:"v-model",value:t.plate,expression:"plate"}],staticClass:"input",attrs:{type:"text"},domProps:{value:t.plate},on:{input:function(e){e.target.composing||(t.plate=e.target.value)}}}),r("button",{staticClass:"btn",attrs:{type:"submit"},on:{click:t.getCar}},[t._v("Send")])],1)]),r("div",{staticClass:"frame"},[r("div",{staticClass:"result-area"},[r("NameText",{attrs:{text:"Trade name"}}),r("ResultText",{attrs:{text:t.trade}}),r("NameText",{attrs:{text:"Date of first admission"}}),r("ResultText",{attrs:{text:t.date}}),r("NameText",{attrs:{text:"Fuel description"}}),r("ResultText",{attrs:{text:t.fuel}})],1)])])},T=[],A=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"title"},[r("h1",{staticClass:"text"},[t._v(t._s(t.text))])])},N=[],P={name:"Title",props:{text:String}},M=P,k=(r("f7cb"),Object(u["a"])(M,A,N,!1,null,"ec148a1a",null)),E=k.exports,R=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"name"},[r("h1",{staticClass:"text"},[t._v(t._s(t.text))])])},$=[],F={name:"NameText",props:{text:String}},J=F,z=(r("69c9"),Object(u["a"])(J,R,$,!1,null,"549f738a",null)),I=z.exports,q=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"result"},[r("h1",{staticClass:"text"},[t._v(t._s(t.text))])])},D=[],G={name:"ResultText",props:{text:String}},W=G,B=(r("4b58"),Object(u["a"])(W,q,D,!1,null,"d44063b4",null)),H=B.exports,K={name:"Frames",components:{Title:E,NameText:I,ResultText:H},data:function(){return{plate:"",plateNumber:"",trade:"",date:"",fuel:""}},methods:{submitForm:function(t){t.preventDefault(),console.log(this.plate)},getCar:function(){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function e(){var r,n,a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.overheid.io/voertuiggegevens/"+t.plate,{method:"GET",headers:{"ovio-api-key":"b0514e3e1df0d5bc869bd54304a85525122a47ddddf1e381f43ab348035c23c1"}});case 2:return r=e.sent,e.next=5,r.json();case 5:n=e.sent,a=JSON.stringify(n),i=JSON.parse(a),t.plateNumber=i,t.trade=t.plateNumber.merk+" "+t.plateNumber.handelsbenaming,t.date=t.plateNumber.datum_eerste_toelating,t.fuel=t.plateNumber.brandstof[0].brandstof_omschrijving;case 12:case"end":return e.stop()}}),e)})))()}}},L=K,Q=(r("b5fe"),Object(u["a"])(L,w,T,!1,null,"56f3c51a",null)),U=Q.exports,V={name:"App",components:{Ilustration:f,Slider:j,Frames:U}},X=V,Y=(r("034f"),Object(u["a"])(X,a,i,!1,null,null,null)),Z=Y.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(Z)}}).$mount("#app")},"69c9":function(t,e,r){"use strict";r("a558")},"85ec":function(t,e,r){},a4ee:function(t,e,r){"use strict";r("e727")},a558:function(t,e,r){},b5fe:function(t,e,r){"use strict";r("e9bc")},d84f:function(t,e,r){},e727:function(t,e,r){},e9bc:function(t,e,r){},efbf:function(t,e,r){"use strict";r("f477")},f477:function(t,e,r){},f7cb:function(t,e,r){"use strict";r("2aeb")}});
//# sourceMappingURL=app.d6e2c050.js.map