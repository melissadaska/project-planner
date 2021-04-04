(this.webpackJsonpprojectplanner=this.webpackJsonpprojectplanner||[]).push([[0],{220:function(e,t,n){},409:function(e,t,n){"use strict";n.r(t);var a=n(14),c=n(2),r=n(94),s=n.n(r),i=(n(220),n(28)),o=n(29),l=n(31),j=n(30),d=n(10),h=n(7),u=n(11),b=n(1),p=Object(u.b)(null,(function(e){return{signOut:function(){return e((function(e,t,n){(0,n.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS "})}))}))}}}))((function(e){return Object(b.jsxs)("ul",{className:"right",children:[Object(b.jsx)("li",{children:Object(b.jsx)(d.c,{to:"/create",children:"New Project"})}),Object(b.jsx)("li",{children:Object(b.jsx)("a",{onClick:e.signOut,children:"Log Out"})}),Object(b.jsx)("li",{children:Object(b.jsx)(d.c,{to:"/",className:"btn btn-floating pink lighten-1",children:e.profile.initials})})]})})),O=function(){return Object(b.jsxs)("ul",{className:"right",children:[Object(b.jsx)("li",{children:Object(b.jsx)(d.c,{to:"/signup",children:"Sign Up"})}),Object(b.jsx)("li",{children:Object(b.jsx)(d.c,{to:"/signin",children:"Log In"})})]})},m=Object(u.b)((function(e){return console.log(e),{auth:e.firebase.auth,profile:e.firebase.profile}}))((function(e){var t=e.auth,n=e.profile,a=t.uid?Object(b.jsx)(p,{profile:n}):Object(b.jsx)(O,{});return Object(b.jsx)("nav",{className:"nav-wrapper grey darken-3",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(d.b,{to:"/",className:"brand-logo",children:"Project Planner"}),a]})})})),f=n(55),x=n.n(f),g=function(e){var t=e.notifications;return Object(b.jsx)("div",{className:"section",children:Object(b.jsx)("div",{className:"card z-depth-0",children:Object(b.jsxs)("div",{className:"card-content",children:[Object(b.jsx)("span",{className:"card-title",children:"Notifications"}),Object(b.jsx)("ul",{children:t&&t.map((function(e){return Object(b.jsxs)("li",{children:[Object(b.jsxs)("span",{className:"pink-text",children:[e.user," "]}),Object(b.jsx)("span",{className:"pink-text",children:e.content}),Object(b.jsx)("div",{className:"grey-text note-date",children:x()(e.time.toDate()).fromNow()})]},e.id)}))})]})})})},N=function(e){var t=e.project;return Object(b.jsx)("div",{className:"card z-depth-0 project-summary",children:Object(b.jsxs)("div",{className:"card-content grey-text text-darken-3",children:[Object(b.jsx)("span",{className:"card-title",children:t.title}),Object(b.jsxs)("p",{children:["Posted by ",t.authorFirstName," ",t.authorLastName," "]}),Object(b.jsx)("p",{className:"grey-text",children:x()(t.createdAt.toDate()).calendar()})]})})},v=function(e){var t=e.projects;return Object(b.jsx)("div",{className:"project-list section",children:t&&t.map((function(e){return Object(b.jsx)(d.b,{to:"/project/"+e.id,children:Object(b.jsx)(N,{project:e})},e.id)}))})},C=n(35),y=n(22),S=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.projects,n=e.auth,a=e.notifications;return n.uid?Object(b.jsx)("div",{className:"dashboard container",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("div",{className:"col s12 m6",children:Object(b.jsx)(v,{projects:t})}),Object(b.jsx)("div",{className:"col s12 m5 offset-m1",children:Object(b.jsx)(g,{notifications:a})})]})}):Object(b.jsx)(h.a,{to:"/signin"})}}]),n}(c.Component),E=Object(y.d)(Object(u.b)((function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(C.firestoreConnect)([{collection:"projects",createdAt:["time","desc"]},{collection:"notifications",limit:5,orderBy:["time","desc"]}]))(S),w=Object(y.d)(Object(u.b)((function(e,t){var n=t.match.params.id,a=e.firestore.data.projects;return{project:a?a[n]:null,auth:e.firebase.auth}})),Object(C.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project;return e.auth.uid?t?Object(b.jsx)("div",{className:"container section project-details",children:Object(b.jsxs)("div",{className:"card z-depth-0",children:[Object(b.jsxs)("div",{className:"card-content",children:[Object(b.jsxs)("span",{className:"card-title",children:[t.title," "]}),Object(b.jsx)("p",{children:t.content})]}),Object(b.jsxs)("div",{className:"card-action gret lighten-4 grey-text",children:[Object(b.jsxs)("div",{children:["Posted by ",t.authorFirstName," ",t.authorLastName," "]}),Object(b.jsxs)("div",{children:[" ",x()(t.createdAt.toDate()).calendar()," "]})]})]})}):Object(b.jsx)("div",{className:"container center",children:Object(b.jsx)("p",{children:"Loading Project..."})}):Object(b.jsx)(h.a,{to:"/signin"})})),F=n(36),R=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:""},e.handleChange=function(t){e.setState(Object(F.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?Object(b.jsx)(h.a,{to:"/"}):Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(b.jsx)("h5",{className:"grey-text text-darken-3",children:"Sign In"}),Object(b.jsxs)("div",{className:"input field",children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"input field",children:[Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"input field",children:[Object(b.jsx)("button",{className:"btn pink lighten-1 z-depth-0",children:"Login"}),Object(b.jsx)("div",{className:"red-text center",children:t?Object(b.jsxs)("p",{children:[" ",t," "]}):null})]})]})})}}]),n}(c.Component),I=Object(u.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((n=t,function(e,t,a){(0,a.getFirebase)().auth().signInWithEmailAndPassword(n.email,n.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var n}}}))(R),P=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={email:"",password:"",firstName:"",lastName:""},e.handleChange=function(t){e.setState(Object(F.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signUp(e.state)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?Object(b.jsx)(h.a,{to:"/"}):Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(b.jsx)("h5",{className:"grey-text text-darken-3",children:"Sign Up"}),Object(b.jsxs)("div",{className:"input field",children:[Object(b.jsx)("label",{htmlFor:"email",children:"Email"}),Object(b.jsx)("input",{type:"email",id:"email",onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"input field",children:[Object(b.jsx)("label",{htmlFor:"password",children:"Password"}),Object(b.jsx)("input",{type:"password",id:"password",onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"input field",children:[Object(b.jsx)("label",{htmlFor:"firstName",children:"First Name"}),Object(b.jsx)("input",{type:"text",id:"firstName",onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"input field",children:[Object(b.jsx)("label",{htmlFor:"lastName",children:"Last Name"}),Object(b.jsx)("input",{type:"text",id:"lastName",onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"input field",children:[Object(b.jsx)("button",{className:"btn pink lighten-1 z-depth-0",children:"Sign Up"}),Object(b.jsx)("div",{className:"red-text center",children:t?Object(b.jsxs)("p",{children:[" ",t]}):null})]})]})})}}]),n}(c.Component),k=Object(u.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e(function(e){return function(t,n,a){var c=a.getFirebase,r=a.getFirestore,s=c(),i=r();s.auth().createUserWithEmailAndPassword(e.email,e.password).then((function(t){return i.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})})).then((function(){t({type:"SIGNUP_SUCCESS"})})).catch((function(e){t({type:"SIGNUP_ERROR",err:e})}))}}(t))}}}))(P),A=function(e){return function(t,n,c){var r=(0,c.getFirestore)(),s=n().firebase.profile,i=n().firebase.auth.uid;r.collection("projects").add(Object(a.a)(Object(a.a)({},e),{},{authorFirstName:s.firstName,authorLastName:s.lastName,authorId:i,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}},U=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={title:"",content:""},e.handleChange=function(t){e.setState(Object(F.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.createProject(e.state),e.props.history.push("/")},e}return Object(o.a)(n,[{key:"render",value:function(){return this.props.auth.uid?Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("form",{onSubmit:this.handleSubmit,className:"white",children:[Object(b.jsx)("h5",{className:"grey-text text-darken-3",children:"Create New Project"}),Object(b.jsxs)("div",{className:"input field",children:[Object(b.jsx)("label",{htmlFor:"title",children:"Title"}),Object(b.jsx)("input",{type:"text",id:"title",onChange:this.handleChange})]}),Object(b.jsxs)("div",{className:"input field",children:[Object(b.jsx)("label",{htmlFor:"content",children:"Project Content"}),Object(b.jsx)("textarea",{id:"content",className:"materialize-textarea",onChange:this.handleChange})]}),Object(b.jsx)("div",{className:"input field",children:Object(b.jsx)("button",{className:"btn pink lighten-1 z-depth-0",children:"Create"})})]})}):Object(b.jsx)(h.a,{to:"signin"})}}]),n}(c.Component),L=Object(u.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(A(t))}}}))(U),_=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(b.jsx)(d.a,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(m,{}),Object(b.jsxs)(h.d,{children:[Object(b.jsx)(h.b,{exact:!0,path:"/",component:E}),Object(b.jsx)(h.b,{path:"/project/:id",component:w}),Object(b.jsx)(h.b,{path:"/signin",component:I}),Object(b.jsx)(h.b,{path:"/signup",component:k}),Object(b.jsx)(h.b,{path:"/create",component:L})]})]})})}}]),n}(c.Component),T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,411)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},G={authError:null},z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(a.a)(Object(a.a)({},e),{},{authError:"Login Failed"});case"LOGIN_SUCCESS":return console.log("login success"),Object(a.a)(Object(a.a)({},e),{},{authError:null});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(a.a)(Object(a.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(a.a)(Object(a.a)({},e),{},{authError:t.err.message});default:return e}},D={projects:[{id:"1",title:"help me find jake",content:"find where jake is hiding"},{id:"2",title:"find dog toys",content:"walk the house and search for all dog toys then put them away"},{id:"3",title:"walk dogs",content:"walk the dogs around the park"}]},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),e;default:return e}},B=n(56),K=Object(y.c)({auth:z,project:J,firestore:B.firestoreReducer,firebase:C.firebaseReducer}),W=n(215),H=n(57);n(410),n(407);H.a.initializeApp({apiKey:"AIzaSyC5hlmIHmC8n5a17ZS35bNo3lpKxpxOePo",authDomain:"project-planner-df0aa.firebaseapp.com",projectId:"project-planner-df0aa",storageBucket:"project-planner-df0aa.appspot.com",messagingSenderId:"186435192463",appId:"1:186435192463:web:5e6292ff629ac88ef312fa",measurementId:"G-2TK09RJQL8"}),H.a.firestore().settings({timestampsInSnapshots:!0});var Q=H.a,Z=Object(y.e)(K,Object(y.d)(Object(y.a)(W.a.withExtraArgument({getFirebase:C.getFirebase,getFirestore:B.getFirestore})),Object(B.reduxFirestore)(Q,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0}))),q={firebase:H.a,config:Q,dispatch:Z.dispatch,createFirestoreInstance:B.createFirestoreInstance};s.a.render(Object(b.jsx)(u.a,{store:Z,children:Object(b.jsx)(C.ReactReduxFirebaseProvider,Object(a.a)(Object(a.a)({},q),{},{children:Object(b.jsx)(_,{})}))}),document.getElementById("root")),T()}},[[409,1,2]]]);
//# sourceMappingURL=main.b499afca.chunk.js.map