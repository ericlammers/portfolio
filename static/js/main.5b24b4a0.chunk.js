(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(22).concat([function(e,i,t){e.exports=t(54)},,,,,function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},,,,,function(e,i,t){e.exports=t.p+"static/media/head-shot.33c3f896.png"},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){},,function(e,i,t){},function(e,i,t){},function(e,i,t){},function(e,i,t){"use strict";t.r(i);var n=t(0),a=t.n(n),u=t(17),l=t.n(u),s=t(3),o=t(10),r=t(18),c=t(9),m=(t(27),function(e){var i=e.openInfoBar;return a.a.createElement("div",{className:"info-button",onClick:i},a.a.createElement("i",{className:"fa fa-bars","aria-hidden":"true"}))}),p=(t(28),function(e){var i=e.closeInfoBar,t=e.children;return Object(n.useEffect)(function(){return window.addEventListener("scroll",i),function(){window.removeEventListener("scroll",i)}}),a.a.createElement("div",{className:"closable-info-bar"},a.a.createElement("span",{className:"close-button",onClick:i},a.a.createElement("i",{className:"fa fa-times"})),a.a.Children.map(t,function(e,t){return a.a.cloneElement(e,{closeInfoBar:i})}))}),d=(t(29),function(e){var i=e.children,t=Object(n.useState)(!1),u=Object(c.a)(t,2),l=u[0],s=u[1],o=l?a.a.createElement(p,{closeInfoBar:function(){s(!1)}},i):a.a.createElement(m,{openInfoBar:function(){s(!0)}});return a.a.createElement("div",{className:"togglable-info-bar"},o)}),v=(t(30),"medium-and-larger"),f=function(e){var i=e.minToDisplay,n=e.sectionNames,u=e.currentSection,l=e.scrollToSection,o=e.closeInfoBar,r=n.map(function(e){var i=function(){l(e),o&&o()};return e===u?a.a.createElement("button",{key:e,onClick:i,style:{fontWeight:"bold",borderBottom:"2px solid"}},e):a.a.createElement("button",{onClick:i,key:e},e)});return a.a.createElement("div",{className:"info-bar ".concat(i||"")},a.a.createElement(s.b,{to:"/"},a.a.createElement("img",{src:t(35),alt:""})),r)},b=(t(36),function(e){var i=e.children;return a.a.createElement("div",{className:"main-content"},i)}),q=function(e){return e.replace(/\s+/g,"-").toLowerCase()},E=(t(37),function(e){var i=e.content,t=e.sectionNames,u=Object(n.useState)(t[0]),l=Object(c.a)(u,2),s=l[0],m=l[1],p=Object(n.useState)(!0),E=Object(c.a)(p,2),N=E[0],g=E[1],h={};t.forEach(function(e){h=Object(r.a)({},h,Object(o.a)({},q(e),e))});var I=function(){for(var e=t.map(function(e){return q(e)}),i=e[0],n=1;n<e.length;n++){var a=e[n],u=document.getElementById(a).getBoundingClientRect().top;u<2*window.innerHeight/5&&(i=a)}(function(e){return e===q(s)})(i)||m(h[i])},C=function(e,i){var t;return function(){var n=arguments;t||(e.apply(this,n),t=!0,setTimeout(function(){return t=!1},i))}}(function(){N&&I()},100),L=function(e,i){var t;return function(){var n=this,a=arguments;clearTimeout(t),t=setTimeout(function(){return e.apply(n,a)},i)}}(function(){N?I():g(!0)},50),x=function(e){g(!1),m(e),document.getElementById(q(e)).scrollIntoView({behavior:"smooth"})};return Object(n.useEffect)(function(){return window.addEventListener("scroll",C),window.addEventListener("scroll",L),function(){window.removeEventListener("scroll",C),window.removeEventListener("scroll",L)}}),a.a.createElement("div",{className:"page"},a.a.createElement(d,null,a.a.createElement(f,{sectionNames:t,currentSection:s,scrollToSection:x})),a.a.createElement(f,{sectionNames:t,currentSection:s,scrollToSection:x,minToDisplay:v}),a.a.createElement(b,null,i))}),N=(t(38),function(e){var i=e.name,t=e.id,n=e.children;return a.a.createElement("div",{id:t,className:"section"},a.a.createElement("h2",null,i),n)}),g=function(e){var i=e.sectionInfoList;return a.a.createElement("div",{className:"content"},i.map(function(e){return a.a.createElement(N,{key:e.title,name:e.title,id:q(e.title)},e.component)}))},h=(t(39),function(e){var i=e.color;return a.a.createElement("div",{className:"circle",style:{backgroundColor:i}})}),I=(t(40),function(e){var i=e.color;return a.a.createElement("div",{className:"timeline-bar"},a.a.createElement("div",{className:"bar"}),a.a.createElement("div",{className:"circle-container"},a.a.createElement(h,{color:i})))}),C=(t(41),function(e){var i=e.color,t=e.children;return a.a.createElement("div",{className:"timeline-item"},a.a.createElement(I,{color:i}),a.a.createElement("div",{className:"content"},t))}),L=(t(42),function(e){var i=e.title,t=e.employer,n=e.dateRange,u=e.description;return a.a.createElement("div",{className:"job-description"},a.a.createElement("div",{className:"header"},a.a.createElement("div",{className:"title"},i),a.a.createElement("div",{className:"sub-title date-range"},n),a.a.createElement("div",{className:"sub-title employer"},t)),u)}),x=(t(43),function(){var e=[{color:"#FF8C00",job:{title:"Software Developer",employer:"Autodata Solutions",dateRange:"May 2019 - Present",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."}},{color:"#2c98f0",job:{title:"Web Developer Intern",employer:"Autodata Solutions",dateRange:"May 2017 - August 2018",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."}},{color:"#ec5453",job:{title:"Fullstack Developer",employer:"Western University",dateRange:"September 2016 - April 2017",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."}}].map(function(e){return a.a.createElement(s.b,{to:"/jobs"},a.a.createElement(C,{color:e.color},a.a.createElement(L,e.job)))});return a.a.createElement("div",{className:"job-timeline"},e)}),w=(t(44),function(e){var i=e.percentage,t=e.color;return a.a.createElement("div",{className:"filler",style:{width:i,backgroundColor:t}})}),y=function(e){var i=e.percentage,t=e.color,n=i<90?"".concat(i+2,"%"):"92%",u="".concat(i,"%");return a.a.createElement("div",{className:"progress-bar"},a.a.createElement("div",{className:"text"},a.a.createElement("span",{style:{marginLeft:n,color:t}},u)),a.a.createElement("div",{className:"display"},a.a.createElement(w,{percentage:u,color:t})))},P=(t(45),function(e){var i=e.name,t=e.percentage,n=e.color;return a.a.createElement("div",{className:"skill"},a.a.createElement("div",{className:"name"},i),a.a.createElement(y,{percentage:t,color:n}))}),S=(t(46),function(){var e=[{color:"#ec5453",name:"React",percentage:90},{color:"#a84cb8",name:"JavaScript/HTML/CSS",percentage:80},{color:"#f9bf3f",name:"Spring/Spring Boot",percentage:80},{color:"#2c98f0",name:"Java",percentage:80},{color:"#1DA598",name:"MySql/SQL",percentage:70},{color:"\t#FF8C00",name:"Mongo",percentage:60}];return a.a.createElement("div",{className:"skill-list"},e.map(function(e){return a.a.createElement(P,e)}))}),j=(t(47),t(48),function(e){var i=e.name,t=e.iconName,n=e.color,u={color:n,borderColor:n};return a.a.createElement("div",{className:"project-card",style:u},a.a.createElement("div",{className:"icon"},a.a.createElement("i",{className:t})),a.a.createElement("div",{className:"card-title"},i))}),k=function(){return a.a.createElement("div",{className:"project-cards"},a.a.createElement(s.b,{to:"/projects"},a.a.createElement(j,{name:"Front End Development",iconName:"fa fa-code",color:"#2c98f0"})),a.a.createElement(s.b,{to:"/projects"},a.a.createElement(j,{name:"Back End Development",iconName:"fa fa-database",color:"#f9bf3f"})),a.a.createElement(s.b,{to:"/projects"},a.a.createElement(j,{name:"DevOps",iconName:"fa fa-cloud-upload",color:"#a84cb8"})),a.a.createElement(s.b,{to:"staying-current"},a.a.createElement(j,{name:"Staying Current",iconName:"fa fa-book",color:"#ec5453"})))},B=(t(49),function(){return a.a.createElement("div",{className:"intro-image"},a.a.createElement("div",{className:"our-picture"}),a.a.createElement("span",{className:"text"}," Fullstack",a.a.createElement("br",null),"developer.",a.a.createElement("br",null),"React",a.a.createElement("br",null),"enthusiast."))}),D=function(){var e=[{title:"About",component:a.a.createElement(k,null)},{title:"Skills",component:a.a.createElement(S,null)},{title:"Work Experience",component:a.a.createElement(x,null)},{title:"Education",component:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."},{title:"Volunteering",component:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."},{title:"Contact",component:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."}],i=a.a.createElement("div",null,a.a.createElement(B,null),a.a.createElement(g,{sectionInfoList:e}));return a.a.createElement("div",null,a.a.createElement(E,{content:i,sectionNames:e.map(function(e){return e.title})}))},O=(t(50),t(51),t(52),function(){var e=[{title:"Software Developer",component:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."},{title:"Software Developer Intern",component:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."},{title:"Full Stack Developer",component:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."}],i=a.a.createElement(g,{sectionInfoList:e});return a.a.createElement("div",null,a.a.createElement(E,{content:i,sectionNames:e.map(function(e){return e.title})}))}),T=function(){var e=[{title:"Front End",component:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."},{title:"Backend",component:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."},{title:"DevOps",component:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."}],i=a.a.createElement(g,{sectionInfoList:e});return a.a.createElement("div",null,a.a.createElement(E,{content:i,sectionNames:e.map(function(e){return e.title})}))},F=t(6),A=function(){var e=[{title:"Podcasts",component:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."},{title:"Blogs and Posts",component:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."},{title:"Codepen",component:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."},{title:"Textbooks",component:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."}],i=a.a.createElement(g,{sectionInfoList:e});return a.a.createElement("div",null,a.a.createElement(E,{content:i,sectionNames:e.map(function(e){return e.title})}))};var R=function(){return a.a.createElement("div",{className:"layout"},a.a.createElement(F.c,null,a.a.createElement(F.a,{exact:!0,path:"/",component:D}),a.a.createElement(F.a,{path:"/jobs",component:O}),a.a.createElement(F.a,{path:"/projects",component:T}),a.a.createElement(F.a,{path:"/staying-current",component:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=t(21);t.n(W).a.polyfill();t(53);l.a.render(a.a.createElement(s.a,{basename:""},a.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}]),[[22,1,2]]]);
//# sourceMappingURL=main.5b24b4a0.chunk.js.map