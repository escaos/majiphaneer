import Lenis from "lenis";

const lenis = new Lenis({
	duration: 0.4,
	smoothTouch: true,
	wheelMultiplier: 1.25,
	touchMultiplier: 1.1,
});

function onAnimationFrame(time: number) {
	lenis.raf(time);
	requestAnimationFrame(onAnimationFrame);
}

requestAnimationFrame(onAnimationFrame);

const observer = new IntersectionObserver(
	(entries) => {
		for (const entry of entries) {
			if (entry.isIntersecting) {
				entry.target.classList.add("in-view");
			}
		}
	},
	{ threshold: 0.12 },
);

document.querySelectorAll<HTMLElement>("[data-animate]").forEach((el) => {
	observer.observe(el);
});
