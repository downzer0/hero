!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=[{name:"dz0",dex:10,speed:2,order:0},{name:"logan",dex:4,speed:8,order:1}],o=function(){var e=document.querySelector(".modal").querySelector(".wrapper").querySelector("textarea");return!!e.value&&(r=JSON.parse(e.value),l(),s())},a=function(){var e=document.querySelector(".modal"),t=e.querySelector(".wrapper"),n=document.createElement("form"),r=document.createElement("label");r.setAttribute("for","json");var a=document.createElement("textarea");a.setAttribute("id","json"),t.appendChild(n),n.appendChild(r),n.appendChild(a),t.insertAdjacentHTML("beforebegin","<p>Paste your previously saved JSON.</p>"),t.insertAdjacentHTML("afterend",'<p><button type="button" class="transparent close">Maybe later</button></p>'),t.insertAdjacentHTML("afterend",'<p><button type="button" class="load">Load</button></p>'),e.style.display="block",m(".load",o),m(".close",s)},d=function(){var e=document.querySelector(".modal"),t=e.querySelector(".wrapper"),n=document.createElement("pre");n.innerHTML=JSON.stringify(r),t.appendChild(n),t.insertAdjacentHTML("beforebegin","<p>Copy the below JSON and save it.</p>"),t.insertAdjacentHTML("afterend",'<p><button type="button" class="close">Got it</button></p>'),e.style.display="block",m(".close",s)},l=function(){var e=document.querySelector(".players");if(e.innerHTML="",!r.length)return e.innerHTML="No players yet.",i();var t=document.createElement("table"),n=t.createTHead().insertRow(0),o=n.appendChild(document.createElement("th")),a=n.appendChild(document.createElement("th")),d=n.appendChild(document.createElement("th")),l=n.appendChild(document.createElement("th"));o.innerHTML="Player",a.innerHTML="Dex",d.innerHTML="Speed",l.innerHTML="Actions",r.forEach(function(e,n){var r=t.insertRow(t.rows.length);r.insertCell(0).appendChild(document.createTextNode(e.name)),r.insertCell(1).appendChild(document.createTextNode(e.dex)),r.insertCell(2).appendChild(document.createTextNode(e.speed));var o=document.createElement("button"),a=document.createTextNode("Remove");o.appendChild(a),o.setAttribute("type","button"),o.setAttribute("data-index",n),o.classList.add("remove"),r.insertCell(3).appendChild(o)}),e.appendChild(t),m(".remove",c),i()},u=function(){var e=document.querySelector("#new-player"),t=document.querySelector("#new-player-speed"),n=document.querySelector("#new-player-dex");if(!e.value||!t.value||!n.value)return!1;r.push({name:e.value,dex:n.value,speed:t.value,order:r.length+1}),e.value="",t.value="",n.value="",l()},c=function(e){var t=e.target.getAttribute("data-index");r.splice(t,1),l()},i=function(){var e=document.querySelector(".order");if(e.innerHTML="",!r||!r.length)return e.innerHTML="Add some players first."},p=function(){return r=[],l()},s=function(){var e=document.querySelector(".modal");document.querySelector(".modal .wrapper").innerHTML="",e.querySelectorAll("p").forEach(function(e){e.remove()}),e.style.display="none"},m=function(e,t){document.querySelectorAll(e).forEach(function(e){e.addEventListener("click",t)})};document.addEventListener("DOMContentLoaded",function(){l(),m(".save",d),m(".load",a),m(".add",u),m(".remove",c),m(".clear",p)})}]);