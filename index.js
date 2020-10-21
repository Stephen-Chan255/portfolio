window.addEventListener("scroll", () => {
	let header = document.querySelector("header");
	header.classList.toggle("sticky", window.pageYOffset > 0);
	document.querySelector("#to-top-btn").hidden = window.pageYOffset == 0;
})

function toggle() {
	let header = document.querySelector("header");
	header.classList.toggle("active");
}