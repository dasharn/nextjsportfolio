(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(8834)}])},8834:function(n,t,e){"use strict";e.r(t),e.d(t,{default:function(){return k}});var r=e(5893),a=e(7294);function o(n,t,e,r,a,o,c){try{var i=n[o](c),s=i.value}catch(u){return void e(u)}i.done?t(s):Promise.resolve(s).then(r,a)}function c(n){return function(){var t=this,e=arguments;return new Promise((function(r,a){var c=n.apply(t,e);function i(n){o(c,r,a,i,s,"next",n)}function s(n){o(c,r,a,i,s,"throw",n)}i(void 0)}))}}function i(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}function s(n){return function(n){if(Array.isArray(n))return i(n)}(n)||function(n){if("undefined"!==typeof Symbol&&null!=n[Symbol.iterator]||null!=n["@@iterator"])return Array.from(n)}(n)||function(n,t){if(n){if("string"===typeof n)return i(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(e):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?i(n,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var u=e(7582),l=[{command:"about",description:"About Me"},{command:"education",description:"My Education"},{command:"skills",description:"My Tech Skills"},{command:"projects",description:"My Tech Projects"},{command:"contact",description:"Contact Me"},{command:"blog",description:"Visit my blog"},{command:"clear",description:"Clear terminal"}],d=function(){var n=c((function(){var n;return(0,u.__generator)(this,(function(t){switch(t.label){case 0:return[4,fetch("/api/projects")];case 1:return[4,t.sent().json()];case 2:return n=t.sent(),[2,"<h3>My Projects (You can scroll)</h3>"+n.map((function(n){return'<div class="command">\n        <a href="'.concat(n.link,'" target="_blank"><b class="command">').concat(n.name,"</b></a> - <b>").concat(n.stack.join(", "),'</b>\n        <p class="meaning">').concat(n.description,"</p>\n      </div>")})).join("")]}}))}));return function(){return n.apply(this,arguments)}}(),m=function(){var n=c((function(){return(0,u.__generator)(this,(function(n){switch(n.label){case 0:return[4,fetch("/api/contacts")];case 1:return[4,n.sent().json()];case 2:return[2,n.sent().map((function(n){return'<div style="display: flex; justify-content: space-between;">\n      <p style="font-size: 15px">'.concat(n.medium,'</p>\n      <a class="meaning" href="').concat(n.link,'" target="_blank">').concat(n.username,"</a>\n    </div>")})).join("")]}}))}));return function(){return n.apply(this,arguments)}}(),f={help:function(){return l.map((function(n){return'<div style="display: flex; justify-content: space-between;">\n        <p style="font-size: 15px">'.concat(n.command,"</p>\n        <p>").concat(n.description,"</p>\n      </div>")})).join("")+'<br />\n      <div class="command">Type one of the above to view. For eg. <span style="color: var(--secondary)">about</span></div>'},about:function(){return"My name is Dasharn. I am ".concat(function(n){var t=new Date,e=new Date(n),r=t.getFullYear()-e.getFullYear(),a=t.getMonth()-e.getMonth();(a<0||0===a&&t.getDate()<e.getDate())&&r--;return r}("Marhc 01, 2003"),' and I\'m an aspiring software engineer.\n    <br/><br/>\n    I code in Python, Java, JavaScript, CSS and HTML and have worked with frameworks like Django, Flask, React.\n    <br /><br />\n    I am a second year student at <a href="https://www.manchester.ac.uk/" target="_blank">University of Manchester</a>.\n    <br />\n    </a>\n  ')},education:function(){return'I went to the same secondary school and sixth form at <a href="http://www.qpcs.brent.sch.uk/" target="_blank">Queens Park Community School.</a>\n          I achieved 9 A* and 2As at GCSE and at A level I achieved A*A*A for Maths, Further Maths and Physics. </a>'},skills:function(){return'\n  I am experienced with Python, Java, JavaScript and the web technologies dominating at the time:<br />\n  <div class="skill"><b>core</b>: HTML, CSS.<br /></div>\n  <div class="skill"><b>frameworks</b>:Django, Flask, React.<br /></div>\n  <div class="skill"><b>database</b>: MySQL.<br /></div>\n  </a>\n<br /><br />\n  '},projects:d,contact:m,error:function(n){return'<div class="help-command">sh: Unknown command: '.concat(n,'</div><div class="help-command">See `help` for info')},blog:function(){return window.open("https://www.dasharndennis.com/","_blank"),""},awards:function(){}};var p=e(3050),h=e.n(p);function v(n){var t=n.command,e=n.onSubmit,o=(0,a.useState)(t||""),c=o[0],i=o[1];return(0,r.jsxs)("form",{onSubmit:function(n){return function(n){return n.preventDefault(),i(""),e(c)}(n)},children:[(0,r.jsxs)("label",{htmlFor:"command",children:[(0,r.jsx)("span",{style:{color:"#ff9e64"},children:"\u03bb"})," ::"," ",(0,r.jsx)("span",{style:{color:"var(--primary)"},children:"~"})," ",(0,r.jsx)("span",{style:{color:"var(--secondary)"},children:">>"})]}),(0,r.jsx)("input",{type:"text",className:h().input,value:c,onChange:function(n){return i(n.target.value)},disabled:!!t,ref:function(n){return n&&!t&&n.focus()},autoFocus:""===t})]})}function b(n){var t=n.output;return t?(0,r.jsx)("p",{dangerouslySetInnerHTML:{__html:t}}):(0,r.jsx)(r.Fragment,{})}function y(n){var t=n.command,e=n.output,a=n.onSubmit;return(0,r.jsxs)("div",{children:[(0,r.jsx)(v,{command:t,onSubmit:function(n){return a(n)}}),e&&(0,r.jsx)(b,{output:e})]})}var g=e(9963),w=e.n(g);function _(){var n=(0,a.useState)([]),t=n[0],e=n[1],o=(0,a.useState)(!1),i=o[0],l=o[1],d=(0,a.useRef)(null),m=function(){var n=c((function(n){var r;return(0,u.__generator)(this,(function(a){switch(a.label){case 0:return l(!0),e(s(t).concat([{command:n,output:"Loading..."}])),"".concat(n)in f?[4,f["".concat(n)]()]:[3,2];case 1:return r=a.sent(),[3,3];case 2:if("clear"===n)return l(!1),[2,e([])];r=f.error(n.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")),a.label=3;case 3:return l(!1),e(s(t.slice(0,t.length)).concat([{command:n,output:r}])),d&&(d.current.scrollTop=d.current.scrollHeight),[2]}}))}));return function(t){return n.apply(this,arguments)}}();return(0,r.jsxs)("div",{className:w().terminal,ref:d,children:[t.map((function(n,t){var e=n.command,a=n.output;return(0,r.jsx)(y,{command:e,output:a},t)})),!i&&(0,r.jsx)(y,{onSubmit:function(n){return m(n)}})]})}var j=e(214),x=e.n(j);function k(){var n=(0,a.useState)(""),t=n[0],e=n[1],o=["Welcome to my coding website","type help to start","Feel free to explore"],c=0,i=0,s=!1;return(0,a.useEffect)((function(){var n=function(){var t=o[c];s?(e(t.substring(0,i-1)),i--):(e(t.substring(0,i+1)),i++),s||i!==t.length?s&&0===i&&(s=!1,c=(c+1)%o.length):setTimeout((function(){s=!0}),1e3),setTimeout(n,s?50:150)};n()}),[]),(0,r.jsxs)("div",{className:x().container,children:[(0,r.jsxs)("h1",{children:["Dasharn:$ ",(0,r.jsx)("span",{className:x().help,children:t})]}),(0,r.jsx)(_,{})]})}},3050:function(n){n.exports={input:"Input_input__IL5XS"}},9963:function(n){n.exports={terminal:"Terminal_terminal__M2l4h"}},214:function(n){n.exports={container:"Home_container__bCOhY",help:"Home_help__f7ua_"}}},function(n){n.O(0,[774,888,179],(function(){return t=5557,n(n.s=t);var t}));var t=n.O();_N_E=t}]);