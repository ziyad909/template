

// the logo will change it width on scrolling
const navBar = document.getElementById("navbar");

window.addEventListener("scroll",()=>{
    if(scrollY > 50){
        navBar.classList.add("scrolled");
    }else{
        navBar.classList.remove("scrolled");
    }
})