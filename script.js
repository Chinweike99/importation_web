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