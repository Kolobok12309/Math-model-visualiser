(function(t){var n={};function r(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=n,r.d=function(t,n,e){r.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,n){if(1&n&&(t=r(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(r.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)r.d(e,o,function(n){return t[n]}.bind(null,o));return e},r.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(n,"a",n),n},r.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},r.p="/",r(r.s="dd62")})({"0366":function(t,n,r){var e=r("1c0b");t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 0:return function(){return t.call(n)};case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},"06cf":function(t,n,r){var e=r("83ab"),o=r("d1e7"),i=r("5c6c"),c=r("fc6a"),u=r("c04e"),a=r("5135"),f=r("0cfb"),s=Object.getOwnPropertyDescriptor;n.f=e?s:function(t,n){if(t=c(t),n=u(n,!0),f)try{return s(t,n)}catch(r){}if(a(t,n))return i(!o.f.call(t,n),t[n])}},"0cfb":function(t,n,r){var e=r("83ab"),o=r("d039"),i=r("cc12");t.exports=!e&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"159b":function(t,n,r){var e=r("da84"),o=r("fdbc"),i=r("17c2"),c=r("9112");for(var u in o){var a=e[u],f=a&&a.prototype;if(f&&f.forEach!==i)try{c(f,"forEach",i)}catch(s){f.forEach=i}}},"17c2":function(t,n,r){"use strict";var e=r("b727").forEach,o=r("a640"),i=r("ae40"),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return e(this,t,arguments.length>1?arguments[1]:void 0)}},"1c0b":function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1d80":function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1dde":function(t,n,r){var e=r("d039"),o=r("b622"),i=r("2d00"),c=o("species");t.exports=function(t){return i>=51||!e((function(){var n=[],r=n.constructor={};return r[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"23cb":function(t,n,r){var e=r("a691"),o=Math.max,i=Math.min;t.exports=function(t,n){var r=e(t);return r<0?o(r+n,0):i(r,n)}},"23e7":function(t,n,r){var e=r("da84"),o=r("06cf").f,i=r("9112"),c=r("6eeb"),u=r("ce4e"),a=r("e893"),f=r("94ca");t.exports=function(t,n){var r,s,l,d,p,v,b=t.target,h=t.global,y=t.stat;if(s=h?e:y?e[b]||u(b,{}):(e[b]||{}).prototype,s)for(l in n){if(p=n[l],t.noTargetGet?(v=o(s,l),d=v&&v.value):d=s[l],r=f(h?l:b+(y?".":"#")+l,t.forced),!r&&void 0!==d){if(typeof p===typeof d)continue;a(p,d)}(t.sham||d&&d.sham)&&i(p,"sham",!0),c(s,l,p,t)}}},"241c":function(t,n,r){var e=r("ca84"),o=r("7839"),i=o.concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return e(t,i)}},"2d00":function(t,n,r){var e,o,i=r("da84"),c=r("342f"),u=i.process,a=u&&u.versions,f=a&&a.v8;f?(e=f.split("."),o=e[0]+e[1]):c&&(e=c.match(/Edge\/(\d+)/),(!e||e[1]>=74)&&(e=c.match(/Chrome\/(\d+)/),e&&(o=e[1]))),t.exports=o&&+o},"342f":function(t,n,r){var e=r("d066");t.exports=e("navigator","userAgent")||""},4160:function(t,n,r){"use strict";var e=r("23e7"),o=r("17c2");e({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"428f":function(t,n,r){var e=r("da84");t.exports=e},"44ad":function(t,n,r){var e=r("d039"),o=r("c6b6"),i="".split;t.exports=e((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},4930:function(t,n,r){var e=r("d039");t.exports=!!Object.getOwnPropertySymbols&&!e((function(){return!String(Symbol())}))},"4d64":function(t,n,r){var e=r("fc6a"),o=r("50c4"),i=r("23cb"),c=function(t){return function(n,r,c){var u,a=e(n),f=o(a.length),s=i(c,f);if(t&&r!=r){while(f>s)if(u=a[s++],u!=u)return!0}else for(;f>s;s++)if((t||s in a)&&a[s]===r)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},"50c4":function(t,n,r){var e=r("a691"),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},5135:function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},5692:function(t,n,r){var e=r("c430"),o=r("c6cd");(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:e?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,n,r){var e=r("d066"),o=r("241c"),i=r("7418"),c=r("825a");t.exports=e("Reflect","ownKeys")||function(t){var n=o.f(c(t)),r=i.f;return r?n.concat(r(t)):n}},"5c6c":function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},"65f0":function(t,n,r){var e=r("861d"),o=r("e8b5"),i=r("b622"),c=i("species");t.exports=function(t,n){var r;return o(t)&&(r=t.constructor,"function"!=typeof r||r!==Array&&!o(r.prototype)?e(r)&&(r=r[c],null===r&&(r=void 0)):r=void 0),new(void 0===r?Array:r)(0===n?0:n)}},"69f3":function(t,n,r){var e,o,i,c=r("7f9a"),u=r("da84"),a=r("861d"),f=r("9112"),s=r("5135"),l=r("f772"),d=r("d012"),p=u.WeakMap,v=function(t){return i(t)?o(t):e(t,{})},b=function(t){return function(n){var r;if(!a(n)||(r=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return r}};if(c){var h=new p,y=h.get,x=h.has,m=h.set;e=function(t,n){return m.call(h,t,n),n},o=function(t){return y.call(h,t)||{}},i=function(t){return x.call(h,t)}}else{var g=l("state");d[g]=!0,e=function(t,n){return f(t,g,n),n},o=function(t){return s(t,g)?t[g]:{}},i=function(t){return s(t,g)}}t.exports={set:e,get:o,has:i,enforce:v,getterFor:b}},"6eeb":function(t,n,r){var e=r("da84"),o=r("9112"),i=r("5135"),c=r("ce4e"),u=r("8925"),a=r("69f3"),f=a.get,s=a.enforce,l=String(String).split("String");(t.exports=function(t,n,r,u){var a=!!u&&!!u.unsafe,f=!!u&&!!u.enumerable,d=!!u&&!!u.noTargetGet;"function"==typeof r&&("string"!=typeof n||i(r,"name")||o(r,"name",n),s(r).source=l.join("string"==typeof n?n:"")),t!==e?(a?!d&&t[n]&&(f=!0):delete t[n],f?t[n]=r:o(t,n,r)):f?t[n]=r:c(n,r)})(Function.prototype,"toString",(function(){return"function"==typeof this&&f(this).source||u(this)}))},7418:function(t,n){n.f=Object.getOwnPropertySymbols},7839:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,n,r){var e=r("1d80");t.exports=function(t){return Object(e(t))}},"7f9a":function(t,n,r){var e=r("da84"),o=r("8925"),i=e.WeakMap;t.exports="function"===typeof i&&/native code/.test(o(i))},"825a":function(t,n,r){var e=r("861d");t.exports=function(t){if(!e(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,n,r){var e=r("d039");t.exports=!e((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,n,r){"use strict";var e=r("c04e"),o=r("9bf2"),i=r("5c6c");t.exports=function(t,n,r){var c=e(n);c in t?o.f(t,c,i(0,r)):t[c]=r}},"861d":function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8925:function(t,n,r){var e=r("c6cd"),o=Function.toString;"function"!=typeof e.inspectSource&&(e.inspectSource=function(t){return o.call(t)}),t.exports=e.inspectSource},"90e3":function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++r+e).toString(36)}},9112:function(t,n,r){var e=r("83ab"),o=r("9bf2"),i=r("5c6c");t.exports=e?function(t,n,r){return o.f(t,n,i(1,r))}:function(t,n,r){return t[n]=r,t}},"94ca":function(t,n,r){var e=r("d039"),o=/#|\.prototype\./,i=function(t,n){var r=u[c(t)];return r==f||r!=a&&("function"==typeof n?e(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},a=i.NATIVE="N",f=i.POLYFILL="P";t.exports=i},"99af":function(t,n,r){"use strict";var e=r("23e7"),o=r("d039"),i=r("e8b5"),c=r("861d"),u=r("7b0b"),a=r("50c4"),f=r("8418"),s=r("65f0"),l=r("1dde"),d=r("b622"),p=r("2d00"),v=d("isConcatSpreadable"),b=9007199254740991,h="Maximum allowed index exceeded",y=p>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),x=l("concat"),m=function(t){if(!c(t))return!1;var n=t[v];return void 0!==n?!!n:i(t)},g=!y||!x;e({target:"Array",proto:!0,forced:g},{concat:function(t){var n,r,e,o,i,c=u(this),l=s(c,0),d=0;for(n=-1,e=arguments.length;n<e;n++)if(i=-1===n?c:arguments[n],m(i)){if(o=a(i.length),d+o>b)throw TypeError(h);for(r=0;r<o;r++,d++)r in i&&f(l,d,i[r])}else{if(d>=b)throw TypeError(h);f(l,d++,i)}return l.length=d,l}})},"9bf2":function(t,n,r){var e=r("83ab"),o=r("0cfb"),i=r("825a"),c=r("c04e"),u=Object.defineProperty;n.f=e?u:function(t,n,r){if(i(t),n=c(n,!0),i(r),o)try{return u(t,n,r)}catch(e){}if("get"in r||"set"in r)throw TypeError("Accessors not supported");return"value"in r&&(t[n]=r.value),t}},a640:function(t,n,r){"use strict";var e=r("d039");t.exports=function(t,n){var r=[][t];return!!r&&e((function(){r.call(null,n||function(){throw 1},1)}))}},a691:function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},ae40:function(t,n,r){var e=r("83ab"),o=r("d039"),i=r("5135"),c=Object.defineProperty,u={},a=function(t){throw t};t.exports=function(t,n){if(i(u,t))return u[t];n||(n={});var r=[][t],f=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:a,l=i(n,1)?n[1]:void 0;return u[t]=!!r&&!o((function(){if(f&&!e)return!0;var t={length:-1};f?c(t,1,{enumerable:!0,get:a}):t[1]=1,r.call(t,s,l)}))}},b0c0:function(t,n,r){var e=r("83ab"),o=r("9bf2").f,i=Function.prototype,c=i.toString,u=/^\s*function ([^ (]*)/,a="name";e&&!(a in i)&&o(i,a,{configurable:!0,get:function(){try{return c.call(this).match(u)[1]}catch(t){return""}}})},b622:function(t,n,r){var e=r("da84"),o=r("5692"),i=r("5135"),c=r("90e3"),u=r("4930"),a=r("fdbf"),f=o("wks"),s=e.Symbol,l=a?s:s&&s.withoutSetter||c;t.exports=function(t){return i(f,t)||(u&&i(s,t)?f[t]=s[t]:f[t]=l("Symbol."+t)),f[t]}},b64b:function(t,n,r){var e=r("23e7"),o=r("7b0b"),i=r("df75"),c=r("d039"),u=c((function(){i(1)}));e({target:"Object",stat:!0,forced:u},{keys:function(t){return i(o(t))}})},b727:function(t,n,r){var e=r("0366"),o=r("44ad"),i=r("7b0b"),c=r("50c4"),u=r("65f0"),a=[].push,f=function(t){var n=1==t,r=2==t,f=3==t,s=4==t,l=6==t,d=5==t||l;return function(p,v,b,h){for(var y,x,m=i(p),g=o(m),S=e(v,b,3),w=c(g.length),O=0,j=h||u,E=n?j(p,w):r?j(p,0):void 0;w>O;O++)if((d||O in g)&&(y=g[O],x=S(y,O,m),t))if(n)E[O]=x;else if(x)switch(t){case 3:return!0;case 5:return y;case 6:return O;case 2:a.call(E,y)}else if(s)return!1;return l?-1:f||s?s:E}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6)}},c04e:function(t,n,r){var e=r("861d");t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(t,n){t.exports=!1},c6b6:function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},c6cd:function(t,n,r){var e=r("da84"),o=r("ce4e"),i="__core-js_shared__",c=e[i]||o(i,{});t.exports=c},c8ba:function(t,n){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"===typeof window&&(r=window)}t.exports=r},ca84:function(t,n,r){var e=r("5135"),o=r("fc6a"),i=r("4d64").indexOf,c=r("d012");t.exports=function(t,n){var r,u=o(t),a=0,f=[];for(r in u)!e(c,r)&&e(u,r)&&f.push(r);while(n.length>a)e(u,r=n[a++])&&(~i(f,r)||f.push(r));return f}},cc12:function(t,n,r){var e=r("da84"),o=r("861d"),i=e.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},ce4e:function(t,n,r){var e=r("da84"),o=r("9112");t.exports=function(t,n){try{o(e,t,n)}catch(r){e[t]=n}return n}},d012:function(t,n){t.exports={}},d039:function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},d066:function(t,n,r){var e=r("428f"),o=r("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(e[t])||i(o[t]):e[t]&&e[t][n]||o[t]&&o[t][n]}},d1e7:function(t,n,r){"use strict";var e={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!e.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:e},da84:function(t,n,r){(function(n){var r=function(t){return t&&t.Math==Math&&t};t.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n&&n)||Function("return this")()}).call(this,r("c8ba"))},dd62:function(t,n,r){"use strict";r.r(n);r("99af"),r("4160"),r("b0c0"),r("b64b"),r("159b");function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function o(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function i(t,n,r){return n&&o(t.prototype,n),r&&o(t,r),t}function c(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}var u=0,a=function(){function t(n,r,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;e(this,t),c(this,"variables",void 0),c(this,"func",void 0),c(this,"name",void 0),c(this,"view",void 0),c(this,"id",void 0),this.name=n,this.func=r,this.variables=o,this.view=i,this.id=u++}return i(t,[{key:"calc",value:function(t){var n=this.constructor.name;return Object.keys(this.variables).forEach((function(r){if("undefined"===typeof t[r])throw new Error("[MathFunction] Required prop ".concat(r," for ").concat(n," is undefined"))})),this.func(t)}}]),t}(),f=new a("Линейная функция",(function(t){var n=t.x,r=void 0===n?1:n,e=t.c,o=void 0===e?0:e;return r+o}),{x:{name:"X",defaultVar:!0,defaults:{min:0,max:15,value:5},delta:.5},c:{name:"C",defaults:{min:0,max:15,value:0},delta:.5}},"x + c = y"),s=new a("Парабола",(function(t){var n=t.x,r=void 0===n?1:n,e=t.c,o=void 0===e?0:e,i=t.a,c=void 0===i?1:i;return c*(r*r)+o}),{x:{name:"X",defaultVar:!0,defaults:{min:-15,max:15,value:5},delta:1},c:{name:"C",defaults:{min:-5,max:15,value:0},delta:1},a:{name:"A",defaults:{min:1,max:10,value:1},delta:1}},"a * (x^2) + c = y"),l=[f,s];self.addEventListener("message",({data:{id:t,config:n,variables:r}})=>{const e=l.find(({id:n})=>t===n);if(!e)throw new Error("Cannot find function with id "+t);const{min:o,max:i,delta:c,variable:u}=n,a=[];let f=o;do{const t=e.calc({...r,[u]:f});a.push({x:f,y:t}),f+=c}while(f<=i);self.postMessage(a)})},df75:function(t,n,r){var e=r("ca84"),o=r("7839");t.exports=Object.keys||function(t){return e(t,o)}},e893:function(t,n,r){var e=r("5135"),o=r("56ef"),i=r("06cf"),c=r("9bf2");t.exports=function(t,n){for(var r=o(n),u=c.f,a=i.f,f=0;f<r.length;f++){var s=r[f];e(t,s)||u(t,s,a(n,s))}}},e8b5:function(t,n,r){var e=r("c6b6");t.exports=Array.isArray||function(t){return"Array"==e(t)}},f772:function(t,n,r){var e=r("5692"),o=r("90e3"),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},fc6a:function(t,n,r){var e=r("44ad"),o=r("1d80");t.exports=function(t){return e(o(t))}},fdbc:function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,n,r){var e=r("4930");t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}});
//# sourceMappingURL=c3794f457f2a82af68c4.worker.js.map