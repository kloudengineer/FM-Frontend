(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[82],{1314:function(e,a,o){"use strict";o.d(a,"a",(function(){return h}));var n=o(4),l=o(40),t=o(24),r=o(409),c=o(206),i=o(1284),d=o(37),b=o(0),s=["links","action","heading","moreLink","sx"];function h(e){var a=e.links,o=e.action,h=e.heading,p=e.moreLink,u=void 0===p?[]:p,j=e.sx,m=Object(l.a)(e,s);return Object(b.jsxs)(r.a,{sx:Object(n.a)({mb:5},j),children:[Object(b.jsxs)(r.a,{sx:{display:"flex",alignItems:"center"},children:[Object(b.jsxs)(r.a,{sx:{flexGrow:1},children:[Object(b.jsx)(c.a,{variant:"h4",gutterBottom:!0,children:h}),Object(b.jsx)(d.b,Object(n.a)({links:a},m))]}),o&&Object(b.jsx)(r.a,{sx:{flexShrink:0},children:o})]}),Object(b.jsx)(r.a,{sx:{mt:2},children:Object(t.isString)(u)?Object(b.jsx)(i.a,{href:u,target:"_blank",variant:"body2",children:u}):u.map((function(e){return Object(b.jsx)(i.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1315:function(e,a,o){"use strict";o.d(a,"a",(function(){return r})),o.d(a,"d",(function(){return c})),o.d(a,"c",(function(){return i})),o.d(a,"e",(function(){return d})),o.d(a,"b",(function(){return b}));var n=o(24),l=o(1326),t=o.n(l);function r(e){return t()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function c(e){return t()(e/100).format("0.0%")}function i(e){return t()(e).format()}function d(e){return Object(n.replace)(t()(e).format("0.00a"),".00","")}function b(e){return t()(e).format("0.0 b")}},1383:function(e,a,o){"use strict";o.d(a,"b",(function(){return N})),o.d(a,"c",(function(){return U})),o.d(a,"a",(function(){return z}));var n=o(4),l=o(40),t=o(6),r=o(24),c=o(25),i=o(1340),d=o(419),b=o.n(d),s=o(208),h=o.n(s),p=o(1278),u=o(1267),j=o(7),m=o(58),x=o(629),O=o(409),g=o(206),v=o(1289),f=o(1287),y=o(1260),S=o(1261),C=o(1288),M=o(1198),R=o(410),w=o(1315),A=o(37),I=o(207),B=o(413),T=o(0),G=["error","showPreview","files","onRemove","onRemoveAll","sx"],P=Object(j.a)("div")((function(e){var a=e.theme;return Object(t.a)({outline:"none",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:a.spacing(5,1),borderRadius:a.shape.borderRadius,backgroundColor:a.palette.background.neutral,border:"1px dashed ".concat(a.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},a.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));function N(e){var a=e.error,o=e.showPreview,t=void 0!==o&&o,d=e.files,s=e.onRemove,j=e.onRemoveAll,N=e.sx,k=Object(l.a)(e,G),D=d.length>0,U=Object(i.a)(Object(n.a)({},k)),F=U.getRootProps,L=U.getInputProps,E=U.isDragActive,K=U.isDragReject,V=U.fileRejections,W=function(){return Object(T.jsx)(x.a,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:function(e){return Object(m.a)(e.palette.error.main,.08)}},children:V.map((function(e){var a=e.file,o=e.errors,n=a.path,l=a.size;return Object(T.jsxs)(O.a,{sx:{my:1},children:[Object(T.jsxs)(g.a,{variant:"subtitle2",noWrap:!0,children:[n," - ",Object(w.b)(l)]}),o.map((function(e){return Object(T.jsxs)(g.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},n)}))})};return Object(T.jsxs)(O.a,{sx:Object(n.a)({width:"100%"},N),children:[Object(T.jsxs)(P,Object(n.a)(Object(n.a)({},F()),{},{sx:Object(n.a)(Object(n.a)({},E&&{opacity:.72}),(K||a)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),children:[Object(T.jsx)("input",Object(n.a)({},L())),Object(T.jsx)(B.p,{sx:{width:220}}),Object(T.jsxs)(O.a,{sx:{p:3,ml:{md:2}},children:[Object(T.jsx)(g.a,{gutterBottom:!0,variant:"h5",children:"Drop or Select file"}),Object(T.jsxs)(g.a,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click\xa0",Object(T.jsx)(g.a,{variant:"body2",component:"span",sx:{color:"primary.main",textDecoration:"underline"},children:"browse"}),"\xa0thorough your machine"]})]})]})),V.length>0&&Object(T.jsx)(W,{}),Object(T.jsx)(v.a,{disablePadding:!0,sx:Object(n.a)({},D&&{my:3}),children:Object(T.jsx)(p.a,{children:d.map((function(e){var a=e.name,o=e.size,l=e.preview,i=Object(r.isString)(e)?e:a;return t?Object(T.jsxs)(f.a,Object(n.a)(Object(n.a)({component:u.a.div},I.w),{},{sx:{p:0,m:.5,width:80,height:80,borderRadius:1.5,overflow:"hidden",position:"relative",display:"inline-flex"},children:[Object(T.jsx)(x.a,{variant:"outlined",component:"img",src:Object(r.isString)(e)?e:l,sx:{width:"100%",height:"100%",objectFit:"cover",position:"absolute"}}),Object(T.jsx)(O.a,{sx:{top:6,right:6,position:"absolute"},children:Object(T.jsx)(A.e,{size:"small",onClick:function(){return s(e)},sx:{p:"2px",color:"common.white",bgcolor:function(e){return Object(m.a)(e.palette.grey[900],.72)},"&:hover":{bgcolor:function(e){return Object(m.a)(e.palette.grey[900],.48)}}},children:Object(T.jsx)(c.a,{icon:h.a})})})]}),i):Object(T.jsxs)(f.a,Object(n.a)(Object(n.a)({component:u.a.div},I.w),{},{sx:{my:1,py:.75,px:2,borderRadius:1,border:function(e){return"solid 1px ".concat(e.palette.divider)},bgcolor:"background.paper"},children:[Object(T.jsx)(y.a,{children:Object(T.jsx)(c.a,{icon:b.a,width:28,height:28})}),Object(T.jsx)(S.a,{primary:Object(r.isString)(e)?e:a,secondary:Object(r.isString)(e)?"":Object(w.b)(o),primaryTypographyProps:{variant:"subtitle2"},secondaryTypographyProps:{variant:"caption"}}),Object(T.jsx)(C.a,{children:Object(T.jsx)(A.e,{edge:"end",size:"small",onClick:function(){return s(e)},children:Object(T.jsx)(c.a,{icon:h.a})})})]}),i)}))})}),D&&Object(T.jsxs)(M.a,{direction:"row",justifyContent:"flex-end",children:[Object(T.jsx)(R.a,{onClick:j,sx:{mr:1.5},children:"Remove all"}),Object(T.jsx)(R.a,{variant:"contained",children:"Upload files"})]})]})}var k=["error","file","sx"],D=Object(j.a)("div")((function(e){var a=e.theme;return Object(t.a)({outline:"none",display:"flex",overflow:"hidden",textAlign:"center",position:"relative",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:a.spacing(5,0),borderRadius:a.shape.borderRadius,transition:a.transitions.create("padding"),backgroundColor:a.palette.background.neutral,border:"1px dashed ".concat(a.palette.grey[50032]),"&:hover":{opacity:.72,cursor:"pointer"}},a.breakpoints.up("md"),{textAlign:"left",flexDirection:"row"})}));function U(e){var a=e.error,o=e.file,t=e.sx,c=Object(l.a)(e,k),d=Object(i.a)(Object(n.a)({multiple:!1},c)),b=d.getRootProps,s=d.getInputProps,h=d.isDragActive,p=d.isDragReject,u=d.fileRejections,j=function(){return Object(T.jsx)(x.a,{variant:"outlined",sx:{py:1,px:2,mt:3,borderColor:"error.light",bgcolor:function(e){return Object(m.a)(e.palette.error.main,.08)}},children:u.map((function(e){var a=e.file,o=e.errors,n=a.path,l=a.size;return Object(T.jsxs)(O.a,{sx:{my:1},children:[Object(T.jsxs)(g.a,{variant:"subtitle2",noWrap:!0,children:[n," - ",Object(w.b)(l)]}),o.map((function(e){return Object(T.jsxs)(g.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},n)}))})};return Object(T.jsxs)(O.a,{sx:Object(n.a)({width:"100%"},t),children:[Object(T.jsxs)(D,Object(n.a)(Object(n.a)({},b()),{},{sx:Object(n.a)(Object(n.a)(Object(n.a)({},h&&{opacity:.72}),(p||a)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),o&&{padding:"12% 0"}),children:[Object(T.jsx)("input",Object(n.a)({},s())),Object(T.jsx)(B.p,{sx:{width:220}}),Object(T.jsxs)(O.a,{sx:{p:3,ml:{md:2}},children:[Object(T.jsx)(g.a,{gutterBottom:!0,variant:"h5",children:"Drop or Select file"}),Object(T.jsxs)(g.a,{variant:"body2",sx:{color:"text.secondary"},children:["Drop files here or click\xa0",Object(T.jsx)(g.a,{variant:"body2",component:"span",sx:{color:"primary.main",textDecoration:"underline"},children:"browse"}),"\xa0thorough your machine"]})]}),o&&Object(T.jsx)(O.a,{component:"img",alt:"file preview",src:Object(r.isString)(o)?o:o.preview,sx:{top:8,borderRadius:1,objectFit:"cover",position:"absolute",width:"calc(100% - 16px)",height:"calc(100% - 16px)"}})]})),u.length>0&&Object(T.jsx)(j,{})]})}var F=o(1401),L=o.n(F),E=["error","file","caption","sx"],K=Object(j.a)("div")((function(e){var a=e.theme;return{width:144,height:144,margin:"auto",borderRadius:"50%",padding:a.spacing(1),border:"1px dashed ".concat(a.palette.grey[50032])}})),V=Object(j.a)("div")({zIndex:0,width:"100%",height:"100%",outline:"none",display:"flex",overflow:"hidden",borderRadius:"50%",position:"relative",alignItems:"center",justifyContent:"center","& > *":{width:"100%",height:"100%"},"&:hover":{cursor:"pointer","& .placeholder":{zIndex:9}}}),W=Object(j.a)("div")((function(e){var a=e.theme;return{display:"flex",position:"absolute",alignItems:"center",flexDirection:"column",justifyContent:"center",color:a.palette.text.secondary,backgroundColor:a.palette.background.neutral,transition:a.transitions.create("opacity",{easing:a.transitions.easing.easeInOut,duration:a.transitions.duration.shorter}),"&:hover":{opacity:.72}}}));function z(e){var a=e.error,o=e.file,t=e.caption,d=e.sx,b=Object(l.a)(e,E),s=Object(i.a)(Object(n.a)({multiple:!1},b)),h=s.getRootProps,p=s.getInputProps,u=s.isDragActive,j=s.isDragReject,v=s.fileRejections,f=function(){return Object(T.jsx)(x.a,{variant:"outlined",sx:{py:1,px:2,my:2,borderColor:"error.light",bgcolor:function(e){return Object(m.a)(e.palette.error.main,.08)}},children:v.map((function(e){var a=e.file,o=e.errors,n=a.path,l=a.size;return Object(T.jsxs)(O.a,{sx:{my:1},children:[Object(T.jsxs)(g.a,{variant:"subtitle2",noWrap:!0,children:[n," - ",Object(w.b)(l)]}),o.map((function(e){return Object(T.jsxs)(g.a,{variant:"caption",component:"p",children:["- ",e.message]},e.code)}))]},n)}))})};return Object(T.jsxs)(T.Fragment,{children:[Object(T.jsx)(K,{sx:d,children:Object(T.jsxs)(V,Object(n.a)(Object(n.a)({},h()),{},{sx:Object(n.a)(Object(n.a)({},u&&{opacity:.72}),(j||a)&&{color:"error.main",borderColor:"error.light",bgcolor:"error.lighter"}),children:[Object(T.jsx)("input",Object(n.a)({},p())),o&&Object(T.jsx)(O.a,{component:"img",alt:"avatar",src:Object(r.isString)(o)?o:o.preview,sx:{zIndex:8,objectFit:"cover"}}),Object(T.jsxs)(W,{className:"placeholder",sx:Object(n.a)({},o&&{opacity:0,color:"common.white",bgcolor:"grey.900","&:hover":{opacity:.72}}),children:[Object(T.jsx)(O.a,{component:c.a,icon:L.a,sx:{width:24,height:24,mb:1}}),Object(T.jsx)(g.a,{variant:"caption",children:o?"Update photo":"Upload photo"})]})]}))}),t,v.length>0&&Object(T.jsx)(f,{})]})}},1705:function(e,a,o){"use strict";a.a=[{code:"AD",label:"Andorra",phone:"376"},{code:"AE",label:"United Arab Emirates",phone:"971"},{code:"AF",label:"Afghanistan",phone:"93"},{code:"AG",label:"Antigua and Barbuda",phone:"1-268"},{code:"AI",label:"Anguilla",phone:"1-264"},{code:"AL",label:"Albania",phone:"355"},{code:"AM",label:"Armenia",phone:"374"},{code:"AO",label:"Angola",phone:"244"},{code:"AQ",label:"Antarctica",phone:"672"},{code:"AR",label:"Argentina",phone:"54"},{code:"AS",label:"American Samoa",phone:"1-684"},{code:"AT",label:"Austria",phone:"43"},{code:"AU",label:"Australia",phone:"61"},{code:"AW",label:"Aruba",phone:"297"},{code:"AX",label:"Alland Islands",phone:"358"},{code:"AZ",label:"Azerbaijan",phone:"994"},{code:"BA",label:"Bosnia and Herzegovina",phone:"387"},{code:"BB",label:"Barbados",phone:"1-246"},{code:"BD",label:"Bangladesh",phone:"880"},{code:"BE",label:"Belgium",phone:"32"},{code:"BF",label:"Burkina Faso",phone:"226"},{code:"BG",label:"Bulgaria",phone:"359"},{code:"BH",label:"Bahrain",phone:"973"},{code:"BI",label:"Burundi",phone:"257"},{code:"BJ",label:"Benin",phone:"229"},{code:"BL",label:"Saint Barthelemy",phone:"590"},{code:"BM",label:"Bermuda",phone:"1-441"},{code:"BN",label:"Brunei Darussalam",phone:"673"},{code:"BO",label:"Bolivia",phone:"591"},{code:"BR",label:"Brazil",phone:"55"},{code:"BS",label:"Bahamas",phone:"1-242"},{code:"BT",label:"Bhutan",phone:"975"},{code:"BV",label:"Bouvet Island",phone:"47"},{code:"BW",label:"Botswana",phone:"267"},{code:"BY",label:"Belarus",phone:"375"},{code:"BZ",label:"Belize",phone:"501"},{code:"CA",label:"Canada",phone:"1"},{code:"CC",label:"Cocos (Keeling) Islands",phone:"61"},{code:"CD",label:"Congo, Democratic Republic of the",phone:"243"},{code:"CF",label:"Central African Republic",phone:"236"},{code:"CG",label:"Congo, Republic of the",phone:"242"},{code:"CH",label:"Switzerland",phone:"41"},{code:"CI",label:"Cote d'Ivoire",phone:"225"},{code:"CK",label:"Cook Islands",phone:"682"},{code:"CL",label:"Chile",phone:"56"},{code:"CM",label:"Cameroon",phone:"237"},{code:"CN",label:"China",phone:"86"},{code:"CO",label:"Colombia",phone:"57"},{code:"CR",label:"Costa Rica",phone:"506"},{code:"CU",label:"Cuba",phone:"53"},{code:"CV",label:"Cape Verde",phone:"238"},{code:"CW",label:"Curacao",phone:"599"},{code:"CX",label:"Christmas Island",phone:"61"},{code:"CY",label:"Cyprus",phone:"357"},{code:"CZ",label:"Czech Republic",phone:"420"},{code:"DE",label:"Germany",phone:"49"},{code:"DJ",label:"Djibouti",phone:"253"},{code:"DK",label:"Denmark",phone:"45"},{code:"DM",label:"Dominica",phone:"1-767"},{code:"DO",label:"Dominican Republic",phone:"1-809"},{code:"DZ",label:"Algeria",phone:"213"},{code:"EC",label:"Ecuador",phone:"593"},{code:"EE",label:"Estonia",phone:"372"},{code:"EG",label:"Egypt",phone:"20"},{code:"EH",label:"Western Sahara",phone:"212"},{code:"ER",label:"Eritrea",phone:"291"},{code:"ES",label:"Spain",phone:"34"},{code:"ET",label:"Ethiopia",phone:"251"},{code:"FI",label:"Finland",phone:"358"},{code:"FJ",label:"Fiji",phone:"679"},{code:"FK",label:"Falkland Islands (Malvinas)",phone:"500"},{code:"FM",label:"Micronesia, Federated States of",phone:"691"},{code:"FO",label:"Faroe Islands",phone:"298"},{code:"FR",label:"France",phone:"33"},{code:"GA",label:"Gabon",phone:"241"},{code:"GB",label:"United Kingdom",phone:"44"},{code:"GD",label:"Grenada",phone:"1-473"},{code:"GE",label:"Georgia",phone:"995"},{code:"GF",label:"French Guiana",phone:"594"},{code:"GG",label:"Guernsey",phone:"44"},{code:"GH",label:"Ghana",phone:"233"},{code:"GI",label:"Gibraltar",phone:"350"},{code:"GL",label:"Greenland",phone:"299"},{code:"GM",label:"Gambia",phone:"220"},{code:"GN",label:"Guinea",phone:"224"},{code:"GP",label:"Guadeloupe",phone:"590"},{code:"GQ",label:"Equatorial Guinea",phone:"240"},{code:"GR",label:"Greece",phone:"30"},{code:"GS",label:"South Georgia and the South Sandwich Islands",phone:"500"},{code:"GT",label:"Guatemala",phone:"502"},{code:"GU",label:"Guam",phone:"1-671"},{code:"GW",label:"Guinea-Bissau",phone:"245"},{code:"GY",label:"Guyana",phone:"592"},{code:"HK",label:"Hong Kong",phone:"852"},{code:"HM",label:"Heard Island and McDonald Islands",phone:"672"},{code:"HN",label:"Honduras",phone:"504"},{code:"HR",label:"Croatia",phone:"385"},{code:"HT",label:"Haiti",phone:"509"},{code:"HU",label:"Hungary",phone:"36"},{code:"ID",label:"Indonesia",phone:"62"},{code:"IE",label:"Ireland",phone:"353"},{code:"IL",label:"Israel",phone:"972"},{code:"IM",label:"Isle of Man",phone:"44"},{code:"IN",label:"India",phone:"91"},{code:"IO",label:"British Indian Ocean Territory",phone:"246"},{code:"IQ",label:"Iraq",phone:"964"},{code:"IR",label:"Iran, Islamic Republic of",phone:"98"},{code:"IS",label:"Iceland",phone:"354"},{code:"IT",label:"Italy",phone:"39"},{code:"JE",label:"Jersey",phone:"44"},{code:"JM",label:"Jamaica",phone:"1-876"},{code:"JO",label:"Jordan",phone:"962"},{code:"JP",label:"Japan",phone:"81"},{code:"KE",label:"Kenya",phone:"254"},{code:"KG",label:"Kyrgyzstan",phone:"996"},{code:"KH",label:"Cambodia",phone:"855"},{code:"KI",label:"Kiribati",phone:"686"},{code:"KM",label:"Comoros",phone:"269"},{code:"KN",label:"Saint Kitts and Nevis",phone:"1-869"},{code:"KP",label:"Korea, Democratic People's Republic of",phone:"850"},{code:"KR",label:"Korea, Republic of",phone:"82"},{code:"KW",label:"Kuwait",phone:"965"},{code:"KY",label:"Cayman Islands",phone:"1-345"},{code:"KZ",label:"Kazakhstan",phone:"7"},{code:"LA",label:"Lao People's Democratic Republic",phone:"856"},{code:"LB",label:"Lebanon",phone:"961"},{code:"LC",label:"Saint Lucia",phone:"1-758"},{code:"LI",label:"Liechtenstein",phone:"423"},{code:"LK",label:"Sri Lanka",phone:"94"},{code:"LR",label:"Liberia",phone:"231"},{code:"LS",label:"Lesotho",phone:"266"},{code:"LT",label:"Lithuania",phone:"370"},{code:"LU",label:"Luxembourg",phone:"352"},{code:"LV",label:"Latvia",phone:"371"},{code:"LY",label:"Libya",phone:"218"},{code:"MA",label:"Morocco",phone:"212"},{code:"MC",label:"Monaco",phone:"377"},{code:"MD",label:"Moldova, Republic of",phone:"373"},{code:"ME",label:"Montenegro",phone:"382"},{code:"MF",label:"Saint Martin (French part)",phone:"590"},{code:"MG",label:"Madagascar",phone:"261"},{code:"MH",label:"Marshall Islands",phone:"692"},{code:"MK",label:"Macedonia, the Former Yugoslav Republic of",phone:"389"},{code:"ML",label:"Mali",phone:"223"},{code:"MM",label:"Myanmar",phone:"95"},{code:"MN",label:"Mongolia",phone:"976"},{code:"MO",label:"Macao",phone:"853"},{code:"MP",label:"Northern Mariana Islands",phone:"1-670"},{code:"MQ",label:"Martinique",phone:"596"},{code:"MR",label:"Mauritania",phone:"222"},{code:"MS",label:"Montserrat",phone:"1-664"},{code:"MT",label:"Malta",phone:"356"},{code:"MU",label:"Mauritius",phone:"230"},{code:"MV",label:"Maldives",phone:"960"},{code:"MW",label:"Malawi",phone:"265"},{code:"MX",label:"Mexico",phone:"52"},{code:"MY",label:"Malaysia",phone:"60"},{code:"MZ",label:"Mozambique",phone:"258"},{code:"NA",label:"Namibia",phone:"264"},{code:"NC",label:"New Caledonia",phone:"687"},{code:"NE",label:"Niger",phone:"227"},{code:"NF",label:"Norfolk Island",phone:"672"},{code:"NG",label:"Nigeria",phone:"234"},{code:"NI",label:"Nicaragua",phone:"505"},{code:"NL",label:"Netherlands",phone:"31"},{code:"NO",label:"Norway",phone:"47"},{code:"NP",label:"Nepal",phone:"977"},{code:"NR",label:"Nauru",phone:"674"},{code:"NU",label:"Niue",phone:"683"},{code:"NZ",label:"New Zealand",phone:"64"},{code:"OM",label:"Oman",phone:"968"},{code:"PA",label:"Panama",phone:"507"},{code:"PE",label:"Peru",phone:"51"},{code:"PF",label:"French Polynesia",phone:"689"},{code:"PG",label:"Papua New Guinea",phone:"675"},{code:"PH",label:"Philippines",phone:"63"},{code:"PK",label:"Pakistan",phone:"92"},{code:"PL",label:"Poland",phone:"48"},{code:"PM",label:"Saint Pierre and Miquelon",phone:"508"},{code:"PN",label:"Pitcairn",phone:"870"},{code:"PR",label:"Puerto Rico",phone:"1"},{code:"PS",label:"Palestine, State of",phone:"970"},{code:"PT",label:"Portugal",phone:"351"},{code:"PW",label:"Palau",phone:"680"},{code:"PY",label:"Paraguay",phone:"595"},{code:"QA",label:"Qatar",phone:"974"},{code:"RE",label:"Reunion",phone:"262"},{code:"RO",label:"Romania",phone:"40"},{code:"RS",label:"Serbia",phone:"381"},{code:"RU",label:"Russian Federation",phone:"7"},{code:"RW",label:"Rwanda",phone:"250"},{code:"SA",label:"Saudi Arabia",phone:"966"},{code:"SB",label:"Solomon Islands",phone:"677"},{code:"SC",label:"Seychelles",phone:"248"},{code:"SD",label:"Sudan",phone:"249"},{code:"SE",label:"Sweden",phone:"46"},{code:"SG",label:"Singapore",phone:"65"},{code:"SH",label:"Saint Helena",phone:"290"},{code:"SI",label:"Slovenia",phone:"386"},{code:"SJ",label:"Svalbard and Jan Mayen",phone:"47"},{code:"SK",label:"Slovakia",phone:"421"},{code:"SL",label:"Sierra Leone",phone:"232"},{code:"SM",label:"San Marino",phone:"378"},{code:"SN",label:"Senegal",phone:"221"},{code:"SO",label:"Somalia",phone:"252"},{code:"SR",label:"Suriname",phone:"597"},{code:"SS",label:"South Sudan",phone:"211"},{code:"ST",label:"Sao Tome and Principe",phone:"239"},{code:"SV",label:"El Salvador",phone:"503"},{code:"SX",label:"Sint Maarten (Dutch part)",phone:"1-721"},{code:"SY",label:"Syrian Arab Republic",phone:"963"},{code:"SZ",label:"Swaziland",phone:"268"},{code:"TC",label:"Turks and Caicos Islands",phone:"1-649"},{code:"TD",label:"Chad",phone:"235"},{code:"TF",label:"French Southern Territories",phone:"262"},{code:"TG",label:"Togo",phone:"228"},{code:"TH",label:"Thailand",phone:"66"},{code:"TJ",label:"Tajikistan",phone:"992"},{code:"TK",label:"Tokelau",phone:"690"},{code:"TL",label:"Timor-Leste",phone:"670"},{code:"TM",label:"Turkmenistan",phone:"993"},{code:"TN",label:"Tunisia",phone:"216"},{code:"TO",label:"Tonga",phone:"676"},{code:"TR",label:"Turkey",phone:"90"},{code:"TT",label:"Trinidad and Tobago",phone:"1-868"},{code:"TV",label:"Tuvalu",phone:"688"},{code:"TW",label:"Taiwan, Province of China",phone:"886"},{code:"TZ",label:"United Republic of Tanzania",phone:"255"},{code:"UA",label:"Ukraine",phone:"380"},{code:"UG",label:"Uganda",phone:"256"},{code:"US",label:"United States",phone:"1"},{code:"UY",label:"Uruguay",phone:"598"},{code:"UZ",label:"Uzbekistan",phone:"998"},{code:"VA",label:"Holy See (Vatican City State)",phone:"379"},{code:"VC",label:"Saint Vincent and the Grenadines",phone:"1-784"},{code:"VE",label:"Venezuela",phone:"58"},{code:"VG",label:"British Virgin Islands",phone:"1-284"},{code:"VI",label:"US Virgin Islands",phone:"1-340"},{code:"VN",label:"Vietnam",phone:"84"},{code:"VU",label:"Vanuatu",phone:"678"},{code:"WF",label:"Wallis and Futuna",phone:"681"},{code:"WS",label:"Samoa",phone:"685"},{code:"XK",label:"Kosovo",phone:"383"},{code:"YE",label:"Yemen",phone:"967"},{code:"YT",label:"Mayotte",phone:"262"},{code:"ZA",label:"South Africa",phone:"27"},{code:"ZM",label:"Zambia",phone:"260"},{code:"ZW",label:"Zimbabwe",phone:"263"}]},2676:function(e,a,o){"use strict";o.r(a),o.d(a,"default",(function(){return U}));var n=o(1),l=o(1249),t=o(36),r=o(1295),c=o(324),i=o(425),d=o(23),b=o(85),s=o(412),h=o(1314),p=o(4),u=o(17),j=o.n(u),m=o(26),x=o(251),O=o(171),g=o(249),v=o(1311),f=o(1281),y=o(1308),S=o(409),C=o(206),M=o(1305),R=o(1306),w=o(1357),A=o(1198),I=o(1301),B=o(1315),T=o(325),G=o(252),P=o(1383),N=o(1705),k=o(0);function D(e){var a=e.isEdit,o=e.currentUser,l=Object(t.h)(),r=Object(O.b)().enqueueSnackbar,c=x.f().shape({name:x.h().required("Name is required"),email:x.h().required("Email is required").email(),phoneNumber:x.h().required("Phone number is required"),address:x.h().required("Address is required"),country:x.h().required("country is required"),company:x.h().required("Company is required"),state:x.h().required("State is required"),city:x.h().required("City is required"),role:x.h().required("Role Number is required"),avatarUrl:x.d().required("Avatar is required")}),i=Object(g.d)({enableReinitialize:!0,initialValues:{name:(null===o||void 0===o?void 0:o.name)||"",email:(null===o||void 0===o?void 0:o.email)||"",phoneNumber:(null===o||void 0===o?void 0:o.phoneNumber)||"",address:(null===o||void 0===o?void 0:o.address)||"",country:(null===o||void 0===o?void 0:o.country)||"",state:(null===o||void 0===o?void 0:o.state)||"",city:(null===o||void 0===o?void 0:o.city)||"",zipCode:(null===o||void 0===o?void 0:o.zipCode)||"",avatarUrl:(null===o||void 0===o?void 0:o.avatarUrl)||null,isVerified:(null===o||void 0===o?void 0:o.isVerified)||!0,status:null===o||void 0===o?void 0:o.status,company:(null===o||void 0===o?void 0:o.company)||"",role:(null===o||void 0===o?void 0:o.role)||""},validationSchema:c,onSubmit:function(){var e=Object(m.a)(j.a.mark((function e(o,n){var t,c,i;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.setSubmitting,c=n.resetForm,i=n.setErrors,e.prev=1,e.next=4,Object(T.a)(500);case 4:c(),t(!1),r(a?"Update success":"Create success",{variant:"success"}),l(d.b.user.list),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(1),console.error(e.t0),t(!1),i(e.t0);case 15:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(a,o){return e.apply(this,arguments)}}()}),b=i.errors,s=i.values,h=i.touched,u=i.handleSubmit,D=i.isSubmitting,U=i.setFieldValue,F=i.getFieldProps,L=Object(n.useCallback)((function(e){var a=e[0];a&&U("avatarUrl",Object(p.a)(Object(p.a)({},a),{},{preview:URL.createObjectURL(a)}))}),[U]);return Object(k.jsx)(g.b,{value:i,children:Object(k.jsx)(g.a,{noValidate:!0,autoComplete:"off",onSubmit:u,children:Object(k.jsxs)(f.a,{container:!0,spacing:3,children:[Object(k.jsx)(f.a,{item:!0,xs:12,md:4,children:Object(k.jsxs)(y.a,{sx:{py:10,px:3},children:[a&&Object(k.jsx)(G.a,{color:"active"!==s.status?"error":"success",sx:{textTransform:"uppercase",position:"absolute",top:24,right:24},children:s.status}),Object(k.jsxs)(S.a,{sx:{mb:5},children:[Object(k.jsx)(P.a,{accept:"image/*",file:s.avatarUrl,maxSize:3145728,onDrop:L,error:Boolean(h.avatarUrl&&b.avatarUrl),caption:Object(k.jsxs)(C.a,{variant:"caption",sx:{mt:2,mx:"auto",display:"block",textAlign:"center",color:"text.secondary"},children:["Allowed *.jpeg, *.jpg, *.png, *.gif",Object(k.jsx)("br",{})," max size of ",Object(B.b)(3145728)]})}),Object(k.jsx)(M.a,{error:!0,sx:{px:2,textAlign:"center"},children:h.avatarUrl&&b.avatarUrl})]}),a&&Object(k.jsx)(R.a,{labelPlacement:"start",control:Object(k.jsx)(w.a,{onChange:function(e){return U("status",e.target.checked?"banned":"active")},checked:"active"!==s.status}),label:Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(C.a,{variant:"subtitle2",sx:{mb:.5},children:"Banned"}),Object(k.jsx)(C.a,{variant:"body2",sx:{color:"text.secondary"},children:"Apply disable account"})]}),sx:{mx:0,mb:3,width:1,justifyContent:"space-between"}}),Object(k.jsx)(R.a,{labelPlacement:"start",control:Object(k.jsx)(w.a,Object(p.a)(Object(p.a)({},F("isVerified")),{},{checked:s.isVerified})),label:Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(C.a,{variant:"subtitle2",sx:{mb:.5},children:"Email Verified"}),Object(k.jsx)(C.a,{variant:"body2",sx:{color:"text.secondary"},children:"Disabling this will automatically send the user a verification email"})]}),sx:{mx:0,width:1,justifyContent:"space-between"}})]})}),Object(k.jsx)(f.a,{item:!0,xs:12,md:8,children:Object(k.jsx)(y.a,{sx:{p:3},children:Object(k.jsxs)(A.a,{spacing:3,children:[Object(k.jsxs)(A.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(k.jsx)(I.a,Object(p.a)(Object(p.a)({fullWidth:!0,label:"Full Name"},F("name")),{},{error:Boolean(h.name&&b.name),helperText:h.name&&b.name})),Object(k.jsx)(I.a,Object(p.a)(Object(p.a)({fullWidth:!0,label:"Email Address"},F("email")),{},{error:Boolean(h.email&&b.email),helperText:h.email&&b.email}))]}),Object(k.jsxs)(A.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(k.jsx)(I.a,Object(p.a)(Object(p.a)({fullWidth:!0,label:"Phone Number"},F("phoneNumber")),{},{error:Boolean(h.phoneNumber&&b.phoneNumber),helperText:h.phoneNumber&&b.phoneNumber})),Object(k.jsxs)(I.a,Object(p.a)(Object(p.a)({select:!0,fullWidth:!0,label:"Country",placeholder:"Country"},F("country")),{},{SelectProps:{native:!0},error:Boolean(h.country&&b.country),helperText:h.country&&b.country,children:[Object(k.jsx)("option",{value:""}),N.a.map((function(e){return Object(k.jsx)("option",{value:e.label,children:e.label},e.code)}))]}))]}),Object(k.jsxs)(A.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(k.jsx)(I.a,Object(p.a)(Object(p.a)({fullWidth:!0,label:"State/Region"},F("state")),{},{error:Boolean(h.state&&b.state),helperText:h.state&&b.state})),Object(k.jsx)(I.a,Object(p.a)(Object(p.a)({fullWidth:!0,label:"City"},F("city")),{},{error:Boolean(h.city&&b.city),helperText:h.city&&b.city}))]}),Object(k.jsxs)(A.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(k.jsx)(I.a,Object(p.a)(Object(p.a)({fullWidth:!0,label:"Address"},F("address")),{},{error:Boolean(h.address&&b.address),helperText:h.address&&b.address})),Object(k.jsx)(I.a,Object(p.a)({fullWidth:!0,label:"Zip/Code"},F("zipCode")))]}),Object(k.jsxs)(A.a,{direction:{xs:"column",sm:"row"},spacing:{xs:3,sm:2},children:[Object(k.jsx)(I.a,Object(p.a)(Object(p.a)({fullWidth:!0,label:"Company"},F("company")),{},{error:Boolean(h.company&&b.company),helperText:h.company&&b.company})),Object(k.jsx)(I.a,Object(p.a)(Object(p.a)({fullWidth:!0,label:"Role"},F("role")),{},{error:Boolean(h.role&&b.role),helperText:h.role&&b.role}))]}),Object(k.jsx)(S.a,{sx:{mt:3,display:"flex",justifyContent:"flex-end"},children:Object(k.jsx)(v.a,{type:"submit",variant:"contained",loading:D,children:a?"Save Changes":"Create User"})})]})})})]})})})}function U(){var e=Object(b.a)().themeStretch,a=Object(c.c)(),o=Object(t.g)().pathname,p=Object(t.i)().name,u=Object(c.d)((function(e){return e.user})).userList,j=o.includes("edit"),m=u.find((function(e){return Object(l.a)(e.name)===p}));return Object(n.useEffect)((function(){a(Object(i.l)())}),[a]),Object(k.jsx)(s.a,{title:"User: Create a new user | Minimal-UI",children:Object(k.jsxs)(r.a,{maxWidth:!e&&"lg",children:[Object(k.jsx)(h.a,{heading:j?"Edit user":"Create a new user",links:[{name:"Dashboard",href:d.b.root},{name:"User",href:d.b.user.root},{name:j?p:"New user"}]}),Object(k.jsx)(D,{isEdit:j,currentUser:m})]})})}}}]);
//# sourceMappingURL=82.723b8496.chunk.js.map