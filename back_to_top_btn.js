$(document).ready(function()
{
  $.get("element_htmls/back_to_top_btn.html", function(btnHtml)
   {
    document.getElementById("main_div").innerHTML += btnHtml;
   },'html');    // this is the change now its working
});

// const btnHtml = `
// <!-- back to top button -->
// <button onclick="topFunction()" id="btn_back_to_top" title="Go to top">
//   <picture>
//     <source srcset="./images/misc/up-arrow-svgrepo-com-dark.svg" media="(prefers-color-scheme: dark)">
//     <source srcset="./images/misc/up-arrow-svgrepo-com-light.svg" media="(prefers-color-scheme: light)">
//     <img id="img_back_to_top" src="./images/misc/up-arrow-svgrepo-com-light.svg" width="40px" height="40px"/>
//   </picture>
// </button>
// `;
// document.getElementById("main_div").innerHTML += btnHtml;
