const clock = document.querySelector(".clock");
const hourHand = document.querySelector(".hour");
const minuteHand = document.querySelector(".minute");
const secondHand = document.querySelector(".second");

////////////// POSITIONING THE CHARACTERS OF CLOCK ON A CIRCLE
for (let i = 1; i <= 12; i++) {
	let angle = (i + 9) * 30;
	// +9 makes the characters stay at the right position
	// i * 30 because 360 degree of a circle / 12 = 30 degree

	const element = document.createElement("div");
	element.textContent = i;
	element.classList.add("hour-character");
	clock.appendChild(element);

	element.style.setProperty("--angle", `${angle}deg`);
}
