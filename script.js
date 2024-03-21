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