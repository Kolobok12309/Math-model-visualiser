(function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="",e(e.s="ae4e")})({"0366":function(t,n,e){var r=e("1c0b");t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 0:return function(){return t.call(n)};case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},"057f":function(t,n,e){var r=e("fc6a"),o=e("241c").f,i={}.toString,c="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],u=function(t){try{return o(t)}catch(n){return c.slice()}};t.exports.f=function(t){return c&&"[object Window]"==i.call(t)?u(t):o(r(t))}},"06cf":function(t,n,e){var r=e("83ab"),o=e("d1e7"),i=e("5c6c"),c=e("fc6a"),u=e("c04e"),f=e("5135"),a=e("0cfb"),s=Object.getOwnPropertyDescriptor;n.f=r?s:function(t,n){if(t=c(t),n=u(n,!0),a)try{return s(t,n)}catch(e){}if(f(t,n))return i(!o.f.call(t,n),t[n])}},"0cfb":function(t,n,e){var r=e("83ab"),o=e("d039"),i=e("cc12");t.exports=!r&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},"159b":function(t,n,e){var r=e("da84"),o=e("fdbc"),i=e("17c2"),c=e("9112");for(var u in o){var f=r[u],a=f&&f.prototype;if(a&&a.forEach!==i)try{c(a,"forEach",i)}catch(s){a.forEach=i}}},"17c2":function(t,n,e){"use strict";var r=e("b727").forEach,o=e("a640"),i=e("ae40"),c=o("forEach"),u=i("forEach");t.exports=c&&u?[].forEach:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}},"1be4":function(t,n,e){var r=e("d066");t.exports=r("document","documentElement")},"1c0b":function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(String(t)+" is not a function");return t}},"1d80":function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on "+t);return t}},"1dde":function(t,n,e){var r=e("d039"),o=e("b622"),i=e("2d00"),c=o("species");t.exports=function(t){return i>=51||!r((function(){var n=[],e=n.constructor={};return e[c]=function(){return{foo:1}},1!==n[t](Boolean).foo}))}},"23cb":function(t,n,e){var r=e("a691"),o=Math.max,i=Math.min;t.exports=function(t,n){var e=r(t);return e<0?o(e+n,0):i(e,n)}},"23e7":function(t,n,e){var r=e("da84"),o=e("06cf").f,i=e("9112"),c=e("6eeb"),u=e("ce4e"),f=e("e893"),a=e("94ca");t.exports=function(t,n){var e,s,l,d,p,v,b=t.target,y=t.global,h=t.stat;if(s=y?r:h?r[b]||u(b,{}):(r[b]||{}).prototype,s)for(l in n){if(p=n[l],t.noTargetGet?(v=o(s,l),d=v&&v.value):d=s[l],e=a(y?l:b+(h?".":"#")+l,t.forced),!e&&void 0!==d){if(typeof p===typeof d)continue;f(p,d)}(t.sham||d&&d.sham)&&i(p,"sham",!0),c(s,l,p,t)}}},"241c":function(t,n,e){var r=e("ca84"),o=e("7839"),i=o.concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},"2d00":function(t,n,e){var r,o,i=e("da84"),c=e("342f"),u=i.process,f=u&&u.versions,a=f&&f.v8;a?(r=a.split("."),o=r[0]+r[1]):c&&(r=c.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=c.match(/Chrome\/(\d+)/),r&&(o=r[1]))),t.exports=o&&+o},"342f":function(t,n,e){var r=e("d066");t.exports=r("navigator","userAgent")||""},"37e8":function(t,n,e){var r=e("83ab"),o=e("9bf2"),i=e("825a"),c=e("df75");t.exports=r?Object.defineProperties:function(t,n){i(t);var e,r=c(n),u=r.length,f=0;while(u>f)o.f(t,e=r[f++],n[e]);return t}},4160:function(t,n,e){"use strict";var r=e("23e7"),o=e("17c2");r({target:"Array",proto:!0,forced:[].forEach!=o},{forEach:o})},"428f":function(t,n,e){var r=e("da84");t.exports=r},"44ad":function(t,n,e){var r=e("d039"),o=e("c6b6"),i="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==o(t)?i.call(t,""):Object(t)}:Object},"44d2":function(t,n,e){var r=e("b622"),o=e("7c73"),i=e("9bf2"),c=r("unscopables"),u=Array.prototype;void 0==u[c]&&i.f(u,c,{configurable:!0,value:o(null)}),t.exports=function(t){u[c][t]=!0}},4930:function(t,n,e){var r=e("d039");t.exports=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())}))},"4d64":function(t,n,e){var r=e("fc6a"),o=e("50c4"),i=e("23cb"),c=function(t){return function(n,e,c){var u,f=r(n),a=o(f.length),s=i(c,a);if(t&&e!=e){while(a>s)if(u=f[s++],u!=u)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===e)return t||s||0;return!t&&-1}};t.exports={includes:c(!0),indexOf:c(!1)}},"4de4":function(t,n,e){"use strict";var r=e("23e7"),o=e("b727").filter,i=e("1dde"),c=e("ae40"),u=i("filter"),f=c("filter");r({target:"Array",proto:!0,forced:!u||!f},{filter:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}})},"50c4":function(t,n,e){var r=e("a691"),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},5135:function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},5692:function(t,n,e){var r=e("c430"),o=e("c6cd");(t.exports=function(t,n){return o[t]||(o[t]=void 0!==n?n:{})})("versions",[]).push({version:"3.6.5",mode:r?"pure":"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})},"56ef":function(t,n,e){var r=e("d066"),o=e("241c"),i=e("7418"),c=e("825a");t.exports=r("Reflect","ownKeys")||function(t){var n=o.f(c(t)),e=i.f;return e?n.concat(e(t)):n}},"5c6c":function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},"65f0":function(t,n,e){var r=e("861d"),o=e("e8b5"),i=e("b622"),c=i("species");t.exports=function(t,n){var e;return o(t)&&(e=t.constructor,"function"!=typeof e||e!==Array&&!o(e.prototype)?r(e)&&(e=e[c],null===e&&(e=void 0)):e=void 0),new(void 0===e?Array:e)(0===n?0:n)}},"69f3":function(t,n,e){var r,o,i,c=e("7f9a"),u=e("da84"),f=e("861d"),a=e("9112"),s=e("5135"),l=e("f772"),d=e("d012"),p=u.WeakMap,v=function(t){return i(t)?o(t):r(t,{})},b=function(t){return function(n){var e;if(!f(n)||(e=o(n)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return e}};if(c){var y=new p,h=y.get,g=y.has,m=y.set;r=function(t,n){return m.call(y,t,n),n},o=function(t){return h.call(y,t)||{}},i=function(t){return g.call(y,t)}}else{var x=l("state");d[x]=!0,r=function(t,n){return a(t,x,n),n},o=function(t){return s(t,x)?t[x]:{}},i=function(t){return s(t,x)}}t.exports={set:r,get:o,has:i,enforce:v,getterFor:b}},"6eeb":function(t,n,e){var r=e("da84"),o=e("9112"),i=e("5135"),c=e("ce4e"),u=e("8925"),f=e("69f3"),a=f.get,s=f.enforce,l=String(String).split("String");(t.exports=function(t,n,e,u){var f=!!u&&!!u.unsafe,a=!!u&&!!u.enumerable,d=!!u&&!!u.noTargetGet;"function"==typeof e&&("string"!=typeof n||i(e,"name")||o(e,"name",n),s(e).source=l.join("string"==typeof n?n:"")),t!==r?(f?!d&&t[n]&&(a=!0):delete t[n],a?t[n]=e:o(t,n,e)):a?t[n]=e:c(n,e)})(Function.prototype,"toString",(function(){return"function"==typeof this&&a(this).source||u(this)}))},7418:function(t,n){n.f=Object.getOwnPropertySymbols},"746f":function(t,n,e){var r=e("428f"),o=e("5135"),i=e("e538"),c=e("9bf2").f;t.exports=function(t){var n=r.Symbol||(r.Symbol={});o(n,t)||c(n,t,{value:i.f(t)})}},7839:function(t,n){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"7b0b":function(t,n,e){var r=e("1d80");t.exports=function(t){return Object(r(t))}},"7c73":function(t,n,e){var r,o=e("825a"),i=e("37e8"),c=e("7839"),u=e("d012"),f=e("1be4"),a=e("cc12"),s=e("f772"),l=">",d="<",p="prototype",v="script",b=s("IE_PROTO"),y=function(){},h=function(t){return d+v+l+t+d+"/"+v+l},g=function(t){t.write(h("")),t.close();var n=t.parentWindow.Object;return t=null,n},m=function(){var t,n=a("iframe"),e="java"+v+":";return n.style.display="none",f.appendChild(n),n.src=String(e),t=n.contentWindow.document,t.open(),t.write(h("document.F=Object")),t.close(),t.F},x=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(n){}x=r?g(r):m();var t=c.length;while(t--)delete x[p][c[t]];return x()};u[b]=!0,t.exports=Object.create||function(t,n){var e;return null!==t?(y[p]=o(t),e=new y,y[p]=null,e[b]=t):e=x(),void 0===n?e:i(e,n)}},"7db0":function(t,n,e){"use strict";var r=e("23e7"),o=e("b727").find,i=e("44d2"),c=e("ae40"),u="find",f=!0,a=c(u);u in[]&&Array(1)[u]((function(){f=!1})),r({target:"Array",proto:!0,forced:f||!a},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i(u)},"7f9a":function(t,n,e){var r=e("da84"),o=e("8925"),i=r.WeakMap;t.exports="function"===typeof i&&/native code/.test(o(i))},"825a":function(t,n,e){var r=e("861d");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"83ab":function(t,n,e){var r=e("d039");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},8418:function(t,n,e){"use strict";var r=e("c04e"),o=e("9bf2"),i=e("5c6c");t.exports=function(t,n,e){var c=r(n);c in t?o.f(t,c,i(0,e)):t[c]=e}},"861d":function(t,n){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}},8925:function(t,n,e){var r=e("c6cd"),o=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return o.call(t)}),t.exports=r.inspectSource},"90e3":function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++e+r).toString(36)}},9112:function(t,n,e){var r=e("83ab"),o=e("9bf2"),i=e("5c6c");t.exports=r?function(t,n,e){return o.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},"94ca":function(t,n,e){var r=e("d039"),o=/#|\.prototype\./,i=function(t,n){var e=u[c(t)];return e==a||e!=f&&("function"==typeof n?r(n):!!n)},c=i.normalize=function(t){return String(t).replace(o,".").toLowerCase()},u=i.data={},f=i.NATIVE="N",a=i.POLYFILL="P";t.exports=i},"99af":function(t,n,e){"use strict";var r=e("23e7"),o=e("d039"),i=e("e8b5"),c=e("861d"),u=e("7b0b"),f=e("50c4"),a=e("8418"),s=e("65f0"),l=e("1dde"),d=e("b622"),p=e("2d00"),v=d("isConcatSpreadable"),b=9007199254740991,y="Maximum allowed index exceeded",h=p>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),g=l("concat"),m=function(t){if(!c(t))return!1;var n=t[v];return void 0!==n?!!n:i(t)},x=!h||!g;r({target:"Array",proto:!0,forced:x},{concat:function(t){var n,e,r,o,i,c=u(this),l=s(c,0),d=0;for(n=-1,r=arguments.length;n<r;n++)if(i=-1===n?c:arguments[n],m(i)){if(o=f(i.length),d+o>b)throw TypeError(y);for(e=0;e<o;e++,d++)e in i&&a(l,d,i[e])}else{if(d>=b)throw TypeError(y);a(l,d++,i)}return l.length=d,l}})},"9bf2":function(t,n,e){var r=e("83ab"),o=e("0cfb"),i=e("825a"),c=e("c04e"),u=Object.defineProperty;n.f=r?u:function(t,n,e){if(i(t),n=c(n,!0),i(e),o)try{return u(t,n,e)}catch(r){}if("get"in e||"set"in e)throw TypeError("Accessors not supported");return"value"in e&&(t[n]=e.value),t}},a4d3:function(t,n,e){"use strict";var r=e("23e7"),o=e("da84"),i=e("d066"),c=e("c430"),u=e("83ab"),f=e("4930"),a=e("fdbf"),s=e("d039"),l=e("5135"),d=e("e8b5"),p=e("861d"),v=e("825a"),b=e("7b0b"),y=e("fc6a"),h=e("c04e"),g=e("5c6c"),m=e("7c73"),x=e("df75"),w=e("241c"),O=e("057f"),S=e("7418"),j=e("06cf"),P=e("9bf2"),E=e("d1e7"),L=e("9112"),T=e("6eeb"),M=e("5692"),C=e("f772"),A=e("d012"),k=e("90e3"),D=e("b622"),F=e("e538"),N=e("746f"),_=e("d44e"),I=e("69f3"),V=e("b727").forEach,R=C("hidden"),G="Symbol",W="prototype",H=D("toPrimitive"),q=I.set,z=I.getterFor(G),X=Object[W],B=o.Symbol,J=i("JSON","stringify"),K=j.f,Q=P.f,Y=O.f,U=E.f,Z=M("symbols"),$=M("op-symbols"),tt=M("string-to-symbol-registry"),nt=M("symbol-to-string-registry"),et=M("wks"),rt=o.QObject,ot=!rt||!rt[W]||!rt[W].findChild,it=u&&s((function(){return 7!=m(Q({},"a",{get:function(){return Q(this,"a",{value:7}).a}})).a}))?function(t,n,e){var r=K(X,n);r&&delete X[n],Q(t,n,e),r&&t!==X&&Q(X,n,r)}:Q,ct=function(t,n){var e=Z[t]=m(B[W]);return q(e,{type:G,tag:t,description:n}),u||(e.description=n),e},ut=a?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof B},ft=function(t,n,e){t===X&&ft($,n,e),v(t);var r=h(n,!0);return v(e),l(Z,r)?(e.enumerable?(l(t,R)&&t[R][r]&&(t[R][r]=!1),e=m(e,{enumerable:g(0,!1)})):(l(t,R)||Q(t,R,g(1,{})),t[R][r]=!0),it(t,r,e)):Q(t,r,e)},at=function(t,n){v(t);var e=y(n),r=x(e).concat(vt(e));return V(r,(function(n){u&&!lt.call(e,n)||ft(t,n,e[n])})),t},st=function(t,n){return void 0===n?m(t):at(m(t),n)},lt=function(t){var n=h(t,!0),e=U.call(this,n);return!(this===X&&l(Z,n)&&!l($,n))&&(!(e||!l(this,n)||!l(Z,n)||l(this,R)&&this[R][n])||e)},dt=function(t,n){var e=y(t),r=h(n,!0);if(e!==X||!l(Z,r)||l($,r)){var o=K(e,r);return!o||!l(Z,r)||l(e,R)&&e[R][r]||(o.enumerable=!0),o}},pt=function(t){var n=Y(y(t)),e=[];return V(n,(function(t){l(Z,t)||l(A,t)||e.push(t)})),e},vt=function(t){var n=t===X,e=Y(n?$:y(t)),r=[];return V(e,(function(t){!l(Z,t)||n&&!l(X,t)||r.push(Z[t])})),r};if(f||(B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,n=k(t),e=function(t){this===X&&e.call($,t),l(this,R)&&l(this[R],n)&&(this[R][n]=!1),it(this,n,g(1,t))};return u&&ot&&it(X,n,{configurable:!0,set:e}),ct(n,t)},T(B[W],"toString",(function(){return z(this).tag})),T(B,"withoutSetter",(function(t){return ct(k(t),t)})),E.f=lt,P.f=ft,j.f=dt,w.f=O.f=pt,S.f=vt,F.f=function(t){return ct(D(t),t)},u&&(Q(B[W],"description",{configurable:!0,get:function(){return z(this).description}}),c||T(X,"propertyIsEnumerable",lt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!f,sham:!f},{Symbol:B}),V(x(et),(function(t){N(t)})),r({target:G,stat:!0,forced:!f},{for:function(t){var n=String(t);if(l(tt,n))return tt[n];var e=B(n);return tt[n]=e,nt[e]=n,e},keyFor:function(t){if(!ut(t))throw TypeError(t+" is not a symbol");if(l(nt,t))return nt[t]},useSetter:function(){ot=!0},useSimple:function(){ot=!1}}),r({target:"Object",stat:!0,forced:!f,sham:!u},{create:st,defineProperty:ft,defineProperties:at,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!f},{getOwnPropertyNames:pt,getOwnPropertySymbols:vt}),r({target:"Object",stat:!0,forced:s((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(b(t))}}),J){var bt=!f||s((function(){var t=B();return"[null]"!=J([t])||"{}"!=J({a:t})||"{}"!=J(Object(t))}));r({target:"JSON",stat:!0,forced:bt},{stringify:function(t,n,e){var r,o=[t],i=1;while(arguments.length>i)o.push(arguments[i++]);if(r=n,(p(n)||void 0!==t)&&!ut(t))return d(n)||(n=function(t,n){if("function"==typeof r&&(n=r.call(this,t,n)),!ut(n))return n}),o[1]=n,J.apply(null,o)}})}B[W][H]||L(B[W],H,B[W].valueOf),_(B,G),A[R]=!0},a640:function(t,n,e){"use strict";var r=e("d039");t.exports=function(t,n){var e=[][t];return!!e&&r((function(){e.call(null,n||function(){throw 1},1)}))}},a691:function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},ae40:function(t,n,e){var r=e("83ab"),o=e("d039"),i=e("5135"),c=Object.defineProperty,u={},f=function(t){throw t};t.exports=function(t,n){if(i(u,t))return u[t];n||(n={});var e=[][t],a=!!i(n,"ACCESSORS")&&n.ACCESSORS,s=i(n,0)?n[0]:f,l=i(n,1)?n[1]:void 0;return u[t]=!!e&&!o((function(){if(a&&!r)return!0;var t={length:-1};a?c(t,1,{enumerable:!0,get:f}):t[1]=1,e.call(t,s,l)}))}},ae4e:function(t,n,e){"use strict";e.r(n);e("7db0");function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}e("a4d3"),e("4de4"),e("4160"),e("e439"),e("dbb4"),e("b64b"),e("159b");function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}e("99af"),e("b0c0");function c(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function u(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,n,e){return n&&u(t.prototype,n),e&&u(t,e),t}var a=0,s=function(){function t(n,e,o){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;c(this,t),r(this,"variables",void 0),r(this,"func",void 0),r(this,"name",void 0),r(this,"view",void 0),r(this,"id",void 0),this.name=n,this.func=e,this.variables=o,this.view=i,this.id=a++}return f(t,[{key:"calc",value:function(t){var n=this.constructor.name;return Object.keys(this.variables).forEach((function(e){if("undefined"===typeof t[e])throw new Error("[MathFunction] Required prop ".concat(e," for ").concat(n," is undefined"))})),this.func(t)}}]),t}(),l=new s("Линейная функция",(function(t){var n=t.x,e=void 0===n?1:n,r=t.c,o=void 0===r?0:r;return e+o}),{x:{name:"X",defaultVar:!0,defaults:{min:0,max:15,value:5},delta:.5},c:{name:"C",defaults:{min:0,max:15,value:0},delta:.5}},"x + c = y"),d=new s("Парабола",(function(t){var n=t.x,e=void 0===n?1:n,r=t.c,o=void 0===r?0:r,i=t.a,c=void 0===i?1:i;return c*(e*e)+o}),{x:{name:"X",defaultVar:!0,defaults:{min:-15,max:15,value:5},delta:1},c:{name:"C",defaults:{min:-5,max:15,value:0},delta:1},a:{name:"A",defaults:{min:1,max:10,value:1},delta:1}},"a * (x^2) + c = y"),p=[l,d];self.addEventListener("message",(function(t){var n=t.data,e=n.id,o=n.config,c=n.variables,u=p.find((function(t){var n=t.id;return e===n}));if(!u)throw new Error("Cannot find function with id ".concat(e));var f=o.min,a=o.max,s=o.delta,l=o.variable,d=[],v=f;do{var b=u.calc(i(i({},c),{},r({},l,v)));d.push({x:v,y:b}),v+=s}while(v<=a);self.postMessage(d)}))},b0c0:function(t,n,e){var r=e("83ab"),o=e("9bf2").f,i=Function.prototype,c=i.toString,u=/^\s*function ([^ (]*)/,f="name";r&&!(f in i)&&o(i,f,{configurable:!0,get:function(){try{return c.call(this).match(u)[1]}catch(t){return""}}})},b622:function(t,n,e){var r=e("da84"),o=e("5692"),i=e("5135"),c=e("90e3"),u=e("4930"),f=e("fdbf"),a=o("wks"),s=r.Symbol,l=f?s:s&&s.withoutSetter||c;t.exports=function(t){return i(a,t)||(u&&i(s,t)?a[t]=s[t]:a[t]=l("Symbol."+t)),a[t]}},b64b:function(t,n,e){var r=e("23e7"),o=e("7b0b"),i=e("df75"),c=e("d039"),u=c((function(){i(1)}));r({target:"Object",stat:!0,forced:u},{keys:function(t){return i(o(t))}})},b727:function(t,n,e){var r=e("0366"),o=e("44ad"),i=e("7b0b"),c=e("50c4"),u=e("65f0"),f=[].push,a=function(t){var n=1==t,e=2==t,a=3==t,s=4==t,l=6==t,d=5==t||l;return function(p,v,b,y){for(var h,g,m=i(p),x=o(m),w=r(v,b,3),O=c(x.length),S=0,j=y||u,P=n?j(p,O):e?j(p,0):void 0;O>S;S++)if((d||S in x)&&(h=x[S],g=w(h,S,m),t))if(n)P[S]=g;else if(g)switch(t){case 3:return!0;case 5:return h;case 6:return S;case 2:f.call(P,h)}else if(s)return!1;return l?-1:a||s?s:P}};t.exports={forEach:a(0),map:a(1),filter:a(2),some:a(3),every:a(4),find:a(5),findIndex:a(6)}},c04e:function(t,n,e){var r=e("861d");t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},c430:function(t,n){t.exports=!1},c6b6:function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},c6cd:function(t,n,e){var r=e("da84"),o=e("ce4e"),i="__core-js_shared__",c=r[i]||o(i,{});t.exports=c},c8ba:function(t,n){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(r){"object"===typeof window&&(e=window)}t.exports=e},ca84:function(t,n,e){var r=e("5135"),o=e("fc6a"),i=e("4d64").indexOf,c=e("d012");t.exports=function(t,n){var e,u=o(t),f=0,a=[];for(e in u)!r(c,e)&&r(u,e)&&a.push(e);while(n.length>f)r(u,e=n[f++])&&(~i(a,e)||a.push(e));return a}},cc12:function(t,n,e){var r=e("da84"),o=e("861d"),i=r.document,c=o(i)&&o(i.createElement);t.exports=function(t){return c?i.createElement(t):{}}},ce4e:function(t,n,e){var r=e("da84"),o=e("9112");t.exports=function(t,n){try{o(r,t,n)}catch(e){r[t]=n}return n}},d012:function(t,n){t.exports={}},d039:function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},d066:function(t,n,e){var r=e("428f"),o=e("da84"),i=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,n){return arguments.length<2?i(r[t])||i(o[t]):r[t]&&r[t][n]||o[t]&&o[t][n]}},d1e7:function(t,n,e){"use strict";var r={}.propertyIsEnumerable,o=Object.getOwnPropertyDescriptor,i=o&&!r.call({1:2},1);n.f=i?function(t){var n=o(this,t);return!!n&&n.enumerable}:r},d44e:function(t,n,e){var r=e("9bf2").f,o=e("5135"),i=e("b622"),c=i("toStringTag");t.exports=function(t,n,e){t&&!o(t=e?t:t.prototype,c)&&r(t,c,{configurable:!0,value:n})}},da84:function(t,n,e){(function(n){var e=function(t){return t&&t.Math==Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n&&n)||Function("return this")()}).call(this,e("c8ba"))},dbb4:function(t,n,e){var r=e("23e7"),o=e("83ab"),i=e("56ef"),c=e("fc6a"),u=e("06cf"),f=e("8418");r({target:"Object",stat:!0,sham:!o},{getOwnPropertyDescriptors:function(t){var n,e,r=c(t),o=u.f,a=i(r),s={},l=0;while(a.length>l)e=o(r,n=a[l++]),void 0!==e&&f(s,n,e);return s}})},df75:function(t,n,e){var r=e("ca84"),o=e("7839");t.exports=Object.keys||function(t){return r(t,o)}},e439:function(t,n,e){var r=e("23e7"),o=e("d039"),i=e("fc6a"),c=e("06cf").f,u=e("83ab"),f=o((function(){c(1)})),a=!u||f;r({target:"Object",stat:!0,forced:a,sham:!u},{getOwnPropertyDescriptor:function(t,n){return c(i(t),n)}})},e538:function(t,n,e){var r=e("b622");n.f=r},e893:function(t,n,e){var r=e("5135"),o=e("56ef"),i=e("06cf"),c=e("9bf2");t.exports=function(t,n){for(var e=o(n),u=c.f,f=i.f,a=0;a<e.length;a++){var s=e[a];r(t,s)||u(t,s,f(n,s))}}},e8b5:function(t,n,e){var r=e("c6b6");t.exports=Array.isArray||function(t){return"Array"==r(t)}},f772:function(t,n,e){var r=e("5692"),o=e("90e3"),i=r("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},fc6a:function(t,n,e){var r=e("44ad"),o=e("1d80");t.exports=function(t){return r(o(t))}},fdbc:function(t,n){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(t,n,e){var r=e("4930");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator}});
//# sourceMappingURL=edec1295860bc2bbe4d1.worker.js.map