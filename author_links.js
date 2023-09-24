// Define an array of link objects with ID, URL, and Text properties
const links = [
    { className: "diegog", url: "http://giga.cps.unizar.es/~diegog/", text: "Diego Gutierrez" },
    { className: "minhkim", url: "http://vclab.kaist.ac.kr/minhkim/index.html", text: "Min H. Kim" },
    { className: "kschoi", url: "http://vclab.kaist.ac.kr/kschoi/index.html", text: "Kiseok Choi" },
    { className: "dychoi", url: "http://vclab.kaist.ac.kr/dychoi/index.html", text: "Dongyoung Choi" },
    { className: "juliom", url: "http://webdiis.unizar.es/~juliom/", text: "Julio Marco" },
    { className: "dgkim", url: "https://sites.google.com/view/dgkim03", text: "Donggun Kim" },
    { className: "hjjang", url: "https://sites.google.com/view/hyeonjoong", text: "Hyeonjoong Jang" },
    { className: "aserrano", url: "https://ana-serrano.github.io/", text: "Ana Serrano" },
    { className: "zchen", url: "http://www.zhilichen.com/", text: "Zhili Chen" },
    { className: "sdiverdi", url: "http://www.stephendiverdi.com/", text: "Stephen DiVerdi" },
    { className: "ahertzmann", url: "https://research.adobe.com/person/aaron-hertzmann/", text: "Aaron Hertzmann" },
    { className: "bmasia", url: "http://webdiis.unizar.es/~bmasia/", text: "Belen Masia" },
    { className: "shbaek", url: "https://sites.google.com/view/shbaek/", text: "Seung-Hwan Baek" }
];

// Loop through the array and update the links and text in the HTML
for (let i = 0; i < links.length; i++) {
    let linkInfo = links[i];
    let linkElements = document.getElementsByClassName("author-link " + linkInfo.className);

    for (let j = 0; j < linkElements.length; j++) {
        let linkElement = linkElements[j];
        
        // Set the href attribute to the URL
        linkElement.href = linkInfo.url;

        // Set the text content of the link
        linkElement.textContent = linkInfo.text;
    }
}