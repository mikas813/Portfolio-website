(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},,,function(e,t,c){},,,function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(0),n=(c(2),c(5)),i=c.n(n),r=(c(12),function(){return Object(s.jsx)("header",{children:Object(s.jsx)("img",{src:"images/logo.jpg",alt:"Site's Logo '|M L|'"})})}),o=(c(13),function(){return Object(s.jsx)("footer",{children:Object(s.jsxs)("p",{children:["Mikael Lasichuk ",(new Date).getFullYear()]})})}),a="My name is Mikael, I'm Front-end developer.",d="I'm a creative frontend developer. Proficient in JavaScript, CSS, HTML, jQuery, React and Photoshop",j="Message sent. Thanks.",l="Something went wrong!",h=function(e,t){for(var c=e.split(""),s=function(e){setTimeout((function(){document.getElementById(t).innerHTML+=c[e]}),50*e)},n=0;n<c.length;n++)s(n)},b=(c(14),function(){var e=function(e){var t=document.querySelector(".about-side"),c=document.querySelector("#box");c.classList.value="",document.querySelector("#message-side").innerHTML="",c.classList.add(e.target.dataset.side),"show-front"===e.target.dataset.side&&t.classList.contains("empty")&&(h(d,"about-side"),t.classList.remove("empty"))};return Object(s.jsx)("nav",{children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{"data-side":"show-top",onClick:function(t){return e(t)},children:"home"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{"data-side":"show-front",onClick:function(t){return e(t)},children:"about"})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{"data-side":"show-bottom",onClick:function(t){return e(t)},children:"contacts"})})]})})}),u=function(){return Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",children:Object(s.jsx)("path",{d:"M0 0v24h24v-24h-24zm8 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.397-2.586 7-2.777 7 2.476v6.759z"})})},m=function(){return Object(s.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",viewBox:"0 0 24 24",children:Object(s.jsx)("path",{d:"M0 0v24h24v-24h-24zm14.534 19.59c-.406.078-.534-.171-.534-.384v-2.195c0-.747-.262-1.233-.55-1.481 1.782-.198 3.654-.875 3.654-3.947 0-.874-.311-1.588-.824-2.147.083-.202.357-1.016-.079-2.117 0 0-.671-.215-2.198.82-.639-.18-1.323-.267-2.003-.271-.68.003-1.364.091-2.003.269-1.528-1.035-2.2-.82-2.2-.82-.434 1.102-.16 1.915-.077 2.118-.512.56-.824 1.273-.824 2.147 0 3.064 1.867 3.751 3.645 3.954-.229.2-.436.552-.508 1.07-.457.204-1.614.557-2.328-.666 0 0-.423-.768-1.227-.825 0 0-.78-.01-.055.487 0 0 .525.246.889 1.17 0 0 .463 1.428 2.688.944v1.489c0 .211-.129.459-.528.385-3.18-1.057-5.472-4.056-5.472-7.59 0-4.419 3.582-8 8-8s8 3.581 8 8c0 3.533-2.289 6.531-5.466 7.59z"})})},x=(c(15),function(){return Object(s.jsx)("div",{className:"soc",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("a",{target:"_blank",href:"https://www.linkedin.com/in/mikael-lasichuk-a1308611b/",rel:"noreferrer",children:Object(s.jsx)(u,{})})}),Object(s.jsx)("li",{children:Object(s.jsx)("a",{rel:"noreferrer",target:"_blank",href:"https://github.com/mikas813",children:Object(s.jsx)(m,{})})})]})})}),O=(c(16),function(e){return Object(s.jsx)("div",{className:"border",children:e.children})}),f=function(e){return Object(s.jsx)("main",{children:e.children})},v=c(6),g=c.n(v),p=(c(19),c(3),"user_3hIFmLZWQw8fFEPF6xpY0"),w=function(){return Object(s.jsxs)("div",{className:"contact-side",children:[Object(s.jsx)("h2",{children:"Get in touch"}),Object(s.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t=document.getElementById("box"),c=document.querySelector("form");t.classList.value="",t.classList.add("rotate"),g.a.sendForm("service_yx4jqaf","template_1u82alm",e.target,p).then((function(){h(j,"message-side")}),(function(){return h(l,"message-side")})),setTimeout((function(){t.classList.value="",t.classList.add("show-bottom"),document.querySelector("#message-side").innerHTML=""}),3500),c.reset()},children:[Object(s.jsx)("label",{htmlFor:"",children:"E-mail"}),Object(s.jsx)("input",{required:!0,name:"email",type:"email"}),Object(s.jsx)("label",{htmlFor:"",children:"Message"}),Object(s.jsx)("textarea",{required:!0,minLength:"10",name:"message",cols:"30",rows:"10"}),Object(s.jsx)("button",{type:"submit",children:"Send"})]})]})},_=(c(22),function(){return window.addEventListener("DOMContentLoaded",h(a,"home-side")),Object(s.jsx)("div",{className:"scene",children:Object(s.jsxs)("div",{id:"box",className:"show-top",children:[Object(s.jsx)("div",{className:"box__face box__face--front",children:Object(s.jsxs)("div",{className:"about-side empty",children:[Object(s.jsx)("h2",{children:"About me"}),Object(s.jsx)("p",{id:"about-side"})]})}),Object(s.jsx)("div",{className:"box__face box__face--top",children:Object(s.jsxs)("div",{className:"home-side",children:[Object(s.jsx)("h1",{children:"Hello!"}),Object(s.jsx)("p",{id:"home-side"})]})}),Object(s.jsx)("div",{className:"box__face box__face--bottom",children:Object(s.jsx)(w,{})}),Object(s.jsx)("div",{className:"box__face box__face--back",children:Object(s.jsx)("p",{id:"message-side"})})]})})}),L=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsxs)(O,{children:[Object(s.jsx)(r,{}),Object(s.jsx)(b,{}),Object(s.jsx)(f,{children:Object(s.jsx)(_,{})}),Object(s.jsx)(x,{}),Object(s.jsx)(o,{})]})})};c(23);i.a.render(Object(s.jsx)(L,{}),document.getElementById("root"))}],[[24,1,2]]]);
//# sourceMappingURL=main.043adedc.chunk.js.map