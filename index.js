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