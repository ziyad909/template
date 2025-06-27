
const themeSwitcher = document.getElementById("theme-switcher");
// function that make the text content and the icon of dark mode
function darkMode(){
    themeSwitcher.children[0].textContent = "Dark Mode";
    themeSwitcher.children[1].classList.replace("fa-sun","fa-moon");
}
// function that make the text content and icon of light mode
function lightMode(){
     themeSwitcher.children[0].textContent="Light Mode";
     themeSwitcher.children[1].classList.replace("fa-moon","fa-sun");
}

// function that switch the theme mode

function switchTheme(){
    const currentTheme = document.documentElement.getAttribute("data-theme");

    if(!currentTheme || currentTheme === 'dark'){
        document.documentElement.setAttribute( "data-theme","light");
        localStorage.setItem("theme","light");
        lightMode();
    }
    else{
        document.documentElement.setAttribute( "data-theme","dark");
        localStorage.setItem("theme","dark");
        darkMode();
    }
}


// add an Event listener on click on the themeSwitcher

themeSwitcher.addEventListener("click",switchTheme);

// get the theme from the local storage 

const themeFromLocaleStorage = localStorage.getItem("theme");

if(themeFromLocaleStorage){
    document.documentElement.setAttribute("data-theme",themeFromLocaleStorage);
    if(themeFromLocaleStorage === 'dark'){
        darkMode();
    }else{
        lightMode();
    }
}