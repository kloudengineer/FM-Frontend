(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[81],{1314:function(e,a,n){"use strict";n.d(a,"a",(function(){return h}));var t=n(4),o=n(40),c=n(24),l=n(409),i=n(206),r=n(1284),s=n(37),d=n(0),b=["links","action","heading","moreLink","sx"];function h(e){var a=e.links,n=e.action,h=e.heading,p=e.moreLink,j=void 0===p?[]:p,u=e.sx,x=Object(o.a)(e,b);return Object(d.jsxs)(l.a,{sx:Object(t.a)({mb:5},u),children:[Object(d.jsxs)(l.a,{sx:{display:"flex",alignItems:"center"},children:[Object(d.jsxs)(l.a,{sx:{flexGrow:1},children:[Object(d.jsx)(i.a,{variant:"h4",gutterBottom:!0,children:h}),Object(d.jsx)(s.b,Object(t.a)({links:a},x))]}),n&&Object(d.jsx)(l.a,{sx:{flexShrink:0},children:n})]}),Object(d.jsx)(l.a,{sx:{mt:2},children:Object(c.isString)(j)?Object(d.jsx)(r.a,{href:j,target:"_blank",variant:"body2",children:j}):j.map((function(e){return Object(d.jsx)(r.a,{noWrap:!0,href:e,variant:"body2",target:"_blank",sx:{display:"table"},children:e},e)}))})]})}},1315:function(e,a,n){"use strict";n.d(a,"a",(function(){return l})),n.d(a,"d",(function(){return i})),n.d(a,"c",(function(){return r})),n.d(a,"e",(function(){return s})),n.d(a,"b",(function(){return d}));var t=n(24),o=n(1326),c=n.n(o);function l(e){return c()(e).format(Number.isInteger(e)?"$0,0":"$0,0.00")}function i(e){return c()(e/100).format("0.0%")}function r(e){return c()(e).format()}function s(e){return Object(t.replace)(c()(e).format("0.00a"),".00","")}function d(e){return c()(e).format("0.0 b")}},1411:function(e,a,n){"use strict";n.d(a,"a",(function(){return b}));var t=n(4),o=n(40),c=n(7),l=n(409),i=n(206),r=n(0),s=["title","description","img"],d=Object(c.a)("div")((function(e){return{height:"100%",display:"flex",textAlign:"center",alignItems:"center",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(8,2)}}));function b(e){var a=e.title,n=e.description,c=e.img,b=Object(o.a)(e,s);return Object(r.jsxs)(d,Object(t.a)(Object(t.a)({},b),{},{children:[Object(r.jsx)(l.a,{component:"img",alt:"empty content",src:c||"/static/illustrations/illustration_empty_content.svg",sx:{height:240,mb:3}}),Object(r.jsx)(i.a,{variant:"h5",gutterBottom:!0,children:a}),n&&Object(r.jsx)(i.a,{variant:"body2",sx:{color:"text.secondary"},children:n})]}))}},1634:function(e,a,n){"use strict";function t(e){var a;switch(e){case"#00AB55":a="Green";break;case"#000000":a="Black";break;case"#FFFFFF":a="White";break;case"#FFC0CB":a="Pink";break;case"#FF4842":a="Red";break;case"#1890FF":a="Blue";break;case"#94D82D":a="Greenyellow";break;case"#FFC107":a="Orange";break;default:a=e}return a}n.d(a,"a",(function(){return t}))},2632:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return na}));var t=n(1),o=n(25),c=n(1355),l=n.n(c),i=n(7),r=n(2579),s=n(409),d=n(1295),b=n(1281),h=n(2680),p=n(2681),j=n(2652),u=n(324),x=n(418),O=n(23),m=n(174),f=n(85),v=n(412),y=n(1314),g=n(16),S=n(19),C=n(1334),k=n.n(C),I=n(326),M=n.n(I),A=n(1308),w=n(206),B=n(410),T=n(5),D=n(252),G=n(1354),P=n.n(G),F=n(1323),N=n(1384),R=n(1198),E=n(1200),z=n(1301),L=n(1297),W=n(1315),K=n(0);function V(e){var a=e.total,n=e.onEdit,t=e.discount,c=e.subtotal,l=e.shipping,i=void 0===l?null:l,r=e.onApplyDiscount,d=e.enableEdit,b=void 0!==d&&d,h=e.enableDiscount,p=void 0!==h&&h,j=null!==i?"Free":"-";return Object(K.jsxs)(A.a,{sx:{mb:3},children:[Object(K.jsx)(F.a,{title:"Order Summary",action:b&&Object(K.jsx)(B.a,{size:"small",type:"button",onClick:n,startIcon:Object(K.jsx)(o.a,{icon:P.a}),children:"Edit"})}),Object(K.jsx)(N.a,{children:Object(K.jsxs)(R.a,{spacing:2,children:[Object(K.jsxs)(R.a,{direction:"row",justifyContent:"space-between",children:[Object(K.jsx)(w.a,{variant:"body2",sx:{color:"text.secondary"},children:"Sub Total"}),Object(K.jsx)(w.a,{variant:"subtitle2",children:Object(W.a)(c)})]}),Object(K.jsxs)(R.a,{direction:"row",justifyContent:"space-between",children:[Object(K.jsx)(w.a,{variant:"body2",sx:{color:"text.secondary"},children:"Discount"}),Object(K.jsx)(w.a,{variant:"subtitle2",children:t?Object(W.a)(-t):"-"})]}),Object(K.jsxs)(R.a,{direction:"row",justifyContent:"space-between",children:[Object(K.jsx)(w.a,{variant:"body2",sx:{color:"text.secondary"},children:"Shipping"}),Object(K.jsx)(w.a,{variant:"subtitle2",children:i?Object(W.a)(i):j})]}),Object(K.jsx)(E.a,{}),Object(K.jsxs)(R.a,{direction:"row",justifyContent:"space-between",children:[Object(K.jsx)(w.a,{variant:"subtitle1",children:"Total"}),Object(K.jsxs)(s.a,{sx:{textAlign:"right"},children:[Object(K.jsx)(w.a,{variant:"subtitle1",sx:{color:"error.main"},children:Object(W.a)(a)}),Object(K.jsx)(w.a,{variant:"caption",sx:{fontStyle:"italic"},children:"(VAT included if applicable)"})]})]}),p&&Object(K.jsx)(z.a,{fullWidth:!0,placeholder:"Discount codes / Gifts",value:"DISCOUNT5",InputProps:{endAdornment:Object(K.jsx)(L.a,{position:"end",children:Object(K.jsx)(B.a,{type:"button",onClick:function(){return r(5)},sx:{mr:-.5},children:"Apply"})})}})]})})]})}var H=n(4),q=n(17),U=n.n(q),J=n(26),Z=n(251),Y=n(249),_=n(1614),Q=n(1265),X=n(1306),$=n(1271),ee=n(1274),ae=n(1477),ne=n(1311),te=n(207),oe=[{code:"AD",label:"Andorra",phone:"376"},{code:"AE",label:"United Arab Emirates",phone:"971"},{code:"AF",label:"Afghanistan",phone:"93"},{code:"AG",label:"Antigua and Barbuda",phone:"1-268"},{code:"AI",label:"Anguilla",phone:"1-264"},{code:"AL",label:"Albania",phone:"355"},{code:"AM",label:"Armenia",phone:"374"},{code:"AO",label:"Angola",phone:"244"},{code:"AQ",label:"Antarctica",phone:"672"},{code:"AR",label:"Argentina",phone:"54"},{code:"AS",label:"American Samoa",phone:"1-684"},{code:"AT",label:"Austria",phone:"43"},{code:"AU",label:"Australia",phone:"61"},{code:"AW",label:"Aruba",phone:"297"},{code:"AX",label:"Alland Islands",phone:"358"},{code:"AZ",label:"Azerbaijan",phone:"994"},{code:"BA",label:"Bosnia and Herzegovina",phone:"387"},{code:"BB",label:"Barbados",phone:"1-246"},{code:"BD",label:"Bangladesh",phone:"880"},{code:"BE",label:"Belgium",phone:"32"},{code:"BF",label:"Burkina Faso",phone:"226"},{code:"BG",label:"Bulgaria",phone:"359"},{code:"BH",label:"Bahrain",phone:"973"},{code:"BI",label:"Burundi",phone:"257"},{code:"BJ",label:"Benin",phone:"229"},{code:"BL",label:"Saint Barthelemy",phone:"590"},{code:"BM",label:"Bermuda",phone:"1-441"},{code:"BN",label:"Brunei Darussalam",phone:"673"},{code:"BO",label:"Bolivia",phone:"591"},{code:"BR",label:"Brazil",phone:"55"},{code:"BS",label:"Bahamas",phone:"1-242"},{code:"BT",label:"Bhutan",phone:"975"},{code:"BV",label:"Bouvet Island",phone:"47"},{code:"BW",label:"Botswana",phone:"267"},{code:"BY",label:"Belarus",phone:"375"},{code:"BZ",label:"Belize",phone:"501"},{code:"CA",label:"Canada",phone:"1"},{code:"CC",label:"Cocos (Keeling) Islands",phone:"61"},{code:"CD",label:"Congo, Democratic Republic of the",phone:"243"},{code:"CF",label:"Central African Republic",phone:"236"},{code:"CG",label:"Congo, Republic of the",phone:"242"},{code:"CH",label:"Switzerland",phone:"41"},{code:"CI",label:"Cote d'Ivoire",phone:"225"},{code:"CK",label:"Cook Islands",phone:"682"},{code:"CL",label:"Chile",phone:"56"},{code:"CM",label:"Cameroon",phone:"237"},{code:"CN",label:"China",phone:"86"},{code:"CO",label:"Colombia",phone:"57"},{code:"CR",label:"Costa Rica",phone:"506"},{code:"CU",label:"Cuba",phone:"53"},{code:"CV",label:"Cape Verde",phone:"238"},{code:"CW",label:"Curacao",phone:"599"},{code:"CX",label:"Christmas Island",phone:"61"},{code:"CY",label:"Cyprus",phone:"357"},{code:"CZ",label:"Czech Republic",phone:"420"},{code:"DE",label:"Germany",phone:"49"},{code:"DJ",label:"Djibouti",phone:"253"},{code:"DK",label:"Denmark",phone:"45"},{code:"DM",label:"Dominica",phone:"1-767"},{code:"DO",label:"Dominican Republic",phone:"1-809"},{code:"DZ",label:"Algeria",phone:"213"},{code:"EC",label:"Ecuador",phone:"593"},{code:"EE",label:"Estonia",phone:"372"},{code:"EG",label:"Egypt",phone:"20"},{code:"EH",label:"Western Sahara",phone:"212"},{code:"ER",label:"Eritrea",phone:"291"},{code:"ES",label:"Spain",phone:"34"},{code:"ET",label:"Ethiopia",phone:"251"},{code:"FI",label:"Finland",phone:"358"},{code:"FJ",label:"Fiji",phone:"679"},{code:"FK",label:"Falkland Islands (Malvinas)",phone:"500"},{code:"FM",label:"Micronesia, Federated States of",phone:"691"},{code:"FO",label:"Faroe Islands",phone:"298"},{code:"FR",label:"France",phone:"33"},{code:"GA",label:"Gabon",phone:"241"},{code:"GB",label:"United Kingdom",phone:"44"},{code:"GD",label:"Grenada",phone:"1-473"},{code:"GE",label:"Georgia",phone:"995"},{code:"GF",label:"French Guiana",phone:"594"},{code:"GG",label:"Guernsey",phone:"44"},{code:"GH",label:"Ghana",phone:"233"},{code:"GI",label:"Gibraltar",phone:"350"},{code:"GL",label:"Greenland",phone:"299"},{code:"GM",label:"Gambia",phone:"220"},{code:"GN",label:"Guinea",phone:"224"},{code:"GP",label:"Guadeloupe",phone:"590"},{code:"GQ",label:"Equatorial Guinea",phone:"240"},{code:"GR",label:"Greece",phone:"30"},{code:"GS",label:"South Georgia and the South Sandwich Islands",phone:"500"},{code:"GT",label:"Guatemala",phone:"502"},{code:"GU",label:"Guam",phone:"1-671"},{code:"GW",label:"Guinea-Bissau",phone:"245"},{code:"GY",label:"Guyana",phone:"592"},{code:"HK",label:"Hong Kong",phone:"852"},{code:"HM",label:"Heard Island and McDonald Islands",phone:"672"},{code:"HN",label:"Honduras",phone:"504"},{code:"HR",label:"Croatia",phone:"385"},{code:"HT",label:"Haiti",phone:"509"},{code:"HU",label:"Hungary",phone:"36"},{code:"ID",label:"Indonesia",phone:"62"},{code:"IE",label:"Ireland",phone:"353"},{code:"IL",label:"Israel",phone:"972"},{code:"IM",label:"Isle of Man",phone:"44"},{code:"IN",label:"India",phone:"91"},{code:"IO",label:"British Indian Ocean Territory",phone:"246"},{code:"IQ",label:"Iraq",phone:"964"},{code:"IR",label:"Iran, Islamic Republic of",phone:"98"},{code:"IS",label:"Iceland",phone:"354"},{code:"IT",label:"Italy",phone:"39"},{code:"JE",label:"Jersey",phone:"44"},{code:"JM",label:"Jamaica",phone:"1-876"},{code:"JO",label:"Jordan",phone:"962"},{code:"JP",label:"Japan",phone:"81"},{code:"KE",label:"Kenya",phone:"254"},{code:"KG",label:"Kyrgyzstan",phone:"996"},{code:"KH",label:"Cambodia",phone:"855"},{code:"KI",label:"Kiribati",phone:"686"},{code:"KM",label:"Comoros",phone:"269"},{code:"KN",label:"Saint Kitts and Nevis",phone:"1-869"},{code:"KP",label:"Korea, Democratic People's Republic of",phone:"850"},{code:"KR",label:"Korea, Republic of",phone:"82"},{code:"KW",label:"Kuwait",phone:"965"},{code:"KY",label:"Cayman Islands",phone:"1-345"},{code:"KZ",label:"Kazakhstan",phone:"7"},{code:"LA",label:"Lao People's Democratic Republic",phone:"856"},{code:"LB",label:"Lebanon",phone:"961"},{code:"LC",label:"Saint Lucia",phone:"1-758"},{code:"LI",label:"Liechtenstein",phone:"423"},{code:"LK",label:"Sri Lanka",phone:"94"},{code:"LR",label:"Liberia",phone:"231"},{code:"LS",label:"Lesotho",phone:"266"},{code:"LT",label:"Lithuania",phone:"370"},{code:"LU",label:"Luxembourg",phone:"352"},{code:"LV",label:"Latvia",phone:"371"},{code:"LY",label:"Libya",phone:"218"},{code:"MA",label:"Morocco",phone:"212"},{code:"MC",label:"Monaco",phone:"377"},{code:"MD",label:"Moldova, Republic of",phone:"373"},{code:"ME",label:"Montenegro",phone:"382"},{code:"MF",label:"Saint Martin (French part)",phone:"590"},{code:"MG",label:"Madagascar",phone:"261"},{code:"MH",label:"Marshall Islands",phone:"692"},{code:"MK",label:"Macedonia, the Former Yugoslav Republic of",phone:"389"},{code:"ML",label:"Mali",phone:"223"},{code:"MM",label:"Myanmar",phone:"95"},{code:"MN",label:"Mongolia",phone:"976"},{code:"MO",label:"Macao",phone:"853"},{code:"MP",label:"Northern Mariana Islands",phone:"1-670"},{code:"MQ",label:"Martinique",phone:"596"},{code:"MR",label:"Mauritania",phone:"222"},{code:"MS",label:"Montserrat",phone:"1-664"},{code:"MT",label:"Malta",phone:"356"},{code:"MU",label:"Mauritius",phone:"230"},{code:"MV",label:"Maldives",phone:"960"},{code:"MW",label:"Malawi",phone:"265"},{code:"MX",label:"Mexico",phone:"52"},{code:"MY",label:"Malaysia",phone:"60"},{code:"MZ",label:"Mozambique",phone:"258"},{code:"NA",label:"Namibia",phone:"264"},{code:"NC",label:"New Caledonia",phone:"687"},{code:"NE",label:"Niger",phone:"227"},{code:"NF",label:"Norfolk Island",phone:"672"},{code:"NG",label:"Nigeria",phone:"234"},{code:"NI",label:"Nicaragua",phone:"505"},{code:"NL",label:"Netherlands",phone:"31"},{code:"NO",label:"Norway",phone:"47"},{code:"NP",label:"Nepal",phone:"977"},{code:"NR",label:"Nauru",phone:"674"},{code:"NU",label:"Niue",phone:"683"},{code:"NZ",label:"New Zealand",phone:"64"},{code:"OM",label:"Oman",phone:"968"},{code:"PA",label:"Panama",phone:"507"},{code:"PE",label:"Peru",phone:"51"},{code:"PF",label:"French Polynesia",phone:"689"},{code:"PG",label:"Papua New Guinea",phone:"675"},{code:"PH",label:"Philippines",phone:"63"},{code:"PK",label:"Pakistan",phone:"92"},{code:"PL",label:"Poland",phone:"48"},{code:"PM",label:"Saint Pierre and Miquelon",phone:"508"},{code:"PN",label:"Pitcairn",phone:"870"},{code:"PR",label:"Puerto Rico",phone:"1"},{code:"PS",label:"Palestine, State of",phone:"970"},{code:"PT",label:"Portugal",phone:"351"},{code:"PW",label:"Palau",phone:"680"},{code:"PY",label:"Paraguay",phone:"595"},{code:"QA",label:"Qatar",phone:"974"},{code:"RE",label:"Reunion",phone:"262"},{code:"RO",label:"Romania",phone:"40"},{code:"RS",label:"Serbia",phone:"381"},{code:"RU",label:"Russian Federation",phone:"7"},{code:"RW",label:"Rwanda",phone:"250"},{code:"SA",label:"Saudi Arabia",phone:"966"},{code:"SB",label:"Solomon Islands",phone:"677"},{code:"SC",label:"Seychelles",phone:"248"},{code:"SD",label:"Sudan",phone:"249"},{code:"SE",label:"Sweden",phone:"46"},{code:"SG",label:"Singapore",phone:"65"},{code:"SH",label:"Saint Helena",phone:"290"},{code:"SI",label:"Slovenia",phone:"386"},{code:"SJ",label:"Svalbard and Jan Mayen",phone:"47"},{code:"SK",label:"Slovakia",phone:"421"},{code:"SL",label:"Sierra Leone",phone:"232"},{code:"SM",label:"San Marino",phone:"378"},{code:"SN",label:"Senegal",phone:"221"},{code:"SO",label:"Somalia",phone:"252"},{code:"SR",label:"Suriname",phone:"597"},{code:"SS",label:"South Sudan",phone:"211"},{code:"ST",label:"Sao Tome and Principe",phone:"239"},{code:"SV",label:"El Salvador",phone:"503"},{code:"SX",label:"Sint Maarten (Dutch part)",phone:"1-721"},{code:"SY",label:"Syrian Arab Republic",phone:"963"},{code:"SZ",label:"Swaziland",phone:"268"},{code:"TC",label:"Turks and Caicos Islands",phone:"1-649"},{code:"TD",label:"Chad",phone:"235"},{code:"TF",label:"French Southern Territories",phone:"262"},{code:"TG",label:"Togo",phone:"228"},{code:"TH",label:"Thailand",phone:"66"},{code:"TJ",label:"Tajikistan",phone:"992"},{code:"TK",label:"Tokelau",phone:"690"},{code:"TL",label:"Timor-Leste",phone:"670"},{code:"TM",label:"Turkmenistan",phone:"993"},{code:"TN",label:"Tunisia",phone:"216"},{code:"TO",label:"Tonga",phone:"676"},{code:"TR",label:"Turkey",phone:"90"},{code:"TT",label:"Trinidad and Tobago",phone:"1-868"},{code:"TV",label:"Tuvalu",phone:"688"},{code:"TW",label:"Taiwan, Province of China",phone:"886"},{code:"TZ",label:"United Republic of Tanzania",phone:"255"},{code:"UA",label:"Ukraine",phone:"380"},{code:"UG",label:"Uganda",phone:"256"},{code:"US",label:"United States",phone:"1"},{code:"UY",label:"Uruguay",phone:"598"},{code:"UZ",label:"Uzbekistan",phone:"998"},{code:"VA",label:"Holy See (Vatican City State)",phone:"379"},{code:"VC",label:"Saint Vincent and the Grenadines",phone:"1-784"},{code:"VE",label:"Venezuela",phone:"58"},{code:"VG",label:"British Virgin Islands",phone:"1-284"},{code:"VI",label:"US Virgin Islands",phone:"1-340"},{code:"VN",label:"Vietnam",phone:"84"},{code:"VU",label:"Vanuatu",phone:"678"},{code:"WF",label:"Wallis and Futuna",phone:"681"},{code:"WS",label:"Samoa",phone:"685"},{code:"XK",label:"Kosovo",phone:"383"},{code:"YE",label:"Yemen",phone:"967"},{code:"YT",label:"Mayotte",phone:"262"},{code:"ZA",label:"South Africa",phone:"27"},{code:"ZM",label:"Zambia",phone:"260"},{code:"ZW",label:"Zimbabwe",phone:"263"}];function ce(e){var a=e.open,n=e.onClose,t=e.onNextStep,o=e.onCreateBilling,c=Z.f().shape({receiver:Z.h().required("Fullname is required"),phone:Z.h().required("Phone is required"),address:Z.h().required("Address is required"),city:Z.h().required("City is required"),state:Z.h().required("State is required"),country:Z.h().required("State is required")}),l=Object(Y.d)({initialValues:{addressType:"Home",receiver:"",phone:"",address:"",city:"",state:"",country:oe[0].label,zipcode:"",isDefault:!0},validationSchema:c,onSubmit:function(){var e=Object(J.a)(U.a.mark((function e(a,n){var c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=n.setSubmitting;try{t(),c(!0),o({receiver:a.receiver,phone:a.phone,fullAddress:"".concat(a.address,", ").concat(a.city,", ").concat(a.state,", ").concat(a.country,", ").concat(a.zipcode),addressType:a.addressType,isDefault:a.isDefault})}catch(l){console.error(l),c(!1)}case 2:case"end":return e.stop()}}),e)})));return function(a,n){return e.apply(this,arguments)}}()}),i=l.errors,r=l.values,s=l.touched,d=l.isSubmitting,b=l.handleSubmit,h=l.getFieldProps;return Object(K.jsxs)(te.b,{maxWidth:"sm",open:a,onClose:n,children:[Object(K.jsx)(_.a,{children:"Add new address"}),Object(K.jsx)(Y.b,{value:l,children:Object(K.jsxs)(Y.a,{autoComplete:"off",noValidate:!0,onSubmit:b,children:[Object(K.jsxs)(R.a,{spacing:{xs:2,sm:3},sx:{p:3},children:[Object(K.jsxs)(Q.a,Object(H.a)(Object(H.a)({row:!0},h("addressType")),{},{children:[Object(K.jsx)(X.a,{value:"Home",control:Object(K.jsx)($.a,{}),label:"Home",sx:{mr:2}}),Object(K.jsx)(X.a,{value:"Office",control:Object(K.jsx)($.a,{}),label:"Office"})]})),Object(K.jsxs)(R.a,{direction:{xs:"column",sm:"row"},spacing:2,children:[Object(K.jsx)(z.a,Object(H.a)(Object(H.a)({fullWidth:!0,label:"Full Name"},h("receiver")),{},{error:Boolean(s.receiver&&i.receiver),helperText:s.receiver&&i.receiver})),Object(K.jsx)(z.a,Object(H.a)(Object(H.a)({fullWidth:!0,label:"Phone Number"},h("phone")),{},{error:Boolean(s.phone&&i.phone),helperText:s.phone&&i.phone}))]}),Object(K.jsx)(z.a,Object(H.a)(Object(H.a)({fullWidth:!0,label:"Address"},h("address")),{},{error:Boolean(s.address&&i.address),helperText:s.address&&i.address})),Object(K.jsxs)(R.a,{direction:{xs:"column",sm:"row"},spacing:2,children:[Object(K.jsx)(z.a,Object(H.a)(Object(H.a)({fullWidth:!0,label:"Town / City"},h("city")),{},{error:Boolean(s.city&&i.city),helperText:s.city&&i.city})),Object(K.jsx)(z.a,Object(H.a)(Object(H.a)({fullWidth:!0,label:"State"},h("state")),{},{error:Boolean(s.state&&i.state),helperText:s.state&&i.state})),Object(K.jsx)(z.a,Object(H.a)(Object(H.a)({fullWidth:!0,label:"Zip / Postal Code"},h("zipcode")),{},{error:Boolean(s.zipcode&&i.zipcode),helperText:s.zipcode&&i.zipcode}))]}),Object(K.jsx)(z.a,Object(H.a)(Object(H.a)({select:!0,fullWidth:!0,label:"Country",placeholder:"Country"},h("country")),{},{SelectProps:{native:!0},error:Boolean(s.country&&i.country),helperText:s.country&&i.country,children:oe.map((function(e){return Object(K.jsx)("option",{value:e.label,children:e.label},e.code)}))})),Object(K.jsx)(X.a,{control:Object(K.jsx)(ee.a,Object(H.a)({checked:r.isDefault},h("isDefault"))),label:"Use this address as default.",sx:{mt:3}})]}),Object(K.jsx)(E.a,{}),Object(K.jsxs)(ae.a,{children:[Object(K.jsx)(ne.a,{type:"submit",variant:"contained",loading:d,children:"Deliver to this Address"}),Object(K.jsx)(B.a,{type:"button",color:"inherit",variant:"outlined",onClick:n,children:"Cancel"})]})]})})]})}var le=Object(S.a)(Array(5)).map((function(e,a){return{id:T.a.id(a),receiver:T.a.name.fullName(a),fullAddress:T.a.address.fullAddress(a),phone:T.a.phoneNumber(a),addressType:0===a?"Home":"Office",isDefault:0===a}}));function ie(e){var a=e.address,n=e.onNextStep,t=e.onCreateBilling,o=a.receiver,c=a.fullAddress,l=a.addressType,i=a.phone,r=a.isDefault;return Object(K.jsxs)(A.a,{sx:{p:3,mb:3,position:"relative"},children:[Object(K.jsxs)(s.a,{sx:{mb:1,display:"flex",alignItems:"center"},children:[Object(K.jsx)(w.a,{variant:"subtitle1",children:o}),Object(K.jsxs)(w.a,{variant:"body2",sx:{color:"text.secondary"},children:["\xa0(",l,")"]}),r&&Object(K.jsx)(D.a,{color:"info",sx:{ml:1},children:"Default"})]}),Object(K.jsx)(w.a,{variant:"body2",gutterBottom:!0,children:c}),Object(K.jsx)(w.a,{variant:"body2",sx:{color:"text.secondary"},children:i}),Object(K.jsxs)(s.a,{sx:{mt:3,display:"flex",position:{sm:"absolute"},right:{sm:24},bottom:{sm:24}},children:[!r&&Object(K.jsx)(B.a,{variant:"outlined",size:"small",color:"inherit",children:"Delete"}),Object(K.jsx)(s.a,{sx:{mx:.5}}),Object(K.jsx)(B.a,{variant:"outlined",size:"small",onClick:function(){t(a),n()},children:"Deliver to this Address"})]})]})}function re(){var e=Object(u.c)(),a=Object(t.useState)(!1),n=Object(g.a)(a,2),c=n[0],l=n[1],i=Object(u.d)((function(e){return e.product})).checkout,r=i.total,d=i.discount,h=i.subtotal,p=function(){e(Object(x.p)())},j=function(a){e(Object(x.d)(a))};return Object(K.jsxs)(K.Fragment,{children:[Object(K.jsxs)(b.a,{container:!0,spacing:3,children:[Object(K.jsxs)(b.a,{item:!0,xs:12,md:8,children:[le.map((function(e,a){return Object(K.jsx)(ie,{address:e,onNextStep:p,onCreateBilling:j},a)})),Object(K.jsxs)(s.a,{sx:{display:"flex",justifyContent:"space-between"},children:[Object(K.jsx)(B.a,{size:"small",color:"inherit",onClick:function(){e(Object(x.n)())},startIcon:Object(K.jsx)(o.a,{icon:M.a}),children:"Back"}),Object(K.jsx)(B.a,{size:"small",onClick:function(){l(!0)},startIcon:Object(K.jsx)(o.a,{icon:k.a}),children:"Add new address"})]})]}),Object(K.jsx)(b.a,{item:!0,xs:12,md:4,children:Object(K.jsx)(V,{subtotal:h,total:r,discount:d})})]}),Object(K.jsx)(ce,{open:c,onClose:function(){l(!1)},onNextStep:p,onCreateBilling:j})]})}function se(e){var a=e.onBackStep,n=Object(u.d)((function(e){return e.product})).checkout.billing;return Object(K.jsxs)(A.a,{sx:{mb:3},children:[Object(K.jsx)(F.a,{title:"Billing Address",action:Object(K.jsx)(B.a,{size:"small",type:"button",startIcon:Object(K.jsx)(o.a,{icon:P.a}),onClick:a,children:"Edit"})}),Object(K.jsxs)(N.a,{children:[Object(K.jsxs)(w.a,{variant:"subtitle2",gutterBottom:!0,children:[null===n||void 0===n?void 0:n.receiver,"\xa0",Object(K.jsxs)(w.a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:["(",null===n||void 0===n?void 0:n.addressType,")"]})]}),Object(K.jsx)(w.a,{variant:"body2",gutterBottom:!0,children:null===n||void 0===n?void 0:n.fullAddress}),Object(K.jsx)(w.a,{variant:"body2",sx:{color:"text.secondary"},children:null===n||void 0===n?void 0:n.phone})]})]})}var de=n(24),be=n(34),he=n(103),pe=n(1411),je=n(1655),ue=n.n(je),xe=n(1365),Oe=n.n(xe),me=n(1472),fe=n(1473),ve=n(1474),ye=n(1475),ge=n(1560),Se=n(1476),Ce=n(1634),ke=n(37),Ie=Object(i.a)("div")((function(e){var a=e.theme;return{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:a.spacing(.5),padding:a.spacing(.5,.75),borderRadius:a.shape.borderRadius,border:"solid 1px ".concat(a.palette.grey[50032])}})),Me=Object(i.a)("img")((function(e){var a=e.theme;return{width:64,height:64,objectFit:"cover",marginRight:a.spacing(2),borderRadius:a.shape.borderRadiusSm}}));function Ae(e){var a=e.available,n=e.quantity,t=e.onIncrease,c=e.onDecrease;return Object(K.jsxs)(s.a,{sx:{width:96,textAlign:"right"},children:[Object(K.jsxs)(Ie,{children:[Object(K.jsx)(ke.e,{size:"small",color:"inherit",onClick:c,disabled:n<=1,children:Object(K.jsx)(o.a,{icon:ue.a,width:16,height:16})}),n,Object(K.jsx)(ke.e,{size:"small",color:"inherit",onClick:t,disabled:n>=a,children:Object(K.jsx)(o.a,{icon:k.a,width:16,height:16})})]}),Object(K.jsxs)(w.a,{variant:"caption",sx:{color:"text.secondary"},children:["available: ",a]})]})}function we(e){var a=e.formik,n=e.onDelete,t=e.onIncreaseQuantity,c=e.onDecreaseQuantity,l=a.values.products;return Object(K.jsx)(me.a,{sx:{minWidth:720},children:Object(K.jsxs)(fe.a,{children:[Object(K.jsx)(ve.a,{children:Object(K.jsxs)(ye.a,{children:[Object(K.jsx)(ge.a,{children:"Product"}),Object(K.jsx)(ge.a,{align:"left",children:"Price"}),Object(K.jsx)(ge.a,{align:"left",children:"Quantity"}),Object(K.jsx)(ge.a,{align:"right",children:"Total Price"}),Object(K.jsx)(ge.a,{align:"right"})]})}),Object(K.jsx)(Se.a,{children:l.map((function(e){var a=e.id,l=e.name,i=e.size,r=e.price,d=e.color,b=e.cover,h=e.quantity,p=e.available;return Object(K.jsxs)(ye.a,{children:[Object(K.jsx)(ge.a,{children:Object(K.jsxs)(s.a,{sx:{display:"flex",alignItems:"center"},children:[Object(K.jsx)(Me,{alt:"product image",src:b}),Object(K.jsxs)(s.a,{children:[Object(K.jsx)(w.a,{noWrap:!0,variant:"subtitle2",sx:{maxWidth:240,mb:.5},children:l}),Object(K.jsxs)(R.a,{direction:"row",spacing:1,alignItems:"center",divider:Object(K.jsx)(E.a,{orientation:"vertical",sx:{height:14,alignSelf:"center"}}),children:[Object(K.jsxs)(w.a,{variant:"body2",children:[Object(K.jsx)(w.a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:"size:\xa0"}),i]}),Object(K.jsxs)(w.a,{variant:"body2",children:[Object(K.jsx)(w.a,{component:"span",variant:"body2",sx:{color:"text.secondary"},children:"color:\xa0"}),Object(Ce.a)(d)]})]})]})]})}),Object(K.jsx)(ge.a,{align:"left",children:Object(W.a)(r)}),Object(K.jsx)(ge.a,{align:"left",children:Object(K.jsx)(Ae,{quantity:h,available:p,onDecrease:function(){return c(a)},onIncrease:function(){return t(a)}})}),Object(K.jsx)(ge.a,{align:"right",children:Object(W.a)(r*h)}),Object(K.jsx)(ge.a,{align:"right",children:Object(K.jsx)(ke.e,{onClick:function(){return n(a)},children:Object(K.jsx)(o.a,{icon:Oe.a,width:20,height:20})})})]},a)}))})]})})}function Be(){var e=Object(u.c)(),a=Object(u.d)((function(e){return e.product})).checkout,n=a.cart,t=a.total,c=a.discount,l=a.subtotal,i=0===n.length,r=Object(Y.d)({enableReinitialize:!0,initialValues:{products:n},onSubmit:function(){var a=Object(J.a)(U.a.mark((function a(n,t){var o,c;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:o=t.setErrors,c=t.setSubmitting;try{c(!0),e(Object(x.p)())}catch(n){console.error(n),o(n.message)}case 2:case"end":return a.stop()}}),a)})));return function(e,n){return a.apply(this,arguments)}}()}),s=r.values,d=r.handleSubmit,h=Object(de.sum)(s.products.map((function(e){return e.quantity})));return Object(K.jsx)(Y.b,{value:r,children:Object(K.jsx)(Y.a,{autoComplete:"off",noValidate:!0,onSubmit:d,children:Object(K.jsxs)(b.a,{container:!0,spacing:3,children:[Object(K.jsxs)(b.a,{item:!0,xs:12,md:8,children:[Object(K.jsxs)(A.a,{sx:{mb:3},children:[Object(K.jsx)(F.a,{title:Object(K.jsxs)(w.a,{variant:"h6",children:["Card",Object(K.jsxs)(w.a,{component:"span",sx:{color:"text.secondary"},children:["\xa0(",h," item)"]})]}),sx:{mb:3}}),i?Object(K.jsx)(pe.a,{title:"Cart is empty",description:"Look like you have no items in your shopping cart.",img:"/static/illustrations/illustration_empty_cart.svg"}):Object(K.jsx)(he.a,{children:Object(K.jsx)(we,{formik:r,onDelete:function(a){e(Object(x.g)(a))},onIncreaseQuantity:function(a){e(Object(x.m)(a))},onDecreaseQuantity:function(a){e(Object(x.e)(a))}})})]}),Object(K.jsx)(B.a,{color:"inherit",component:be.b,to:O.b.eCommerce.root,startIcon:Object(K.jsx)(o.a,{icon:M.a}),children:"Continue Shopping"})]}),Object(K.jsxs)(b.a,{item:!0,xs:12,md:4,children:[Object(K.jsx)(V,{total:t,enableDiscount:!0,discount:c,subtotal:l,onApplyDiscount:function(a){e(Object(x.b)(a))}}),Object(K.jsx)(B.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",disabled:0===s.products.length,children:"Check Out"})]})]})})})}var Te=n(40),De=n(263),Ge=n.n(De),Pe=["formik","deliveryOptions","onApplyShipping"],Fe=Object(i.a)("div")((function(e){var a=e.theme;return{display:"flex",alignItems:"center",padding:a.spacing(0,2.5),justifyContent:"space-between",borderRadius:a.shape.borderRadius,transition:a.transitions.create("all"),border:"solid 1px ".concat(a.palette.grey[50032])}}));function Ne(e){var a=e.formik,n=e.deliveryOptions,t=e.onApplyShipping,c=Object(Te.a)(e,Pe),l=a.values,i=a.setFieldValue;return Object(K.jsxs)(A.a,Object(H.a)(Object(H.a)({},c),{},{children:[Object(K.jsx)(F.a,{title:"Delivery options"}),Object(K.jsx)(N.a,{children:Object(K.jsx)(Q.a,{name:"delivery",value:Number(l.delivery),onChange:function(e){var a=e.target.value;i("delivery",Number(a)),t(Number(a))},children:Object(K.jsx)(b.a,{container:!0,spacing:2,children:n.map((function(e){var a=e.value,n=e.title,t=e.description;return Object(K.jsx)(b.a,{item:!0,xs:12,md:6,children:Object(K.jsx)(Fe,{sx:Object(H.a)({},l.delivery===a&&{boxShadow:function(e){return e.customShadows.z8}}),children:Object(K.jsx)(X.a,{value:a,control:Object(K.jsx)($.a,{checkedIcon:Object(K.jsx)(o.a,{icon:Ge.a})}),label:Object(K.jsxs)(s.a,{sx:{ml:1},children:[Object(K.jsx)(w.a,{variant:"subtitle2",children:n}),Object(K.jsx)(w.a,{variant:"body2",sx:{color:"text.secondary"},children:t})]}),sx:{py:3,flexGrow:1,mr:0}})})},a)}))})})})]}))}var Re=n(6),Ee=n(36),ze=n(2098),Le=n.n(ze),We=n(1284),Ke=n(413),Ve=Object(i.a)(te.b)((function(e){var a=e.theme;return{"& .MuiDialog-paper":Object(Re.a)({margin:0},a.breakpoints.up("md"),{maxWidth:"calc(100% - 48px)",maxHeight:"calc(100% - 48px)"})}}));function He(e){var a=Object.assign({},e),n=Object(Ee.h)(),t=Object(u.c)(),c=function(){t(Object(x.q)()),n(O.b.eCommerce.shop)};return Object(K.jsx)(Ve,Object(H.a)(Object(H.a)({fullScreen:!0},a),{},{children:Object(K.jsxs)(s.a,{sx:{p:4,maxWidth:480,margin:"auto"},children:[Object(K.jsxs)(s.a,{sx:{textAlign:"center"},children:[Object(K.jsx)(w.a,{variant:"h4",paragraph:!0,children:"Thank you for your purchase!"}),Object(K.jsx)(Ke.h,{sx:{height:260,my:10}}),Object(K.jsxs)(w.a,{align:"left",paragraph:!0,children:["Thanks for placing order \xa0",Object(K.jsx)(We.a,{href:"#",children:"01dc1370-3df6-11eb-b378-0242ac130002"})]}),Object(K.jsxs)(w.a,{align:"left",children:["We will send you a notification within 5 days when it ships.",Object(K.jsx)("br",{})," ",Object(K.jsx)("br",{})," If you have any question or queries then fell to get in contact us. ",Object(K.jsx)("br",{})," ",Object(K.jsx)("br",{})," All the best,"]})]}),Object(K.jsx)(E.a,{sx:{my:3}}),Object(K.jsxs)(R.a,{direction:{xs:"column-reverse",sm:"row"},justifyContent:"space-between",spacing:2,children:[Object(K.jsx)(B.a,{color:"inherit",onClick:c,startIcon:Object(K.jsx)(o.a,{icon:M.a}),children:"Continue Shopping"}),Object(K.jsx)(B.a,{variant:"contained",startIcon:Object(K.jsx)(o.a,{icon:Le.a}),onClick:c,children:"Download as PDF"})]})]})}))}var qe=n(1209),Ue=n(1305),Je=Object(i.a)("div")((function(e){var a=e.theme;return{display:"flex",alignItems:"center",padding:a.spacing(0,2.5),justifyContent:"space-between",borderRadius:a.shape.borderRadius,transition:a.transitions.create("all"),border:"solid 1px ".concat(a.palette.grey[50032])}}));function Ze(e){var a=e.paymentOptions,n=e.cardOptions,t=e.formik,c=t.errors,l=t.touched,i=t.values,r=t.getFieldProps;return Object(K.jsxs)(A.a,{sx:{my:3},children:[Object(K.jsx)(F.a,{title:"Payment options"}),Object(K.jsxs)(N.a,{children:[Object(K.jsx)(Q.a,Object(H.a)(Object(H.a)({row:!0},r("payment")),{},{children:Object(K.jsx)(b.a,{container:!0,spacing:2,children:a.map((function(e){var a=e.value,t=e.title,c=e.icons,l=e.description,d="credit_card"===a;return Object(K.jsx)(b.a,{item:!0,xs:12,children:Object(K.jsxs)(Je,{sx:Object(H.a)(Object(H.a)({},i.payment===a&&{boxShadow:function(e){return e.customShadows.z8}}),d&&{flexWrap:"wrap"}),children:[Object(K.jsx)(X.a,{value:a,control:Object(K.jsx)($.a,{checkedIcon:Object(K.jsx)(o.a,{icon:Ge.a})}),label:Object(K.jsxs)(s.a,{sx:{ml:1},children:[Object(K.jsx)(w.a,{variant:"subtitle2",children:t}),Object(K.jsx)(w.a,{variant:"body2",sx:{color:"text.secondary"},children:l})]}),sx:{flexGrow:1,py:3}}),Object(K.jsx)(ke.d,{width:"smDown",children:Object(K.jsx)(s.a,{sx:{flexShrink:0,display:"flex",alignItems:"center"},children:c.map((function(e,a){return Object(K.jsx)(s.a,{component:"img",alt:"logo card",src:e,sx:Object(H.a)({},0===a&&{mr:1})},e)}))})}),d&&Object(K.jsxs)(qe.a,{in:"credit_card"===i.payment,sx:{width:"100%"},children:[Object(K.jsx)(z.a,Object(H.a)(Object(H.a)({select:!0,fullWidth:!0,label:"Card"},r("card")),{},{SelectProps:{native:!0},children:n.map((function(e){return Object(K.jsx)("option",{value:e.value,children:e.label},e.value)}))})),Object(K.jsx)(B.a,{id:"add-card",type:"button",size:"small",startIcon:Object(K.jsx)(o.a,{icon:k.a,width:20,height:20}),sx:{my:3},children:"Add new card"})]})]})},t)}))})})),c.payment&&Object(K.jsx)(Ue.a,{error:!0,children:Object(K.jsx)(s.a,{component:"span",sx:{px:2},children:l.payment&&c.payment})})]})]})}var Ye=[{value:0,title:"Standard delivery (Free)",description:"Delivered on Monday, August 12"},{value:2,title:"Fast delivery ($2,00)",description:"Delivered on Monday, August 5"}],_e=[{value:"paypal",title:"Pay with Paypal",description:"You will be redirected to PayPal website to complete your purchase securely.",icons:["/static/icons/ic_paypal.svg"]},{value:"credit_card",title:"Credit / Debit Card",description:"We support Mastercard, Visa, Discover and Stripe.",icons:["/static/icons/ic_mastercard.svg","/static/icons/ic_visa.svg"]},{value:"cash",title:"Cash on CheckoutDelivery",description:"Pay with cash when your order is delivered.",icons:[]}],Qe=[{value:"ViSa1",label:"**** **** **** 1212 - Jimmy Holland"},{value:"ViSa2",label:"**** **** **** 2424 - Shawn Stokes"},{value:"MasterCard",label:"**** **** **** 4545 - Cole Armstrong"}];function Xe(){var e=Object(u.c)(),a=Object(u.d)((function(e){return e.product})).checkout,n=a.total,t=a.discount,c=a.subtotal,l=a.shipping,i=function(){e(Object(x.n)())},r=Z.f().shape({payment:Z.d().required("Payment is required")}),s=Object(Y.d)({initialValues:{delivery:l,payment:""},validationSchema:r,onSubmit:function(){var a=Object(J.a)(U.a.mark((function a(n,t){var o,c;return U.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:o=t.setErrors,c=t.setSubmitting;try{e(Object(x.p)())}catch(n){console.error(n),c(!1),o(n.message)}case 2:case"end":return a.stop()}}),a)})));return function(e,n){return a.apply(this,arguments)}}()}),d=s.isSubmitting,h=s.handleSubmit;return Object(K.jsx)(Y.b,{value:s,children:Object(K.jsx)(Y.a,{autoComplete:"off",noValidate:!0,onSubmit:h,children:Object(K.jsxs)(b.a,{container:!0,spacing:3,children:[Object(K.jsxs)(b.a,{item:!0,xs:12,md:8,children:[Object(K.jsx)(Ne,{formik:s,onApplyShipping:function(a){e(Object(x.c)(a))},deliveryOptions:Ye}),Object(K.jsx)(Ze,{formik:s,cardOptions:Qe,paymentOptions:_e}),Object(K.jsx)(B.a,{type:"button",size:"small",color:"inherit",onClick:i,startIcon:Object(K.jsx)(o.a,{icon:M.a}),children:"Back"})]}),Object(K.jsxs)(b.a,{item:!0,xs:12,md:4,children:[Object(K.jsx)(se,{onBackStep:i}),Object(K.jsx)(V,{enableEdit:!0,total:n,subtotal:c,discount:t,shipping:l,onEdit:function(){return a=0,void e(Object(x.o)(a));var a}}),Object(K.jsx)(ne.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:d,children:"Complete Order"})]})]})})})}var $e=["Cart","Billing & address","Payment"],ea=Object(i.a)(r.a)((function(e){var a=e.theme;return{top:10,left:"calc(-50% + 20px)",right:"calc(50% + 20px)","& .MuiStepConnector-line":{borderTopWidth:2,borderColor:a.palette.divider},"&.Mui-active, &.Mui-completed":{"& .MuiStepConnector-line":{borderColor:a.palette.primary.main}}}}));function aa(e){var a=e.active,n=e.completed;return Object(K.jsx)(s.a,{sx:{zIndex:9,width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center",color:a?"primary.main":"text.disabled"},children:n?Object(K.jsx)(s.a,{component:o.a,icon:l.a,sx:{zIndex:1,width:20,height:20,color:"primary.main"}}):Object(K.jsx)(s.a,{sx:{width:8,height:8,borderRadius:"50%",backgroundColor:"currentColor"}})})}function na(){var e=Object(f.a)().themeStretch,a=Object(u.c)(),n=Object(m.a)(),o=Object(u.d)((function(e){return e.product})).checkout,c=o.cart,l=o.billing,i=o.activeStep,r=i===$e.length;return Object(t.useEffect)((function(){n.current&&a(Object(x.j)(c))}),[a,n,c]),Object(t.useEffect)((function(){1===i&&a(Object(x.d)(null))}),[a,i]),Object(K.jsx)(v.a,{title:"Ecommerce: Checkout | Minimal-UI",children:Object(K.jsxs)(d.a,{maxWidth:!e&&"lg",children:[Object(K.jsx)(y.a,{heading:"Checkout",links:[{name:"Dashboard",href:O.b.root},{name:"E-Commerce",href:O.b.eCommerce.root},{name:"Checkout"}]}),Object(K.jsx)(b.a,{container:!0,justifyContent:r?"center":"flex-start",children:Object(K.jsx)(b.a,{item:!0,xs:12,md:8,sx:{mb:5},children:Object(K.jsx)(h.a,{alternativeLabel:!0,activeStep:i,connector:Object(K.jsx)(ea,{}),children:$e.map((function(e){return Object(K.jsx)(p.a,{children:Object(K.jsx)(j.a,{StepIconComponent:aa,sx:{"& .MuiStepLabel-label":{typography:"subtitle2",color:"text.disabled"}},children:e})},e)}))})})}),r?Object(K.jsx)(He,{open:r}):Object(K.jsxs)(K.Fragment,{children:[0===i&&Object(K.jsx)(Be,{}),1===i&&Object(K.jsx)(re,{}),2===i&&l&&Object(K.jsx)(Xe,{})]})]})})}}}]);
//# sourceMappingURL=81.0b0ec2c5.chunk.js.map