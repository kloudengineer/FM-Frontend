(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[40],{1314:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var c=a(4),r=a(40),n=a(24),i=a(409),s=a(206),o=a(1284),l=a(37),d=a(0),j=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,a=e.action,b=e.heading,u=e.moreLink,h=void 0===u?[]:u,O=e.sx,x=Object(r.a)(e,j);return Object(d.jsxs)(i.a,{sx:Object(c.a)({mb:5},O),children:[Object(d.jsxs)(i.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(d.jsx)(s.a,{variant:"h4",gutterBottom:!0,children:b}),Object(d.jsx)(l.b,Object(c.a)({links:t},x))]}),a&&Object(d.jsx)(i.a,{sx:{flexShrink:0},children:a})]}),Object(d.jsx)(i.a,{sx:{mt:2},children:Object(n.isString)(h)?Object(d.jsx)(o.a,{href:h,target:"_blank",variant:"body2",children:h}):h.map((function(e){return Object(d.jsx)(o.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1318:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return d}));var c=a(4),r=a(206),n=a(1308),i=a(1323),s=a(409),o=a(0);function l(e){var t=e.title;return Object(o.jsx)(r.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function d(e){var t=e.title,a=e.sx,r=e.children;return Object(o.jsxs)(n.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(o.jsx)(i.a,{title:t}),Object(o.jsx)(s.a,{sx:Object(c.a)({p:3,minHeight:180},a),children:r})]})}},1323:function(e,t,a){"use strict";var c=a(6),r=a(8),n=a(3),i=a(1),s=(a(10),a(12)),o=a(242),l=a(206),d=a(13),j=a(7),b=a(204),u=a(243);function h(e){return Object(b.a)("MuiCardHeader",e)}var O=Object(u.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),x=a(0),m=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],p=Object(j.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(n.a)((a={},Object(c.a)(a,"& .".concat(O.title),t.title),Object(c.a)(a,"& .".concat(O.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),f=Object(j.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=Object(j.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=Object(j.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=i.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),c=a.action,i=a.avatar,j=a.className,b=a.component,u=void 0===b?"div":b,O=a.disableTypography,y=void 0!==O&&O,k=a.subheader,w=a.subheaderTypographyProps,M=a.title,S=a.titleTypographyProps,z=Object(r.a)(a,m),C=Object(n.a)({},a,{component:u,disableTypography:y}),L=function(e){var t=e.classes;return Object(o.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},h,t)}(C),_=M;null==_||_.type===l.a||y||(_=Object(x.jsx)(l.a,Object(n.a)({variant:i?"body2":"h5",className:L.title,component:"span",display:"block"},S,{children:_})));var P=k;return null==P||P.type===l.a||y||(P=Object(x.jsx)(l.a,Object(n.a)({variant:i?"body2":"body1",className:L.subheader,color:"text.secondary",component:"span",display:"block"},w,{children:P}))),Object(x.jsxs)(p,Object(n.a)({className:Object(s.a)(L.root,j),as:u,ref:t,ownerState:C},z,{children:[i&&Object(x.jsx)(f,{className:L.avatar,ownerState:C,children:i}),Object(x.jsxs)(g,{className:L.content,ownerState:C,children:[_,P]}),c&&Object(x.jsx)(v,{className:L.action,ownerState:C,children:c})]}))}));t.a=y},1357:function(e,t,a){"use strict";var c=a(6),r=a(8),n=a(3),i=a(1),s=(a(10),a(12)),o=a(242),l=a(58),d=a(15),j=a(253),b=a(13),u=a(7),h=a(204),O=a(243);function x(e){return Object(h.a)("MuiSwitch",e)}var m=Object(O.a)("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),p=a(0),f=["className","color","edge","size","sx"],v=Object(u.a)("span",{name:"MuiSwitch",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.edge&&t["edge".concat(Object(d.a)(a.edge))],t["size".concat(Object(d.a)(a.size))]]}})((function(e){var t,a=e.ownerState;return Object(n.a)({display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"}},"start"===a.edge&&{marginLeft:-8},"end"===a.edge&&{marginRight:-8},"small"===a.size&&(t={width:40,height:24,padding:7},Object(c.a)(t,"& .".concat(m.thumb),{width:16,height:16}),Object(c.a)(t,"& .".concat(m.switchBase),Object(c.a)({padding:4},"&.".concat(m.checked),{transform:"translateX(16px)"})),t))})),g=Object(u.a)(j.a,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:function(e,t){var a=e.ownerState;return[t.switchBase,t.input,"default"!==a.color&&t["color".concat(Object(d.a)(a.color))]]}})((function(e){var t,a=e.theme;return t={position:"absolute",top:0,left:0,zIndex:1,color:"light"===a.palette.mode?a.palette.common.white:a.palette.grey[300],transition:a.transitions.create(["left","transform"],{duration:a.transitions.duration.shortest})},Object(c.a)(t,"&.".concat(m.checked),{transform:"translateX(20px)"}),Object(c.a)(t,"&.".concat(m.disabled),{color:"light"===a.palette.mode?a.palette.grey[100]:a.palette.grey[600]}),Object(c.a)(t,"&.".concat(m.checked," + .").concat(m.track),{opacity:.5}),Object(c.a)(t,"&.".concat(m.disabled," + .").concat(m.track),{opacity:"light"===a.palette.mode?.12:.2}),Object(c.a)(t,"& .".concat(m.input),{left:"-100%",width:"300%"}),t}),(function(e){var t,a=e.theme,r=e.ownerState;return Object(n.a)({"&:hover":{backgroundColor:Object(l.a)(a.palette.action.active,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},Object(c.a)(t,"&.".concat(m.checked),Object(c.a)({color:a.palette[r.color].main,"&:hover":{backgroundColor:Object(l.a)(a.palette[r.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(m.disabled),{color:"light"===a.palette.mode?Object(l.i)(a.palette[r.color].main,.62):Object(l.b)(a.palette[r.color].main,.55)})),Object(c.a)(t,"&.".concat(m.checked," + .").concat(m.track),{backgroundColor:a.palette[r.color].main}),t))})),y=Object(u.a)("span",{name:"MuiSwitch",slot:"Track",overridesResolver:function(e,t){return t.track}})((function(e){var t=e.theme;return{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:t.transitions.create(["opacity","background-color"],{duration:t.transitions.duration.shortest}),backgroundColor:"light"===t.palette.mode?t.palette.common.black:t.palette.common.white,opacity:"light"===t.palette.mode?.38:.3}})),k=Object(u.a)("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:function(e,t){return t.thumb}})((function(e){return{boxShadow:e.theme.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}})),w=i.forwardRef((function(e,t){var a=Object(b.a)({props:e,name:"MuiSwitch"}),c=a.className,i=a.color,l=void 0===i?"primary":i,j=a.edge,u=void 0!==j&&j,h=a.size,O=void 0===h?"medium":h,m=a.sx,w=Object(r.a)(a,f),M=Object(n.a)({},a,{color:l,edge:u,size:O}),S=function(e){var t=e.classes,a=e.edge,c=e.size,r=e.color,i=e.checked,s=e.disabled,l={root:["root",a&&"edge".concat(Object(d.a)(a)),"size".concat(Object(d.a)(c))],switchBase:["switchBase","color".concat(Object(d.a)(r)),i&&"checked",s&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},j=Object(o.a)(l,x,t);return Object(n.a)({},t,j)}(M),z=Object(p.jsx)(k,{className:S.thumb,ownerState:M});return Object(p.jsxs)(v,{className:Object(s.a)(S.root,c),sx:m,ownerState:M,children:[Object(p.jsx)(g,Object(n.a)({type:"checkbox",icon:z,checkedIcon:z,ref:t,ownerState:M},w,{classes:Object(n.a)({},S,{root:S.switchBase})})),Object(p.jsx)(y,{className:S.track,ownerState:M})]})}));t.a=w},1736:function(e,t,a){"use strict";var c=a(630);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(631)),n=a(0),i=(0,r.default)((0,n.jsx)("path",{d:"M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"}),"ExpandMore");t.default=i},2480:function(e,t,a){"use strict";var c=a(630);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(631)),n=a(0),i=(0,r.default)((0,n.jsx)("path",{d:"M19 3H4.99c-1.11 0-1.98.89-1.98 2L3 19c0 1.1.88 2 1.99 2H19c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 12h-4c0 1.66-1.35 3-3 3s-3-1.34-3-3H4.99V5H19v10z"}),"Inbox");t.default=i},2481:function(e,t,a){"use strict";var c=a(630);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(631)),n=a(0),i=(0,r.default)((0,n.jsx)("path",{d:"M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13 3.74 7.84 12 3l8.26 4.84L12 13z"}),"Drafts");t.default=i},2482:function(e,t,a){"use strict";var c=a(630);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(631)),n=a(0),i=(0,r.default)((0,n.jsx)("path",{d:"M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"}),"Send");t.default=i},2483:function(e,t,a){"use strict";var c=a(630);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(631)),n=a(0),i=(0,r.default)((0,n.jsx)("path",{d:"m12 8-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}),"ExpandLess");t.default=i},2484:function(e,t,a){"use strict";var c=a(630);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(631)),n=a(0),i=(0,r.default)((0,n.jsx)("path",{d:"m22 9.24-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"}),"StarBorder");t.default=i},2485:function(e,t,a){"use strict";var c=a(630);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(631)),n=a(0),i=(0,r.default)((0,n.jsx)("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"}),"Image");t.default=i},2486:function(e,t,a){"use strict";var c=a(630);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(631)),n=a(0),i=(0,r.default)((0,n.jsx)("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"}),"Work");t.default=i},2487:function(e,t,a){"use strict";var c=a(630);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(631)),n=a(0),i=(0,r.default)((0,n.jsx)("path",{d:"m13.127 14.56 1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73 2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88zM5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98zm.02-.02-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3z"}),"BeachAccess");t.default=i},2488:function(e,t,a){"use strict";var c=a(630);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(631)),n=a(0),i=(0,r.default)((0,n.jsx)("path",{d:"M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"}),"Comment");t.default=i},2489:function(e,t,a){"use strict";var c=a(630);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(631)),n=a(0),i=(0,r.default)((0,n.jsx)("path",{d:"m1 9 2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8 3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4 2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"}),"Wifi");t.default=i},2490:function(e,t,a){"use strict";var c=a(630);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=c(a(631)),n=a(0),i=(0,r.default)((0,n.jsx)("path",{d:"M17.71 7.71 12 2h-1v7.59L6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 11 14.41V22h1l5.71-5.71-4.3-4.29 4.3-4.29zM13 5.83l1.88 1.88L13 9.59V5.83zm1.88 10.46L13 18.17v-3.76l1.88 1.88z"}),"Bluetooth");t.default=i},2597:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return re}));var c=a(19),r=a(16),n=a(4),i=a(1),s=a(2482),o=a.n(s),l=a(2486),d=a.n(l),j=a(2489),b=a.n(j),u=a(2480),h=a.n(u),O=a(2485),x=a.n(O),m=a(2481),p=a.n(m),f=a(2488),v=a.n(f),g=a(2483),y=a.n(g),k=a(1736),w=a.n(k),M=a(2484),S=a.n(M),z=a(2490),C=a.n(z),L=a(2487),_=a.n(L),P=a(7),H=a(629),R=a(1259),B=a(409),N=a(1295),I=a(1281),T=a(1289),V=a(1260),W=a(1261),A=a(1200),J=a(1290),D=a(1209),E=a(1287),F=a(1299),X=a(1280),G=a(1274),U=a(1288),q=a(1286),K=a(1357),Q=a(23),Y=a(412),Z=a(1314),$=a(1318),ee=a(0),te=Object(P.a)(Y.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),ae=Object(P.a)(H.a)((function(e){var t=e.theme;return{width:"100%",border:"solid 1px ".concat(t.palette.divider)}}));function ce(e){return Object(ee.jsx)(R.a,Object(n.a)({component:"a"},e))}function re(){var e=Object(i.useState)(!0),t=Object(r.a)(e,2),a=t[0],n=t[1],s=Object(i.useState)(1),l=Object(r.a)(s,2),j=l[0],u=l[1],O=Object(i.useState)([0]),m=Object(r.a)(O,2),f=m[0],g=m[1],k=Object(i.useState)(["wifi"]),M=Object(r.a)(k,2),z=M[0],L=M[1],P=function(e,t){u(t)},H=function(e){return function(){var t=f.indexOf(e),a=Object(c.a)(f);-1===t?a.push(e):a.splice(t,1),g(a)}},Y=function(e){return function(){var t=z.indexOf(e),a=Object(c.a)(z);-1===t?a.push(e):a.splice(t,1),L(a)}};return Object(ee.jsxs)(te,{title:"Components: Lists | Minimal-UI",children:[Object(ee.jsx)(B.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(ee.jsx)(N.a,{maxWidth:"lg",children:Object(ee.jsx)(Z.a,{heading:"Lists",links:[{name:"Components",href:Q.d.components},{name:"Lists"}],moreLink:"https://mui.com/components/lists"})})}),Object(ee.jsx)(N.a,{maxWidth:"lg",children:Object(ee.jsxs)(I.a,{container:!0,spacing:3,children:[Object(ee.jsx)(I.a,{item:!0,xs:12,md:6,children:Object(ee.jsx)($.a,{title:"Simple",children:Object(ee.jsxs)(ae,{children:[Object(ee.jsxs)(T.a,{component:"nav","aria-label":"main mailbox folders",children:[Object(ee.jsxs)(R.a,{children:[Object(ee.jsx)(V.a,{children:Object(ee.jsx)(h.a,{})}),Object(ee.jsx)(W.a,{primary:"Inbox"})]}),Object(ee.jsxs)(R.a,{children:[Object(ee.jsx)(V.a,{children:Object(ee.jsx)(p.a,{})}),Object(ee.jsx)(W.a,{primary:"Drafts"})]})]}),Object(ee.jsx)(A.a,{}),Object(ee.jsxs)(T.a,{component:"nav","aria-label":"secondary mailbox folders",children:[Object(ee.jsx)(R.a,{children:Object(ee.jsx)(W.a,{primary:"Trash"})}),Object(ee.jsx)(ce,{href:"#simple-list",children:Object(ee.jsx)(W.a,{primary:"Spam"})})]})]})})}),Object(ee.jsx)(I.a,{item:!0,xs:12,md:6,children:Object(ee.jsx)($.a,{title:"Nested",children:Object(ee.jsx)(ae,{children:Object(ee.jsxs)(T.a,{component:"nav","aria-labelledby":"nested-list-subheader",subheader:Object(ee.jsx)(J.a,{component:"div",id:"nested-list-subheader",children:"Nested List Items"}),children:[Object(ee.jsxs)(R.a,{children:[Object(ee.jsx)(V.a,{children:Object(ee.jsx)(o.a,{})}),Object(ee.jsx)(W.a,{primary:"Sent mail"})]}),Object(ee.jsxs)(R.a,{children:[Object(ee.jsx)(V.a,{children:Object(ee.jsx)(p.a,{})}),Object(ee.jsx)(W.a,{primary:"Drafts"})]}),Object(ee.jsxs)(R.a,{onClick:function(){n(!a)},children:[Object(ee.jsx)(V.a,{children:Object(ee.jsx)(h.a,{})}),Object(ee.jsx)(W.a,{primary:"Inbox"}),a?Object(ee.jsx)(y.a,{}):Object(ee.jsx)(w.a,{})]}),Object(ee.jsx)(D.a,{in:a,timeout:"auto",unmountOnExit:!0,children:Object(ee.jsx)(T.a,{component:"div",disablePadding:!0,children:Object(ee.jsxs)(R.a,{children:[Object(ee.jsx)(V.a,{children:Object(ee.jsx)(S.a,{})}),Object(ee.jsx)(W.a,{primary:"Starred"})]})})})]})})})}),Object(ee.jsx)(I.a,{item:!0,xs:12,md:6,children:Object(ee.jsx)($.a,{title:"Folder",children:Object(ee.jsx)(ae,{children:Object(ee.jsxs)(T.a,{children:[Object(ee.jsxs)(E.a,{children:[Object(ee.jsx)(F.a,{children:Object(ee.jsx)(X.a,{children:Object(ee.jsx)(x.a,{})})}),Object(ee.jsx)(W.a,{primary:"Photos",secondary:"Jan 9, 2014"})]}),Object(ee.jsxs)(E.a,{children:[Object(ee.jsx)(F.a,{children:Object(ee.jsx)(X.a,{children:Object(ee.jsx)(d.a,{})})}),Object(ee.jsx)(W.a,{primary:"Work",secondary:"Jan 7, 2014"})]}),Object(ee.jsxs)(E.a,{children:[Object(ee.jsx)(F.a,{children:Object(ee.jsx)(X.a,{children:Object(ee.jsx)(_.a,{})})}),Object(ee.jsx)(W.a,{primary:"Vacation",secondary:"July 20, 2014"})]})]})})})}),Object(ee.jsx)(I.a,{item:!0,xs:12,md:6,children:Object(ee.jsx)($.a,{title:"Selected",children:Object(ee.jsxs)(ae,{children:[Object(ee.jsxs)(T.a,{component:"nav","aria-label":"main mailbox folders",children:[Object(ee.jsxs)(R.a,{selected:0===j,onClick:function(e){return P(0,0)},children:[Object(ee.jsx)(V.a,{children:Object(ee.jsx)(h.a,{})}),Object(ee.jsx)(W.a,{primary:"Inbox"})]}),Object(ee.jsxs)(R.a,{selected:1===j,onClick:function(e){return P(0,1)},children:[Object(ee.jsx)(V.a,{children:Object(ee.jsx)(p.a,{})}),Object(ee.jsx)(W.a,{primary:"Drafts"})]})]}),Object(ee.jsx)(A.a,{}),Object(ee.jsxs)(T.a,{component:"nav","aria-label":"secondary mailbox folder",children:[Object(ee.jsx)(R.a,{selected:2===j,onClick:function(e){return P(0,2)},children:Object(ee.jsx)(W.a,{primary:"Trash"})}),Object(ee.jsx)(R.a,{selected:3===j,onClick:function(e){return P(0,3)},children:Object(ee.jsx)(W.a,{primary:"Spam"})})]})]})})}),Object(ee.jsx)(I.a,{item:!0,xs:12,md:6,children:Object(ee.jsx)($.a,{title:"Controls",children:Object(ee.jsx)(ae,{children:Object(ee.jsx)(T.a,{children:[0,1,2,3].map((function(e){var t="checkbox-list-label-".concat(e);return Object(ee.jsxs)(R.a,{role:void 0,dense:!0,onClick:H(e),children:[Object(ee.jsx)(V.a,{children:Object(ee.jsx)(G.a,{edge:"start",checked:-1!==f.indexOf(e),tabIndex:-1,disableRipple:!0,inputProps:{"aria-labelledby":t}})}),Object(ee.jsx)(W.a,{id:t,primary:"Line item ".concat(e+1)}),Object(ee.jsx)(U.a,{children:Object(ee.jsx)(q.a,{edge:"end",children:Object(ee.jsx)(v.a,{})})})]},e)}))})})})}),Object(ee.jsx)(I.a,{item:!0,xs:12,md:6,children:Object(ee.jsx)($.a,{title:"Switch",children:Object(ee.jsx)(ae,{children:Object(ee.jsxs)(T.a,{subheader:Object(ee.jsx)(J.a,{children:"Settings"}),children:[Object(ee.jsxs)(E.a,{children:[Object(ee.jsx)(V.a,{children:Object(ee.jsx)(b.a,{})}),Object(ee.jsx)(W.a,{id:"switch-list-label-wifi",primary:"Wi-Fi"}),Object(ee.jsx)(U.a,{children:Object(ee.jsx)(K.a,{edge:"end",onChange:Y("wifi"),checked:-1!==z.indexOf("wifi"),inputProps:{"aria-labelledby":"switch-list-label-wifi"}})})]}),Object(ee.jsxs)(E.a,{children:[Object(ee.jsx)(V.a,{children:Object(ee.jsx)(C.a,{})}),Object(ee.jsx)(W.a,{id:"switch-list-label-bluetooth",primary:"Bluetooth"}),Object(ee.jsx)(U.a,{children:Object(ee.jsx)(K.a,{edge:"end",onChange:Y("bluetooth"),checked:-1!==z.indexOf("bluetooth"),inputProps:{"aria-labelledby":"switch-list-label-bluetooth"}})})]})]})})})})]})})]})}}}]);
//# sourceMappingURL=40.55dc29b9.chunk.js.map