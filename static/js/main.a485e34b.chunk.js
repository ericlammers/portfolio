(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,n,t){e.exports=t(23)},,,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),o=t.n(a),c=t(4),r=t.n(c),i=(t(13),t(14),t(1)),l=t(5),u=t(2),s=(t(15),function(e){var n=e.openInfoBar;return o.a.createElement("div",{className:"info-button",onClick:n},o.a.createElement("i",{className:"fa fa-bars","aria-hidden":"true"}))}),m=(t(16),function(e){var n=e.closeInfoBar,t=e.children;return Object(a.useEffect)(function(){return window.addEventListener("scroll",n),function(){window.removeEventListener("scroll",n)}}),o.a.createElement("div",{className:"closable-info-bar"},o.a.createElement("span",{className:"close-button",onClick:n},o.a.createElement("i",{className:"fa fa-times"})),o.a.Children.map(t,function(e,t){return o.a.cloneElement(e,{closeInfoBar:n})}))}),f=(t(17),function(e){var n=e.children,t=Object(a.useState)(!1),c=Object(u.a)(t,2),r=c[0],i=c[1],l=r?o.a.createElement(m,{closeInfoBar:function(){i(!1)}},n):o.a.createElement(s,{openInfoBar:function(){i(!0)}});return o.a.createElement("div",{className:"togglable-info-bar"},l)}),d=(t(18),"medium-and-larger"),E=function(e){var n=e.minToDisplay,t=e.sectionNames,a=e.currentSection,c=e.scrollToSection,r=e.closeInfoBar,i=t.map(function(e){var n=function(){c(e),r&&r()};return e===a?o.a.createElement("button",{key:e,onClick:n,style:{fontWeight:"bold",borderBottom:"2px solid"}},e):o.a.createElement("button",{onClick:n,key:e},e)});return o.a.createElement("div",{className:"info-bar ".concat(n||"")},i)},v=(t(19),function(e){var n=e.children;return o.a.createElement("div",{className:"main-content"},n)}),p=function(e){return e.replace(/\s+/g,"-").toLowerCase()},b=(t(20),function(e){var n=e.content,t=e.sectionNames,c=Object(a.useState)(t[0]),r=Object(u.a)(c,2),s=r[0],m=r[1],b={};t.forEach(function(e){b=Object(l.a)({},b,Object(i.a)({},p(e),e))});var w=function(){for(var e=t.map(function(e){return p(e)}),n=e[0],a=1;a<e.length;a++){var o=e[a],c=document.getElementById(o).getBoundingClientRect().top;c<2*window.innerHeight/5&&(n=o)}(function(e){return e===p(s)})(n)||m(b[n])},h=function(e,n){var t,a;return function(){var o=arguments,c=this;t||(e.apply(c,o),t=!0,setTimeout(function(){return t=!1},n)),clearTimeout(a),a=setTimeout(function(){return e.apply(c,o)},n)}}(function(){w()},100),N=function(e){document.getElementById(p(e)).scrollIntoView({behavior:"smooth"})};return Object(a.useEffect)(function(){return window.addEventListener("scroll",h),function(){window.removeEventListener("scroll",h)}}),o.a.createElement("div",{className:"page"},o.a.createElement(f,null,o.a.createElement(E,{sectionNames:t,currentSection:s,scrollToSection:N})),o.a.createElement(E,{sectionNames:t,currentSection:s,scrollToSection:N,minToDisplay:d}),o.a.createElement(v,null,n))}),w=(t(21),function(e){var n=e.name,t=e.id;return o.a.createElement("div",{id:t,className:"section"},o.a.createElement("h1",null,n))}),h=function(e){var n=e.sectionNames;return o.a.createElement("div",{className:"content"},n.map(function(e){return o.a.createElement(w,{key:e,name:e,id:p(e)})}))},N=function(){var e=["About","Skills","Work Experience","Education","Contact"],n=o.a.createElement(h,{sectionNames:e});return o.a.createElement("div",null,o.a.createElement(b,{content:n,sectionNames:e}))};var g=function(){return o.a.createElement("div",{className:"layout"},o.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=t(6);t.n(y).a.polyfill();t(22);r.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[7,1,2]]]);
//# sourceMappingURL=main.a485e34b.chunk.js.map