(this["webpackJsonp@minimal/minimal-kit-react"]=this["webpackJsonp@minimal/minimal-kit-react"]||[]).push([[140],{2659:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return H}));var r=a(6),i=a(1262),n=a(34),s=a(7),c=a(1308),l=a(1284),o=a(206),d=a(1295),j=a(409),m=a(1300),u=a(62),b=a(23),h=a(559),x=a(412),O=a(37),p=a(4),f=a(17),g=a.n(f),v=a(26),w=a(16),y=a(251),N=a(1),S=a(25),k=a(171),q=a(249),T=a(421),C=a.n(T),W=a(208),B=a.n(W),L=a(428),P=a.n(L),A=a(1198),E=a(1270),F=a(1301),I=a(1297),M=a(1286),D=a(1311),R=a(174),z=a(0);function G(){var e=Object(u.a)().register,t=Object(R.a)(),a=Object(k.b)(),r=a.enqueueSnackbar,i=a.closeSnackbar,n=Object(N.useState)(!1),s=Object(w.a)(n,2),c=s[0],l=s[1],o=y.f().shape({firstName:y.h().min(2,"Too Short!").max(50,"Too Long!").required("First name required"),lastName:y.h().min(2,"Too Short!").max(50,"Too Long!").required("Last name required"),email:y.h().email("Email must be a valid email address").required("Email is required"),password:y.h().required("Password is required")}),d=Object(q.d)({initialValues:{firstName:"",lastName:"",email:"",password:""},validationSchema:o,onSubmit:function(){var a=Object(v.a)(g.a.mark((function a(n,s){var c,l;return g.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c=s.setErrors,l=s.setSubmitting,a.prev=1,a.next=4,e(n.email,n.password,n.firstName,n.lastName);case 4:r("Register success",{variant:"success",action:function(e){return Object(z.jsx)(O.e,{size:"small",onClick:function(){return i(e)},children:Object(z.jsx)(S.a,{icon:B.a})})}}),t.current&&l(!1),a.next=12;break;case 8:a.prev=8,a.t0=a.catch(1),console.error(a.t0),t.current&&(c({afterSubmit:a.t0.message}),l(!1));case 12:case"end":return a.stop()}}),a,null,[[1,8]])})));return function(e,t){return a.apply(this,arguments)}}()}),j=d.errors,m=d.touched,b=d.handleSubmit,h=d.isSubmitting,x=d.getFieldProps;return Object(z.jsx)(q.b,{value:d,children:Object(z.jsx)(q.a,{autoComplete:"off",noValidate:!0,onSubmit:b,children:Object(z.jsxs)(A.a,{spacing:3,children:[j.afterSubmit&&Object(z.jsx)(E.a,{severity:"error",children:j.afterSubmit}),Object(z.jsxs)(A.a,{direction:{xs:"column",sm:"row"},spacing:2,children:[Object(z.jsx)(F.a,Object(p.a)(Object(p.a)({fullWidth:!0,label:"First name"},x("firstName")),{},{error:Boolean(m.firstName&&j.firstName),helperText:m.firstName&&j.firstName})),Object(z.jsx)(F.a,Object(p.a)(Object(p.a)({fullWidth:!0,label:"Last name"},x("lastName")),{},{error:Boolean(m.lastName&&j.lastName),helperText:m.lastName&&j.lastName}))]}),Object(z.jsx)(F.a,Object(p.a)(Object(p.a)({fullWidth:!0,autoComplete:"username",type:"email",label:"Email address"},x("email")),{},{error:Boolean(m.email&&j.email),helperText:m.email&&j.email})),Object(z.jsx)(F.a,Object(p.a)(Object(p.a)({fullWidth:!0,autoComplete:"current-password",type:c?"text":"password",label:"Password"},x("password")),{},{InputProps:{endAdornment:Object(z.jsx)(I.a,{position:"end",children:Object(z.jsx)(M.a,{edge:"end",onClick:function(){return l((function(e){return!e}))},children:Object(z.jsx)(S.a,{icon:c?C.a:P.a})})})},error:Boolean(m.password&&j.password),helperText:m.password&&j.password})),Object(z.jsx)(D.a,{fullWidth:!0,size:"large",type:"submit",variant:"contained",loading:h,children:"Register"})]})})})}var J=a(580),U=Object(s.a)(x.a)((function(e){var t=e.theme;return Object(r.a)({},t.breakpoints.up("md"),{display:"flex"})})),V=Object(s.a)(c.a)((function(e){return{width:"100%",maxWidth:464,display:"flex",flexDirection:"column",justifyContent:"center",margin:e.theme.spacing(2,0,2,2)}})),_=Object(s.a)("div")((function(e){return{maxWidth:480,margin:"auto",display:"flex",minHeight:"100vh",flexDirection:"column",justifyContent:"center",padding:e.theme.spacing(12,0)}}));function H(){var e=Object(u.a)().method;return Object(z.jsxs)(U,{title:"Register | Minimal-UI",children:[Object(z.jsxs)(h.a,{children:["Already have an account? \xa0",Object(z.jsx)(l.a,{underline:"none",variant:"subtitle2",component:n.b,to:b.a.login,children:"Login"})]}),Object(z.jsx)(O.d,{width:"mdDown",children:Object(z.jsxs)(V,{children:[Object(z.jsx)(o.a,{variant:"h3",sx:{px:5,mt:10,mb:5},children:"Manage the job more effectively with Minimal"}),Object(z.jsx)("img",{alt:"register",src:"/static/illustrations/illustration_register.png"})]})}),Object(z.jsx)(d.a,{children:Object(z.jsxs)(_,{children:[Object(z.jsxs)(j.a,{sx:{mb:5,display:"flex",alignItems:"center"},children:[Object(z.jsxs)(j.a,{sx:{flexGrow:1},children:[Object(z.jsx)(o.a,{variant:"h4",gutterBottom:!0,children:"Get started absolutely free."}),Object(z.jsx)(o.a,{sx:{color:"text.secondary"},children:"Free forever. No credit card needed."})]}),Object(z.jsx)(m.a,{title:Object(i.a)(e),children:Object(z.jsx)(j.a,{component:"img",src:"/static/auth/ic_".concat(e,".png"),sx:{width:32,height:32}})})]}),"firebase"===e&&Object(z.jsx)(J.a,{}),Object(z.jsx)(G,{}),Object(z.jsxs)(o.a,{variant:"body2",align:"center",sx:{color:"text.secondary",mt:3},children:["By registering, I agree to Minimal\xa0",Object(z.jsx)(l.a,{underline:"always",color:"text.primary",href:"#",children:"Terms of Service"}),"\xa0and\xa0",Object(z.jsx)(l.a,{underline:"always",color:"text.primary",href:"#",children:"Privacy Policy"}),"."]}),Object(z.jsx)(O.d,{width:"smUp",children:Object(z.jsxs)(o.a,{variant:"subtitle2",sx:{mt:3,textAlign:"center"},children:["Already have an account?\xa0",Object(z.jsx)(l.a,{to:b.a.login,component:n.b,children:"Login"})]})})]})})]})}}}]);
//# sourceMappingURL=140.56fe4e70.chunk.js.map