(()=>{"use strict";(()=>{const e=document.querySelector(".button"),t=document.querySelector(".header-modal"),n=document.querySelector(".overlay");e.addEventListener("click",(()=>{n.style.display="block",t.style.display="block"})),n.addEventListener("click",(e=>{e.target.closest(".header-modal")&&!e.target.classList.contains("header-modal__close")||(n.style.display="none",t.style.display="none")}))})(),document.querySelector(".benefits-wrap"),document.querySelectorAll(".benefits__item"),(()=>{const e=document.querySelectorAll(".btn-sm"),t=document.querySelector(".services-modal"),n=document.querySelector(".overlays");e.forEach((e=>{e.addEventListener("click",(()=>{t.style.display="block",n.style.display="block"}))})),n.addEventListener("click",(e=>{e.target.closest(".services-modal")&&!e.target.classList.contains("services-modal__close")||(n.style.display="none",t.style.display="none")}))})(),(e=>{const t=document.querySelectorAll(".count_1 span"),n=document.querySelectorAll(".count_2 span"),l=document.querySelectorAll(".count_3 span"),o=document.querySelectorAll(".count_4 span"),c=function(e){return("0"+e).slice(-2)};setInterval((()=>{let a=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.forEach((e=>{e.textContent=`${c(a.days)}`})),n.forEach((e=>{e.textContent=`${c(a.hours)}`})),l.forEach((e=>{e.textContent=`${c(a.minutes)}`})),o.forEach((e=>{e.textContent=`${c(a.seconds)}`})),a.timeRemaining<0&&(t.textContent="00",n.textContent="00",l.textContent="00",o.textContent="00")}),1e3)})("22 january 2022"),(()=>{const e=document.querySelectorAll(".document-inner"),t=document.createElement("div"),n=document.createElement("span"),l=document.querySelector("body"),o=document.querySelector(".overlay3");t.className="certificate",n.className="certificate-close",n.textContent="x",e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),(()=>{let e=window.innerHeight;l.append(t),t.append(n),t.style.display="block",t.style.height=e+"px",t.style.width=e/1.4+"px",o.style.display="block"})()}))})),o.addEventListener("click",(e=>{o.style.display="none",t.style.display="none"})),n.addEventListener("click",(e=>{o.style.display="none",t.style.display="none"}))})(),(()=>{const e=document.getElementById("smooth-scroll"),t=document.getElementById("header");e.style.display="none",e.addEventListener("click",(n=>{n.preventDefault(),t.scrollIntoView({behavior:"smooth",block:"start"}),e.style.display="none"})),window.onscroll=function(){document.body.scrollTop>500||document.documentElement.scrollTop>500?e.style.display="block":e.style.display="none"}})(),document.querySelectorAll(".order-form"),document.querySelectorAll('[name="fio"]').forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Яa-zA-Z\s]/gi,"")})),e.addEventListener("blur",(e=>{e.target.value=e.target.value.trim(),e.target.classList.contains("required")&&e.target.value&&(e.target.value=e.target.value.split(/\ +/).map((e=>e[0].toUpperCase()+e.slice(1).toLowerCase())).join(" ")),e.target.value=e.target.value}))})),(({someElem:e=[]})=>{document.querySelectorAll(".form-horizontal").forEach((t=>{const n=t.querySelectorAll("input");t.addEventListener("submit",(l=>{l.preventDefault();const o=new FormData(t),c={};o.forEach(((e,t)=>{c[t]=e}));try{e.forEach((e=>{const t=document.getElementById(e.id);"input"===e.type&&(c[e.id]=t.value)}))}catch(e){}var a;(e=>{let t=!0;return e.forEach((n=>{n.classList.contains("success")&&(t=!1),(e[0].value.length<3||e[1].value.length<18)&&(t=!1)})),t})(n)?(a=c,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{n.forEach((e=>{e.value=""}))})).catch((e=>{console.log(e)})):alert("Введит имя не короче 3-х символов, телефон должен содержать 11 цифр")}))}))})({someElem:[{type:"input",id:"calc-total"}]}),function(e,t="+7 (___) ___-__-__"){const n=document.querySelectorAll(e);function l(e){const n=e.keyCode,l=t,o=l.replace(/\D/g,""),c=this.value.replace(/\D/g,"");console.log(l);let a=0,r=l.replace(/[_\d]/g,(function(e){return a<c.length?c.charAt(a++)||o.charAt(a):e}));a=r.indexOf("_"),-1!=a&&(r=r.slice(0,a));let s=l.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");s=new RegExp("^"+s+"$"),(!s.test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=r),"blur"==e.type&&this.value.length<5&&(this.value="")}for(const e of n)e.addEventListener("input",l),e.addEventListener("focus",l),e.addEventListener("blur",l)}('[name="phone"]'),((e=100)=>{const t=document.querySelector(".calc-block"),n=document.getElementById("calc-type"),l=document.getElementById("calc-type-material"),o=document.getElementById("calc-input"),c=document.getElementById("calc-total");try{t.addEventListener("input",(t=>{t.target!==n&&t.target!==o&&t.target!==l||(()=>{let t=+n.options[n.selectedIndex].value,a=+l.options[l.selectedIndex].value,r=o.value,s=0;s=n.value&&l.value&&o.value?e*t*a*r:0,c.value=s,(({timing:e,draw:t,duration:n})=>{let l=performance.now();requestAnimationFrame((function o(c){let a=(c-l)/n;a>1&&(a=1);let r=e(a);t(r),a<1&&requestAnimationFrame(o)}))})({duration:300,timing:e=>Math.pow(e,2),draw(e){c.value=Math.round(e*s)}}),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9]/g,"")}))})()}))}catch(e){}})(100),(()=>{const e=document.querySelector(".services-slider__container"),t=document.querySelector(".services-slider"),n=document.querySelectorAll(".services-slide"),l=document.querySelector(".services__arrow--left"),o=document.querySelector(".services__arrow--right"),c=n.length;let a=0;const r=e.clientWidth/2;let s=1*r;n.forEach(((e,t)=>{e.style.maxWidth=r+"px"})),l.addEventListener("click",(()=>{a-=s,i(),d()})),o.addEventListener("click",(()=>{a+=s,i(),d()}));const i=()=>{t.style.transform=`translateX(${a}px)`},d=()=>{o.setAttribute("disabled",0===a),o.style.opacity="0.4",l.setAttribute("disabled",a<=-(c-2)*r),console.log(-(c-2)*r)};d()})()})();