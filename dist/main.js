(()=>{"use strict";(()=>{const e=document.querySelector(".button"),t=document.querySelector(".header-modal"),n=document.querySelector(".overlay");e.addEventListener("click",(()=>{n.style.display="block",t.style.display="block"})),n.addEventListener("click",(e=>{e.target.closest(".header-modal")&&!e.target.classList.contains("header-modal__close")||(n.style.display="none",t.style.display="none")}))})(),(()=>{const e=document.querySelectorAll(".btn-sm"),t=document.querySelector(".services-modal"),n=document.querySelector(".overlays");e.forEach((e=>{e.addEventListener("click",(()=>{t.style.display="block",n.style.display="block"}))})),n.addEventListener("click",(e=>{e.target.closest(".services-modal")&&!e.target.classList.contains("services-modal__close")||(n.style.display="none",t.style.display="none")}))})(),(()=>{const e=document.querySelector(".services-slider__container"),t=document.querySelector(".services-slider"),n=document.querySelector(".services__arrow--left"),l=document.querySelector(".services__arrow--right"),o=document.querySelectorAll(".services-slide"),a=o.length;let c=0,r=2,s=e.clientWidth/r,i=1*s;o.forEach((e=>{e.style.minWidth=`${s}px`})),n.addEventListener("click",(()=>{const e=a-(Math.abs(c)+r*s)/s;c-=e>=1?i:e*s,d(),u()})),l.addEventListener("click",(()=>{const e=Math.abs(c)/s;c+=e>=1?i:e*s,d(),u()}));const d=()=>{t.style.transform=`translateX(${c}px)`},u=()=>{l.disabled=0===c,n.disabled=c<=-(a-r)*s};u(),(()=>{if(document.documentElement.clientWidth<576){r=1,s=+e.clientWidth,console.log(s),o.forEach((e=>{e.style.minWidth=`${s}px`})),n.addEventListener("click",(()=>{const e=a-(Math.abs(c)+r*s)/s;c-=e>=1?i:e*s,d()})),l.addEventListener("click",(()=>{const e=Math.abs(c)/s;c+=e>=1?i:e*s,d()}));const d=()=>{t.style.transform=`translateX(${c}px)`}}})()})(),(e=>{const t=document.querySelectorAll(".count_1 span"),n=document.querySelectorAll(".count_2 span"),l=document.querySelectorAll(".count_3 span"),o=document.querySelectorAll(".count_4 span"),a=function(e){return("0"+e).slice(-2)};setInterval((()=>{let c=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.forEach((e=>{e.textContent=`${a(c.days)}`})),n.forEach((e=>{e.textContent=`${a(c.hours)}`})),l.forEach((e=>{e.textContent=`${a(c.minutes)}`})),o.forEach((e=>{e.textContent=`${a(c.seconds)}`})),c.timeRemaining<0&&(t.textContent="00",n.textContent="00",l.textContent="00",o.textContent="00")}),1e3)})("22 january 2022"),(()=>{const e=document.querySelectorAll(".document-inner"),t=document.createElement("div"),n=document.createElement("span"),l=document.querySelector("body"),o=document.querySelector(".overlay3");t.className="certificate",n.className="certificate-close",n.textContent="x",e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),(()=>{let e=window.innerHeight;l.append(t),t.append(n),t.style.display="block",t.style.height=e+"px",t.style.width=e/1.4+"px",o.style.display="block"})()}))})),o.addEventListener("click",(e=>{o.style.display="none",t.style.display="none"})),n.addEventListener("click",(e=>{o.style.display="none",t.style.display="none"}))})(),(()=>{const e=document.getElementById("smooth-scroll"),t=document.getElementById("header");e.style.display="none",e.addEventListener("click",(n=>{n.preventDefault(),t.scrollIntoView({behavior:"smooth",block:"start"}),e.style.display="none"})),window.onscroll=function(){document.body.scrollTop>500||document.documentElement.scrollTop>500?e.style.display="block":e.style.display="none"}})(),document.querySelectorAll(".order-form"),document.querySelectorAll('[name="fio"]').forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Яa-zA-Z\s]/gi,"")})),e.addEventListener("blur",(e=>{e.target.value=e.target.value.trim(),e.target.classList.contains("required")&&e.target.value&&(e.target.value=e.target.value.split(/\ +/).map((e=>e[0].toUpperCase()+e.slice(1).toLowerCase())).join(" ")),e.target.value=e.target.value}))})),(({someElem:e=[]})=>{document.querySelectorAll(".form-horizontal").forEach((t=>{const n=t.querySelectorAll("input");t.addEventListener("submit",(l=>{l.preventDefault();const o=new FormData(t),a={};o.forEach(((e,t)=>{a[t]=e}));try{e.forEach((e=>{const t=document.getElementById(e.id);"input"===e.type&&(a[e.id]=t.value)}))}catch(e){}var c;(e=>{let t=!0;return e.forEach((n=>{n.classList.contains("success")&&(t=!1),(e[0].value.length<3||e[1].value.length<18)&&(t=!1)})),t})(n)?(c=a,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(c),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{n.forEach((e=>{e.value=""}))})).catch((e=>{console.log(e)})):alert("Введит имя не короче 3-х символов, телефон должен содержать 11 цифр")}))}))})({someElem:[{type:"input",id:"calc-total"}]}),function(e,t="+7 (___) ___-__-__"){const n=document.querySelectorAll(e);function l(e){const n=e.keyCode,l=t,o=l.replace(/\D/g,""),a=this.value.replace(/\D/g,"");console.log(l);let c=0,r=l.replace(/[_\d]/g,(function(e){return c<a.length?a.charAt(c++)||o.charAt(c):e}));c=r.indexOf("_"),-1!=c&&(r=r.slice(0,c));let s=l.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");s=new RegExp("^"+s+"$"),(!s.test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=r),"blur"==e.type&&this.value.length<5&&(this.value="")}for(const e of n)e.addEventListener("input",l),e.addEventListener("focus",l),e.addEventListener("blur",l)}('[name="phone"]'),((e=100)=>{const t=document.querySelector(".calc-block"),n=document.getElementById("calc-type"),l=document.getElementById("calc-type-material"),o=document.getElementById("calc-input"),a=document.getElementById("calc-total");try{t.addEventListener("input",(t=>{t.target!==n&&t.target!==o&&t.target!==l||(()=>{let t=+n.options[n.selectedIndex].value,c=+l.options[l.selectedIndex].value,r=o.value,s=0;s=n.value&&l.value&&o.value?e*t*c*r:0,a.value=s,(({timing:e,draw:t,duration:n})=>{let l=performance.now();requestAnimationFrame((function o(a){let c=(a-l)/n;c>1&&(c=1);let r=e(c);t(r),c<1&&requestAnimationFrame(o)}))})({duration:300,timing:e=>Math.pow(e,2),draw(e){a.value=Math.round(e*s)}}),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9]/g,"")}))})()}))}catch(e){}})(100),new Swiper(".swiper",{slidesPerView:1,loop:!0,centeredSlides:!0,autoplay:{delay:500,disableOnInteraction:!1},breakpoints:{576:{slidesPerView:3}},navigation:{nextEl:".benefits__arrow--left",prevEl:".benefits__arrow--right"}})})();