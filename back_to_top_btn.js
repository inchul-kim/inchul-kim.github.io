$(document).ready(function()
{
  $.get("element_htmls/back_to_top_btn.html", function(btnHtml)
   {
      document.getElementById("main_div").appendChild(btnHtml);
   },'html');    // this is the change now its working
});

fetch("element_htmls/back_to_top_btn.html")
  .then((res) => res.text())
  .then((text) => {
    // do something with "text"
   })
  .catch((e) => console.error(e));


