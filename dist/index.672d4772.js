const slide = document.querySelectorAll(".slide--content");
const slideContainer = document.querySelector(".slide");
const dot = document.querySelector(".dots--container");
const sliderContent1 = document.querySelector(".content--1");
const sliderContent2 = document.querySelector(".content--2");
const sliderContent3 = document.querySelector(".content--3");
const sliderFuntion = function() {
    const createDots = function(slides) {
        slides.forEach((_, i)=>{
            dot.insertAdjacentHTML("beforeend", `
    <button class="dot dot--${i}" data-slide='${i}'></button> 
    `);
        });
    };
    const activeDots = function(slide) {
        document.querySelectorAll(".dot").forEach((dot)=>dot.classList.remove("dot--active"));
        document.querySelector(`.dot[data-slide='${slide}']`).classList.add("dot--active");
    };
    const init = function() {
        gotoSlide(0);
        createDots(slide);
        activeDots(0);
    };
    const gotoSlide = function(slides) {
        slide.forEach((s, i)=>{
            const slidenno = s.style.transform = `translateX(${100 * (i - slides)}%)`;
            return slidenno;
        });
    };
    const classToggle = function(slide) {
        if (document.querySelector(`.content--${+slide + 1}`) === sliderContent2) {
            sliderContent1.classList.add("hidden");
            sliderContent1.classList.remove("active");
            sliderContent3.classList.add("hidden");
            sliderContent3.classList.remove("active");
            sliderContent2.classList.remove("hidden");
            sliderContent2.classList.add("active");
        }
        if (document.querySelector(`.content--${+slide + 1}`) === sliderContent1) {
            sliderContent2.classList.add("hidden");
            sliderContent2.classList.remove("active");
            sliderContent3.classList.add("hidden");
            sliderContent3.classList.remove("active");
            sliderContent1.classList.remove("hidden");
            sliderContent1.classList.add("active");
        }
        if (document.querySelector(`.content--${+slide + 1}`) === sliderContent3) {
            sliderContent2.classList.add("hidden");
            sliderContent2.classList.remove("active");
            sliderContent1.classList.add("hidden");
            sliderContent1.classList.remove("active");
            sliderContent3.classList.remove("hidden");
            sliderContent3.classList.add("active");
        }
    };
    dot.addEventListener("click", function(e) {
        if (e.target.classList.contains("dot")) {
            const { slide } = e.target.dataset;
            gotoSlide(slide);
            activeDots(slide);
            classToggle(slide);
        }
    });
    init();
};
sliderFuntion();

//# sourceMappingURL=index.672d4772.js.map
