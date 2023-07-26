/**
 * back to top
 */
// Get the button
let mybutton = document.getElementById("btn_back_to_top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}


/**
 * dark mode
 */
function toggleDarkMode() {
    document.body.classList.toggle("dark");
    if (document.body.classList[0] !== undefined && document.body.classList[0] === 'dark') {
        document.getElementById("img_back_to_top").src = "./images/misc/up-arrow-svgrepo-com-tangerine.svg";
        localStorage.setItem("dark-mode", "enabled");
    }
    else {
        document.getElementById("img_back_to_top").src = "./images/misc/up-arrow-svgrepo-com-steelblue.svg";
        localStorage.setItem("dark-mode", "disabled");
    }
}

// Dark mode toggle listener
const darkModeToggle = document.getElementById("toggle_darkmode");
darkModeToggle.addEventListener("change", () => {
    toggleDarkMode();
})

// Save the dark mode setting to a local browser.
if (localStorage.getItem("dark-mode") === "enabled") {
    // setDarkMode(); // set state of darkMode on page load
    document.getElementById("toggle_darkmode").click()
}