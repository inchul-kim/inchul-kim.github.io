let xhr = new XMLHttpRequest();

xhr.open("GET", "element_htmls/back_to_top_btn.html", true);
xhr.send();
xhr.onload = () => {
    if (xhr.status == 200) {
        // success
        document.getElementById("main_div").innerHTML += xhr.responseText;
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
    }
}