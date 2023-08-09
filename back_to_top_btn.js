// btnHtml = '';


$(document).ready(function()
{
  $.get("element_htmls/back_to_top_btn.html", function(html_string)
   {
      console.log(html_string)
   },'html');    // this is the change now its working
});

// fetch("element_htmls/back_to_top_btn.html")
//   .then((res) => res.text())
//   .then((text) => {
//     // do something with "text"
//    })
//   .catch((e) => console.error(e));

// let btnHtml = readFile()

// document.getElementById("main_div").appendChild(btnHtml);