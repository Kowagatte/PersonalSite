(this.webpackJsonpdamosite=this.webpackJsonpdamosite||[]).push([[0],{51:function(e,t,a){},62:function(e,t,a){},63:function(e,t,a){},64:function(e,t,a){},66:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(27),c=a.n(n),s=a(0),r=a.n(s),i=a(6),o=a(7),l=a(9),j=a(8),m=(a(51),a(16)),h={Damocles:{href:"/p/damocles/",commit_api:"https://api.github.com/repos/Kowagatte/Damocles-Client/commits"},TopDownShooter:{href:"/p/tds/",commit_api:"https://api.github.com/repos/Kowagatte/TDClient/commits"},Raymond:{href:"/p/raymond/",commit_api:"https://api.github.com/repos/Kowagatte/Raymond/commits"}},u={"About Me":{icon:m.f,href:"/am",items:null},Projects:{icon:m.e,items:h},Devlog:{icon:m.a,href:"/d",items:null}},b=a(17),d=a(18),p=a(41),O=a(73),f=a(46),x=a.p+"static/media/logo.7f073356.svg",g=a(1),v=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"top-navbar",children:[Object(g.jsxs)("div",{className:"navbar-header",children:[Object(g.jsx)("img",{className:"damocles-logo",src:x,alt:"Damocles logo"}),Object(g.jsx)(d.Link,{to:"/",children:"Damocles"})]}),Object.keys(u).map((function(e,t){return null!=u[e].items?Object(g.jsx)(O.a,{className:"navbar dropdown-toggle btn btn-primary",id:"dropdown-basic-button",title:Object(g.jsxs)("div",{children:[Object(g.jsx)(b.a,{className:"navbar-objects",icon:u[e].icon}),Object(g.jsx)("div",{className:"navText",children:e})]}),children:Object.keys(u[e].items).map((function(t){return Object(g.jsx)(p.LinkContainer,{to:u[e].items[t].href,children:Object(g.jsx)(f.a.Item,{children:t})})}))}):Object(g.jsx)("div",{className:"navbar-objects",children:Object(g.jsxs)(d.Link,{to:u[e].href,children:[Object(g.jsx)(b.a,{className:"navbar-objects",icon:u[e].icon}),Object(g.jsx)("div",{className:"navText",children:e})]})})}))]})}}]),a}(r.a.Component),y=a(20),N={mail:{icon:m.d,href:"mailto:admin@damocles.com"},github:{icon:y.b,href:"https://github.com/Kowagatte"},discord:{icon:y.a,href:"https://discordapp.com/invite/VV95h9M"},steam:{icon:y.c,href:"https://steamcommunity.com/id/NickKowa"},twitter:{icon:y.d,href:"https://twitter.com/nick_damocles"},sponsor:{icon:m.c,href:"https://www.patreon.com/thekowagatte"}},k=(a(62),function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={icon:null,href:null},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(g.jsx)("a",{className:"icon",href:this.props.href,children:Object(g.jsx)(b.a,{icon:this.props.icon})})}}]),a}(r.a.Component)),w=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"footer",children:[Object(g.jsx)("div",{className:"fontAwesomeIcons",children:Object.keys(N).map((function(e,t){return Object(g.jsx)(k,{href:N[e].href,icon:N[e].icon})}))}),Object(g.jsxs)("ul",{className:"footer-notes",children:[Object(g.jsx)("li",{id:"id-tag",className:"footer-notes",children:"Nicholas N Ryan"}),Object(g.jsx)("li",{className:"footer-notes",children:"\u2022"}),Object(g.jsx)("li",{id:"id-tag",className:"footer-notes",children:"2019-2021"}),Object(g.jsx)("li",{className:"footer-notes",children:"\u2022"}),Object(g.jsx)("li",{className:"footer-notes",children:Object(g.jsx)("a",{href:"https://damocles.ca",children:"damocles.ca"})})]})]})}}]),a}(r.a.Component),D=(a(63),a(5));function _(e){var t=new Date(Date.now()-Date.parse(e));return t.getFullYear()>1970?t.getFullYear()-1970+" years ago":t.getMonth()>0?t.getMonth()+" months ago":Math.floor(t.getDate()/7)>0?Math.floor(t.getDate()/7)+" weeks ago":t.getDate>0?t.getDate()+" days ago":t.getHours()>0?t.getHours()+" hours ago":t.getMinutes()+" minutes ago"}var C=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={author:null,author_link:null,image_url:null,date:null,message:null,verified:null,url:null},n}return Object(o.a)(a,[{key:"render",value:function(){return Object(g.jsxs)("div",{className:"commit",children:[Object(g.jsxs)("a",{className:"commit-name",href:this.props.author_link,children:[Object(g.jsx)("img",{className:"commit-image",src:this.props.image_url,style:{maxWidth:"30px",maxHeight:"30px",paddingRight:"5px"},alt:"avatar-image"}),this.props.author]}),Object(g.jsx)("br",{}),Object(g.jsx)(b.a,{icon:m.b})," ",_(this.props.date),Object(g.jsx)("br",{}),Object(g.jsxs)("p",{children:[" ",this.props.message," "]}),Object(g.jsxs)("a",{className:"commit-git",href:this.props.url,children:["On ",Object(g.jsx)(b.a,{icon:y.b})]}),Object(g.jsx)("hr",{})]})}}]),a}(r.a.Component),M=(a(64),a(65)),R=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={url:"",commits:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;M(this.props.url).then((function(e){return e.json()})).then((function(t){e.setState({commits:t})}))}},{key:"render",value:function(){var e=this.state.commits;return Object(g.jsxs)("div",{className:"git-commits",id:"styled-scroll",children:[Object(g.jsx)("p",{}),Object.keys(e||{}).map((function(t,a){return Object(g.jsx)(C,{author:e[a].commit.author.name,author_link:e[a].author.html_url,image_url:e[a].author.avatar_url,date:e[a].commit.author.date,message:e[a].commit.message,url:e[a].html_url})})),Object(g.jsx)("p",{})]})}}]),a}(r.a.Component),T=(a(66),a.p+"static/media/damocles-banner.40656b52.png"),K=(a(67),function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this,t=r.a.Children.map(this.props.children,(function(t){return r.a.isValidElement(t)?r.a.cloneElement(t,{doSomething:e.doSomething}):t}));return Object(g.jsx)("div",{className:"project-page",children:t})}}]),a}(r.a.Component)),S=a.p+"static/media/banana.ed328241.jpg",E=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(g.jsxs)(K,{children:[Object(g.jsx)("img",{src:T,alt:"BannerImage",className:"banner-image"}),Object(g.jsx)(R,{url:h.Damocles.commit_api}),Object(g.jsx)("div",{children:"Damocles is a (not so MMO) RPG, that exaggerates and depends on player to player interaction. Quests, Character progression, Economy, World-building are all dependent"}),Object(g.jsx)("img",{src:S,alt:"banana"}),Object(g.jsx)("img",{src:S,alt:"banana"}),Object(g.jsx)("img",{src:S,alt:"banana"}),Object(g.jsx)("img",{src:S,alt:"banana"}),Object(g.jsx)("img",{src:S,alt:"banana"})]})}}]),a}(r.a.Component),I=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(g.jsxs)(K,{children:[Object(g.jsx)(R,{url:h.Raymond.commit_api}),Object(g.jsx)("div",{children:"TODO create this page and add information"})]})}}]),a}(r.a.Component),B=function(e){Object(l.a)(a,e);var t=Object(j.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(g.jsxs)(K,{children:[Object(g.jsx)(R,{url:h.TopDownShooter.commit_api}),Object(g.jsx)("div",{children:"TODO create this page and add information"})]})}}]),a}(r.a.Component);function H(){return Object(g.jsxs)(d.BrowserRouter,{children:[Object(g.jsx)(v,{}),Object(g.jsx)("div",{id:"container",children:Object(g.jsxs)(D.g,{children:[Object(g.jsx)(D.d,{path:"/p/damocles",children:Object(g.jsx)(E,{})}),Object(g.jsx)(D.d,{path:"/p/raymond",children:Object(g.jsx)(I,{})}),Object(g.jsx)(D.d,{path:"/p/tds",children:Object(g.jsx)(B,{})})]})}),Object(g.jsx)(D.d,{exact:!0,path:"/",children:Object(g.jsx)(w,{})})]})}c.a.render(Object(g.jsx)(H,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.455c5e83.chunk.js.map