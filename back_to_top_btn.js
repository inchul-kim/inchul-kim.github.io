// btnHtml = '';

let btnHtml = '';

$(document).ready(function()
{
  $.get("element_htmls/back_to_top_btn.html", function(html_string)
   {
      btnHtml = html_string;
   },'html');    // this is the change now its working
});

fetch("element_htmls/back_to_top_btn.html")
  .then((res) => res.text())
  .then((text) => {
    // do something with "text"
   })
  .catch((e) => console.error(e));


document.getElementById("main_div").appendChild(btnHtml);