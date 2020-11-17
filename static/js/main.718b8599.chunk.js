(this.webpackJsonptech_conf=this.webpackJsonptech_conf||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),i=n.n(r),s=n(8),a=n.n(s),o=(n(15),n(16),n(7)),j=n.n(o),l=n(3),u=n(9),d=n(2),f=(n(18),function(e){return Object(c.jsxs)("form",{className:"search-bar",children:[Object(c.jsx)("input",{type:"search",placeholder:"Search conference by the name or city...",onChange:function(t){return e.searchInput(t.target.value)}}),Object(c.jsx)("i",{class:"fa fa-search"})]})}),h=(n(19),function(e){return Object(c.jsx)("div",{className:"header",children:Object(c.jsxs)("div",{className:"header-container",children:[Object(c.jsxs)("div",{className:"header-container__logo",children:["Tech-Conf ",Object(c.jsx)("i",{class:"fa fa-users","aria-hidden":"true"})," "]}),Object(c.jsx)("div",{className:"header-container__search-bar",children:Object(c.jsx)(f,{searchInput:e.searchInput})})]})})}),b=(n(20),function(e){return Object(c.jsx)("ul",{children:Object(c.jsxs)("li",{className:"booking-card",style:{backgroundImage:"url(".concat(e.conference.imageURL.replace(/(")/g,""),")")},children:[Object(c.jsx)("div",{className:"book-container",children:Object(c.jsx)("div",{className:"content",children:Object(c.jsx)("button",{className:"btn",onClick:function(){window.open("".concat(e.conference.confRegUrl))},children:"Register"})})}),Object(c.jsxs)("div",{className:"informations-container",children:[Object(c.jsx)("h2",{className:"title",children:e.conference.confName}),Object(c.jsx)("i",{class:"fa fa-credit-card","aria-hidden":"true"}),Object(c.jsx)("h2",{children:e.conference.entryType}),Object(c.jsx)("div",{className:"more-information",children:Object(c.jsxs)("div",{className:"info-and-date-container",children:[Object(c.jsxs)("div",{className:"box info",children:[Object(c.jsx)("i",{class:"fa fa-map-marker","aria-hidden":"true"}),Object(c.jsx)("p",{children:e.conference.venue})]}),Object(c.jsxs)("div",{className:"box date",children:[Object(c.jsx)("i",{class:"fa fa-calendar","aria-hidden":"true"}),Object(c.jsxs)("p",{children:[e.conference.confStartDate," --"," ",e.conference.confEndDate]})]})]})})]})]})})}),O=(n(21),function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("main",{className:"conferences",children:[Object(c.jsxs)("div",{className:"conference__header",children:[Object(c.jsxs)("h1",{children:["Conferences(",e.conferenceData&&e.conferenceData.length,")"]}),Object(c.jsxs)("i",{class:"fa fa-filter fa-2x","aria-hidden":"true",children:[" ","Filter"]}),Object(c.jsxs)("select",{onChange:function(t){e.setFilterCity(t.target.value)},children:[Object(c.jsx)("option",{children:"City"}),e.cities&&Object(l.a)(e.cities).map((function(e,t){return Object(c.jsx)("option",{children:e},t)}))]}),Object(c.jsxs)("select",{onChange:function(t){e.setConfType(t.target.value)},children:[Object(c.jsx)("option",{children:"Type"}),Object(c.jsx)("option",{children:"Free"}),Object(c.jsx)("option",{children:"Paid"})]}),Object(c.jsxs)("select",{onChange:function(t){e.setFilterMonth(t.target.value)},children:[Object(c.jsx)("option",{children:"Month"}),Object(c.jsx)("option",{children:"Jan"}),Object(c.jsx)("option",{children:"Feb"}),Object(c.jsx)("option",{children:"Mar"}),Object(c.jsx)("option",{children:"April"}),Object(c.jsx)("option",{children:"May"}),Object(c.jsx)("option",{children:"June"}),Object(c.jsx)("option",{children:"July"}),Object(c.jsx)("option",{children:"Aug"}),Object(c.jsx)("option",{children:"Sept"}),Object(c.jsx)("option",{children:"Oct"}),Object(c.jsx)("option",{children:"Nov"}),Object(c.jsx)("option",{children:"Dec"})]}),Object(c.jsxs)("select",{onChange:function(t){e.setFilterCountry(t.target.value)},children:[Object(c.jsx)("option",{children:"Country"}),e.countries&&Object(l.a)(e.countries).map((function(e,t){return Object(c.jsx)("option",{children:e},t)}))]})]}),Object(c.jsx)("div",{className:"conference-block",children:Object(c.jsx)("div",{className:"conference__container",children:e.conferenceData.map((function(e,t){return Object(c.jsx)(b,{conference:e},t)}))})})]})})}),x=(n(22),function(){var e=Object(r.useState)([]),t=Object(d.a)(e,2),n=t[0],i=t[1],s=Object(r.useState)(!0),a=Object(d.a)(s,2),o=a[0],f=a[1],b=Object(r.useState)(""),x=Object(d.a)(b,2),p=x[0],m=x[1],v=Object(r.useState)("City"),g=Object(d.a)(v,2),y=g[0],C=g[1],N=Object(r.useState)("Type"),F=Object(d.a)(N,2),S=F[0],w=F[1],k=Object(r.useState)("Month"),T=Object(d.a)(k,2),_=T[0],D=T[1],M=Object(r.useState)("Country"),I=Object(d.a)(M,2),L=I[0],J=I[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences",e.next=3,fetch("https://o136z8hk40.execute-api.us-east-1.amazonaws.com/dev/get-list-of-conferences");case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,console.log(n),n&&n.paid&&i([].concat(Object(l.a)(n.paid),Object(l.a)(n.free))),f(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var z=n.filter((function(e){return e.confName.toLowerCase().includes(p.toLowerCase())||e.city.toLowerCase().includes(p.toLowerCase())}));"City"!==y&&(z=z.filter((function(e){return e.city===y}))),"Country"!==L&&(z=z.filter((function(e){return e.country===L}))),"Type"!==S&&(z=z.filter((function(e){return e.entryType===S}))),"Month"!==_&&(z=z.filter((function(e){return e.confStartDate.includes(_)})));var E=n.map((function(e){return e.city})).filter((function(e){return e.trim().length>0}));E=new Set(E);var P=n.map((function(e){return e.country})).filter((function(e){return e.trim().length>0}));P=new Set(P);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h,{searchInput:function(e){m(e)}}),o?Object(c.jsx)("div",{className:"spinner"}):Object(c.jsx)(O,{conferenceData:z,cities:E,countries:P,setConfType:w,setFilterCity:C,setFilterMonth:D,setFilterCountry:J})]})});var p=function(){return Object(c.jsx)(x,{})},m=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),i(e),s(e)}))};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),m()}],[[23,1,2]]]);
//# sourceMappingURL=main.718b8599.chunk.js.map