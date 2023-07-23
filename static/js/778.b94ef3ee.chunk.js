"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[778],{9253:function(n,e,r){r.r(e),r.d(e,{default:function(){return W}});var t,o,s,a,i,d,l,c,u,m=r(9434),h=r(5705),p=r(8007),f=p.Ry().shape({username:p.Z_().test("trim","The field must not start or end with spaces",(function(n){return!n||n.trim()===n})).required("required field").max(30,"the name must contain a maximum of 30 characters"),email:p.Z_().email("Please enter a valid email address").test("trim","The field must not start or end with spaces",(function(n){return!n||n.trim()===n})).required("required field").max(30,"the name must contain a maximum of 30 characters"),password:p.Z_().test("trim","The field must not start or end with spaces",(function(n){return!n||n.trim()===n})).required("required field").min(6,"Password must contain at least 6 characters").max(12,"Password must contain a maximum of 20 characters").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,20}$/,"Password must contain at least one uppercase letter, one lowercase letter and one number"),confirmPassword:p.Z_().oneOf([p.iH("password"),null],"Passwords must match").required("Confirm Password is required")}),w=r(5007),x=r(5822),g=r(3535),j=r(9418),b=r(2330),P=r(168),v=r(4313),Z=(0,v.F4)(t||(t=(0,P.Z)(["\n  from {\n    width: 0%;\n    background-color: transparent;\n  }\n  to {\n    width:100%;\n    background-color: ",";\n  }\n"])),(function(n){return n.color})),k=v.ZP.div(o||(o=(0,P.Z)(["\n  width: 100%;\n  height: 3px;\n  background-color: transparent;\n  border-radius: 5px;\n  animation: "," 0.5s ease;\n  width: ",";\n  background-color: ",";\n  transition: all 0.4s ease-out;\n  ",";\n"])),Z,(function(n){return n.width}),(function(n){return n.color}),(function(n){return(0,v.iv)(s||(s=(0,P.Z)(["\n    background-color: ",";\n  "])),n.color)})),C=v.ZP.p(a||(a=(0,P.Z)(["\n  margin-top: 5px;\n  color: ",";\n  font-size: 14px;\n  font-weight: bold;\n"])),(function(n){return n.color})),y=r(3329),F=function(n){var e=n.values,r={getPasswordStrengthWidth:function(n){var e=((null===n||void 0===n?void 0:n.length)||0)/10*100;return"".concat(Math.min(e,100),"%")},getPasswordStrengthColor:function(n){return([{length:1,color:"#FD450B"},{length:3,color:"#FF6231"},{length:4,color:"#F37952"},{length:5,color:"#FC675D"},{length:6,color:"#F6C881"},{length:7,color:"#FBEC67"},{length:8,color:"#F8E32B"},{length:9,color:"#CAF98F"},{length:10,color:"#52E54F"},{length:1/0,color:"#099E06"}].find((function(e){return(null===n||void 0===n?void 0:n.length)<=e.length}))||{color:"transparent"}).color},getPasswordStrengthText:function(n){return([{min:2,max:6,text:"Weak Password"},{min:7,max:10,text:"Medium Strength Password"},{min:11,max:1/0,text:"Strong Password"}].find((function(e){return(null===n||void 0===n?void 0:n.length)>=e.min&&(null===n||void 0===n?void 0:n.length)<=e.max}))||{text:""}).text}},t=r.getPasswordStrengthWidth,o=r.getPasswordStrengthColor,s=r.getPasswordStrengthText;return(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(k,{width:t(e.password),color:o(e.password)}),(0,y.jsx)(C,{color:o(e.password),children:s(e.password)})]})},S=(r(2791),v.ZP.div(i||(i=(0,P.Z)(["\n  height: 3px;\n  background-color: ",";\n  transition: all 0.4s ease-out;\n"])),(function(n){return n.passwordsMatch?"green":"red"}))),q=function(n){var e=n.passwordsMatch,r=e?"100%":"50%";return n.values.confirmPassword&&(0,y.jsx)(S,{passwordsMatch:e,style:{width:r}})},E=r(1087),T=r(2036),M=r(7692),_=((0,v.ZP)(T.JE)(d||(d=(0,P.Z)(["\n  padding: 60px 62px;\n"]))),(0,v.ZP)(E.rU)(l||(l=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-width: ",";\n  min-height: ",";\n\n  text-align: center;\n  font-family: ",";\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 400;\n  line-height: normal;\n  letter-spacing: 1.8px;\n  text-transform: uppercase;\n\n  color: ",";\n  background: ",";\n  border: ",";\n  border-color: ",";\n  border-radius: ",";\n  box-shadow: ",";\n  cursor: pointer;\n  transition: transform 250ms ease-in-out;\n\n  &:focus,\n  &:hover {\n    border-radius: 18px;\n    border: 2px solid yellow;\n    transform: scale(1.01);\n    box-shadow: 1px 5px 8px 0px rgba(0, 0, 0, 0.5);\n  }\n"])),(function(n){return n.theme.spacing(75)}),(function(n){return n.theme.spacing(12.5)}),(function(n){return n.theme.fonts.regular}),(function(n){return n.theme.colors.btnVioletText}),(function(n){return n.theme.colors.btnWhiteBg}),(function(n){return n.theme.borders.normal}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.radii.button}),(function(n){return n.theme.shadows.secondary}))),z=(0,v.ZP)(M.BHb)(c||(c=(0,P.Z)(["\n  height: 24px;\n  width: 24px;\n  color: grey;\n  position: absolute;\n  left: 8px;\n  top: 74%;\n  transform: translateY(-50%);\n  pointer-events: none;\n  z-index: 1;\n"]))),B=r(4221),X=function(){var n=(0,w.r)(["password1","password2"]),e=n.showPasswords,r=n.togglePasswordVisibility,t=(0,m.I0)();return(0,y.jsxs)(T.JE,{children:[(0,y.jsx)(b.T,{}),(0,y.jsx)(h.J9,{initialValues:{username:"",email:"",password:"",confirmPassword:""},validationSchema:f,onSubmit:function(n,e){var r=e.resetForm,o=n.username,s=n.email,a=n.password;t((0,x.rv)({username:o,email:s,password:a})),console.log(n),r()},children:function(n){var t=n.values,o=n.handleChange,s=n.handleBlur,a=n.touched,i=n.errors;return(0,y.jsxs)(T.tN,{autoComplete:"off",children:[(0,y.jsxs)(T.QI,{children:[(0,y.jsxs)(T.aS,{children:[(0,y.jsx)(T.sG,{type:"text",name:"username",placeholder:"First name",autoComplete:"off",required:!0}),(0,y.jsx)(z,{})]}),(0,y.jsx)(j.X,{name:"username",touched:a,errors:i}),(0,y.jsxs)(T.aS,{children:[(0,y.jsx)(T.sG,{type:"email",name:"email",placeholder:"Email",autoComplete:"off",required:!0}),(0,y.jsx)(T.LQ,{})]}),(0,y.jsx)(j.X,{name:"email",touched:a,errors:i}),(0,y.jsxs)(T.tX,{children:[(0,y.jsxs)(T.M$,{children:[(0,y.jsx)(T.sG,{type:e.password1?"text":"password",name:"password",title:"Enter the password more difficult, letter, digit, capital letter.",placeholder:"Password",required:!0,value:t.password,onChange:o,onBlur:s,autoComplete:"off"}),(0,y.jsx)(T.I2,{})]}),(0,y.jsx)(B.S,{showPassword:e.password1,onToggle:function(){return r("password1")}})]}),(0,y.jsx)(F,{values:t}),(0,y.jsx)(j.X,{name:"password",touched:a,errors:i}),(0,y.jsxs)(T.tX,{children:[(0,y.jsxs)(T.M$,{children:[(0,y.jsx)(T.sG,{type:e.password2?"text":"password",name:"confirmPassword",title:"Enter the password more difficult, letter, digit, capital letter.",placeholder:"Confirm Password",autoComplete:"off",required:!0}),(0,y.jsx)(T.I2,{})]}),(0,y.jsx)(B.S,{showPassword:e.password2,onToggle:function(){return r("password2")}})]}),(0,y.jsx)(q,{values:t,passwordsMatch:t.password===t.confirmPassword&&""!==t.confirmPassword}),(0,y.jsx)(j.X,{name:"confirmPassword"})]}),(0,y.jsxs)(T.CJ,{children:[(0,y.jsx)(g.z,{type:"submit",text:"register"}),(0,y.jsx)(_,{to:"/login",children:"Log in"})]})]})}})]})},G=r.p+"static/media/GradientRegister.a28fff3105f95e2e7d4e.png",I=r(5383),J=v.ZP.div(u||(u=(0,P.Z)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  background: #302e32;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n\n  @media (min-width: 768px) {\n    background-image: url(",");\n  }\n"])),I,G),W=function(){return(0,y.jsx)(J,{children:(0,y.jsx)(X,{})})}}}]);
//# sourceMappingURL=778.b94ef3ee.chunk.js.map