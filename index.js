/**
 * dark mode
 */
function setPicturesThemed(colorScheme = undefined) {
	// Clean up all existing picture sources that were cloned
	document.querySelectorAll('picture > source[data-cloned-theme]').forEach(el => {
		el.remove();
	});

	if (colorScheme) {
		// Find all picture sources with the desired colour scheme
		document.querySelectorAll(`picture > source[media*="(prefers-color-scheme: ${colorScheme})"]`).forEach(el => {
			// 1. Clone the given <source>
			// 2. Remove the media attribute so the new <source> is unconditional
			// 3. Add a "data-cloned-theme" attribute to it for future reference / removal
			// 4. Prepend the new <source> to the parent <picture> so it takes precedence
			const cloned = el.cloneNode();
			cloned.removeAttribute('media');
			cloned.setAttribute('data-cloned-theme', colorScheme);
			el.parentNode.prepend(cloned);
		});
	}
}

function setLightDark() {
    if (document.body.classList[0] !== undefined && document.body.classList[0] === 'dark') {
        localStorage.setItem("dark-mode", "enabled");
        setPicturesThemed("dark");
    }
    else {
        localStorage.setItem("dark-mode", "disabled");
        setPicturesThemed("light");
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark");
    setLightDark();
}


// Dark mode toggle listener
const darkModeToggle = document.getElementById("toggle_darkmode");
darkModeToggle.addEventListener("change", () => {
    toggleDarkMode();
})

// Save the dark mode setting to a local browser.
if (localStorage.getItem("dark-mode") === "enabled") {
    // const darkTransition = getComputedStyle(document.body).getPropertyPriority('transition');
    // document.body.style.transition = "background 0s linear;"
    document.getElementById("toggle_darkmode").click();
    // document.body.style.transition = darkTransition;
}
else {
    setLightDark("light");
}


function create_teaching() {
	// Step 1: Define your data
	const teaching = [
		{
			imgSrc: "data/images/misc/TA/cs484.png",
			imgAlt: "CS484",
			link: "https://vclab.kaist.ac.kr/cs484/index.html",
			text: "Teaching Assistant, KAIST-CS484 (Introduction to Computer Vision), Fall 2024",
			active: true
		},
		{
			imgSrc: "data/images/misc/TA/cs485.png",
			imgAlt: "CS485",
			link: "", // Empty link indicates inactive
			text: "Teaching Assistant, KAIST-CS485 (Machine Learning for Computer Vision), Fall 2023",
			active: false,
			style: "cursor: default; pointer-events: none;"
		},
		{
			imgSrc: "data/images/misc/TA/cs580.png",
			imgAlt: "CS580",
			link: "http://vclab.kaist.ac.kr/cs580/index.html",
			text: "Teaching Assistant, KAIST-CS580 (Computer Graphics), Spring 2023",
			active: true
		},
		{
			imgSrc: "data/images/misc/TA/cs482.png",
			imgAlt: "CS482",
			link: "http://vclab.kaist.ac.kr/cs482/index.html",
			text: "Teaching Assistant, KAIST-CS482 (Interactive Computer Graphics), Fall 2022",
			active: true
		}
		// Add more publication objects here if needed
	];

	// Step 2: Reference the table body
	const teachingTableBody = document.getElementById('teachingTableBody');

	// Step 3: Function to create a table row
	function createTableRow(pub) {
		const tr = document.createElement('tr');
		tr.className = 'publicationRow';

		// Image Cell
		const tdImg = document.createElement('td');
		tdImg.className = 'imgCellSmall';
		const divImg = document.createElement('div');
		divImg.className = 'paperImgSmall';
		const img = document.createElement('img');
		img.src = pub.imgSrc;
		img.alt = pub.imgAlt;
		divImg.appendChild(img);
		tdImg.appendChild(divImg);
		tr.appendChild(tdImg);

		// Content Cell
		const tdContent = document.createElement('td');
		tdContent.className = 'td_contents';
		const a = document.createElement('a');
		a.href = pub.active ? pub.link : "#";
		a.textContent = pub.text;
		a.style.cssText = pub.style;  // Apply the inline style from the `style` property
		// if (!pub.active) {
		//     a.style.cursor = 'default';
		//     a.style.pointerEvents = 'none';
		//     a.style.color = 'gray'; // Optional: indicate inactive link
		// }
		tdContent.appendChild(a);
		tdContent.appendChild(document.createElement('br'));
		tr.appendChild(tdContent);

		return tr;
	}

	// Step 4: Populate the table
	teaching.forEach(pub => {
		const row = createTableRow(pub);
		teachingTableBody.appendChild(row);
	});
}

create_teaching()



// Publications
function createPublications() {
    // Step 1: Define your data
    const publications = [
		{
			title: "Self-Calibrating, Fully Differentiable NLOS Inverse Rendering",
			authors: `
				<a class="author-link kschoi"></a>,
				<a class="author-link dgkim"></a>,
				<a class="author-link dychoi"></a>,
				<a class="author-link juliom"></a>,
				<a class="author-link diegog"></a>,
				<a class="author-link minhkim"></a>
			`,
			conference: "Proc. ACM SIGGRAPH Asia, 2023",
			additionalLinks: [
				{ text: "Project", href: "http://vclab.kaist.ac.kr/siggraphasia2023/index.html" },
				{ text: "Paper", href: "data/publications/[SIGA2023]nlos/Choi_SIGA2023_nlos_paper.pdf" },
				{ text: "Supplemental", href: "data/publications/[SIGA2023]nlos/Choi_SIGA2023_nlos_supp.pdf" },
				{ text: "Code", href: "https://github.com/KAIST-VCLAB/nlos-inverse-rendering" },
				{ text: "ACM DL", href: "https://doi.org/10.1145/3610548.3618140" },
				{ text: "bibtex", href: "data/publications/[SIGA2023]nlos/siga2023_nlos.txt" }
			],
			description: "We present a flexible, differentiable non-line-of-sight (NLOS) imaging and rendering pipeline that automatically estimates system parameters and the geometry of hidden objects.",
			html: `
				<td class="imgCell">
					<div class="paperImg">
						<img class="coverImg" src="data/publications/[SIGA2023]nlos/tmeas_dragon.png" loading="lazy">
						<video class="hoverImg" width="100%" height="100%" muted autoplay loop preload="auto">
							<source src="data/publications/[SIGA2023]nlos/recon.mp4" type="video/mp4">
							Your browser does not support the video tag.
						</video>
					</div>
				</td>
			`
		},
		{
			title: "Spatio-Focal Bidirectional Disparity Estimation from a Dual-Pixel Image",
			authors: `
				<a class="author-link dgkim"></a>,
				<a class="author-link hjjang"></a>,
				<a class="author-link dgkim"></a>,
				<a class="author-link minhkim"></a>
			`,
			conference: "Proc. IEEE/CVF Computer Vision and Pattern Recognition (CVPR), 2023",
			additionalLinks: [
				{ text: "Project", href: "http://vclab.kaist.ac.kr/cvpr2023p1/index.html" },
				{ text: "Paper", href: "data/publications/[CVPR2023]dual_pixel/Kim_CVPR2023_dp_paper.pdf" },
				{ text: "Supplemental", href: "data/publications/[CVPR2023]dual_pixel/Kim_CVPR2023_dp_supp.pdf" },
				{ text: "Code", href: "https://github.com/KAIST-VCLAB/dual-pixel-disparity" },
				{ text: "IEEE Xplore", href: "https://doi.org/10.1109/CVPR52729.2023.00486" },
				{ text: "bibtex", href: "data/publications/[CVPR2023]dual_pixel/cvpr2023_dp.txt" }
			],
			description: "We estimate bidirectional disparities from a dual-pixel image by a network using self-supervised learning. Our method based on the dual-pixel optics produces more physically correct results.",
			html: `
				<td class="imgCell">
					<div class="paperImg">
						<picture>
							<source srcset="data/publications/[CVPR2023]dual_pixel/dual_pixel_dark.png" media="(prefers-color-scheme: dark)">
							<source srcset="data/publications/[CVPR2023]dual_pixel/dual_pixel.png" media="(prefers-color-scheme: light)">
							<img class="coverImg" src="data/publications/[CVPR2023]dual_pixel/dual_pixel.png" loading="lazy">
						</picture>
						<img class="hoverImg" src="data/publications/[CVPR2023]dual_pixel/dp_bidisparity_colorbar2.png" loading="lazy">
					</div>
				</td>
			`
		},
		{
			title: "Motion Parallax for 360° RGBD Video",
			authors: `
				<a class="author-link aserrano"></a>,
				<strong>Incheol Kim</strong>,
				<a class="author-link zchen"></a>,
				<a class="author-link sdiverdi"></a>,
				<a class="author-link diegog"></a>,
				<a class="author-link ahertzmann"></a>,
				<a class="author-link bmasia"></a>
			`,
			conference: "IEEE Transactions on Visualization and Computer Graphics (TVCG), Proc. IEEE VR, 2019 (Best journal paper nominee)",
			additionalLinks: [
				{ text: "Project", href: "https://ana-serrano.github.io/projects/VR-6dof.html" },
				{ text: "Paper", href: "data/publications/[TVCG2019]parallax_vr/Serrano_IEEEVR2019_VR-6dof.pdf" },
				{ text: "Supplemental", href: "data/publications/[TVCG2019]parallax_vr/Serrano_IEEEVR2019_VR-6dof_supp.pdf" },
				{ text: "Slides", href: "data/publications/[TVCG2019]parallax_vr/Serrano_IEEEVR2019_VR-6dof_slides.pdf" },
				{ text: "Code", href: "https://github.com/ana-serrano/VR-6dof" },
				{ text: "IEEE Xplore", href: "https://ieeexplore.ieee.org/document/8661657" },
				{ text: "bibtex", href: "data/publications/[TVCG2019]parallax_vr/tvcg2019_vr.txt" }
			],
			description: "Our VR video viewer exploits motion parallax cues to reduce VR sickness without additional hardware requirements. Our system provides a compelling viewing experience with reduced discomfort.",
			html: `
				<td class="imgCell">
					<div class="paperImg">
						<img class="coverImg" src="data/publications/[TVCG2019]parallax_vr/oculus_view_black.png" loading="lazy">
						<video class="hoverImg" width="100%" height="100%" muted autoplay loop preload="auto">
							<source src="data/publications/[TVCG2019]parallax_vr/oculus_novel_view.mp4" type="video/mp4">
							Your browser does not support the video tag.
						</video>
					</div>
				</td>
			`
		}
	];
	

    // Step 2: Reference the table body
    const publicationsTableBody = document.getElementById('publicationsTableBody');

    // Step 3: Function to create a table row
    function createTableRow(pub) {
        const tr = document.createElement('tr');
        tr.className = 'publicationRow';

        // Image/Video Cell
        const tdImg = document.createElement('td');
        tdImg.className = 'imgCell';
        const divImg = document.createElement('div');
        divImg.className = 'paperImg';

        const img = document.createElement('img');
        img.className = 'coverImg';
        img.src = pub.imgSrc;
        img.alt = pub.title;
        divImg.appendChild(img);

        const video = document.createElement('video');
        video.className = 'hoverImg';
        video.width = "100%";
        video.height = "100%";
        video.muted = true;
        video.autoplay = true;
        video.loop = true;
        video.preload = "auto";

        const source = document.createElement('source');
        source.src = pub.videoSrc;
        source.type = "video/mp4";
        video.appendChild(source);

        divImg.appendChild(video);
        tdImg.appendChild(divImg);
        tr.appendChild(tdImg);

        // Content Cell
        const tdContent = document.createElement('td');
        tdContent.className = 'td_contents';
        
        const titleLink = document.createElement('a');
        titleLink.href = pub.links[0].url;
        titleLink.innerHTML = `<papertitle>${pub.title}</papertitle>`;
        tdContent.appendChild(titleLink);
        tdContent.appendChild(document.createElement('br'));

        const authorText = document.createTextNode(pub.authors.join(", "));
        tdContent.appendChild(authorText);
        tdContent.appendChild(document.createElement('br'));

        const conferenceText = document.createElement('em');
        conferenceText.innerHTML = pub.conference;
        tdContent.appendChild(conferenceText);
        tdContent.appendChild(document.createElement('br'));

        // Links
        pub.links.forEach((link, index) => {
            const linkElement = document.createElement('a');
            linkElement.href = link.url;
            linkElement.textContent = link.text;
            tdContent.appendChild(linkElement);
            if (index < pub.links.length - 1) {
                tdContent.appendChild(document.createTextNode(" / "));
            }
        });
        tdContent.appendChild(document.createElement('br'));

        // Description
        const description = document.createElement('p');
        description.className = 'paper_description';
        description.textContent = pub.description;
        tdContent.appendChild(description);

        tr.appendChild(tdContent);
        return tr;
    }

    // Step 4: Populate the table
    publications.forEach(pub => {
        const row = createTableRow(pub);
        publicationsTableBody.appendChild(row);
    });
}

// createPublications();