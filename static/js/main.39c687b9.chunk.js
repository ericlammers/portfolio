(window.webpackJsonp=window.webpackJsonp||[]).push([[0],Array(23).concat([function(e,t,n){e.exports=n(70)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,function(e,t,n){e.exports=n.p+"static/media/head-shot.33c3f896.png"},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,,,,,,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(0),a=n.n(i),o=n(17),l=n.n(o),r=n(4),c=n(10),s=n(18),u=n(9),m=(n(28),function(e){var t=e.openInfoBar;return a.a.createElement("div",{className:"info-button",onClick:t},a.a.createElement("i",{className:"fa fa-bars","aria-hidden":"true"}))}),p=(n(29),function(e){var t=e.closeInfoBar,n=e.children;return Object(i.useEffect)(function(){return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}),a.a.createElement("div",{className:"closable-info-bar"},a.a.createElement("span",{className:"close-button",onClick:t},a.a.createElement("i",{className:"fa fa-times"})),a.a.Children.map(n,function(e,n){return a.a.cloneElement(e,{closeInfoBar:t})}))}),d=(n(30),function(e){var t=e.children,n=Object(i.useState)(!1),o=Object(u.a)(n,2),l=o[0],r=o[1],c=l?a.a.createElement(p,{closeInfoBar:function(){return r(!1)}},t):a.a.createElement(m,{openInfoBar:function(){return r(!0)}});return a.a.createElement("div",{className:"togglable-info-bar"},c)}),v=(n(31),"medium-and-larger"),f=function(e){var t=e.minToDisplay,i=e.sectionNames,o=e.currentSection,l=e.scrollToSection,c=e.closeInfoBar,s=i.map(function(e){var t=function(){l(e),c&&c()};return e.toLowerCase()===o.toLowerCase()?a.a.createElement("button",{key:e,onClick:t,style:{fontWeight:"bold",borderBottom:"2px solid"}},e):a.a.createElement("button",{onClick:t,key:e},e)});return a.a.createElement("div",{className:"info-bar ".concat(t||"")},a.a.createElement(r.b,{to:"/"},a.a.createElement("img",{src:n(36),alt:""})),a.a.createElement("div",{class:"section-buttons"},s))},b=(n(37),function(e){var t=e.children;return a.a.createElement("div",{className:"main-content"},t)}),E=function(e){return e.replace(/\s+/g,"-").toLowerCase()},g=(n(38),function(e){var t=e.content,n=e.sectionNames,o=e.startingLocation,l=Object(i.useState)(n[0]),r=Object(u.a)(l,2),m=r[0],p=r[1],g=Object(i.useState)(!0),h=Object(u.a)(g,2),N=h[0],q=h[1],y={};n.forEach(function(e){y=Object(s.a)({},y,Object(c.a)({},E(e),e))});var k=function(){for(var e=n.map(function(e){return E(e)}),t=e[0],i=1;i<e.length;i++){var a=e[i],o=document.getElementById(a).getBoundingClientRect().top;o<2*window.innerHeight/5&&(t=a)}(function(e){return e===E(m)})(t)||p(y[t])},C=function(e,t){var n;return function(){var i=arguments;n||(e.apply(this,i),n=!0,setTimeout(function(){return n=!1},t))}}(function(){N&&k()},100),w=function(e,t){var n;return function(){var i=this,a=arguments;clearTimeout(n),n=setTimeout(function(){return e.apply(i,a)},t)}}(function(){N?k():q(!0)},50),I=function(e){q(!1),p(e),document.getElementById(E(e)).scrollIntoView({behavior:"smooth"})};return Object(i.useEffect)(function(){return window.addEventListener("scroll",C),window.addEventListener("scroll",w),function(){window.removeEventListener("scroll",C),window.removeEventListener("scroll",w)}}),Object(i.useEffect)(function(){o&&I(o.replace("-"," "))},[o]),a.a.createElement("div",{className:"page"},a.a.createElement(d,null,a.a.createElement(f,{sectionNames:n,currentSection:m,scrollToSection:I})),a.a.createElement(f,{sectionNames:n,currentSection:m,scrollToSection:I,minToDisplay:v}),a.a.createElement(b,null,t))}),h=(n(39),function(e){var t=e.name,n=e.id,i=e.children;return a.a.createElement("div",{id:n,className:"section"},a.a.createElement("h2",null,t),i)}),N=function(e){var t=e.sectionInfoList;return a.a.createElement("div",{className:"content"},t.map(function(e){return a.a.createElement(h,{key:e.title,name:e.title,id:E(e.title)},e.component)}))},q=(n(40),function(e){var t=e.color;return a.a.createElement("div",{className:"circle",style:{backgroundColor:t}})}),y=(n(41),function(e){var t=e.color;return a.a.createElement("div",{className:"timeline-bar"},a.a.createElement("div",{className:"bar"}),a.a.createElement("div",{className:"circle-container"},a.a.createElement(q,{color:t})))}),k=(n(42),function(e){var t=e.color,n=e.children;return a.a.createElement("div",{className:"timeline-item"},a.a.createElement(y,{color:t}),a.a.createElement("div",{className:"content"},n))}),C=(n(43),function(e){var t=e.title,n=e.employer,i=e.dateRange,o=e.description;return a.a.createElement("div",{className:"job-description"},a.a.createElement("div",{className:"header"},a.a.createElement("div",{className:"title"},t),a.a.createElement("div",{className:"sub-title date-range"},i),a.a.createElement("div",{className:"sub-title employer"},n)),o)}),w="#ec5453",I="#a84cb8",j="#f9bf3f",x="#2c98f0",S="#1DA598",L="#FF8C00",P=(n(44),function(){var e=[{color:L,job:{title:"Software Developer",employer:"Autodata Solutions",dateRange:"May 2019 - Present",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."}},{color:x,job:{title:"Web Developer Intern",employer:"Autodata Solutions",dateRange:"May 2017 - August 2018",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."}},{color:w,job:{title:"Fullstack Developer",employer:"Western University",dateRange:"September 2016 - April 2017",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."}}].map(function(e){return a.a.createElement(k,{color:e.color},a.a.createElement(C,e.job))});return a.a.createElement("div",{className:"job-timeline"},e)}),B=(n(45),function(e){var t=e.percentage,n=e.color;return a.a.createElement("div",{className:"filler",style:{width:t,backgroundColor:n}})}),R=function(e){var t=e.percentage,n=e.color,i=t<90?"".concat(t+2,"%"):"92%",o="".concat(t,"%");return a.a.createElement("div",{className:"progress-bar"},a.a.createElement("div",{className:"text"},a.a.createElement("span",{style:{marginLeft:i,color:n}},o)),a.a.createElement("div",{className:"display"},a.a.createElement(B,{percentage:o,color:n})))},O=(n(46),function(e){var t=e.name,n=e.percentage,i=e.color;return a.a.createElement("div",{className:"skill"},a.a.createElement("div",{className:"name"},t),a.a.createElement(R,{percentage:n,color:i}))}),D=(n(47),function(){var e=[{color:w,name:"React",percentage:90},{color:L,name:"Redux",percentage:90},{color:j,name:"JavaScript (ES6)",percentage:85},{color:x,name:"HTML/CSS",percentage:80},{color:S,name:"SCSS",percentage:80},{color:I,name:"Docker",percentage:80},{color:w,name:"Kubernetes",percentage:70},{color:j,name:"React Native",percentage:50},{color:x,name:"Express",percentage:70},{color:S,name:"Mongo",percentage:60},{color:L,name:"Spring/Spring Boot",percentage:80},{color:w,name:"Java",percentage:90},{color:I,name:"MySql/SQL",percentage:75},{color:x,name:"Reactive Programming",percentage:50}];return a.a.createElement("div",{className:"skill-list"},e.map(function(e){return a.a.createElement(O,e)}))}),T=(n(48),n(49),function(e){var t=e.name,n=e.iconName,i=e.color,o={color:i,borderColor:i};return a.a.createElement("div",{className:"project-card",style:o},a.a.createElement("div",{className:"icon"},a.a.createElement("i",{className:n})),a.a.createElement("div",{className:"card-title"},t))}),M=function(){return a.a.createElement("div",{className:"project-cards"},a.a.createElement(r.b,{to:"/projects?section=front-end"},a.a.createElement(T,{name:"Front End Development",iconName:"fa fa-code",color:S})),a.a.createElement(r.b,{to:"/projects?section=back-end"},a.a.createElement(T,{name:"Back End Development",iconName:"fa fa-database",color:L})),a.a.createElement(r.b,{to:"/projects?section=devops"},a.a.createElement(T,{name:"DevOps",iconName:"fa fa-cloud-upload",color:x})),a.a.createElement(r.b,{to:"/projects?section=mobile"},a.a.createElement(T,{name:"Mobile Development",iconName:"fa fa-cloud-upload",color:j})),a.a.createElement(r.b,{to:"staying-current"},a.a.createElement(T,{name:"Staying Current",iconName:"fa fa-book",color:w})))},J=(n(50),function(){return a.a.createElement("div",{className:"intro-image"},a.a.createElement("div",{className:"our-picture"}),a.a.createElement("span",{className:"text"}," Fullstack",a.a.createElement("br",null),"developer.",a.a.createElement("br",null),"React",a.a.createElement("br",null),"enthusiast."))}),A=function(){var e=[{title:"About",component:a.a.createElement(M,null)},{title:"Skills",component:a.a.createElement(D,null)},{title:"Work Experience",component:a.a.createElement(P,null)},{title:"Education",component:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."},{title:"Volunteering",component:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."},{title:"Contact",component:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."}],t=a.a.createElement("div",null,a.a.createElement(J,null),a.a.createElement(N,{sectionInfoList:e}));return a.a.createElement("div",null,a.a.createElement(g,{content:t,sectionNames:e.map(function(e){return e.title})}))},F=(n(51),n(52),n(53),n(54),n(55),function(e){var t=e.children,n=e.backgroundColor;return a.a.createElement("div",{className:"slanted-div"},a.a.createElement("div",{className:"top",style:{backgroundColor:n}}),a.a.createElement("div",{className:"middle",style:{backgroundColor:n}},t),a.a.createElement("div",{className:"bottom",style:{backgroundColor:n}}))}),W=function(e){var t=e.header,n=e.items,i=[];return n.forEach(function(e,t){t%2===0?i.push(a.a.createElement("div",{className:"regular-div"},e)):i.push(a.a.createElement(F,{backgroundColor:"#eee"},e))}),a.a.createElement("div",{id:E(t.title),className:"slanted-section"},a.a.createElement(F,{backgroundColor:t.color},a.a.createElement("div",{className:"header"},t.title)),i)},U=(n(56),function(e){var t=e.technologies;return a.a.createElement("div",{className:"technologies"},a.a.createElement("ul",null,t.map(function(e){return a.a.createElement("li",null,a.a.createElement("a",{href:e.link},e.name))})))}),H=(n(57),function(e){var t=e.project,n=t.description.map(function(e){return a.a.createElement("div",null,e)});return a.a.createElement("div",{className:"project"},a.a.createElement("h2",{className:"title"},t.title),a.a.createElement("div",{className:"section"},a.a.createElement("div",{className:"description"},n)),a.a.createElement("div",{className:"section"},a.a.createElement("div",{className:"sub-title"},"Technology Stack:"),a.a.createElement(U,{technologies:t.stack})),a.a.createElement("div",{className:"section source-code"},a.a.createElement("div",{className:"sub-title"},"Source Code:"),a.a.createElement("a",{className:"source-code-link",href:t.sourceCode},t.sourceCode)))}),V=n(21),K=n.n(V),Q=a.a.createElement(H,{project:{title:"Job Site Manager UI",description:["The Job Site Manager App is a web application that helps companies who operate at multiple different job sites manage and track which employees are assigned to each site. The Job Site Manager UI is the front end for the application. It supports a range of functionality including adding new employees, assigning employees designated roles, creating jobs sites and adding/removing employees with the necessary qualifications to a job. ","While building this application I was able to leverage some new technologies in the React development stack. I used React\u2019s new feature hooks, giving me the ability to keep reduce the complexity of my components by using only simple functional components. I found hooks to be very intuitive and got me even more excited about the future of React. I also got my first taste of css-in-js by styling my components using the Styled-Components library. I\u2019m still on the fence about Styled-Components but I definitely see the benefit of having all related functionality in one file."],stack:[{name:"React",link:"https://reactjs.org/"},{name:"Redux",link:"https://redux.js.org/"},{name:"Styled Components",link:"https://www.styled-components.com/"},{name:"Jest",link:"https://jestjs.io/"},{name:"Flexbox",link:"https://css-tricks.com/snippets/css/a-guide-to-flexbox/"}],sourceCode:"https://gitlab.com/Job-Site-Manager/job-site-manager-ui"}}),$=function(e){var t=e.location,n=t&&t.search&&K.a.parse(t.search).section,i=a.a.createElement("div",{className:"container"},a.a.createElement(W,{header:{color:S,title:"Front End"},items:[Q,Q]}),a.a.createElement(W,{header:{color:L,title:"Back End"},items:[Q,Q,Q]}),a.a.createElement(W,{header:{color:x,title:"DevOps"},items:[Q]}),a.a.createElement(W,{header:{color:j,title:"Mobile"},items:[Q]}));return a.a.createElement("div",null,a.a.createElement(g,{content:i,startingLocation:n,sectionNames:["Front End","Back End","DevOps","Mobile"]}))},z=n(6),G=function(){var e=[{title:"Podcasts",component:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."},{title:"Blogs and Posts",component:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."},{title:"Codepen",component:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."},{title:"Textbooks",component:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vulputate, purus non finibus euismod, libero mi vehicula quam, consectetur finibus nisi enim ut nisl. Nullam maximus blandit finibus. In in lacinia ipsum, vel rutrum neque. Pellentesque dolor tortor, vulputate in suscipit ac, aliquet vel sapien."}],t=a.a.createElement(N,{sectionInfoList:e});return a.a.createElement("div",null,a.a.createElement(g,{content:t,sectionNames:e.map(function(e){return e.title})}))};var X=function(){return a.a.createElement("div",{className:"layout"},a.a.createElement(z.c,null,a.a.createElement(z.a,{exact:!0,path:"/",component:A}),a.a.createElement(z.a,{path:"/projects",component:$}),a.a.createElement(z.a,{path:"/staying-current",component:G})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=n(22);n.n(Y).a.polyfill();n(69);l.a.render(a.a.createElement(r.a,{basename:""},a.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}]),[[23,1,2]]]);
//# sourceMappingURL=main.39c687b9.chunk.js.map