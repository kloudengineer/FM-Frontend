(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[67],{1314:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var i=n(4),a=n(40),r=n(24),c=n(409),o=n(206),s=n(1284),l=n(37),d=n(0),j=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,n=e.action,b=e.heading,h=e.moreLink,x=void 0===h?[]:h,O=e.sx,m=Object(a.a)(e,j);return Object(d.jsxs)(c.a,{sx:Object(i.a)({mb:5},O),children:[Object(d.jsxs)(c.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(c.a,{sx:{flexGrow:1},children:[Object(d.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:b}),Object(d.jsx)(l.b,Object(i.a)({links:t},m))]}),n&&Object(d.jsx)(c.a,{sx:{flexShrink:0},children:n})]}),Object(d.jsx)(c.a,{sx:{mt:2},children:Object(r.isString)(x)?Object(d.jsx)(s.a,{href:x,target:"_blank",variant:"body2",children:x}):x.map((function(e){return Object(d.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1318:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d}));var i=n(4),a=n(206),r=n(1308),c=n(1323),o=n(409),s=n(0);function l(e){var t=e.title;return Object(s.jsx)(a.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function d(e){var t=e.title,n=e.sx,a=e.children;return Object(s.jsxs)(r.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(s.jsx)(c.a,{title:t}),Object(s.jsx)(o.a,{sx:Object(i.a)({p:3,minHeight:180},n),children:a})]})}},1323:function(e,t,n){"use strict";var i=n(6),a=n(8),r=n(3),c=n(1),o=(n(10),n(12)),s=n(242),l=n(206),d=n(13),j=n(7),b=n(204),h=n(243);function x(e){return Object(b.a)("MuiCardHeader",e)}var O=Object(h.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=n(0),u=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],p=Object(j.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var n;return Object(r.a)((n={},Object(i.a)(n,"& .".concat(O.title),t.title),Object(i.a)(n,"& .".concat(O.subheader),t.subheader),n),t.root)}})({display:"flex",alignItems:"center",padding:16}),f=Object(j.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),v=Object(j.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=Object(j.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=c.forwardRef((function(e,t){var n=Object(d.a)({props:e,name:"MuiCardHeader"}),i=n.action,c=n.avatar,j=n.className,b=n.component,h=void 0===b?"div":b,O=n.disableTypography,y=void 0!==O&&O,A=n.subheader,T=n.subheaderTypographyProps,E=n.title,k=n.titleTypographyProps,w=Object(a.a)(n,u),C=Object(r.a)({},n,{component:h,disableTypography:y}),M=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},x,t)}(C),H=E;null==H||H.type===l.a||y||(H=Object(m.jsx)(l.a,Object(r.a)({variant:c?"body2":"h5",className:M.title,component:"span",display:"block"},k,{children:H})));var R=A;return null==R||R.type===l.a||y||(R=Object(m.jsx)(l.a,Object(r.a)({variant:c?"body2":"body1",className:M.subheader,color:"text.secondary",component:"span",display:"block"},T,{children:R}))),Object(m.jsxs)(p,Object(r.a)({className:Object(o.a)(M.root,j),as:h,ref:t,ownerState:C},w,{children:[c&&Object(m.jsx)(f,{className:M.avatar,ownerState:C,children:c}),Object(m.jsxs)(g,{className:M.content,ownerState:C,children:[H,R]}),i&&Object(m.jsx)(v,{className:M.action,ownerState:C,children:i})]}))}));t.a=y},1555:function(e,t,n){"use strict";var i=n(630);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(631)),r=n(0),c=(0,a.default)((0,r.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");t.default=c},1702:function(e,t,n){"use strict";var i=n(3),a=n(8),r=n(1),c=(n(10),n(405)),o=n(63),s=n(54),l=n(77),d=n(30),j=n(0),b=["appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],h={entering:{transform:"none"},entered:{transform:"none"}},x={enter:o.b.enteringScreen,exit:o.b.leavingScreen},O=r.forwardRef((function(e,t){var n=e.appear,o=void 0===n||n,O=e.children,m=e.easing,u=e.in,p=e.onEnter,f=e.onEntered,v=e.onEntering,g=e.onExit,y=e.onExited,A=e.onExiting,T=e.style,E=e.timeout,k=void 0===E?x:E,w=e.TransitionComponent,C=void 0===w?c.a:w,M=Object(a.a)(e,b),H=Object(s.a)(),R=r.useRef(null),S=Object(d.a)(O.ref,t),N=Object(d.a)(R,S),W=function(e){return function(t){if(e){var n=R.current;void 0===t?e(n):e(n,t)}}},P=W(v),_=W((function(e,t){Object(l.b)(e);var n=Object(l.a)({style:T,timeout:k,easing:m},{mode:"enter"});e.style.webkitTransition=H.transitions.create("transform",n),e.style.transition=H.transitions.create("transform",n),p&&p(e,t)})),B=W(f),I=W(A),D=W((function(e){var t=Object(l.a)({style:T,timeout:k,easing:m},{mode:"exit"});e.style.webkitTransition=H.transitions.create("transform",t),e.style.transition=H.transitions.create("transform",t),g&&g(e)})),V=W(y);return Object(j.jsx)(C,Object(i.a)({appear:o,in:u,nodeRef:R,onEnter:_,onEntered:B,onEntering:P,onExit:D,onExited:V,onExiting:I,timeout:k},M,{children:function(e,t){return r.cloneElement(O,Object(i.a)({style:Object(i.a)({transform:"scale(0)",visibility:"exited"!==e||u?void 0:"hidden"},h[e],T,O.props.style),ref:N},t))}}))}));t.a=O},2508:function(e,t,n){"use strict";var i=n(630);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=i(n(631)),r=n(0),c=(0,a.default)((0,r.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");t.default=c},2612:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return k}));var i=n(1555),a=n.n(i),r=n(2508),c=n.n(r),o=n(7),s=n(409),l=n(1295),d=n(1281),j=n(1300),b=n(1286),h=n(1285),x=n(410),O=n(1195),m=n(1702),u=n(23),p=n(412),f=n(1314),v=n(37),g=n(1318),y=n(0),A="\nAliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus.\nPraesent non nunc mollis, fermentum neque at, semper arcu.\nNullam eget est sed sem iaculis gravida eget vitae justo.\n",T=Object(o.a)(p.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),E={display:"flex",alignItems:"center",justifyContent:"center",flexWrap:"wrap","& > *":{m:"8px !important"}};function k(){return Object(y.jsxs)(T,{title:"Components: Tooltip | Minimal-UI",children:[Object(y.jsx)(s.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(y.jsx)(l.a,{maxWidth:"lg",children:Object(y.jsx)(f.a,{heading:"Tooltip",links:[{name:"Components",href:u.d.components},{name:"Tooltip"}],moreLink:"https://mui.com/components/tooltips"})})}),Object(y.jsx)(l.a,{maxWidth:"lg",children:Object(y.jsxs)(d.a,{container:!0,spacing:3,children:[Object(y.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(y.jsxs)(g.a,{title:"Simple",sx:E,children:[Object(y.jsx)(j.a,{title:"Delete",children:Object(y.jsx)(b.a,{children:Object(y.jsx)(c.a,{})})}),Object(y.jsx)(j.a,{title:"Add",children:Object(y.jsx)(h.a,{children:Object(y.jsx)(a.a,{})})}),Object(y.jsx)(j.a,{title:"Delete",children:Object(y.jsx)(v.e,{color:"info",children:Object(y.jsx)(c.a,{})})}),Object(y.jsx)(j.a,{title:"Add",children:Object(y.jsx)(v.c,{color:"info",children:Object(y.jsx)(a.a,{})})}),Object(y.jsx)(j.a,{title:"Add",children:Object(y.jsx)(x.a,{variant:"outlined",color:"info",children:"Button"})})]})}),Object(y.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(y.jsx)(g.a,{title:"Arrow",sx:E,children:Object(y.jsx)(j.a,{title:"Add",arrow:!0,children:Object(y.jsx)(h.a,{children:Object(y.jsx)(a.a,{})})})})}),Object(y.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(y.jsxs)(g.a,{title:"Variable Width",sx:E,children:[Object(y.jsx)(j.a,{title:A,children:Object(y.jsx)(x.a,{color:"inherit",children:"Default Width [300px]"})}),Object(y.jsx)(j.a,{title:A,sx:{maxWidth:500},children:Object(y.jsx)(x.a,{color:"inherit",children:"Custom Width [500px]"})}),Object(y.jsx)(j.a,{title:A,sx:{maxWidth:"none"},children:Object(y.jsx)(x.a,{color:"inherit",children:"No wrapping"})})]})}),Object(y.jsx)(d.a,{item:!0,xs:12,md:6,children:Object(y.jsxs)(g.a,{title:"Transitions",sx:E,children:[Object(y.jsx)(j.a,{title:"Add",children:Object(y.jsx)(x.a,{color:"inherit",children:"Grow"})}),Object(y.jsx)(j.a,{TransitionComponent:O.a,TransitionProps:{timeout:600},title:"Add",children:Object(y.jsx)(x.a,{color:"inherit",children:"Fade"})}),Object(y.jsx)(j.a,{TransitionComponent:m.a,title:"Add",children:Object(y.jsx)(x.a,{color:"inherit",children:"Zoom"})})]})}),Object(y.jsx)(d.a,{item:!0,xs:12,children:Object(y.jsx)(g.a,{title:"Positioned",sx:E,children:Object(y.jsxs)(s.a,{sx:{maxWidth:560,margin:"auto"},children:[Object(y.jsx)(d.a,{container:!0,children:Object(y.jsxs)(d.a,{item:!0,children:[Object(y.jsx)(j.a,{title:"Add",placement:"top-start",children:Object(y.jsx)(x.a,{color:"inherit",children:"top-start"})}),Object(y.jsx)(j.a,{title:"Add",placement:"top",children:Object(y.jsx)(x.a,{color:"inherit",children:"top"})}),Object(y.jsx)(j.a,{title:"Add",placement:"top-end",children:Object(y.jsx)(x.a,{color:"inherit",children:"top-end"})})]})}),Object(y.jsxs)(d.a,{container:!0,children:[Object(y.jsxs)(d.a,{item:!0,xs:6,children:[Object(y.jsx)(j.a,{title:"Add",placement:"left-start",children:Object(y.jsx)(x.a,{color:"inherit",children:"left-start"})}),Object(y.jsx)("br",{}),Object(y.jsx)(j.a,{title:"Add",placement:"left",children:Object(y.jsx)(x.a,{color:"inherit",children:"left"})}),Object(y.jsx)("br",{}),Object(y.jsx)(j.a,{title:"Add",placement:"left-end",children:Object(y.jsx)(x.a,{color:"inherit",children:"left-end"})})]}),Object(y.jsxs)(d.a,{item:!0,container:!0,xs:6,alignItems:"flex-end",direction:"column",children:[Object(y.jsx)(d.a,{item:!0,children:Object(y.jsx)(j.a,{title:"Add",placement:"right-start",children:Object(y.jsx)(x.a,{color:"inherit",children:"right-start"})})}),Object(y.jsx)(d.a,{item:!0,children:Object(y.jsx)(j.a,{title:"Add",placement:"right",children:Object(y.jsx)(x.a,{color:"inherit",children:"right"})})}),Object(y.jsx)(d.a,{item:!0,children:Object(y.jsx)(j.a,{title:"Add",placement:"right-end",children:Object(y.jsx)(x.a,{color:"inherit",children:"right-end"})})})]})]}),Object(y.jsx)(d.a,{container:!0,children:Object(y.jsxs)(d.a,{item:!0,children:[Object(y.jsx)(j.a,{title:"Add",placement:"bottom-start",children:Object(y.jsx)(x.a,{color:"inherit",children:"bottom-start"})}),Object(y.jsx)(j.a,{title:"Add",placement:"bottom",children:Object(y.jsx)(x.a,{color:"inherit",children:"bottom"})}),Object(y.jsx)(j.a,{title:"Add",placement:"bottom-end",children:Object(y.jsx)(x.a,{color:"inherit",children:"bottom-end"})})]})})]})})})]})})]})}}}]);
//# sourceMappingURL=67.795a4a36.chunk.js.map