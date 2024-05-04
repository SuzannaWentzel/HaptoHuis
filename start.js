let ticking = false;
const bannerHeight = document.getElementById("intro").clientHeight;
const navElement = document.getElementById("nav");
updateNavClass(0);

function updateNavClass(scrollPos) {
	const classAdded = navElement.classList.contains("header--big");
	if (scrollPos < bannerHeight && !classAdded) {
		navElement.classList.add("header--big");
	} else if (scrollPos > bannerHeight && classAdded) {
		navElement.classList.remove("header--big");
	}
}

document.addEventListener("scroll", () => {
	if (!ticking) {
		window.requestAnimationFrame(() => {
			updateNavClass(window.scrollY);
			ticking = false;
		});

		ticking = true;
	}
});

  