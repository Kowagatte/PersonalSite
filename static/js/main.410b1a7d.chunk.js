(this.webpackJsonpdamosite=this.webpackJsonpdamosite||[]).push([[0],{60:function(e,c,t){},71:function(e,c,t){},72:function(e,c,t){},73:function(e,c,t){},74:function(e,c,t){},75:function(e,c,t){},76:function(e,c,t){},77:function(e,c,t){},79:function(e,c,t){},92:function(e,c,t){"use strict";t.r(c);var n=t(30),a=t.n(n),i=t(0),r=t.n(i),s=t(5),j=t(6),k=t(8),O=t(7),o=(t(60),t(16)),l={Damocles:{href:"/p/damocles/",commit_api:"https://api.github.com/repos/Kowagatte/Damocles-Client/commits"},TopDownShooter:{href:"/p/tds/",commit_api:"https://api.github.com/repos/Kowagatte/TDClient/commits"},Raymond:{href:"/p/raymond/",commit_api:"https://api.github.com/repos/Kowagatte/Raymond/commits"}},I={"About Me":{icon:o.g,href:"/am",items:null},Projects:{icon:o.e,items:l},Devlog:{icon:o.a,href:"/d",items:null},Collection:{icon:o.f,href:"/collection",items:null}},u=t(17),y=t(18),R=t(45),h=t(97),d=t(53),m=t.p+"static/media/logo.7f073356.svg",p=t(1),H=function(e){Object(k.a)(t,e);var c=Object(O.a)(t);function t(){return Object(s.a)(this,t),c.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"top-navbar",children:[Object(p.jsxs)("div",{className:"navbar-header",children:[Object(p.jsx)("img",{className:"damocles-logo",src:m,alt:"Damocles logo"}),Object(p.jsx)(y.Link,{to:"/",children:"Damocles"})]}),Object.keys(I).map((function(e,c){return null!=I[e].items?Object(p.jsx)(h.a,{className:"navbar dropdown-toggle btn btn-primary",id:"dropdown-basic-button",title:Object(p.jsxs)("div",{children:[Object(p.jsx)(u.a,{className:"navbar-objects",icon:I[e].icon}),Object(p.jsx)("div",{className:"navText",children:e})]}),children:Object.keys(I[e].items).map((function(c){return Object(p.jsx)(R.LinkContainer,{to:I[e].items[c].href,children:Object(p.jsx)(d.a.Item,{children:c})})}))}):Object(p.jsx)("div",{className:"navbar-objects",children:Object(p.jsxs)(y.Link,{to:I[e].href,children:[Object(p.jsx)(u.a,{className:"navbar-objects",icon:I[e].icon}),Object(p.jsx)("div",{className:"navText",children:e})]})})}))]})}}]),t}(r.a.Component),b=H,J=t(20),f={mail:{icon:o.d,href:"mailto:admin@damocles.com"},github:{icon:J.b,href:"https://github.com/Kowagatte"},discord:{icon:J.a,href:"https://discordapp.com/invite/VV95h9M"},steam:{icon:J.c,href:"https://steamcommunity.com/id/NickKowa"},twitter:{icon:J.d,href:"https://twitter.com/nick_damocles"},sponsor:{icon:o.c,href:"https://www.patreon.com/thekowagatte"}},S=(t(71),function(e){Object(k.a)(t,e);var c=Object(O.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=c.call(this,e)).state={icon:null,href:null},n}return Object(j.a)(t,[{key:"render",value:function(){return Object(p.jsx)("a",{className:"icon",href:this.props.href,children:Object(p.jsx)(u.a,{icon:this.props.icon})})}}]),t}(r.a.Component)),x=function(e){Object(k.a)(t,e);var c=Object(O.a)(t);function t(){return Object(s.a)(this,t),c.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"footer",children:[Object(p.jsx)("div",{className:"fontAwesomeIcons",children:Object.keys(f).map((function(e,c){return Object(p.jsx)(S,{href:f[e].href,icon:f[e].icon})}))}),Object(p.jsxs)("ul",{className:"footer-notes",children:[Object(p.jsx)("li",{id:"id-tag",className:"footer-notes",children:"Nicholas N Ryan"}),Object(p.jsx)("li",{className:"footer-notes",children:"\u2022"}),Object(p.jsx)("li",{id:"id-tag",className:"footer-notes",children:"2019-2021"}),Object(p.jsx)("li",{className:"footer-notes",children:"\u2022"}),Object(p.jsx)("li",{className:"footer-notes",children:Object(p.jsx)("a",{href:"https://damocles.ca",children:"damocles.ca"})})]})]})}}]),t}(r.a.Component),v=x,E=(t(72),t(9));function g(e){var c=new Date(Date.now()-Date.parse(e));return c.getFullYear()>1970?c.getFullYear()-1970+" years ago":c.getMonth()>0?c.getMonth()+" months ago":Math.floor(c.getDate()/7)>0?Math.floor(c.getDate()/7)+" weeks ago":c.getDate>0?c.getDate()+" days ago":c.getHours()>0?c.getHours()+" hours ago":c.getMinutes()+" minutes ago"}var z=function(e){Object(k.a)(t,e);var c=Object(O.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=c.call(this,e)).state={author:null,author_link:null,image_url:null,date:null,message:null,verified:null,url:null},n}return Object(j.a)(t,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"commit",children:[Object(p.jsxs)("a",{className:"commit-name",href:this.props.author_link,children:[Object(p.jsx)("img",{className:"commit-image",src:this.props.image_url,style:{maxWidth:"30px",maxHeight:"30px",paddingRight:"5px"},alt:"avatar"}),this.props.author]}),Object(p.jsx)("br",{}),Object(p.jsx)(u.a,{icon:o.b})," ",g(this.props.date),Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:[" ",this.props.message," "]}),Object(p.jsxs)("a",{className:"commit-git",href:this.props.url,children:["On ",Object(p.jsx)(u.a,{icon:J.b})]}),Object(p.jsx)("hr",{})]})}}]),t}(r.a.Component),N=(t(73),t(40)),w=function(e){Object(k.a)(t,e);var c=Object(O.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=c.call(this,e)).state={url:"",commits:[]},n}return Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=this;N(this.props.url).then((function(e){return e.json()})).then((function(c){e.setState({commits:c})}))}},{key:"render",value:function(){var e=this.state.commits;return Object(p.jsxs)("div",{className:"git-commits",id:"styled-scroll",children:[Object(p.jsx)("p",{}),Object.keys(e||{}).map((function(c,t){return Object(p.jsx)(z,{author:e[t].commit.author.name,author_link:e[t].author.html_url,image_url:e[t].author.avatar_url,date:e[t].commit.author.date,message:e[t].commit.message,url:e[t].html_url})})),Object(p.jsx)("p",{})]})}}]),t}(r.a.Component),T=(t(74),t.p+"static/media/damocles-banner.40656b52.png"),L=(t(75),function(e){Object(k.a)(t,e);var c=Object(O.a)(t);function t(){return Object(s.a)(this,t),c.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){var e=this,c=r.a.Children.map(this.props.children,(function(c){return r.a.isValidElement(c)?r.a.cloneElement(c,{doSomething:e.doSomething}):c}));return Object(p.jsx)("div",{className:"project-page",children:c})}}]),t}(r.a.Component)),P=L,X=(t(76),function(e){Object(k.a)(t,e);var c=Object(O.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=c.call(this,e)).state={date_posted:null,title:null,href:null},n}return Object(j.a)(t,[{key:"render",value:function(){return Object(p.jsx)("a",{className:"news-wrapper",href:this.props.href,children:Object(p.jsxs)("div",{className:"news",children:[Object(p.jsx)("div",{className:"news-date",children:this.props.date_posted}),Object(p.jsx)("div",{className:"news-title",children:this.props.title})]})})}}]),t}(r.a.Component)),D=function(e){Object(k.a)(t,e);var c=Object(O.a)(t);function t(){return Object(s.a)(this,t),c.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(p.jsxs)(P,{children:[Object(p.jsx)("img",{src:T,alt:"BannerImage",className:"banner-image"}),Object(p.jsx)(w,{url:l.Damocles.commit_api}),Object(p.jsx)("div",{children:"Damocles is a (not so MMO) RPG, that exaggerates and depends on player to player interaction. Quests, Character progression, Economy, World-building are all dependent"}),Object(p.jsx)(X,{href:"/testing",title:"Beavers ate the content!",date_posted:"April. 26 / 2021"})]})}}]),t}(r.a.Component),C=D,Z=function(e){Object(k.a)(t,e);var c=Object(O.a)(t);function t(){return Object(s.a)(this,t),c.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(p.jsxs)(P,{children:[Object(p.jsx)(w,{url:l.Raymond.commit_api}),Object(p.jsx)("div",{children:"TODO create this page and add information"})]})}}]),t}(r.a.Component),Q=Z,M=function(e){Object(k.a)(t,e);var c=Object(O.a)(t);function t(){return Object(s.a)(this,t),c.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(p.jsxs)(P,{children:[Object(p.jsx)(w,{url:l.TopDownShooter.commit_api}),Object(p.jsx)("div",{children:"TODO create this page and add information"})]})}}]),t}(r.a.Component),F=M,B=(t(77),function(e){Object(k.a)(t,e);var c=Object(O.a)(t);function t(){return Object(s.a)(this,t),c.apply(this,arguments)}return Object(j.a)(t,[{key:"render",value:function(){return Object(p.jsxs)("div",{className:"about-me",children:[Object(p.jsx)("a",{href:"https://youtube.com",children:"To youtube"}),"Test"]})}}]),t}(r.a.Component)),U=B,W=t(23),G=t.n(W),K=t(54),Y=t(55),q=t(50),V=t(51),A=(t(79),{"sta/68":!1,"sta/105":!1,"sta/89":!1,"sta/117":!1,"sta/116":!1,"sta/82":!1,"sta/120":!0,"sta/112":!1,"sta/66":!0,"sta/107":!0,"sta/72":!1,"sta/93":!1,"sta/109":!1,"sta/87":!1,"mh1/75":!1,"uma/77":!1,"znr/322":!0,"afr/53":!1,"khm/221":!1,"afr/112":!1,"cmr/141":!1,"afr/176":!1,"cmr/2":!0,"afr/78":!1,"mh2/441":!1,"mh2/87":!1,"cmr/361":!1,"mh2/39":!1,"mh2/295":!0,"mh2/291":!1,"mh2/166":!1,"cmr/80":!1,"afr/172":!1,"afr/20":!1,"stx/277":!1}),_=function(e){return e?"*":""},$=function(e){Object(k.a)(t,e);var c=Object(O.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=c.call(this,e)).state={image_url:null,name:null,lang:null,price:null,foil:!1},n}return Object(j.a)(t,[{key:"render",value:function(){return Object(p.jsxs)("figure",{className:"card",children:[Object(p.jsxs)("figcaption",{className:"caption",children:[this.props.name,"\u300c",(e=this.props.lang,"ja"===e?"\ud83c\uddef\ud83c\uddf5":"\ud83c\uddec\ud83c\udde7"),"\u300d",_(this.props.foil),Object(p.jsx)("br",{}),"$",this.props.price," USD"]}),Object(p.jsx)("img",{draggable:!1,src:this.props.image_url,alt:""})]});var e}}]),t}(r.a.Component),ee=t(40),ce=t.n(ee),te=t(52),ne=Object(te.RateLimit)(10),ae=function(e){var c="https://api.scryfall.com/cards/".concat(e);return ce()(c).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))};function ie(e){var c,t=0,n=Object(V.a)(e);try{for(n.s();!(c=n.n()).done;){var a=c.value;t+=parseFloat(a.price)}}catch(i){n.e(i)}finally{n.f()}return t.toFixed(2)}var re=function(e){Object(k.a)(t,e);var c=Object(O.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=c.call(this,e)).state={card_data:[]},n}return Object(j.a)(t,[{key:"componentDidMount",value:function(){var e=Object(q.a)(G.a.mark((function e(){var c,t,n,a=this;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c=G.a.mark((function e(){var c,i,r,s;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=Object(Y.a)(n[t],2),i=c[0],r=c[1],s={name:null,lang:null,img:null,price:0,foil:!1},e.next=4,ne();case 4:ae(i).then((function(e){console.log(e),s.lang=e.lang,s.name=e.name,null!=e.image_uris?s.img=e.image_uris.png:s.img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAzkAAARMCAAAAACfMQI5AAAhZElEQVR42u3dW5/S1sLA4ff7fxBuuOHHOHjCKrut9IBbi1pp3bQqtpa6pbXigdGZeXWrEJK1Ek6OE3j+d61MEoc8rpzzf8eSlu///AokciRyJHIkciSRI5EjkSORI5EjiRyJHIkciRyJHEnkSORI5EjkSORIIkciRyJHIkciRxI5EjkSORI5EjmSyJHIkciRyJHIkUSORI5EjkSORI4kciRyJHIkciRyJJEjkSORI5EjkSOJHIkciRyJHIkcSeRI5EjkSORI5EgiRyJHIkciRyJHEjkSORI5EjkSOZLIkciRyJHIkciRRI5EjkSORI5EjiRyJHIkciRyJHIkkSORI5EjkSORI4kciRyJHIkciRxJ5EjkSORI5EjkSCJHIkciRyJHIkcSORI5EjkSORI5ksiRyJHIkciRyJFEjkSORI5EjkSOJHIkciRyJHIkciSRI5EjkSORI5HjVyCRI5EjkSORI4kciRyJHIkciRxJ5EjkSORI5EjkSCJHIkciRyJHIkcSORI5EjkSORI5ksiRyJHIkciRyJFEjkSORI5EjkSOJHIkciRyJHIkciSRI5EjkSORI5EjiRyJHIkciRyJHEnkSORI5EjkSORIIkciRyJHIkciRxI5EjkSORI5EjmSyJHIkciRyJHIkUSORI5EjkSORI4kciRyJHIkciRyJJEjkSORI5EjkSOJHIkciRyJHIkcSeRI5EjkSORI5EgiRyJHIkciRyJHEjkSORI5EjkSOZLIkciRyJHIkciRRI5EjkSORI5EjiRyJHIkciRyJHIkkSORI5EjkSORI4kciRyJHIkciRy/AokciRyJHIkcSeRI5EjkSORI5EgiRyJHIkciRyJHEjkSORI5EjkSOZLIkciRyJHIkciRRI5EjkSORI5EjiRyJHIkciRyJHIkkSORI5EjkSORI4kciRyJHIkciRxJ5EjkSORI5EjkSCJHIkciRyJHIkcSORI5EjkSORI5ksiRyJHIkciRyJFEzmodje5e+7J5/uxudfGL9s2Hr3z75Kza+Nb5+u729eDIKkDOCr26vlff7S4+tBaQs3QPGnVdfWlFIGepDm9g865z/7UukLNEb9rQvO/MI2sDOYuPOODM6AytD+Qs2r+BmbX/txWCnMW6h0uy5oFVgpxF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yJFEjkSORI5EjkSOJHIkciRyJHIkciSRI5EjkSORI5EjiRyJHIkciRyJHEnkSORI5EjkSORIIkciRyJHIkciRxI5EjkSORI5EjmSyJHIkciRyJHIkUSORI5EjkSOJHIkciRyJHIkciSRI5EjkSORI5EjiRyJHIkciRyJHEnkSORI5EjkSORIIkciRyJHIkciRxI5EjkSORI5EjmSyJHIkciRyJHIkUSORI5EjkSORI4kciRyJHIkciRyJJEjkSORI5EjkSOJHIkciRyJHIkcSeRI5EjkSORI5EgiRyJHIkciRyJHEjkSORI5EjkSOZLIkciRyJHIkciRRI5EjkSORI5EjiRyJHIkciRyJHIkkSORI5EjkSORI4kciRyJHIkciRxJ5EjkSORI5EjkSCJHIkciRyJHIkcSORI5EjkSORI5ksiRyJHIkciRyJFEjkSORI5EjkSOJHIkciRyJHIkciSRI5EjkSORI4kciRyJHIkciRxJ5EjkSORI5EjkSCJHIkciRyJHIkcSORI5EjkSORI5ksiRyJHIkciRyJFEjkSORI5EjkSOJHIkciRyJHIkciSRI5EjkSORI5EjiRyJHIkciRyJHEnkSORI5EjkSORIIkciRyJHIkciRxI5EjkSOVL5+n+ZSlzpMtOSWQAAAABJRU5ErkJggg==",s.foil=r,s.price=r?e.prices.usd_foil:e.prices.usd,a.setState((function(e){return{card_data:[].concat(Object(K.a)(e.card_data),[s])}}))}));case 5:case"end":return e.stop()}}),e)})),t=0,n=Object.entries(A);case 2:if(!(t<n.length)){e.next=7;break}return e.delegateYield(c(),"t0",4);case 4:t++,e.next=2;break;case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.card_data;return Object(p.jsxs)("div",{className:"card-container",id:"styled-scroll",children:[Object(p.jsx)("div",{className:"price-total",children:Object(p.jsxs)("h1",{children:["Total price $",ie(e)," USD"]})}),Object.keys(e||{}).map((function(c,t){var n=e[t];return Object(p.jsx)($,{name:n.name,image_url:n.img,lang:n.lang,price:n.price,foil:n.foil})}))]})}}]),t}(r.a.Component),se=re;function je(){return Object(p.jsxs)(y.BrowserRouter,{basename:"",children:[Object(p.jsx)(b,{}),Object(p.jsx)("div",{id:"container",children:Object(p.jsxs)(E.g,{children:[Object(p.jsx)(E.d,{path:"/am",children:Object(p.jsx)(U,{})}),Object(p.jsx)(E.d,{path:"/collection",children:Object(p.jsx)(se,{})}),Object(p.jsx)(E.d,{path:"/p/damocles",children:Object(p.jsx)(C,{})}),Object(p.jsx)(E.d,{path:"/p/raymond",children:Object(p.jsx)(Q,{})}),Object(p.jsx)(E.d,{path:"/p/tds",children:Object(p.jsx)(F,{})})]})}),Object(p.jsx)(E.d,{exact:!0,path:"/",children:Object(p.jsx)(v,{})})]})}a.a.render(Object(p.jsx)(je,{}),document.getElementById("root"))}},[[92,1,2]]]);
//# sourceMappingURL=main.410b1a7d.chunk.js.map