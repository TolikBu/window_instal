(()=>{"use strict";(()=>{const e=document.querySelector(".button"),t=document.querySelector(".header-modal"),n=document.querySelector(".overlay");document.querySelector(".utp-button").addEventListener("click",(e=>{e.preventDefault()})),e.addEventListener("click",(e=>{e.preventDefault(),n.style.display="block",t.style.display="block"})),n.addEventListener("click",(e=>{e.target.closest(".header-modal")&&!e.target.classList.contains("header-modal__close")||(n.style.display="none",t.style.display="none")}))})(),(()=>{const e=document.querySelectorAll(".btn-sm"),t=document.querySelector(".services-modal"),n=document.querySelector(".overlays");e.forEach((e=>{e.addEventListener("click",(e=>{t.style.display="block",n.style.display="block"}))})),n.addEventListener("click",(e=>{e.target.closest(".services-modal")&&!e.target.classList.contains("services-modal__close")||(n.style.display="none",t.style.display="none")}))})(),(()=>{const e=document.querySelector(".services-slider__container"),t=document.querySelector(".services-slider"),n=document.querySelector(".services__arrow--left"),l=document.querySelector(".services__arrow--right"),o=document.querySelectorAll(".services-slide"),r=o.length;let a=0,c=2,s=e.clientWidth/c,i=1*s;o.forEach((e=>{e.style.minWidth=`${s}px`})),n.addEventListener("click",(()=>{const e=r-(Math.abs(a)+c*s)/s;a-=e>=1?i:e*s,d(),u()})),l.addEventListener("click",(()=>{const e=Math.abs(a)/s;a+=e>=1?i:e*s,d(),u()}));const d=()=>{t.style.transform=`translateX(${a}px)`},u=()=>{l.disabled=0===a,n.disabled=a<=-(r-c)*s};u(),(()=>{if(document.documentElement.clientWidth<576){c=1,s=+e.clientWidth,o.forEach((e=>{e.style.minWidth=`${s}px`})),n.addEventListener("click",(()=>{const e=r-(Math.abs(a)+c*s)/s;a-=e>=1?i:e*s,d()})),l.addEventListener("click",(()=>{const e=Math.abs(a)/s;a+=e>=1?i:e*s,d()}));const d=()=>{t.style.transform=`translateX(${a}px)`}}})()})(),(e=>{const t=document.querySelectorAll(".count_1 span"),n=document.querySelectorAll(".count_2 span"),l=document.querySelectorAll(".count_3 span"),o=document.querySelectorAll(".count_4 span"),r=function(e){return("0"+e).slice(-2)};setInterval((()=>{let a=(()=>{let t=(new Date(e).getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,days:Math.floor(t/60/60/24),hours:Math.floor(t/60/60%24),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.forEach((e=>{e.textContent=`${r(a.days)}`})),n.forEach((e=>{e.textContent=`${r(a.hours)}`})),l.forEach((e=>{e.textContent=`${r(a.minutes)}`})),o.forEach((e=>{e.textContent=`${r(a.seconds)}`})),a.timeRemaining<0&&(t.forEach((e=>{e.textContent="00"})),n.forEach((e=>{e.textContent="00"})),l.forEach((e=>{e.textContent="00"})),o.forEach((e=>{e.textContent="00"})))}),1e3)})("25 january 2022"),(()=>{const e=document.querySelectorAll(".document-inner"),t=document.createElement("div"),n=document.createElement("span"),l=document.querySelector("body"),o=document.querySelector(".overlay3");t.className="certificate",n.className="certificate-close",n.textContent="x",e.forEach((e=>{e.addEventListener("click",(e=>{e.preventDefault(),(()=>{let e=window.innerHeight;l.append(t),t.append(n),t.style.display="block",t.style.height=e+"px",t.style.width=e/1.4+"px",o.style.display="block"})()}))})),o.addEventListener("click",(e=>{e.preventDefault(),o.style.display="none",t.style.display="none"})),n.addEventListener("click",(e=>{e.preventDefault(),o.style.display="none",t.style.display="none"}))})(),(()=>{const e=document.getElementById("smooth-scroll"),t=document.getElementById("header");e.style.display="none",e.addEventListener("click",(n=>{n.preventDefault(),t.scrollIntoView({behavior:"smooth",block:"start"}),e.style.display="none"})),window.onscroll=function(){document.body.scrollTop>500||document.documentElement.scrollTop>500?e.style.display="block":e.style.display="none"}})(),document.querySelectorAll(".order-form"),document.querySelectorAll('[name="fio"]').forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Яa-zA-Z\s]/gi,"")})),e.addEventListener("blur",(e=>{e.target.value=e.target.value.trim(),e.target.classList.contains("required")&&e.target.value&&(e.target.value=e.target.value.split(/\ +/).map((e=>e[0].toUpperCase()+e.slice(1).toLowerCase())).join(" ")),e.target.value=e.target.value}))})),(({someElem:e=[]})=>{const t=document.querySelectorAll(".form-horizontal"),n=document.createElement("div"),l="Ошибка...";n.style.color="green";try{if(!t)throw new Error("Верните форму на место");t.forEach((o=>{o.addEventListener("submit",(r=>{r.preventDefault(),(o=>{const r=o.querySelectorAll("input"),a=new FormData(o),c={};n.textContent="Загрузка...",o.append(n),a.forEach(((e,t)=>{c[t]=e}));try{e.forEach((e=>{const t=document.getElementById(e.id);"input"===e.type&&(c[e.id]=t.value)}))}catch(e){}if(!(e=>{let t=!0;return e.forEach((n=>{n.classList.contains("success")&&(t=!1),(e[0].value.length<3||e[1].value.length<18)&&(t=!1)})),t})(r))return alert("Введит имя не короче 3-х символов, телефон должен содержать 11 цифр"),n.textContent=l,void setInterval((()=>{n.remove(t)}),2e3);var s;(s=c,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(s),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((e=>{n.textContent="Наш менеджер с вами свяжется!",setInterval((()=>{n.remove(t)}),2e3),r.forEach((e=>{e.value=""}))})).catch((e=>{n.textContent=l,setInterval((()=>{n.remove(t)}),2e3)}))})(o)}))}))}catch(e){console.log(e.message)}})({someElem:[{type:"input",id:"calc-total"}]}),function(e,t="+7 (___) ___-__-__"){const n=document.querySelectorAll(e);function l(e){const n=e.keyCode,l=t,o=l.replace(/\D/g,""),r=this.value.replace(/\D/g,"");let a=0,c=l.replace(/[_\d]/g,(function(e){return a<r.length?r.charAt(a++)||o.charAt(a):e}));a=c.indexOf("_"),-1!=a&&(c=c.slice(0,a));let s=l.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");s=new RegExp("^"+s+"$"),(!s.test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=c),"blur"==e.type&&this.value.length<5&&(this.value="")}for(const e of n)e.addEventListener("input",l),e.addEventListener("focus",l),e.addEventListener("blur",l)}('[name="phone"]'),((e=100)=>{const t=document.querySelector(".calc-block"),n=document.getElementById("calc-type"),l=document.getElementById("calc-type-material"),o=document.getElementById("calc-input"),r=document.getElementById("calc-total");try{t.addEventListener("input",(t=>{t.target!==n&&t.target!==o&&t.target!==l||(()=>{let t=+n.options[n.selectedIndex].value,a=+l.options[l.selectedIndex].value,c=o.value,s=0;s=n.value&&l.value&&o.value?e*t*a*c:0,r.value=s,(({timing:e,draw:t,duration:n})=>{let l=performance.now();requestAnimationFrame((function o(r){let a=(r-l)/n;a>1&&(a=1);let c=e(a);t(c),a<1&&requestAnimationFrame(o)}))})({duration:300,timing:e=>Math.pow(e,2),draw(e){r.value=Math.round(e*s)}}),o.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9]/g,"")}))})()}))}catch(e){}})(100),new Swiper(".swiper",{slidesPerView:1,loop:!0,centeredSlides:!0,autoplay:{delay:2e3,disableOnInteraction:!1},breakpoints:{576:{slidesPerView:3}},navigation:{nextEl:".benefits__arrow--left",prevEl:".benefits__arrow--right"}})})();