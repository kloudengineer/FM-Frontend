(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[70],{1314:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(4),c=r(40),a=r(24),i=r(409),o=r(206),s=r(1284),l=r(37),j=r(0),b=["links","action","heading","moreLink","sx"];function d(e){var t=e.links,r=e.action,d=e.heading,u=e.moreLink,x=void 0===u?[]:u,p=e.sx,h=Object(c.a)(e,b);return Object(j.jsxs)(i.a,{sx:Object(n.a)({mb:5},p),children:[Object(j.jsxs)(i.a,{sx:{display:"flex",alignItems:"center"},children:[Object(j.jsxs)(i.a,{sx:{flexGrow:1},children:[Object(j.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:d}),Object(j.jsx)(l.b,Object(n.a)({links:t},h))]}),r&&Object(j.jsx)(i.a,{sx:{flexShrink:0},children:r})]}),Object(j.jsx)(i.a,{sx:{mt:2},children:Object(a.isString)(x)?Object(j.jsx)(s.a,{href:x,target:"_blank",variant:"body2",children:x}):x.map((function(e){return Object(j.jsx)(s.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1315:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"d",(function(){return o})),r.d(t,"c",(function(){return s})),r.d(t,"e",(function(){return l})),r.d(t,"b",(function(){return j}));var n=r(24),c=r(1326),a=r.n(c);function i(e){return a()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function o(e){return a()(e/100).format("0.0%")}function s(e){return a()(e).format()}function l(e){return Object(n.replace)(a()(e).format("0.00a"),".00","")}function j(e){return a()(e).format("0.0 b")}},1630:function(e,t,r){"use strict";r.d(t,"a",(function(){return u}));var n=r(4),c=r(40),a=r(7),i=r(58),o=r(409),s=r(206),l=r(0),j=["colors","limit"],b=Object(a.a)(o.a)({display:"flex",alignItems:"center",justifyContent:"flex-end"}),d=Object(a.a)("div")((function(e){var t=e.theme;return{marginLeft:-4,borderRadius:"50%",width:t.spacing(2),height:t.spacing(2),border:"solid 2px ".concat(t.palette.background.paper),boxShadow:"inset -1px 1px 2px ".concat(Object(i.a)(t.palette.common.black,.24))}}));function u(e){var t=e.colors,r=e.limit,a=void 0===r?3:r,i=Object(c.a)(e,j),o=t.slice(0,a),u=t.length-a;return Object(l.jsxs)(b,Object(n.a)(Object(n.a)({component:"span"},i),{},{children:[o.map((function(e,t){return Object(l.jsx)(d,{sx:{bgcolor:e}},e+t)})),t.length>a&&Object(l.jsx)(s.a,{variant:"subtitle2",children:"+".concat(u)})]}))}},1634:function(e,t,r){"use strict";function n(e){var t;switch(e){case"#00AB55":t="Green";break;case"#000000":t="Black";break;case"#FFFFFF":t="White";break;case"#FFC0CB":t="Pink";break;case"#FF4842":t="Red";break;case"#1890FF":t="Blue";break;case"#94D82D":t="Greenyellow";break;case"#FFC107":t="Orange";break;default:t=e}return t}r.d(t,"a",(function(){return n}))},1636:function(e,t,r){"use strict";r.d(t,"a",(function(){return x}));var n=r(24),c=r(25),a=r(34),i=r(1637),o=r.n(i),s=r(7),l=r(1276),j=r(324),b=r(23),d=r(0),u=Object(s.a)(a.b)((function(e){var t=e.theme;return{zIndex:999,right:0,display:"flex",cursor:"pointer",position:"fixed",alignItems:"center",top:t.spacing(16),height:t.spacing(5),paddingLeft:t.spacing(2),paddingRight:t.spacing(2),paddingTop:t.spacing(1.25),boxShadow:t.customShadows.z20,color:t.palette.text.primary,backgroundColor:t.palette.background.paper,borderTopLeftRadius:t.shape.borderRadiusMd,borderBottomLeftRadius:t.shape.borderRadiusMd,transition:t.transitions.create("opacity"),"&:hover":{opacity:.72}}}));function x(){var e=Object(j.d)((function(e){return e.product})).checkout,t=Object(n.sum)(e.cart.map((function(e){return e.quantity})));return Object(d.jsx)(u,{to:b.b.eCommerce.checkout,children:Object(d.jsx)(l.a,{showZero:!0,badgeContent:t,color:"error",max:99,children:Object(d.jsx)(c.a,{icon:o.a,width:24,height:24})})})}},2638:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return Le}));var n=r(17),c=r.n(n),a=r(26),i=r(16),o=r(249),s=r(1),l=r(24),j=r(1206),b=r(1307),d=r(1295),u=r(206),x=r(1198),p=r(324),h=r(418),O=r(23),f=r(325),g=r(85),m=r(412),v=r(1314),w=r(4),F=r(25),y=r(1482),k=r(1770),C=r.n(k),R=r(7),S=r(54),B=r(1471),I=r(410),A=r(1634),D=r(0),z=Object(R.a)("div")({flexGrow:1,display:"flex",flexWrap:"wrap",alignItems:"center"}),W=Object(R.a)("div")((function(e){var t=e.theme;return{display:"flex",overflow:"hidden",alignItems:"stretch",margin:t.spacing(.5),borderRadius:t.shape.borderRadius,border:"solid 1px ".concat(t.palette.divider)}})),L=Object(R.a)((function(e){return Object(D.jsx)(u.a,Object(w.a)({component:"span",variant:"subtitle2"},e))}))((function(e){var t=e.theme;return{display:"flex",alignItems:"center",padding:t.spacing(0,1),color:t.palette.text.secondary,backgroundColor:t.palette.background.neutral,borderRight:"solid 1px ".concat(t.palette.divider)}}));function P(e){var t,r=e.formik,n=e.filters,c=e.isShowReset,a=e.isDefault,i=e.onResetFilter,o=Object(S.a)(),s=r.values,j=r.handleSubmit,b=r.setFieldValue,d=r.initialValues,u=n.gender,p=n.category,h=n.colors,O=n.priceRange,f=n.rating,g=s!==d&&!c;return Object(D.jsxs)(z,{children:[u.length>0&&Object(D.jsxs)(W,{children:[Object(D.jsx)(L,{children:"Gender:"}),Object(D.jsx)(x.a,{direction:"row",flexWrap:"wrap",sx:{p:.75},children:u.map((function(e){return Object(D.jsx)(B.a,{label:e,size:"small",onDelete:function(){return function(e){var t=Object(l.filter)(u,(function(t){return t!==e}));j(),b("gender",t)}(e)},sx:{m:.5}},e)}))})]}),"All"!==p&&Object(D.jsxs)(W,{children:[Object(D.jsx)(L,{children:"Category:"}),Object(D.jsx)(x.a,{direction:"row",flexWrap:"wrap",sx:{p:.75},children:Object(D.jsx)(B.a,{size:"small",label:p,onDelete:function(){j(),b("category","All")},sx:{m:.5}})})]}),h.length>0&&Object(D.jsxs)(W,{children:[Object(D.jsx)(L,{children:"Colors:"}),Object(D.jsx)(x.a,{direction:"row",flexWrap:"wrap",sx:{p:.75},children:h.map((function(e){return Object(D.jsx)(B.a,{label:Object(A.a)(e),size:"small",onDelete:function(){return function(e){var t=Object(l.filter)(h,(function(t){return t!==e}));j(),b("colors",t)}(e)},sx:Object(w.a)({m:.5,bgcolor:e,color:o.palette.getContrastText(e)},("#FFFFFF"===e||"#000000"===e)&&{border:"solid 1px ".concat(o.palette.grey[50032]),"& .MuiChip-deleteIcon":{color:"text.disabled"}})},e)}))})]}),O&&Object(D.jsxs)(W,{children:[Object(D.jsx)(L,{children:"Price:"}),Object(D.jsx)(x.a,{direction:"row",flexWrap:"wrap",sx:{p:.75},children:Object(D.jsx)(B.a,{size:"small",label:(t=O,"below"===t?"Below $25":"between"===t?"Between $25 - $75":"Above $75"),onDelete:function(){j(),b("priceRange","")},sx:{m:.5}})})]}),f&&Object(D.jsxs)(W,{children:[Object(D.jsx)(L,{children:"Rating:"}),Object(D.jsx)(x.a,{direction:"row",flexWrap:"wrap",sx:{p:.75},children:Object(D.jsx)(B.a,{size:"small",label:Object(y.a)(f),onDelete:function(){j(),b("rating","")},sx:{m:.5}})})]}),g&&!a&&Object(D.jsx)(I.a,{color:"error",size:"small",type:"button",onClick:i,startIcon:Object(D.jsx)(F.a,{icon:C.a}),children:"Clear All"})]})}var $=r(208),G=r.n($),M=r(1439),T=r.n(M),E=r(1292),V=r(1200),H=r(1211),N=r(1306),J=r(1274),U=r(1265),_=r(1271),q=r(1496),K=r(409),Z=r(37),Q=r(103),X=r(40),Y=r(1355),ee=r.n(Y),te=["sx"],re=["colors","onChecked","sx"];function ne(e){var t=e.sx,r=Object(X.a)(e,te);return Object(D.jsx)(K.a,Object(w.a)(Object(w.a)({sx:Object(w.a)({width:20,height:20,display:"flex",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center",bgcolor:"currentColor",transition:function(e){return e.transitions.create("all",{duration:e.transitions.duration.shortest})}},t)},r),{},{children:Object(D.jsx)(F.a,{icon:ee.a})}))}function ce(e){var t=e.colors,r=e.onChecked,n=e.sx,c=Object(X.a)(e,re);return Object(D.jsx)(K.a,{sx:n,children:t.map((function(e){var t="#FFFFFF"===e||"white"===e;return Object(D.jsx)(J.a,Object(w.a)({size:"small",value:e,color:"default",checked:r(e),icon:Object(D.jsx)(ne,{sx:Object(w.a)({},t&&{border:function(e){return"solid 1px ".concat(e.palette.divider)}})}),checkedIcon:Object(D.jsx)(ne,{sx:Object(w.a)({transform:"scale(1.4)","&:before":{opacity:.48,width:"100%",content:"''",height:"100%",borderRadius:"50%",position:"absolute",boxShadow:"4px 4px 8px 0 currentColor"},"& svg":{width:12,height:12,color:"common.white"}},t&&{border:function(e){return"solid 1px ".concat(e.palette.divider)},boxShadow:function(e){return"4px 4px 8px 0 ".concat(e.palette.grey[50024])},"& svg":{width:12,height:12,color:"common.black"}})}),sx:{color:e,"&:hover":{opacity:.72}}},c),e)}))})}var ae=["Men","Women","Kids"],ie=["All","Shose","Apparel","Accessories"],oe=["up4Star","up3Star","up2Star","up1Star"],se=[{value:"below",label:"Below $25"},{value:"between",label:"Between $25 - $75"},{value:"above",label:"Above $75"}],le=["#00AB55","#000000","#FFFFFF","#FFC0CB","#FF4842","#1890FF","#94D82D","#FFC107"];function je(e){var t=e.isOpenFilter,r=e.onResetFilter,n=e.onOpenFilter,c=e.onCloseFilter,a=e.formik,i=a.values,s=a.getFieldProps,l=a.handleChange;return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsx)(I.a,{disableRipple:!0,color:"inherit",endIcon:Object(D.jsx)(F.a,{icon:T.a}),onClick:n,children:"Filters\xa0"}),Object(D.jsx)(o.b,{value:a,children:Object(D.jsx)(o.a,{autoComplete:"off",noValidate:!0,children:Object(D.jsxs)(E.a,{anchor:"right",open:t,onClose:c,PaperProps:{sx:{width:280,border:"none",overflow:"hidden"}},children:[Object(D.jsxs)(x.a,{direction:"row",alignItems:"center",justifyContent:"space-between",sx:{px:1,py:2},children:[Object(D.jsx)(u.a,{variant:"subtitle1",sx:{ml:1},children:"Filters"}),Object(D.jsx)(Z.e,{onClick:c,children:Object(D.jsx)(F.a,{icon:G.a,width:20,height:20})})]}),Object(D.jsx)(V.a,{}),Object(D.jsx)(Q.a,{children:Object(D.jsxs)(x.a,{spacing:3,sx:{p:3},children:[Object(D.jsxs)("div",{children:[Object(D.jsx)(u.a,{variant:"subtitle1",gutterBottom:!0,children:"Gender"}),Object(D.jsx)(H.a,{children:ae.map((function(e){return Object(D.jsx)(N.a,{control:Object(D.jsx)(J.a,Object(w.a)(Object(w.a)({},s("gender")),{},{value:e,checked:i.gender.includes(e)})),label:e},e)}))})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)(u.a,{variant:"subtitle1",gutterBottom:!0,children:"Category"}),Object(D.jsx)(U.a,Object(w.a)(Object(w.a)({},s("category")),{},{children:ie.map((function(e){return Object(D.jsx)(N.a,{value:e,control:Object(D.jsx)(_.a,{}),label:e},e)}))}))]}),Object(D.jsxs)("div",{children:[Object(D.jsx)(u.a,{variant:"subtitle1",gutterBottom:!0,children:"Colour"}),Object(D.jsx)(ce,{name:"colors",colors:le,onChange:l,onChecked:function(e){return i.colors.includes(e)},sx:{maxWidth:144}})]}),Object(D.jsxs)("div",{children:[Object(D.jsx)(u.a,{variant:"subtitle1",gutterBottom:!0,children:"Price"}),Object(D.jsx)(U.a,Object(w.a)(Object(w.a)({},s("priceRange")),{},{children:se.map((function(e){return Object(D.jsx)(N.a,{value:e.value,control:Object(D.jsx)(_.a,{}),label:e.label},e.value)}))}))]}),Object(D.jsxs)("div",{children:[Object(D.jsx)(u.a,{variant:"subtitle1",gutterBottom:!0,children:"Rating"}),Object(D.jsx)(U.a,Object(w.a)(Object(w.a)({},s("rating")),{},{children:oe.map((function(e,t){return Object(D.jsx)(N.a,{value:e,control:Object(D.jsx)(_.a,{disableRipple:!0,color:"default",icon:Object(D.jsx)(q.a,{readOnly:!0,value:4-t}),checkedIcon:Object(D.jsx)(q.a,{readOnly:!0,value:4-t}),sx:{"&:hover":{bgcolor:"transparent"}}}),label:"& Up",sx:Object(w.a)({my:.5,borderRadius:1,"&:hover":{opacity:.48}},i.rating.includes(e)&&{bgcolor:"action.selected"})},e)}))}))]})]})}),Object(D.jsx)(K.a,{sx:{p:3},children:Object(D.jsx)(I.a,{fullWidth:!0,size:"large",type:"submit",color:"inherit",variant:"outlined",onClick:r,startIcon:Object(D.jsx)(F.a,{icon:C.a}),children:"Clear All"})})]})})})]})}var be=r(1249),de=r(34),ue=r(1308),xe=r(1284),pe=r(1315),he=r(252),Oe=r(1630),fe=Object(R.a)("img")({top:0,width:"100%",height:"100%",objectFit:"cover",position:"absolute"});function ge(e){var t=e.product,r=t.name,n=t.cover,c=t.price,a=t.colors,i=t.status,o=t.priceSale,s="".concat(O.b.eCommerce.root,"/product/").concat(Object(be.a)(r));return Object(D.jsxs)(ue.a,{children:[Object(D.jsxs)(K.a,{sx:{pt:"100%",position:"relative"},children:[i&&Object(D.jsx)(he.a,{variant:"filled",color:"sale"===i?"error":"info",sx:{top:16,right:16,zIndex:9,position:"absolute",textTransform:"uppercase"},children:i}),Object(D.jsx)(fe,{alt:r,src:n})]}),Object(D.jsxs)(x.a,{spacing:2,sx:{p:3},children:[Object(D.jsx)(xe.a,{to:s,color:"inherit",component:de.b,children:Object(D.jsx)(u.a,{variant:"subtitle2",noWrap:!0,children:r})}),Object(D.jsxs)(x.a,{direction:"row",alignItems:"center",justifyContent:"space-between",children:[Object(D.jsx)(Oe.a,{colors:a}),Object(D.jsxs)(u.a,{variant:"subtitle1",children:[Object(D.jsx)(u.a,{component:"span",variant:"body1",sx:{color:"text.disabled",textDecoration:"line-through"},children:o&&Object(pe.a)(o)}),"\xa0",Object(pe.a)(c)]})]})]})]})}var me=r(19),ve=r(1281),we=r(1497),Fe=["products","isLoad"],ye=Object(D.jsx)(D.Fragment,{children:Object(me.a)(Array(12)).map((function(e,t){return Object(D.jsx)(ve.a,{item:!0,xs:12,sm:6,md:3,children:Object(D.jsx)(we.a,{variant:"rectangular",width:"100%",sx:{paddingTop:"115%",borderRadius:2}})},t)}))});function ke(e){var t=e.products,r=e.isLoad,n=Object(X.a)(e,Fe);return Object(D.jsxs)(ve.a,Object(w.a)(Object(w.a)({container:!0,spacing:3},n),{},{children:[t.map((function(e){return Object(D.jsx)(ve.a,{item:!0,xs:12,sm:6,md:3,children:Object(D.jsx)(ge,{product:e})},e.id)})),r&&ye]}))}var Ce=r(1979),Re=r.n(Ce),Se=r(1635),Be=r.n(Se),Ie=r(625),Ae=r(1298),De=[{value:"featured",label:"Featured"},{value:"newest",label:"Newest"},{value:"priceDesc",label:"Price: High-Low"},{value:"priceAsc",label:"Price: Low-High"}];function ze(){var e,t=Object(p.c)(),r=Object(s.useState)(null),n=Object(i.a)(r,2),c=n[0],a=n[1],o=Object(p.d)((function(e){return e.product})).sortBy,l=function(){a(null)};return Object(D.jsxs)(D.Fragment,{children:[Object(D.jsxs)(I.a,{color:"inherit",disableRipple:!0,onClick:function(e){a(e.currentTarget)},endIcon:Object(D.jsx)(F.a,{icon:c?Re.a:Be.a}),children:["Sort By:\xa0",Object(D.jsx)(u.a,{component:"span",variant:"subtitle2",sx:{color:"text.secondary"},children:(e=o,"featured"===e?"Featured":"newest"===e?"Newest":"priceDesc"===e?"Price: High-Low":"Price: Low-High")})]}),Object(D.jsx)(Ie.a,{keepMounted:!0,anchorEl:c,open:Boolean(c),onClose:l,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},children:De.map((function(e){return Object(D.jsx)(Ae.a,{selected:e.value===o,onClick:function(){return r=e.value,l(),void t(Object(h.r)(r));var r},sx:{typography:"body2"},children:e.label},e.value)}))})]})}var We=r(1636);function Le(){var e=Object(g.a)().themeStretch,t=Object(p.c)(),r=Object(s.useState)(!1),n=Object(i.a)(r,2),w=n[0],F=n[1],y=Object(p.d)((function(e){return e.product})),k=y.products,C=y.sortBy,R=y.filters,S=function(e,t,r){return"featured"===t&&(e=Object(l.orderBy)(e,["sold"],["desc"])),"newest"===t&&(e=Object(l.orderBy)(e,["createdAt"],["desc"])),"priceDesc"===t&&(e=Object(l.orderBy)(e,["price"],["desc"])),"priceAsc"===t&&(e=Object(l.orderBy)(e,["price"],["asc"])),r.gender.length>0&&(e=Object(l.filter)(e,(function(e){return Object(l.includes)(r.gender,e.gender)}))),"All"!==r.category&&(e=Object(l.filter)(e,(function(e){return e.category===r.category}))),r.colors.length>0&&(e=Object(l.filter)(e,(function(e){return e.colors.some((function(e){return r.colors.includes(e)}))}))),r.priceRange&&(e=Object(l.filter)(e,(function(e){return"below"===r.priceRange?e.price<25:"between"===r.priceRange?e.price>=25&&e.price<=75:e.price>75}))),r.rating&&(e=Object(l.filter)(e,(function(e){var t;return e.totalRating>("up4Star"===(t=r.rating)?4:"up3Star"===t?3:"up2Star"===t?2:1)}))),e}(k,C,R),B=Object(o.d)({initialValues:{gender:R.gender,category:R.category,colors:R.colors,priceRange:R.priceRange,rating:R.rating},onSubmit:function(){var e=Object(a.a)(c.a.mark((function e(t,r){var n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.setSubmitting,e.prev=1,e.next=4,Object(f.a)(500);case 4:n(!1),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0),n(!1);case 11:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t,r){return e.apply(this,arguments)}}()}),I=B.values,A=B.resetForm,z=B.handleSubmit,W=B.isSubmitting,L=B.initialValues,$=!I.priceRange&&!I.rating&&0===I.gender.length&&0===I.colors.length&&"All"===I.category;Object(s.useEffect)((function(){t(Object(h.l)())}),[t]),Object(s.useEffect)((function(){t(Object(h.i)(I))}),[t,I]);var G=function(){z(),A()};return Object(D.jsxs)(m.a,{title:"Ecommerce: Shop | Minimal-UI",children:[I&&Object(D.jsx)(j.a,{open:W,sx:{zIndex:9999},children:Object(D.jsx)(b.a,{})}),Object(D.jsxs)(d.a,{maxWidth:!e&&"lg",children:[Object(D.jsx)(v.a,{heading:"Shop",links:[{name:"Dashboard",href:O.b.root},{name:"E-Commerce",href:O.b.eCommerce.root},{name:"Shop"}]}),!$&&Object(D.jsxs)(u.a,{gutterBottom:!0,children:[Object(D.jsx)(u.a,{component:"span",variant:"subtitle1",children:S.length}),"\xa0Products found"]}),Object(D.jsxs)(x.a,{direction:"row",flexWrap:"wrap-reverse",alignItems:"center",justifyContent:"flex-end",sx:{mb:5},children:[Object(D.jsx)(P,{filters:R,formik:B,isShowReset:w,onResetFilter:G,isDefault:$}),Object(D.jsxs)(x.a,{direction:"row",spacing:1,flexShrink:0,sx:{my:1},children:[Object(D.jsx)(je,{formik:B,isOpenFilter:w,onResetFilter:G,onOpenFilter:function(){F(!0)},onCloseFilter:function(){F(!1)}}),Object(D.jsx)(ze,{})]})]}),Object(D.jsx)(ke,{products:S,isLoad:!S&&!L}),Object(D.jsx)(We.a,{})]})]})}}}]);
//# sourceMappingURL=70.7e6425aa.chunk.js.map