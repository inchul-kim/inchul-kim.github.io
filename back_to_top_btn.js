// let xhr = new XMLHttpRequest();

// xhr.open("GET", "element_htmls/back_to_top_btn.html", false);
// xhr.send();
// xhr.onload = () => {
//     if (xhr.status == 200) {
//         // success
//         document.getElementById("main_div").innerHTML += xhr.responseText;
//         /**
//          * back to top
//          */
//         // Get the button
//         let mybutton = document.getElementById("btn_back_to_top");

//         // When the user scrolls down 20px from the top of the document, show the button
//         window.onscroll = function () { scrollFunction() };

//         function scrollFunction() {
//             if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//                 mybutton.style.display = "block";
//             } else {
//                 mybutton.style.display = "none";
//             }
//         }

//         // When the user clicks on the button, scroll to the top of the document
//         function topFunction() {
//             window.scrollTo({ top: 0, behavior: 'smooth' });
//         }

//         // button click listener
//         mybutton.addEventListener("click", function() {
//             topFunction();
//         });
//     }
// }

const btnHtml = `
<!-- back to top button -->
<button id="btn_back_to_top" title="Go to top">
  <picture>
    <source srcset="data/images/misc/up-arrow-svgrepo-com-dark.svg" media="(prefers-color-scheme: dark)">
    <source srcset="data/images/misc/up-arrow-svgrepo-com-light.svg" media="(prefers-color-scheme: light)">
    <img id="img_back_to_top" src="data/images/misc/up-arrow-svgrepo-com-light.svg" width="40px" height="40px"/>
  </picture>
</button>
`;

document.getElementById("main_div").innerHTML += btnHtml;
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

// button click listener
mybutton.addEventListener("click", function() {
    topFunction();
});