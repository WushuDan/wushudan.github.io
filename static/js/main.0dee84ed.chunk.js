(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{168:function(e,t,n){e.exports=n.p+"static/media/tacoLogo.9e76bb6f.PNG"},178:function(e,t,n){e.exports=n(409)},183:function(e,t,n){},184:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},185:function(e,t,n){},409:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(24),o=n.n(c),i=(n(183),n(184),n(185),n(10)),s=n(19),u=n(21),l=n(20),m=n(22),d=n(70),p=n(167),f=n(175),b=Object(f.a)({slice:"taco",initial:{retrieving:!1,error:!1,taco:null},actions:{getTaco:function(e){return Object(p.a)({},e,{retrieving:!0,error:!1})},getTacoSuccess:function(e,t){return{retrieving:!1,error:!1,taco:t}},getTacoError:function(e,t){return{retrieving:!1,error:t,taco:null}}}}),g=b.actions,v=void 0===g?{}:g,h=b.reducer,j=(b.selectors,n(17)),O=n(171),y=n.n(O),E=n(7),w=n.n(E),k=n(27),x=n.n(k),T=n(18),C="#fdfdfd",N={recipe:"#f15e3e",name:"#da3613"},P={recipe:"#da3613",name:"#aa2308"},L=n(168),S=n.n(L);function z(){var e=Object(j.a)(["\n  max-height: 15em;\n  min-height: 15em;\n"]);return z=function(){return e},e}function _(){var e=Object(j.a)(["\n    padding-left: 1.0em;\n    padding-bottom: 1.0em;\n    background-color: ",";\n    height: 100%;\n"]);return _=function(){return e},e}var W=Object(T.a)(w.a)(_(),C),q=T.a.img(z()),A=function(e){var t=e.onClick,n=void 0===t?function(){}:t;return r.a.createElement(w.a,{container:!0},r.a.createElement(W,{item:!0,xs:12,sm:8,md:4},r.a.createElement(w.a,{item:!0,container:!0,direction:"row",justify:"space-between",alignItems:"flex-start"},r.a.createElement(w.a,{item:!0,style:{paddingTop:"1em"}},r.a.createElement(y.a,{onClick:n,style:{color:C,backgroundColor:"#f15e3e",paddingLeft:"2.0em",paddingRight:"2.0em",borderRadius:"8px"}},"New Taco")),r.a.createElement(w.a,{item:!0},r.a.createElement(q,{src:S.a}))),r.a.createElement(w.a,{item:!0,container:!0,direction:"row",style:{marginTop:"-4em"}},r.a.createElement(w.a,{item:!0},r.a.createElement(x.a,{variant:"title",align:"left",style:{fontWeight:700,fontSize:"2.5em"}},"Today's Taco")))))},B=n(69),F=n.n(B);function I(){var e=Object(j.a)(["\n    height: 100%;\n    padding-top: 0.75em;\n    position: relative;\n"]);return I=function(){return e},e}function J(){var e=Object(j.a)(["\n    writing-mode: vertical-rl;\n    text-orientation: sideways;\n    color: white;\n    position: absolute;\n    top: 50%;\n    left: 50%\n    transform: translateX(-50%) translateY(-50%);\n"]);return J=function(){return e},e}var R=Object(T.a)(x.a)(J()),Y=Object(T.a)(F.a)(I()),$=function(e){var t=e.name,n=void 0===t?"":t,a=e.backgroundColor,c=void 0===a?"":a;return r.a.createElement(Y,{style:{backgroundColor:c},square:!0},r.a.createElement(R,{component:"h2",style:{color:C,fontSize:"1.25em"}},n))};function D(){var e=Object(j.a)(["\n    padding-left: 0.5em;\n    padding-right: 0.5em;\n"]);return D=function(){return e},e}function G(){var e=Object(j.a)(["\n    height: 100%;\n    padding-top: 0.75em;\n    padding-left: 1.0em;\n    padding-right: 1.0em;\n"]);return G=function(){return e},e}var M=Object(T.a)(F.a)(G()),X=T.a.br(D()),H=/^[\w]*$/,K=function(e){var t=e.recipe,n=void 0===t?"":t,a=e.name,c=void 0===a?"":a,o=e.backgroundColor,i=void 0===o?"":o,s=n.split(/\r?\n/).filter(function(e){return e!==c}).filter(function(e){return!H.test(e)}).filter(function(e){return!e.includes("=")});return r.a.createElement(M,{style:{backgroundColor:i},square:!0},s.map(function(e,t){switch(e[0]){case"#":return r.a.createElement(X,{key:t});default:return r.a.createElement(x.a,{key:t,variant:"body2",align:"left",style:{color:C}},e.replace("*",""))}}))};function Q(){var e=Object(j.a)(["\n    position: relative;\n"]);return Q=function(){return e},e}var U=Object(T.a)(w.a)(Q()),V=function(e){var t=e.name,n=void 0===t?"":t,a=e.recipe,c=void 0===a?"":a,o=e.colors,i=void 0===o?{}:o;return r.a.createElement(w.a,{container:!0,spacing:0},r.a.createElement(w.a,{item:!0,xs:8,sm:6,md:3},r.a.createElement(K,{recipe:c,name:n,backgroundColor:i.recipe})),r.a.createElement(U,{item:!0,xs:!0,sm:2,md:1},r.a.createElement($,{name:n,backgroundColor:i.name})))},Z=function(e){var t=e.baseLayer,n=void 0===t?{}:t,a=e.mixin,r=void 0===a?{}:a,c=e.condiment,o=void 0===c?{}:c,i=e.seasoning,s=void 0===i?{}:i,u=e.shell,l=void 0===u?{}:u;return"".concat(n.name," with ").concat(r.name,", garnished with ").concat(o.name," topped off with ").concat(s.name," and wrapped in delicious ").concat(l.name)},ee=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.taco,t=void 0===e?{}:e,n=t.baseLayer,c=void 0===n?{}:n,o=t.mixin,i=void 0===o?{}:o,s=t.condiment,u=void 0===s?{}:s,l=t.seasoning,m=void 0===l?{}:l,d=t.shell,p=void 0===d?{}:d;return r.a.createElement(a.Fragment,null,r.a.createElement(V,{recipe:Z(t),colors:N}),r.a.createElement(V,Object.assign({},c,{colors:P})),r.a.createElement(V,Object.assign({},i,{colors:N})),r.a.createElement(V,Object.assign({},u,{colors:P})),r.a.createElement(V,Object.assign({},m,{colors:N})),r.a.createElement(V,Object.assign({},p,{colors:P})))}}]),t}(a.PureComponent),te=n(172),ne=n.n(te),ae=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.data,t=void 0===e?"There was an error. Try again.":e;return r.a.createElement(w.a,{container:!0,spacing:0},r.a.createElement(w.a,{item:!0,xs:12,sm:8,md:4,style:{backgroundColor:"#ff0000",height:"6em"}},r.a.createElement("div",{style:{marginTop:"1.5em"}},r.a.createElement(ne.a,null),r.a.createElement(x.a,{component:"h2",style:{color:C,fontSize:"1.25em"}},t))))}}]),t}(a.PureComponent),re=n(173),ce=n.n(re),oe=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(w.a,{container:!0,spacing:0},r.a.createElement(w.a,{item:!0,xs:12,sm:8,md:4,style:{backgroundColor:"#f15e3e",height:"5em"}},r.a.createElement(ce.a,{color:"primary",style:{marginTop:"1.5em"}})))}}]),t}(a.PureComponent),ie=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.status,t=void 0===e?{}:e,n=t.retrieving,a=t.error,c=t.taco;return n?r.a.createElement(oe,null):a?r.a.createElement(ae,{data:a}):c?r.a.createElement(ee,{taco:c}):r.a.createElement(ae,{data:"No Taco Yet!"})}}]),t}(a.PureComponent),se=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r))))._getNewTaco=function(){var e=n.props.getTaco;(void 0===e?function(){}:e)()},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this._getNewTaco()}},{key:"render",value:function(){var e=this.props.status,t=void 0===e?{}:e;return r.a.createElement(a.Fragment,null,r.a.createElement(A,{onClick:this._getNewTaco}),r.a.createElement(ie,{status:t}))}}]),t}(a.PureComponent),ue=Object(d.b)(function(e){return{status:e.taco}},function(e){return{getTaco:function(){return e(v.getTaco())}}})(se);n(407);var le=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(ue,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=n(176),de=n(32),pe=n.n(de),fe=n(174),be=n(50),ge=function e(t){var n=t.name,a=t.recipe,r=t.slug,c=t.url;Object(i.a)(this,e),this.name=n,this.recipe=a,this.slug=r,this.url=c},ve=function e(t){var n=t.base_layer,a=t.condiment,r=t.mixin,c=t.seasoning,o=t.shell;Object(i.a)(this,e),this.baseLayer=new ge(n),this.condiment=new ge(a),this.mixin=new ge(r),this.seasoning=new ge(c),this.shell=new ge(o)},he="https://taco-randomizer.herokuapp.com/random/",je=pe.a.mark(we),Oe=pe.a.mark(ke);function ye(){return Ee.apply(this,arguments)}function Ee(){return(Ee=Object(fe.a)(pe.a.mark(function e(){var t,n;return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(he,{type:"get"});case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}},e)}))).apply(this,arguments)}function we(){var e,t;return pe.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,Object(be.a)(ye);case 3:return e=n.sent,t=new ve(e),n.next=7,Object(be.b)({type:v.getTacoSuccess.type,payload:t});case 7:n.next=13;break;case 9:return n.prev=9,n.t0=n.catch(0),n.next=13,Object(be.b)({type:v.getTacoError.type,payload:n.t0.message||n.t0});case 13:case"end":return n.stop()}},je,null,[[0,9]])}function ke(){return pe.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(be.c)(v.getTaco.type,we);case 2:case"end":return e.stop()}},Oe)}var xe=n(28),Te=Object(me.a)(),Ce=Object(xe.e)(Object(xe.c)({taco:h}),Object(xe.a)(Te));Te.run(ke),o.a.render(r.a.createElement(d.a,{store:Ce},r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[178,1,2]]]);
//# sourceMappingURL=main.0dee84ed.chunk.js.map