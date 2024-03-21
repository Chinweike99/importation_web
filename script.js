/****** JS for Hamburger Menu  ***********/
const hamburgerButton = document.querySelector(".dropdown");
const navList = document.getElementById("navList");
const mediaQueryList = window.matchMedia("(min-width: 600px)");

// hamburgerButton.addEventListener("click", ()=>{
//     navList.classList.toggle("show");
// });
let isClicEvent = false;


const handleMenuVisibility = () => {
    if(mediaQueryList.matches){
        navList.classList.remove("show");
        if(isClicEvent){
            hamburgerButton.removeEventListener("click", toggleDown);
            isClicEvent = false
        }
    }else{
        if(!isClicEvent){
            hamburgerButton.addEventListener("click", toggleDown);
            isClicEvent = true;
        }
    }
};
const toggleDown = () =>{
    navList.classList.toggle("show");
};

mediaQueryList.addEventListener("change", handleMenuVisibility);
handleMenuVisibility();


/********************JS For Horizontal Slide**********************/
const slideImages = document.getElementById("slideImages");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

slideImages.addEventListener("wheel", (mv) =>{
    mv.preventDefault();
    slideImages.scrollLeft += mv.deltaY;
    slideImages.style.scrollBehavior = "auto";
});

backBtn.addEventListener("click", () => {
    slideImages.style.scrollBehavior = "smooth";
    slideImages.scrollLeft -= 300;
});

nextBtn.addEventListener("click", () => {
    slideImages.style.scrollBehavior = "smooth";
    slideImages.scrollLeft += 300;
});

/********************JS For Horizontal Slide2**********************/
const slideImages2 = document.getElementById("slideImages2");
const backBtn2 = document.getElementById("backBtn2");
const nextBtn2 = document.getElementById("nextBtn2");

slideImages2.addEventListener("wheel", (mv) =>{
    mv.preventDefault();
    slideImages2.scrollLeft += mv.deltaY;
    slideImages2.style.scrollBehavior = "auto";
});

backBtn2.addEventListener("click", () => {
    slideImages2.style.scrollBehavior = "smooth";
    slideImages2.scrollLeft -= 300;
});

nextBtn2.addEventListener("click", () => {
    slideImages2.style.scrollBehavior = "smooth";
    slideImages2.scrollLeft += 300;
});

/********************JS For Horizontal Slide3**********************/
const slideImages3 = document.getElementById("slideImages3");
const backBtn3 = document.getElementById("backBtn3");
const nextBtn3 = document.getElementById("nextBtn3");

slideImages3.addEventListener("wheel", (mv) =>{
    mv.preventDefault();
    slideImages3.scrollLeft += mv.deltaY;
    slideImages3.style.scrollBehavior = "auto";
});

backBtn3.addEventListener("click", () => {
    slideImages3.style.scrollBehavior = "smooth";
    slideImages3.scrollLeft -= 300;
});

nextBtn3.addEventListener("click", () => {
    slideImages3.style.scrollBehavior = "smooth";
    slideImages3.scrollLeft += 300;
});