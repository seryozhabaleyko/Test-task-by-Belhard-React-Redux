(this["webpackJsonptest-items-belhard-react"]=this["webpackJsonptest-items-belhard-react"]||[]).push([[6],{44:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(6),s=n(14),u=n.n(s),l=n(19),i=n(11);var o=function(){return function(){var e=Object(l.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:i.a.request}),e.prev=1,e.next=4,fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()}));case 4:n=e.sent,t({type:i.a.success,payload:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),t({type:i.a.failure,payload:e.t0,error:!0});case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}()};t.default=Object(c.b)((function(e){return{news:e.news.data}}),(function(e){return{newsAllItemFetch:function(){return e(o())}}}))((function(e){var t=e.newsAllItemFetch,n=e.news;return Object(a.useEffect)((function(){t()}),[t]),r.a.createElement("main",{className:"main"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"news"},r.a.createElement("h1",null,"\u041d\u043e\u0432\u043e\u0441\u0442\u0438"),n&&n.map((function(e){var t=e.id,n=e.title,a=e.body;return r.a.createElement("article",{key:t},r.a.createElement("h2",null,n),r.a.createElement("p",null,a))})))))}))}}]);
//# sourceMappingURL=6.d8a0077d.chunk.js.map