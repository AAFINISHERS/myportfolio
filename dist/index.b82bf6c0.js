const e=document.querySelectorAll(".slide--content");document.querySelector(".slide");const t=document.querySelector(".dots--container"),s=document.querySelector(".content--1"),c=document.querySelector(".content--2"),d=document.querySelector(".content--3");!function(){let o=function(e){document.querySelectorAll(".dot").forEach(e=>e.classList.remove("dot--active")),document.querySelector(`.dot[data-slide='${e}']`).classList.add("dot--active")},a=function(t){e.forEach((e,s)=>e.style.transform=`translateX(${100*(s-t)}%)`)},n=function(e){document.querySelector(`.content--${+e+1}`)===c&&(s.classList.add("hidden"),s.classList.remove("active"),d.classList.add("hidden"),d.classList.remove("active"),c.classList.remove("hidden"),c.classList.add("active")),document.querySelector(`.content--${+e+1}`)===s&&(c.classList.add("hidden"),c.classList.remove("active"),d.classList.add("hidden"),d.classList.remove("active"),s.classList.remove("hidden"),s.classList.add("active")),document.querySelector(`.content--${+e+1}`)===d&&(c.classList.add("hidden"),c.classList.remove("active"),s.classList.add("hidden"),s.classList.remove("active"),d.classList.remove("hidden"),d.classList.add("active"))};t.addEventListener("click",function(e){if(e.target.classList.contains("dot")){let{slide:t}=e.target.dataset;a(t),o(t),n(t)}}),a(0),function(e){e.forEach((e,s)=>{t.insertAdjacentHTML("beforeend",`
    <button class="dot dot--${s}" data-slide='${s}'></button> 
    `)})}(e),o(0)}();
//# sourceMappingURL=index.b82bf6c0.js.map