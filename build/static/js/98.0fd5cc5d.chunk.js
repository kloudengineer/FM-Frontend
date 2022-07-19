(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[98],{1314:function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a(4),r=a(40),o=a(24),i=a(409),c=a(206),s=a(1284),l=a(37),d=a(0),u=["links","action","heading","moreLink","sx"];function b(e){var t=e.links,a=e.action,b=e.heading,j=e.moreLink,p=void 0===j?[]:j,h=e.sx,m=Object(r.a)(e,u);return Object(d.jsxs)(i.a,{sx:Object(n.a)({mb:5},h),children:[Object(d.jsxs)(i.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(d.jsx)(c.a,{variant:"h4",gutterBottom:!0,children:b}),Object(d.jsx)(l.b,Object(n.a)({links:t},m))]}),a&&Object(d.jsx)(i.a,{sx:{flexShrink:0},children:a})]}),Object(d.jsx)(i.a,{sx:{mt:2},children:Object(o.isString)(p)?Object(d.jsx)(s.a,{href:p,target:"_blank",variant:"body2",children:p}):p.map((function(e){return Object(d.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1318:function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return d}));var n=a(4),r=a(206),o=a(1308),i=a(1323),c=a(409),s=a(0);function l(e){var t=e.title;return Object(s.jsx)(r.a,{variant:"overline",component:"p",gutterBottom:!0,sx:{color:"text.secondary"},children:t})}function d(e){var t=e.title,a=e.sx,r=e.children;return Object(s.jsxs)(o.a,{sx:{overflow:"unset",position:"unset",width:"100%"},children:[t&&Object(s.jsx)(i.a,{title:t}),Object(s.jsx)(c.a,{sx:Object(n.a)({p:3,minHeight:180},a),children:r})]})}},1323:function(e,t,a){"use strict";var n=a(6),r=a(8),o=a(3),i=a(1),c=(a(10),a(12)),s=a(242),l=a(206),d=a(13),u=a(7),b=a(204),j=a(243);function p(e){return Object(b.a)("MuiCardHeader",e)}var h=Object(j.a)("MuiCardHeader",["root","avatar","action","content","title","subheader"]),m=a(0),x=["action","avatar","className","component","disableTypography","subheader","subheaderTypographyProps","title","titleTypographyProps"],v=Object(u.a)("div",{name:"MuiCardHeader",slot:"Root",overridesResolver:function(e,t){var a;return Object(o.a)((a={},Object(n.a)(a,"& .".concat(h.title),t.title),Object(n.a)(a,"& .".concat(h.subheader),t.subheader),a),t.root)}})({display:"flex",alignItems:"center",padding:16}),O=Object(u.a)("div",{name:"MuiCardHeader",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})({display:"flex",flex:"0 0 auto",marginRight:16}),f=Object(u.a)("div",{name:"MuiCardHeader",slot:"Action",overridesResolver:function(e,t){return t.action}})({flex:"0 0 auto",alignSelf:"flex-start",marginTop:-4,marginRight:-8,marginBottom:-4}),g=Object(u.a)("div",{name:"MuiCardHeader",slot:"Content",overridesResolver:function(e,t){return t.content}})({flex:"1 1 auto"}),y=i.forwardRef((function(e,t){var a=Object(d.a)({props:e,name:"MuiCardHeader"}),n=a.action,i=a.avatar,u=a.className,b=a.component,j=void 0===b?"div":b,h=a.disableTypography,y=void 0!==h&&h,k=a.subheader,C=a.subheaderTypographyProps,w=a.title,T=a.titleTypographyProps,H=Object(r.a)(a,x),M=Object(o.a)({},a,{component:j,disableTypography:y}),P=function(e){var t=e.classes;return Object(s.a)({root:["root"],avatar:["avatar"],action:["action"],content:["content"],title:["title"],subheader:["subheader"]},p,t)}(M),R=w;null==R||R.type===l.a||y||(R=Object(m.jsx)(l.a,Object(o.a)({variant:i?"body2":"h5",className:P.title,component:"span",display:"block"},T,{children:R})));var S=k;return null==S||S.type===l.a||y||(S=Object(m.jsx)(l.a,Object(o.a)({variant:i?"body2":"body1",className:P.subheader,color:"text.secondary",component:"span",display:"block"},C,{children:S}))),Object(m.jsxs)(v,Object(o.a)({className:Object(c.a)(P.root,u),as:j,ref:t,ownerState:M},H,{children:[i&&Object(m.jsx)(O,{className:P.avatar,ownerState:M,children:i}),Object(m.jsxs)(g,{className:P.content,ownerState:M,children:[R,S]}),n&&Object(m.jsx)(f,{className:P.action,ownerState:M,children:n})]}))}));t.a=y},2603:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return O}));var n=a(16),r=a(1),o=a(7),i=a(409),c=a(1295),s=a(1198),l=a(410),d=a(1208),u=a(206),b=a(23),j=a(412),p=a(1314),h=a(1318),m=a(0),x=Object(o.a)(j.a)((function(e){var t=e.theme;return{paddingTop:t.spacing(11),paddingBottom:t.spacing(15)}})),v={display:"flex",alignItems:"center",justifyContent:"center"};function O(){var e=Object(r.useState)(null),t=Object(n.a)(e,2),a=t[0],o=t[1],j=Object(r.useState)(null),O=Object(n.a)(j,2),f=O[0],g=O[1],y=function(){g(null)};return Object(m.jsxs)(x,{title:"Components: Popover | Minimal-UI",children:[Object(m.jsx)(i.a,{sx:{pt:6,pb:1,mb:10,bgcolor:function(e){return"light"===e.palette.mode?"grey.200":"grey.800"}},children:Object(m.jsx)(c.a,{maxWidth:"lg",children:Object(m.jsx)(p.a,{heading:"Popover",links:[{name:"Components",href:b.d.components},{name:"Popover"}],moreLink:"https://mui.com/components/popover"})})}),Object(m.jsx)(c.a,{maxWidth:"lg",children:Object(m.jsxs)(s.a,{spacing:3,direction:{xs:"column",md:"row"},children:[Object(m.jsxs)(h.a,{title:"Click",sx:v,children:[Object(m.jsx)(l.a,{variant:"contained",onClick:function(e){o(e.currentTarget)},children:"Open Popover"}),Object(m.jsx)(d.a,{open:Boolean(a),anchorEl:a,onClose:function(){o(null)},anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},children:Object(m.jsxs)(i.a,{sx:{p:2,maxWidth:280},children:[Object(m.jsx)(u.a,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),Object(m.jsx)(u.a,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]}),Object(m.jsxs)(h.a,{title:"Hover",sx:v,children:[Object(m.jsx)(u.a,{"aria-owns":f?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(e){g(e.currentTarget)},onMouseLeave:y,children:"Hover with a Popover."}),Object(m.jsx)(d.a,{id:"mouse-over-popover",open:Boolean(f),anchorEl:f,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:y,disableRestoreFocus:!0,sx:{pointerEvents:"none"},children:Object(m.jsxs)(i.a,{sx:{p:2,maxWidth:280},children:[Object(m.jsx)(u.a,{variant:"subtitle1",gutterBottom:!0,children:"Etiam feugiat lorem non metus"}),Object(m.jsx)(u.a,{variant:"body2",sx:{color:"text.secondary"},children:"Fusce vulputate eleifend sapien. Curabitur at lacus ac velit ornare lobortis."})]})})]})]})})]})}}}]);
//# sourceMappingURL=98.0fd5cc5d.chunk.js.map