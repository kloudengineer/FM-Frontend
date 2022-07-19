/*! For license information please see 12.9005a0bd.chunk.js.LICENSE.txt */
(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[12],{1326:function(e,t,r){var n,o;void 0===(o="function"===typeof(n=function(){var e,t,r="2.0.6",n={},o={},a={currentLocale:"en",zeroFormat:null,nullFormat:null,defaultFormat:"0,0",scalePercentBy100:!0},i={currentLocale:a.currentLocale,zeroFormat:a.zeroFormat,nullFormat:a.nullFormat,defaultFormat:a.defaultFormat,scalePercentBy100:a.scalePercentBy100};function c(e,t){this._input=e,this._value=t}return(e=function(r){var o,a,l,u;if(e.isNumeral(r))o=r.value();else if(0===r||"undefined"===typeof r)o=0;else if(null===r||t.isNaN(r))o=null;else if("string"===typeof r)if(i.zeroFormat&&r===i.zeroFormat)o=0;else if(i.nullFormat&&r===i.nullFormat||!r.replace(/[^0-9]+/g,"").length)o=null;else{for(a in n)if((u="function"===typeof n[a].regexps.unformat?n[a].regexps.unformat():n[a].regexps.unformat)&&r.match(u)){l=n[a].unformat;break}o=(l=l||e._.stringToNumber)(r)}else o=Number(r)||null;return new c(r,o)}).version=r,e.isNumeral=function(e){return e instanceof c},e._=t={numberToFormat:function(t,r,n){var a,i,c,l,u,s,f,m=o[e.options.currentLocale],d=!1,h=!1,b=0,p="",g=1e12,v=1e9,w=1e6,y=1e3,_="",x=!1;if(t=t||0,i=Math.abs(t),e._.includes(r,"(")?(d=!0,r=r.replace(/[\(|\)]/g,"")):(e._.includes(r,"+")||e._.includes(r,"-"))&&(u=e._.includes(r,"+")?r.indexOf("+"):t<0?r.indexOf("-"):-1,r=r.replace(/[\+|\-]/g,"")),e._.includes(r,"a")&&(a=!!(a=r.match(/a(k|m|b|t)?/))&&a[1],e._.includes(r," a")&&(p=" "),r=r.replace(new RegExp(p+"a[kmbt]?"),""),i>=g&&!a||"t"===a?(p+=m.abbreviations.trillion,t/=g):i<g&&i>=v&&!a||"b"===a?(p+=m.abbreviations.billion,t/=v):i<v&&i>=w&&!a||"m"===a?(p+=m.abbreviations.million,t/=w):(i<w&&i>=y&&!a||"k"===a)&&(p+=m.abbreviations.thousand,t/=y)),e._.includes(r,"[.]")&&(h=!0,r=r.replace("[.]",".")),c=t.toString().split(".")[0],l=r.split(".")[1],s=r.indexOf(","),b=(r.split(".")[0].split(",")[0].match(/0/g)||[]).length,l?(e._.includes(l,"[")?(l=(l=l.replace("]","")).split("["),_=e._.toFixed(t,l[0].length+l[1].length,n,l[1].length)):_=e._.toFixed(t,l.length,n),c=_.split(".")[0],_=e._.includes(_,".")?m.delimiters.decimal+_.split(".")[1]:"",h&&0===Number(_.slice(1))&&(_="")):c=e._.toFixed(t,0,n),p&&!a&&Number(c)>=1e3&&p!==m.abbreviations.trillion)switch(c=String(Number(c)/1e3),p){case m.abbreviations.thousand:p=m.abbreviations.million;break;case m.abbreviations.million:p=m.abbreviations.billion;break;case m.abbreviations.billion:p=m.abbreviations.trillion}if(e._.includes(c,"-")&&(c=c.slice(1),x=!0),c.length<b)for(var j=b-c.length;j>0;j--)c="0"+c;return s>-1&&(c=c.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,"$1"+m.delimiters.thousands)),0===r.indexOf(".")&&(c=""),f=c+_+(p||""),d?f=(d&&x?"(":"")+f+(d&&x?")":""):u>=0?f=0===u?(x?"-":"+")+f:f+(x?"-":"+"):x&&(f="-"+f),f},stringToNumber:function(e){var t,r,n,a=o[i.currentLocale],c=e,l={thousand:3,million:6,billion:9,trillion:12};if(i.zeroFormat&&e===i.zeroFormat)r=0;else if(i.nullFormat&&e===i.nullFormat||!e.replace(/[^0-9]+/g,"").length)r=null;else{for(t in r=1,"."!==a.delimiters.decimal&&(e=e.replace(/\./g,"").replace(a.delimiters.decimal,".")),l)if(n=new RegExp("[^a-zA-Z]"+a.abbreviations[t]+"(?:\\)|(\\"+a.currency.symbol+")?(?:\\))?)?$"),c.match(n)){r*=Math.pow(10,l[t]);break}r*=(e.split("-").length+Math.min(e.split("(").length-1,e.split(")").length-1))%2?1:-1,e=e.replace(/[^0-9\.]+/g,""),r*=Number(e)}return r},isNaN:function(e){function t(t){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}((function(e){return"number"===typeof e&&isNaN(e)})),includes:function(e,t){return-1!==e.indexOf(t)},insert:function(e,t,r){return e.slice(0,r)+t+e.slice(r)},reduce:function(e,t){if(null===this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!==typeof t)throw new TypeError(t+" is not a function");var r,n=Object(e),o=n.length>>>0,a=0;if(3===arguments.length)r=arguments[2];else{for(;a<o&&!(a in n);)a++;if(a>=o)throw new TypeError("Reduce of empty array with no initial value");r=n[a++]}for(;a<o;a++)a in n&&(r=t(r,n[a],a,n));return r},multiplier:function(e){var t=e.toString().split(".");return t.length<2?1:Math.pow(10,t[1].length)},correctionFactor:function(){return Array.prototype.slice.call(arguments).reduce((function(e,r){var n=t.multiplier(r);return e>n?e:n}),1)},toFixed:function(e,t,r,n){var o,a,i,c,l=e.toString().split("."),u=t-(n||0);return o=2===l.length?Math.min(Math.max(l[1].length,u),t):u,i=Math.pow(10,o),c=(r(e+"e+"+o)/i).toFixed(o),n>t-o&&(a=new RegExp("\\.?0{1,"+(n-(t-o))+"}$"),c=c.replace(a,"")),c}},e.options=i,e.formats=n,e.locales=o,e.locale=function(e){return e&&(i.currentLocale=e.toLowerCase()),i.currentLocale},e.localeData=function(e){if(!e)return o[i.currentLocale];if(e=e.toLowerCase(),!o[e])throw new Error("Unknown locale : "+e);return o[e]},e.reset=function(){for(var e in a)i[e]=a[e]},e.zeroFormat=function(e){i.zeroFormat="string"===typeof e?e:null},e.nullFormat=function(e){i.nullFormat="string"===typeof e?e:null},e.defaultFormat=function(e){i.defaultFormat="string"===typeof e?e:"0.0"},e.register=function(e,t,r){if(t=t.toLowerCase(),this[e+"s"][t])throw new TypeError(t+" "+e+" already registered.");return this[e+"s"][t]=r,r},e.validate=function(t,r){var n,o,a,i,c,l,u,s;if("string"!==typeof t&&(t+="",console.warn&&console.warn("Numeral.js: Value is not string. It has been co-erced to: ",t)),(t=t.trim()).match(/^\d+$/))return!0;if(""===t)return!1;try{u=e.localeData(r)}catch(f){u=e.localeData(e.locale())}return a=u.currency.symbol,c=u.abbreviations,n=u.delimiters.decimal,o="."===u.delimiters.thousands?"\\.":u.delimiters.thousands,(null===(s=t.match(/^[^\d]+/))||(t=t.substr(1),s[0]===a))&&(null===(s=t.match(/[^\d]+$/))||(t=t.slice(0,-1),s[0]===c.thousand||s[0]===c.million||s[0]===c.billion||s[0]===c.trillion))&&(l=new RegExp(o+"{2}"),!t.match(/[^\d.,]/g)&&!((i=t.split(n)).length>2)&&(i.length<2?!!i[0].match(/^\d+.*\d$/)&&!i[0].match(l):1===i[0].length?!!i[0].match(/^\d+$/)&&!i[0].match(l)&&!!i[1].match(/^\d+$/):!!i[0].match(/^\d+.*\d$/)&&!i[0].match(l)&&!!i[1].match(/^\d+$/)))},e.fn=c.prototype={clone:function(){return e(this)},format:function(t,r){var o,a,c,l=this._value,u=t||i.defaultFormat;if(r=r||Math.round,0===l&&null!==i.zeroFormat)a=i.zeroFormat;else if(null===l&&null!==i.nullFormat)a=i.nullFormat;else{for(o in n)if(u.match(n[o].regexps.format)){c=n[o].format;break}a=(c=c||e._.numberToFormat)(l,u,r)}return a},value:function(){return this._value},input:function(){return this._input},set:function(e){return this._value=Number(e),this},add:function(e){var r=t.correctionFactor.call(null,this._value,e);function n(e,t,n,o){return e+Math.round(r*t)}return this._value=t.reduce([this._value,e],n,0)/r,this},subtract:function(e){var r=t.correctionFactor.call(null,this._value,e);function n(e,t,n,o){return e-Math.round(r*t)}return this._value=t.reduce([e],n,Math.round(this._value*r))/r,this},multiply:function(e){function r(e,r,n,o){var a=t.correctionFactor(e,r);return Math.round(e*a)*Math.round(r*a)/Math.round(a*a)}return this._value=t.reduce([this._value,e],r,1),this},divide:function(e){function r(e,r,n,o){var a=t.correctionFactor(e,r);return Math.round(e*a)/Math.round(r*a)}return this._value=t.reduce([this._value,e],r),this},difference:function(t){return Math.abs(e(this._value).subtract(t).value())}},e.register("locale","en",{delimiters:{thousands:",",decimal:"."},abbreviations:{thousand:"k",million:"m",billion:"b",trillion:"t"},ordinal:function(e){var t=e%10;return 1===~~(e%100/10)?"th":1===t?"st":2===t?"nd":3===t?"rd":"th"},currency:{symbol:"$"}}),e.register("format","bps",{regexps:{format:/(BPS)/,unformat:/(BPS)/},format:function(t,r,n){var o,a=e._.includes(r," BPS")?" ":"";return t*=1e4,r=r.replace(/\s?BPS/,""),o=e._.numberToFormat(t,r,n),e._.includes(o,")")?((o=o.split("")).splice(-1,0,a+"BPS"),o=o.join("")):o=o+a+"BPS",o},unformat:function(t){return+(1e-4*e._.stringToNumber(t)).toFixed(15)}}),function(){var t={base:1e3,suffixes:["B","KB","MB","GB","TB","PB","EB","ZB","YB"]},r={base:1024,suffixes:["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"]},n=t.suffixes.concat(r.suffixes.filter((function(e){return t.suffixes.indexOf(e)<0}))).join("|");n="("+n.replace("B","B(?!PS)")+")",e.register("format","bytes",{regexps:{format:/([0\s]i?b)/,unformat:new RegExp(n)},format:function(n,o,a){var i,c,l,u=e._.includes(o,"ib")?r:t,s=e._.includes(o," b")||e._.includes(o," ib")?" ":"";for(o=o.replace(/\s?i?b/,""),i=0;i<=u.suffixes.length;i++)if(c=Math.pow(u.base,i),l=Math.pow(u.base,i+1),null===n||0===n||n>=c&&n<l){s+=u.suffixes[i],c>0&&(n/=c);break}return e._.numberToFormat(n,o,a)+s},unformat:function(n){var o,a,i=e._.stringToNumber(n);if(i){for(o=t.suffixes.length-1;o>=0;o--){if(e._.includes(n,t.suffixes[o])){a=Math.pow(t.base,o);break}if(e._.includes(n,r.suffixes[o])){a=Math.pow(r.base,o);break}}i*=a||1}return i}})}(),e.register("format","currency",{regexps:{format:/(\$)/},format:function(t,r,n){var o,a,i=e.locales[e.options.currentLocale],c={before:r.match(/^([\+|\-|\(|\s|\$]*)/)[0],after:r.match(/([\+|\-|\)|\s|\$]*)$/)[0]};for(r=r.replace(/\s?\$\s?/,""),o=e._.numberToFormat(t,r,n),t>=0?(c.before=c.before.replace(/[\-\(]/,""),c.after=c.after.replace(/[\-\)]/,"")):t<0&&!e._.includes(c.before,"-")&&!e._.includes(c.before,"(")&&(c.before="-"+c.before),a=0;a<c.before.length;a++)switch(c.before[a]){case"$":o=e._.insert(o,i.currency.symbol,a);break;case" ":o=e._.insert(o," ",a+i.currency.symbol.length-1)}for(a=c.after.length-1;a>=0;a--)switch(c.after[a]){case"$":o=a===c.after.length-1?o+i.currency.symbol:e._.insert(o,i.currency.symbol,-(c.after.length-(1+a)));break;case" ":o=a===c.after.length-1?o+" ":e._.insert(o," ",-(c.after.length-(1+a)+i.currency.symbol.length-1))}return o}}),e.register("format","exponential",{regexps:{format:/(e\+|e-)/,unformat:/(e\+|e-)/},format:function(t,r,n){var o=("number"!==typeof t||e._.isNaN(t)?"0e+0":t.toExponential()).split("e");return r=r.replace(/e[\+|\-]{1}0/,""),e._.numberToFormat(Number(o[0]),r,n)+"e"+o[1]},unformat:function(t){var r=e._.includes(t,"e+")?t.split("e+"):t.split("e-"),n=Number(r[0]),o=Number(r[1]);function a(t,r,n,o){var a=e._.correctionFactor(t,r);return t*a*(r*a)/(a*a)}return o=e._.includes(t,"e-")?o*=-1:o,e._.reduce([n,Math.pow(10,o)],a,1)}}),e.register("format","ordinal",{regexps:{format:/(o)/},format:function(t,r,n){var o=e.locales[e.options.currentLocale],a=e._.includes(r," o")?" ":"";return r=r.replace(/\s?o/,""),a+=o.ordinal(t),e._.numberToFormat(t,r,n)+a}}),e.register("format","percentage",{regexps:{format:/(%)/,unformat:/(%)/},format:function(t,r,n){var o,a=e._.includes(r," %")?" ":"";return e.options.scalePercentBy100&&(t*=100),r=r.replace(/\s?\%/,""),o=e._.numberToFormat(t,r,n),e._.includes(o,")")?((o=o.split("")).splice(-1,0,a+"%"),o=o.join("")):o=o+a+"%",o},unformat:function(t){var r=e._.stringToNumber(t);return e.options.scalePercentBy100?.01*r:r}}),e.register("format","time",{regexps:{format:/(:)/,unformat:/(:)/},format:function(e,t,r){var n=Math.floor(e/60/60),o=Math.floor((e-60*n*60)/60),a=Math.round(e-60*n*60-60*o);return n+":"+(o<10?"0"+o:o)+":"+(a<10?"0"+a:a)},unformat:function(e){var t=e.split(":"),r=0;return 3===t.length?(r+=60*Number(t[0])*60,r+=60*Number(t[1]),r+=Number(t[2])):2===t.length&&(r+=60*Number(t[0]),r+=Number(t[1])),Number(r)}}),e})?n.call(t,r,t,e):n)||(e.exports=o)},1357:function(e,t,r){"use strict";var n=r(6),o=r(8),a=r(3),i=r(1),c=(r(10),r(12)),l=r(242),u=r(58),s=r(15),f=r(253),m=r(13),d=r(7),h=r(204),b=r(243);function p(e){return Object(h.a)("MuiSwitch",e)}var g=Object(b.a)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),v=r(0),w=["className","color","edge","size","sx"],y=Object(d.a)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var r=e.ownerState;return[t.root,r.edge&&t["edge".concat(Object(s.a)(r.edge))],t["size".concat(Object(s.a)(r.size))]]}})((function(e){var t,r=e.ownerState;return Object(a.a)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===r.edge&&{marginLeft:-8},"end"===r.edge&&{marginRight:-8},"small"===r.size&&(t={width:40,height:24,padding:7},Object(n.a)(t,"& .".concat(g.thumb),{width:16,height:16}),Object(n.a)(t,"& .".concat(g.switchBase),Object(n.a)({padding:4},"&.".concat(g.checked),{transform:"translateX(16px)"})),t))})),_=Object(d.a)(f.a,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var r=e.ownerState;return[t.switchBase,t.input,"default"!==r.color&&t["color".concat(Object(s.a)(r.color))]]}})((function(e){var t,r=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:"light"===r.palette.mode?r.palette.common.white:r.palette.grey[300],transition:r.transitions.create(["left","transform"],{duration:r.transitions.duration.shortest})},Object(n.a)(t,"&.".concat(g.checked),{transform:"translateX(20px)"}),Object(n.a)(t,"&.".concat(g.disabled),{color:"light"===r.palette.mode?r.palette.grey[100]:r.palette.grey[600]}),Object(n.a)(t,"&.".concat(g.checked," + .").concat(g.track),{opacity:.5}),Object(n.a)(t,"&.".concat(g.disabled," + .").concat(g.track),{opacity:"light"===r.palette.mode?.12:.2}),Object(n.a)(t,"& .".concat(g.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,r=e.theme,o=e.ownerState;return Object(a.a)({"&:hover":{backgroundColor:Object(u.a)(r.palette.action.active,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==o.color&&(t={},Object(n.a)(t,"&.".concat(g.checked),Object(n.a)({color:r.palette[o.color].main,"&:hover":{backgroundColor:Object(u.a)(r.palette[o.color].main,r.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(g.disabled),{color:"light"===r.palette.mode?Object(u.i)(r.palette[o.color].main,.62):Object(u.b)(r.palette[o.color].main,.55)})),Object(n.a)(t,"&.".concat(g.checked," + .").concat(g.track),{backgroundColor:r.palette[o.color].main}),t))})),x=Object(d.a)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:"light"===t.palette.mode?t.palette.common.black:t.palette.common.white,opacity:"light"===t.palette.mode?.38:.3}})),j=Object(d.a)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){return{boxShadow:e.theme.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),O=i.forwardRef((function(e,t){var r=Object(m.a)({props:e,name:"MuiSwitch"}),n=r.className,i=r.color,u=void 0===i?"primary":i,f=r.edge,d=void 0!==f&&f,h=r.size,b=void 0===h?"medium":h,g=r.sx,O=Object(o.a)(r,w),k=Object(a.a)({},r,{color:u,edge:d,size:b}),F=function(e){var t=e.classes,r=e.edge,n=e.size,o=e.color,i=e.checked,c=e.disabled,u={root:["root",r&&"edge".concat(Object(s.a)(r)),"size".concat(Object(s.a)(n))],switchBase:["switchBase","color".concat(Object(s.a)(o)),i&&"checked",c&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},f=Object(l.a)(u,p,t);return Object(a.a)({},t,f)}(k),B=Object(v.jsx)(j,{className:F.thumb,ownerState:k});return Object(v.jsxs)(y,{className:Object(c.a)(F.root,n),sx:g,ownerState:k,children:[Object(v.jsx)(_,Object(a.a)({type:"checkbox",icon:B,checkedIcon:B,ref:t,ownerState:k},O,{classes:Object(a.a)({},F,{root:F.switchBase})})),Object(v.jsx)(x,{className:F.track,ownerState:k})]})}));t.a=O},1401:function(e,t){t.__esModule=!0,t.default={body:'<path d="M3 8c0 .55.45 1 1 1s1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1H5V2c0-.55-.45-1-1-1s-1 .45-1 1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h2v2z" fill="currentColor"/><circle cx="13" cy="14" r="3" fill="currentColor"/><path d="M21 6h-3.17l-1.24-1.35A1.99 1.99 0 0 0 15.12 4h-6.4c.17.3.28.63.28 1c0 1.1-.9 2-2 2H6v1c0 1.1-.9 2-2 2c-.37 0-.7-.11-1-.28V20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5z" fill="currentColor"/>',width:24,height:24}}}]);
//# sourceMappingURL=12.9005a0bd.chunk.js.map