(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{128:function(e,t,n){},425:function(e,t,n){},427:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(5),s=n.n(r),a=n(16),i=n.n(a),o=(n(128),n(118)),h=n(119),l=n(123),d=n(122),b=(n(129),function(e){var t=e.name,n=e.email,r=e.id;return Object(c.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5",children:[Object(c.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(r,"&200x200")}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h2",{children:t}),Object(c.jsx)("p",{children:n})]})]})}),j=function(e){var t=e.robots;return Object(c.jsx)("div",{children:t.map((function(e,n){return Object(c.jsx)(b,{id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},u=function(e){return Object(c.jsx)("div",{style:{border:"1px solid black",overflowY:"scroll",height:"700px"},children:e.children})},f=(n(425),function(e){var t=e.searchChange;e.searchfield;return Object(c.jsx)("div",{className:"pa2",children:Object(c.jsx)("input",{className:"pa3 b--green bg-lightest-blue",type:"search",placeholder:"robot search",onChange:t})})}),g=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(o.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.state={robots:[],searchfield:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchfield,r=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return t.length?Object(c.jsxs)("div",{className:"tc",children:[Object(c.jsx)("h1",{className:"f1",children:"RoboFriends Park"}),Object(c.jsx)(f,{searchChange:this.onSearchChange}),Object(c.jsx)(u,{children:Object(c.jsx)(j,{robots:r})})]}):Object(c.jsx)("h1",{className:"tc f1",children:"Loading"})}}]),n}(r.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,428)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};n(426);i.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)("div",{children:Object(c.jsx)(g,{})})}),document.getElementById("root")),O()}},[[427,1,2]]]);
//# sourceMappingURL=main.53a7038b.chunk.js.map